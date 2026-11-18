// Optional: rewrite the tech's raw caption into a clean one-liner in DryState's voice.
// If ANTHROPIC_API_KEY is unset or the call fails, returns the raw caption unchanged.
const MODEL = 'claude-haiku-4-5';

const SYSTEM_PROMPT =
  'You write one-sentence descriptions of completed water, fire, and storm damage ' +
  'restoration and cleaning jobs for DryState Restoration, a Dallas–Fort Worth company. ' +
  'Tone: reassuring, professional, concrete. No hype, no emojis, under 160 characters. ' +
  'Mention the service and city naturally. Output ONLY the sentence.';

export async function callClaudeForDescription({ rawCaption, serviceTitle, cityName }) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return rawCaption;
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 120,
        system: SYSTEM_PROMPT,
        messages: [
          {
            role: 'user',
            content: `Service: ${serviceTitle}\nCity: ${cityName}\nTech note: ${rawCaption}`,
          },
        ],
      }),
    });
    if (!res.ok) return rawCaption;
    const data = await res.json();
    const text = data?.content?.[0]?.text?.trim();
    return text || rawCaption;
  } catch {
    return rawCaption;
  }
}
