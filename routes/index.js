var express = require('express');
var router = express.Router();
var multer = require('multer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/buttons.ejs', function(req, res, next) {
  res.render('buttons');
});

router.get('/cards.ejs', function(req, res, next) {
  res.render('cards');
});

router.get('/404.ejs', function(req, res, next) {
  res.render('404');
});

router.get('/blank.ejs', function(req, res, next) {
  res.render('blank');
});


router.get('/charts.ejs', function(req, res, next) {
  res.render('charts');
});

router.get('/uploadFile.ejs', function(req, res, next) {
  res.render('uploadFile');
});


router.get('/error.ejs', function(req, res, next) {
  res.render('error');
});
router.get('/forgot-password.ejs', function(req, res, next) {
  res.render('forgot-password');
});

router.get('/login.ejs', function(req, res, next) {
  res.render('login');
});

router.get('/register.ejs', function(req, res, next) {
  res.render('register');
});

router.get('/tables.ejs', function(req, res, next) {
  res.render('tables');
});

router.get('/utilities-animation.ejs', function(req, res, next) {
  res.render('utilities-animation');
});

router.get('/utilities-border.ejs', function(req, res, next) {
  res.render('utilities-border');
});
router.get('/utilities-color.ejs', function(req, res, next) {
  res.render('utilities-color');
});
router.get('/utilities-other.ejs', function(req, res, next) {
  res.render('utilities-other');
});



//-------------------------------------------------------------

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'upload');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + Math.random() + file.originalname);
  },

});

var upload = multer( {
  storage: storage,
  limits: {fileSize: 2*1024*1024},
  fileFilter: function (req, file, cb){
    var ten = file.originalname;
    if(ten.indexOf('.jpg') > -1){
      cb(null, true);
    }else {
      cb(new Error("Duoi file phai la JPG"), false);
    }
  }
}).array('file', 6);

router.post('/upload', function (req, res) {
  upload(req, res, function (err){
    if(err != null){
      res.send(err.message)
    }else {
      var tieude = req.body.tieude;
      var noidung = req.body.noidung;
      var file = req.files;
      res.json({tieude: tieude, noidung: noidung, file: file});
    }
  })
})

module.exports = router;
