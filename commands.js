var fs = require('fs');
var chalk = require('chalk');

exports.pwd = function()  {
    process.stdout.write(chalk.green(process.cwd()));
}

exports.date = function() {
    var dateNow = new Date();
    process.stdout.write(chalk.green(dateNow.toString()));
}

exports.ls = function() {
    var path = process.cwd();
    var files = fs.readdirSync(path)
    process.stdout.write(chalk.green(files.join('\n')));
}

exports.echo = function(args) {
    var print = args.join(' ').trim();
    var env = process.env[print.slice(1)]

    if (print[0] === '$'){
        process.stdout.write(chalk.green(env))
    } else {
        process.stdout.write(chalk.green(print));
    }
}
