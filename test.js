const MIME = require('./mimeByExtension.json');
if(typeof MIME._comment !== "undefined") delete MIME._comment;
/* 
 or
 import MIME from './mimeByExtension.json';
 for esm
*/
const file = "helloworld.png";
const extension = (/(\.\w{2,4})$/).exec(file)[0];
console.log("MIME type for " + extension + ":", MIME[extension]);
console.log("Supported file extensions:", Object.values(MIME));