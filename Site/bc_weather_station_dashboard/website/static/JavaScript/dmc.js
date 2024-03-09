// Assume value_dmc is retrieved from the database and passed to the template
const value_dmc = 62; // Example value
let position_dmc = value_dmc;

// Convert value_dmc to 80 if it is greater than 80 and convert value_dmc to 0 if it is less than 0
if (position_dmc > 80) {
    position_dmc = 80;
}
if (position_dmc < 0) {
    position_dmc = 0;
}
  
// Get the arrow and arrow value elements
const arrow_dmc = document.getElementById('arrow-dmc');
const arrowValue_dmc = document.getElementById('arrowValue-dmc');

// Calculate the top position of the arrow based on the value
const topPosition_dmc = 'calc(' + (100 - (position_dmc / 80) * 100) + '% - 15px)'; // Calculate the top position

// Set the top position of the arrow and display the value
arrow_dmc.style.top = topPosition_dmc;
arrowValue_dmc.textContent = value_dmc;