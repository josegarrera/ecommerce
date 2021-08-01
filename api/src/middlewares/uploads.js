const multer = require('multer');
const path = require('path');

const fileFilter = (req, file, cb) => {
	if (file) {
		file.mimetype === 'image/jpeg' ||
		file.mimetype === 'image/png' ||
		file.mimetype === 'image/jpg'
			? cb(null, true)
			: cb(new Error('The file must be in jpeg/jpg/png format'), false);
	} else {
		cb(new Error('Sorry, file upload failed.'));
	}
};

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, __dirname.replace('middlewares', 'public\\uploads'));
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now());
	},
});

const limits = {fileSize: 5 * 1024 * 1024};

const upload = multer({
	storage,
	fileFilter,
	limits,
});

module.exports = upload;
