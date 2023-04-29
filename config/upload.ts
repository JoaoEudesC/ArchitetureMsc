import multer from "multer";
import path from "path";
import crypto from "crypto";

const uploadsFolder = path.resolve(__dirname,  '../uploads');

const storage = multer.diskStorage({
    destination: uploadsFolder,
    filename: (request , avatar , callback) => {
        const fileHash = crypto.randomBytes(16).toString("hex");
        const fileName = `${fileHash}-${avatar.originalname}`;
        return callback(null , fileName);
    }
});

const upload = multer({ storage });

export { upload };
