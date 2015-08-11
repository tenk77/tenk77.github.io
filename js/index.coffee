# Welcome message [CONSOLE]
$(document).ready ->
    console.log ['Welcome','To','Navy Website\'s'].join '\n';
# Boostrap-Margins
$(document).ready ->
  setTimeout (->
    $('html').css
      'margin-bottom': '0px'
      'margin-left': '10px'
      'margin-right': '10px'
      'margin-top': $('.navbar').height() + 0 + 'px'
    console.log '%c[-%cNavy%c-] %cHTML Auto-Margined',
        'color:blue;',
        'color:teal;',
        'color:blue;',
        'color:green;'
    return
  ), 1000 * 0.25
  return

# Old shit
## Get Age
getAge = (dateString) ->
  today = new Date
  birthDate = new Date(dateString)
  age = today.getFullYear() - birthDate.getFullYear()
  m = today.getMonth() - birthDate.getMonth()
  if m < 0 or m == 0 and today.getDate() < birthDate.getDate()
    age--
  age

## Get URL Parameter
gup = (name) ->
  name = name.replace(/[[]/, '\\[').replace(/[]]/, '\\]')
  regexS = '[\\?&]' + name + '=([^&#]*)'
  regex = new RegExp(regexS)
  results = regex.exec(window.location.href)
  if results == null
    ''
  else
    results[1]

## LMGTFY Return
lmgtfy = (str) ->
  'http://lmgtfy.com/?q=' + str

## Array Random
Array::random = ->
  @[~~(Math.random() * @length)]