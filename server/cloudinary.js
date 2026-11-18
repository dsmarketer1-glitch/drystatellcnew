// Server-only. Photo storage via Cloudinary (free tier) instead of Firebase Storage.
import { v2 as cloudinary } from 'cloudinary';

let _configured = false;

function configure() {
  if (_configured) return;
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  _configured = true;
}

export function isCloudinaryConfigured() {
  return Boolean(
    process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET
  );
}

// Upload an image buffer. Returns { url, publicId }.
export async function uploadImage(buffer, mime) {
  configure();
  const dataUri = `data:${mime};base64,${buffer.toString('base64')}`;
  const res = await cloudinary.uploader.upload(dataUri, {
    folder: 'drystate-pins',
    resource_type: 'image',
  });
  return { url: res.secure_url, publicId: res.public_id };
}

// Delete an image by its Cloudinary public_id.
export async function deleteImage(publicId) {
  configure();
  await cloudinary.uploader.destroy(publicId);
}
