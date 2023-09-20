const fs = require('fs'); 

const inputFile = 'app.js'; 
const outputFile = 'app1.js'; 

fs.readFile(inputFile, 'utf8', (err, data) => { 
   	if (err) {      	
          console.error('Error reading input file:', err); 
    	 return; 
  
  	}     	
fs.writeFile(outputFile, data, 'utf8', (err) => {     	 
if (err) {       	 
console.error('Error writing to output file:', err);       	
 return; 
     	} 
     
     console.log('Contents of input file have been successfully written to output file.'); 
   }); 
}); 
