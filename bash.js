// Output a prompt
var commands = require('./commands.js')
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var args = [].slice.call(arguments).join('').split(' ');
  var cmd = args[0].toString().trim(); // remove the newline

  if (commands[cmd]) {
    var input = args.slice(1)
    commands[cmd](input);
  }
  else {
    process.stdout.write('You typed: ' + cmd);
  }

  process.stdout.write('\nprompt > ');

});
