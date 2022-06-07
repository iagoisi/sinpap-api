import multer, { Options } from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads', 'images_post'),
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),

  fileFilter: (req, file, cb) => {
    const mimeTypes = [
      'image/jpeg',
      'image/png'
    ];

    if (!mimeTypes.includes(file.mimetype)) {
      return cb(null, false);
    }

    cb(null, true);
  },
} as Options;

