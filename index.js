const multer = require('multer');
const bodyParser = require('body-parser');
const upload = multer();
const express = require('express');
var serveIndex = require('serve-index');

const imageUpload = multer({
  storage: multer.diskStorage(
      {
          destination: function (req, file, cb) {
              cb(null, 'public/');
          },
          filename: function (req, file, cb) {
              cb(
                  null, file.originalname
              );
          }
      }
  ), 
  limits:
  { fieldSize: 1000000000 * 1024 * 1024 }
});

var count = 1;
var path = require('path');
var crypto = require('crypto');
var fs = require('fs');
var cookieParser = require('cookie-parser');
const CreateFiles = fs.createWriteStream('./sentData.txt', {
      flags: 'a'
})
const port = 1234,
      app = require('express')();
var serverInstance = app.listen(process.env.PORT || port, () => {
    console.log('App running at http://localhost:' + port);
});

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());



app.post('/', upload.any(), (req, res) => {
    console.log('\n-- INCOMING REQUEST AT ' + new Date().toISOString());
    console.log(req.method + ' ' + req.url);
    var lol = req.body;
    CreateFiles.write(lol.toString()+'\r\n', function (err) {
       if (err) return console.log(err);
       console.log('Data sucessfully stored in database.');
//    res.send({ token: "Data Accepted" });
//    res.redirect('https://www.google.com');
    res.end();
    });
});


app.post('/images', imageUpload.single('image'), (req, res) => { 
  console.log(req.file);
  res.json('/image api'); 
});

app.post('/thumbnailZip', imageUpload.single('file'), (req, res) => { 
  console.log(req.file);
  console.log(req.body);
  res.send({ status: 'SUCCESS' });
  res.end();
});

app.post('/suffer', upload.any(), (req, res) => {
    console.log("Trying to log in");
    var password = req.body.password;
    var hash = crypto.createHash('sha256');
    data = hash.update(password, 'utf-8');
    gen_hash= data.digest('hex');
    var thehash = "65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5";
    if (gen_hash==thehash) {
      fs.unlink('cookieData.txt', (err) => {
      if (err) {
        throw err;
       }
      });
      var randomNumber=Math.random().toString();
      randomNumber=randomNumber.substring(2,randomNumber.length);
      fs.writeFile('cookieData.txt', randomNumber, function (err) {
        if (err) return console.log(err);
        console.log('Login successfully registered in database.');
      });
      res.cookie('lolicon',randomNumber, { maxAge: 900000, httpOnly: true });
      res.redirect('/dataIsStoredHere');
    }
    else {
      res.redirect('/heh');
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.get('/dataIsStoredHere', (req, res) => {
    var cookie = req.cookies.lolicon;
    var filePath = path.join(__dirname, 'cookieData.txt');
    var meow = 'meow';
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
       if (!err) {
         var meow = data;
       }
       else {
         console.log('Error at reading cookie data file !: ' + err);
       }



       if (cookie == meow) {
         res.sendFile(__dirname + '/sentData.txt');
       }
       else {
         res.redirect('/heh');
       }
    });
});


app.get('/clearData', (req, res) => {
    var cookie = req.cookies.lolicon;
    var filePath = path.join(__dirname, 'cookieData.txt');
    var meow = 'meow';
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
       if (!err) {
         var meow = data;
       }
       else {
         console.log('Error at reading cookie data file !: ' + err);
       }


       if (cookie == meow) {
        fs.unlink('sentData.txt', (err) => {
          if (err) {
            throw err;
           }
        });
        fs.writeFile('sentData.txt', 'Data is expected to be saved here.', function (err) {
          if (err) return console.log(err);
          console.log('Old data is cleared !');
        });
        res.send('File Cleared');
       }
       else {
         res.redirect('/heh');
       }
    });
});


app.get('/heh', (req, res) => {
    res.sendFile(__dirname + '/wrong.html');
});

app.use('/files', express.static(path.join(__dirname, 'public')))
app.use('/files', serveIndex(__dirname + '/public'));

