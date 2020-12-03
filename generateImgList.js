"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = './imgs/';
let publicPath = "https://konggame.github.io/ImagePuzzle/imgs/";
var imgList = {};
var dirs = fs.readdirSync(path);
for (var _i = 0, dirs_1 = dirs; _i < dirs_1.length; _i++) {
    var d = dirs_1[_i];
    var stat = fs.statSync(path + d);
    if (stat.isDirectory()) {
        var imgs = fs.readdirSync(path + d);
        var temp = [];
        for (var _a = 0, imgs_1 = imgs; _a < imgs_1.length; _a++) {
            var img = imgs_1[_a];
            var stat_1 = fs.statSync(path + d + '/' + img);
            if (stat_1.isFile()) {
                console.log(img);
                temp.push(publicPath + d + '/' + img);
            }
        }
        if (temp.length > 0) {
            imgList[d] = temp;
        }
    }
}
var str = "window.RemotePuzzleImageList = \n    " + JSON.stringify(imgList) + "\n";
str += "window.postMessage('RemotePuzzleImageLoaded');"
fs.writeFileSync('main.js', str);

