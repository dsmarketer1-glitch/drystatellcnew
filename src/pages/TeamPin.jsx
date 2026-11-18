import React, { useEffect, useRef, useState } from 'react';
import { services } from '../data/services';
import { cities } from '../data/locations';
import { isFirebaseClientConfigured, getClientAuth } from '../lib/firebaseClient';
import { compressImage } from '../lib/imageCompress';
import { createPin, listPins, deletePin } from '../lib/pinsApi';
import LocationPicker from '../components/LocationPicker';

const CONFIGURED = isFirebaseClientConfigured();

// ─────────────────────────────────────────────────────────────────────────────
// Page: login gate (when Firebase is configured) → capture form + pin manager.
// In local dev without Firebase env, it runs in "preview mode" (no login) so the
// flow can be demonstrated against the dev mock API.
// ─────────────────────────────────────────────────────────────────────────────
export default function TeamPin() {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(!CONFIGURED);

  useEffect(() => {
    if (!CONFIGURED) return;
    let unsub = () => {};
    (async () => {
      const { onAuthStateChanged } = await import('firebase/auth');
      unsub = onAuthStateChanged(getClientAuth(), (u) => {
        setUser(u);
        setAuthReady(true);
      });
    })();
    return () => unsub();
  }, []);

  // Token getter passed to the form/manager.
  const getToken = async () => {
    if (!CONFIGURED) return 'dev';
    return user ? user.getIdToken() : null;
  };

  if (!authReady) {
    return <Shell><p className="text-center text-[#44464f]">Loading…</p></Shell>;
  }

  if (CONFIGURED && !user) {
    return (
      <Shell>
        <LoginForm />
      </Shell>
    );
  }

  return (
    <Shell>
      {!CONFIGURED && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg p-3 text-[13px] mb-6">
          <strong>Preview mode.</strong> Firebase isn't configured yet, so there's no login and
          pins are stored only in memory for this dev session. Once Firebase is set up, this page
          requires a team login and pins are saved permanently.
        </div>
      )}
      {CONFIGURED && user && (
        <div className="flex items-center justify-between mb-6">
          <span className="text-[13px] text-[#44464f]">Signed in as <strong>{user.email}</strong></span>
          <button
            onClick={async () => {
              const { signOut } = await import('firebase/auth');
              signOut(getClientAuth());
            }}
            className="text-[13px] font-bold text-[#b6171e] hover:underline"
          >
            Sign out
          </button>
        </div>
      )}
      <PinForm getToken={getToken} />
      <PinManager getToken={getToken} />
    </Shell>
  );
}

function Shell({ children }) {
  return (
    <main className="pt-[90px] lg:pt-[110px] pb-20 font-['Inter'] bg-[#f8f9fa] min-h-screen">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-[#b6171e] text-[11px] font-bold tracking-[0.2em] uppercase mb-2 block">TEAM TOOL</span>
          <h1 className="text-[28px] md:text-[34px] font-['Work_Sans'] font-black text-[#00123d]">Log a Completed Job</h1>
          <p className="text-[14px] text-[#44464f] mt-2">Drop a photo, pick the service &amp; city, set the location, and submit.</p>
        </div>
        {children}
      </div>
    </main>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      const { signInWithEmailAndPassword } = await import('firebase/auth');
      await signInWithEmailAndPassword(getClientAuth(), email, password);
    } catch {
      setError('Invalid email or password.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm space-y-4">
      <h2 className="text-[20px] font-['Work_Sans'] font-bold text-[#00123d]">Team Login</h2>
      <input
        type="email" required placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#00123d]"
      />
      <input
        type="password" required placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#00123d]"
      />
      {error && <p className="text-[13px] text-[#b6171e]">{error}</p>}
      <button type="submit" disabled={busy} className="w-full bg-[#00123d] text-white font-bold py-3 rounded-lg hover:bg-[#0f265c] transition-colors disabled:opacity-60">
        {busy ? 'Signing in…' : 'Sign In'}
      </button>
    </form>
  );
}

function PinForm({ getToken }) {
  const [photoFile, setPhotoFile] = useState(null);
  const [serviceSlug, setServiceSlug] = useState('');
  const [citySlug, setCitySlug] = useState('');
  const [serviceDescription, setDescription] = useState('');
  const [loc, setLoc] = useState(null); // { lat, lng, address }
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const reset = () => {
    setPhotoFile(null);
    setServiceSlug('');
    setCitySlug('');
    setDescription('');
    setLoc(null);
    setCustomerName('');
    setCustomerEmail('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!photoFile) return setError('Please add a photo.');
    if (!serviceSlug) return setError('Please pick a service.');
    if (!citySlug) return setError('Please pick a city.');
    if (!serviceDescription.trim()) return setError('Please add a short description.');
    if (!loc) return setError('Please set the job location on the map.');

    setStatus('submitting');
    try {
      const token = await getToken();
      if (!token) throw new Error('Not signed in.');
      const photoBase64 = await compressImage(photoFile);
      await createPin(token, {
        serviceSlug,
        citySlug,
        serviceDescription: serviceDescription.trim(),
        lat: loc.lat,
        lng: loc.lng,
        address: loc.address || '',
        customerName: customerName.trim(),
        customerEmail: customerEmail.trim(),
        photoBase64,
      });
      setStatus('success');
      reset();
      window.dispatchEvent(new Event('pins:refresh'));
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
      setStatus('error');
    }
  };

  const label = 'block text-[11px] font-black text-[#00123d] tracking-widest uppercase mb-1.5';
  const field = 'w-full border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-[#00123d] bg-white';

  return (
    <form onSubmit={submit} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-7 shadow-sm space-y-5">
      <div>
        <label className={label}>Photo</label>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png"
          capture="environment"
          onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
          className={field}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>Service</label>
          <select value={serviceSlug} onChange={(e) => setServiceSlug(e.target.value)} className={`${field} cursor-pointer`}>
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label}>City</label>
          <select value={citySlug} onChange={(e) => setCitySlug(e.target.value)} className={`${field} cursor-pointer`}>
            <option value="">Select a city…</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={label}>Service Description</label>
        <textarea
          rows="3" value={serviceDescription} onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g. Extracted water and set up drying equipment after a kitchen supply-line leak."
          className={`${field} resize-none`}
        />
      </div>

      <div>
        <label className={label}>Location</label>
        <LocationPicker onChange={setLoc} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={label}>Customer Name <span className="text-[#757681] normal-case font-medium">(optional, private)</span></label>
          <input value={customerName} onChange={(e) => setCustomerName(e.target.value)} className={field} />
        </div>
        <div>
          <label className={label}>Customer Email <span className="text-[#757681] normal-case font-medium">(optional, private)</span></label>
          <input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} className={field} />
        </div>
      </div>

      {error && <p className="text-[13px] text-[#b6171e] font-medium">{error}</p>}
      {status === 'success' && (
        <p className="text-[13px] text-green-700 font-medium">✓ Job logged. It will appear on the matching service &amp; city pages.</p>
      )}

      <button
        type="submit" disabled={status === 'submitting'}
        className="w-full bg-[#b6171e] text-white font-['Work_Sans'] font-bold py-4 rounded-lg hover:bg-[#9a141a] transition-colors disabled:opacity-60 uppercase tracking-widest text-[14px]"
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit Job'}
      </button>
    </form>
  );
}

function PinManager({ getToken }) {
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const token = await getToken();
      if (!token) return;
      setPins(await listPins(token));
    } catch {
      setPins([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const onRefresh = () => load();
    window.addEventListener('pins:refresh', onRefresh);
    return () => window.removeEventListener('pins:refresh', onRefresh);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const remove = async (id) => {
    if (!window.confirm('Delete this job? This cannot be undone.')) return;
    try {
      const token = await getToken();
      await deletePin(token, id);
      setPins((prev) => prev.filter((p) => p.id !== id));
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-[18px] font-['Work_Sans'] font-bold text-[#00123d] mb-4">Logged Jobs</h2>
      {loading ? (
        <p className="text-[14px] text-[#757681]">Loading…</p>
      ) : pins.length === 0 ? (
        <p className="text-[14px] text-[#757681]">No jobs logged yet.</p>
      ) : (
        <div className="space-y-3">
          {pins.map((p) => (
            <div key={p.id} className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-3">
              {p.photoUrl && <img src={p.photoUrl} alt="" className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />}
              <div className="flex-1 min-w-0">
                <p className="text-[14px] text-[#00123d] truncate">{p.description}</p>
                <p className="text-[12px] text-[#757681] truncate">{p.serviceSlug} · {p.citySlug}{p.address ? ` · ${p.address}` : ''}</p>
              </div>
              <button onClick={() => remove(p.id)} className="text-[#b6171e] hover:bg-red-50 rounded-lg p-2 flex-shrink-0" aria-label="Delete">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
