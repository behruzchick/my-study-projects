const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const Grid = require('gridfs-stream');
const crypto = require('crypto');
const path = require('path');
const { GridFSBucket } = require('mongodb');
const {auth} = require('./checkauth');
const {register,login,authMe,editUser} = require('./Controllers/UserController');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded());


app.post('/auth/register',register);
app.post('/auth/login',login);
app.get('/user/get',auth,authMe);
app.post('/user/edit',auth,editUser);



mongoose.connect("mongodb+srv://akbaralievbehruz44:user@cluster0.6tpnz02.mongodb.net/dropbox?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("SUCCESSFUL CONNECTED TO DB!");
})
.catch((e) => {
  console.log(e);
});


let gfs;

const connection = mongoose.connection;

connection.once('open', () => {
  gfs = new GridFSBucket(connection.db, { bucketName: 'uploads' });
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }

  const { originalname, mimetype, buffer } = req.file;

  const writeStream = gfs.openUploadStream(originalname, { contentType: mimetype });
  writeStream.end(buffer);

  writeStream.on('finish', () => {
    return res.json({ message: 'File uploaded successfully.', filename: originalname });
  });

  writeStream.on('error', (error) => {
    console.log(error);
    return res.status(500).json({ message: 'File upload failed.' });
  });
});



app.get('/files',auth, async (req, res) => {
    try {
      const files = await gfs.find().toArray();
  
      return res.json(files);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  app.post('/file/delete/:fileId',auth,async(req,res) => {
    try {

      if (!gfs) {
        return res.status(500).json({ message: 'GridFS not initialized' });
      }

      const fileID  = new mongoose.Types.ObjectId(req.params.fileId);

      const file = await gfs.find({ _id: fileID }).toArray();

      if (!file || file.length === 0) {
        return res.status(404).json({ message: 'File not found' });
      }

      await gfs.delete(fileID);

      res.json({
        message:"Successful deleted file!",
        success:true
      })
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });

    }
  })


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
