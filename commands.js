
// var exports = module.exports = {
//     pwd: process.stdin.on('data', function (data) {
//         var cmd = data.toString().trim(); // remove the newline

//         if (cmd === 'pwd') {
//             process.stdout.write(process.cwd());
//         }
//         process.stdout.write('\nprompt > ');

//     })
// }

exports.pwd = process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline

    if (cmd === 'pwd') {
        process.stdout.write(process.cwd());
    }
    process.stdout.write('\nprompt > ');
})

exports.date = process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline

    if (cmd === 'date') {
        var dateNow = new Date();
        process.stdout.write(dateNow.toString());
    }
    process.stdout.write('\nprompt > ');
})

