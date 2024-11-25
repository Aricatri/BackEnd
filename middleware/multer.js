import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/'); // Carpeta para guardar los archivos
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname); // Añade un timestamp al nombre del archivo
    }
});

const upload = multer({ storage });

export default upload
