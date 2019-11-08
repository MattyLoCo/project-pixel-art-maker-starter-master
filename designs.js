// When size is submitted by the user, call @makeGrid()
document.querySelector('Input[type=submit]').addEventListener('click', submitButton); 

function submitButton(event) {
    event.preventDefault();
    makeGrid();
}

function makeGrid() {

    // Define DOM variables     
    let height = document.getElementById('inputHeight').value; 
    let width = document.getElementById('inputWidth').value;           
    let grid = document.getElementById('pixelCanvas');    

    grid.innerHTML=null;

    // Create grid
    for (var y = 0; y < height; y++) {        
        let row = document.createElement('tr');    
        grid.appendChild(row); 
        for (var x = 0; x < width; x++) {
            let cell = document.createElement('td');            
            grid.lastChild.appendChild(cell);
        };           
    };

    /** Color functionality
     *  @description refers to "grid squares 
     *  (and not to the border or the table itself)."
     *  @param {string} 'td' - Table Data 
     *  @returns {boolean} - If it's True that the table
     *  data is clicked, then the td background color returns
     *  the value of the variable color, an input value.
     */    
        
    document.querySelectorAll('td').forEach(function(element){
        element.addEventListener('click', function() {            
            if (this.stylebackgroundColor = 'white') {   
                let color = document.getElementById('colorPicker').value;            
                this.style.backgroundColor = color;        
            /** The Else statement was an attempt to add de-color 
             *  functionality to the event handler. Although this
             *  was not required in the rubric, I really tried several 
             *  attempts to make it work and this solution was the closest I
             *  got. It does NOT work.
             */
            } else {
                this.setAttribute("style", "background-color: white;");    
            };    
        })
    });      
}    
                
