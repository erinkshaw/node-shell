var fs = require('fs');

exports.pwd = function()  {
    process.stdout.write(process.cwd());
}

exports.date = function() {
    var dateNow = new Date();
    process.stdout.write(dateNow.toString());
}

exports.ls = function() {
    var path = process.cwd();
    var files = fs.readdirSync(path)
    process.stdout.write(files.join('\n'));
}

exports.echo = function(args) {
    var print = args.join(' ').trim();
    process.stdout.write(print);
}
