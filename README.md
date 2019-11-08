# Pixel Art Maker Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

To get started, open `designs.js` and start building out the app's functionality.

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.


// Extra Effort: Undoing the color click

    // Attempt 1:
    // document.querySelectorAll('td.colored').forEach(function(element){
    //     element.addEventListener("click", function() {
    //         this.style.backgroundColor = "#ffffff";
    // })});  
    
    // Attempt 2:
    // document.querySelectorAll('td.colored').onclick = function() {
    //     if (this.style.backgroundColor != "#ffffff") {
    //         this.style.backgroundColor = "#ffffff";
    //     }    
    // };
    
    // Attempt 3:
    // for (var y = 0; y < grid.rows[height]; y++) {
    //     for (var x = 0; x < grid.cells[width]; x++) {
    //         var colored = document.querySelectorAll('td.colored');
    //         if (colored.onclick && colored.style.backgroundColor != "#ffffff") {
    //             colored.style.backgroundColor = "#ffffff";
    //             colored.classList.toggle("colored");
    //         }
    //     }        
    // }