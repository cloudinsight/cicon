/**
 * Created by yan on 15-11-2.
 */
var glob = require('glob');
var mime = require('mime');
var fs = require('fs');
var path = require('path');
var exportedData = {};
var readme = "# fed-ci-icons";

glob('**/*.svg', function (err, files) {
    files.forEach(function (founded) {
        readme += '## ' + founded + '\n';
        readme += '![' + founded + '](' + founded + ')\n';
        var filePath = path.join(__dirname, founded);
        var mimeType = mime.lookup(filePath);
        var content = fs.readFileSync(filePath);
        var dataUrl = 'data:' + mimeType + ';base64,' + content.toString('base64');
        exportedData[founded] = dataUrl;
    });

    fs.writeFileSync(path.join(__dirname, 'index.js'), 'module.exports=' + JSON.stringify(exportedData, null, 2));
    fs.writeFileSync(path.join(__dirname, 'README.md'), readme);
})