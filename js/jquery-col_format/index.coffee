#
#
# Copyright (c) 2015 by Nicholas Phillips.
# All Rights Reserved.
#
#

$.fn.col_format = ->
  s = undefined
  children = $(this).children()
  cl = children.length
  if $(this).hasClass('row') == true
    i = 0
    while i < cl
      # Set Size
      if cl == 1
        s = 12
      else if cl == 2
        s = 6
      else if cl == 3
        s = 4
      else if cl == 4
        s = 3
      else if cl > 4
        s = 12
      # Do shit
      if $(children[i]).hasClass('col') == true
        $(children[i]).toggleClass 'col-md-' + s
        $(children[i]).toggleClass 'col'
      i++
  cl + ' | ' + s

# $(".row:has(.col)").each(function () {$(this).col_format();});