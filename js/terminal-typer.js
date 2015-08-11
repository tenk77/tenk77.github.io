$(document).ready(function() {
    var activateMS=1000*(0.1)
    setTimeout(function() {
        // Style 1
        $('.terminal-typer1').each(function() {
            var items = $(this).attr('title') + '' + $(this).text();
            $(this).empty().attr('title', '').teletype({
                text: $(items.split('[|new-str|]'), $.trim), // List of strings to output.
                typeDelay: 10, // Minimum delay, in ms, between typing characters.
                backDelay: 20, // Minimum delay, in ms, between deleting characters.
                blinkSpeed: 1000, // Interval, in ms, that the cursor will flash.
                cursor: '_', // Character used to represent the cursor.
                delay: 3000, // Time in ms to pause before deleting the current text.
                preserve: true, // Prevent auto delete of the current string and begin outputting the next string.
                prefix: '[-NAVY-] ', // Begin each string with this prefix value.
                loop: 1, // Number of times to loop through the output strings, for unlimited use 0.
                humanise: false // Add a random delay before each character to represent human interaction.
            });
        });
    },activateMS);
});