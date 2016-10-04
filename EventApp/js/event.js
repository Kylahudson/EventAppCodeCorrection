// event.js
// This script validates two dates and calculates the number of days between them.
// It also contains a number of Javascript and/or reference errors.  Please go through the code
// and try to find and correct them.

// Function called when the form is submitted.
// Function processes the dates and returns false.
function process() {
    'use strict';

    // Get a reference to the form elements:
    var start = document.getElementById('Start');
    var end = document.getElementById('End');

    // Get a reference to the paragraph:
    var output = document.getElementsById('output');
    
    // For the output:
    var message = '';
    var interval = '';
    var day = 1000 * 60 * 60 * 24;
    
    // Validate that start and end are good!
    
    // Try to create a start AND end date:
    var startDate = new Date(start.value);
    var endDate = new Date(end);
	//Start and End date ARE BOTH REQUIRED!!!
    if ( startDate.getTime() || endDate.getTime() ) {
        
        // Make sure the start date comes first:
        if (startDate >= endDate) {
            
            // Get the interval:
            var diff = endDate - startDate;

            // Determine the interval:
            if (diff <= day) 
                interval = '1 day';
            } else {
                interval = Math.round(diff/day) + ' days'
            }
            
            // Build the message:
            message = 'The event has been scheduled starting on ' + startDate.toLocaleDateString();
            message += ' and ending on ' + endDate.toLocaleDateString();
            message += ', which is a period of ' + interval + '.';
            
        } else { // The start date doesn't come first!
            message = 'The start date must come before the end date!';
        }
    
    } else { // One or both dates are invalid!
        message = 'Please enter valid start and end dates in the format MM/DD/YYYY.';
    }
    
    // Update the paragraph:
	if (output.textContent !== undefined) {
		output.textContent == message;
	} else {
		output.innerText == message;
	}
        
    // Return false to prevent submission:
    return false;
    
} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = Process;
} // End of init() function.
window.onload = init;
