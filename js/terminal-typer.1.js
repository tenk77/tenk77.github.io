$(function() {
$('.type-text').each(function() {
var items = $(this).attr('title') + '[|new-str|]' + $(this).text();
$(this).empty().attr('title', '').teletype({
// List of strings to output.
text: $( items.split( '[|new-str|]' ), $.trim ),
// Minimum delay, in ms, between typing characters.
typeDelay: 10, 
// Minimum delay, in ms, between deleting characters.
backDelay: 20, 
// Interval, in ms, that the cursor will flash.
blinkSpeed: 1000, 
// Character used to represent the cursor.
cursor: '_', 
// Time in ms to pause before deleting the current text.
delay: 3000, 
// Prevent auto delete of the current string and begin outputting the next string.
preserve: false, 
// Begin each string with this prefix value.
prefix: '[-NAVY-] ', 
// Number of times to loop through the output strings, for unlimited use 0.
loop: 0, 
// Add a random delay before each character to represent human interaction.
humanise: true 
});
});
});