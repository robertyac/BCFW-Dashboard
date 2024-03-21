function updateFFMC(value_ffmc) {
    let position_ffmc = value_ffmc;

    // check if value_ffmc is less than 0 and set it to 0
    if(value_ffmc < 0) {
        value_ffmc = 0;
    }

    if (position_ffmc > 100) {
        position_ffmc = 100;
    } else if (position_ffmc < 0) {
        position_ffmc = 0;
    }
    
    // Get the arrow and arrow value_ffmc elements
    const arrow_ffmc = document.getElementById('arrow-ffmc');
    const arrowvalue_ffmc = document.getElementById('arrowValue-ffmc');

    console.log('arrow_ffmc:', arrow_ffmc);
    console.log('arrowvalue_ffmc:', arrowvalue_ffmc);

    // Calculate the top position_ffmc of the arrow based on the value_ffmc
    let topposition_ffmc;

    if (value_ffmc < 80) {
        topposition_ffmc = 'calc(' + (100 - (position_ffmc / 80) * 60) + '% - 5px)'; // Calculate the position_ffmc relative to the top
    } else {
        topposition_ffmc = 'calc(' + (100 - position_ffmc) * 2 + '% - 5px)'; // Calculate the position_ffmc position_ffmc relative to the top
    }

    // Set the top position_ffmc of the arrow and display the value_ffmc
    arrow_ffmc.style.top = topposition_ffmc;
    arrowvalue_ffmc.textContent = value_ffmc;
}

updateFFMC(0);

module.exports = { updateFFMC };