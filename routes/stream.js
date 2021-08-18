const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

router.get('/stream', (req, res, next) => {
  const audiosPath = path.resolve(__dirname, '../audios');
  const dirContent = fs.readdirSync(audiosPath);
  const files = dirContent.filter(file => path.extname(file) === '.mp3');
  const filePath = path.resolve(__dirname, '../audios', files[getRandom(0, files.length - 1)]);

  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'Content-Length': stat.size
  });

  // Create read stream and attach with response stream
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

module.exports = router;