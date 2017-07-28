const fs            = require("fs")
     ,path          = require("path")
     ,console       = require("console")
     ,FILE_INPUT    = path.resolve("./css_keys.txt").replace(/\\/g, "/")
     ,FILE_OUTPUT   = path.resolve("./../css_heritage_normaliser.css").replace(/\\/g, "/")
     ;

console.log("reading content from: [" + FILE_INPUT + "]");
var  content = fs.readFileSync(FILE_INPUT, {encoding: "ascii"}) //read content.
                 .replace(/[\r\n]+/g, "\n")                     //normalise EOL.
                 .split("\n")                                   //prepare for single-line inspection.
                 .filter(function(s){ return s.length > 0; })   //remove empty-lines.
                 .sort()                                        //generic sort.
                 .join("\n")                                    //reconstruct content.
                 ;

console.log("writing sorted-content back-to: [" + FILE_INPUT + "]");
fs.writeFileSync(FILE_INPUT, content, {flag:"w", encoding:"utf-8"}); //overwrite original-file with sorted-content.

console.log("generating a CSS compatible rule-set...");
content = content.replace(/$/gm,":inherit;").replace(/\n+/g, "");    //apply a generic 'inherit' value.
content = "*,*:active,*:focus,*:hover{" + content + "}";             //set rules for node-descriptors.

console.log("adding a CSS-file header for UTF-8...")
content =  '@charset "UTF-8";' + "\n"                                //(optional) adding header for the CSS-file.
         + '@namespace "http://www.w3.org/1999/xhtml";' + "\n"
         + "\n" 
         + "/*css_heritage_normaliser by EladKarako*/" 
         + "\n" 
         + content
         + "\n" 
         + "\n" 
         ;

console.log("writing generated content to: [" + FILE_OUTPUT + "]");
fs.writeFileSync(FILE_OUTPUT, content, {flag:"w", encoding:"ascii"}); //generated output.
