// //readfilesync version

// var fs = require('fs');

// var read = fs.readFileSync(process.argv[2]);

var http = require('http');

// //how many lines?
// var lines = read.toString().split('\n').length-2;

// // console.log(process.argv[2]);
// // console.log(read.toString().split('\n'));
// console.log("readfilesync version # of line breaks:", lines);
// console.log('test1');

// //readfile version

// var fs = require('fs');

// var file = process.argv[2];

// fs.readFile(file, function (err, contents) {

//   var lines = contents.toString().split('\n').length -2;

//      console.log("readfile version # of line breaks:", lines);
// });

//   console.log("test2");

  //http request

var array = [];

http.get('http://omdbapi.com/?i=tt0241527', function(response) {
  response.setEncoding().on('data', function(data) {
    array.push(data);

    http.get('http://omdbapi.com/?i=tt0295297', function(response) {
        response.setEncoding().on('data', function(data) {
          array.push(data);
        console.log(array);
        });
      });
    });
  });





