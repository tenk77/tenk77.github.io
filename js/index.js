// Generated by CoffeeScript 1.9.3
var getAge, gup, lmgtfy;

$(document).ready(function() {
  return console.log(['Welcome', 'To', 'Navy Website\'s'].join('\n'));
});

$(document).ready(function() {
  setTimeout((function() {
    $('html').css({
      'margin-bottom': '0px',
      'margin-left': '10px',
      'margin-right': '10px',
      'margin-top': $('.navbar').height() + 0 + 'px'
    });
    console.log('%c[-%cNavy%c-] %cHTML Auto-Margined', 'color:blue;', 'color:teal;', 'color:blue;', 'color:green;');
  }), 1000 * 0.25);
});

getAge = function(dateString) {
  var age, birthDate, m, today;
  today = new Date;
  birthDate = new Date(dateString);
  age = today.getFullYear() - birthDate.getFullYear();
  m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
    age--;
  }
  return age;
};

gup = function(name) {
  var regex, regexS, results;
  name = name.replace(/[[]/, '\\[').replace(/[]]/, '\\]');
  regexS = '[\\?&]' + name + '=([^&#]*)';
  regex = new RegExp(regexS);
  results = regex.exec(window.location.href);
  if (results === null) {
    return '';
  } else {
    return results[1];
  }
};

lmgtfy = function(str) {
  return 'http://lmgtfy.com/?q=' + str;
};

Array.prototype.random = function() {
  return this[~~(Math.random() * this.length)];
};
