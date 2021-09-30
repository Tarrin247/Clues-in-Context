var things = ['pool stick', 'spork', 'rusty coffee can', 'duck tape', 'champagne flute',
    'giant spoon', 'orange traffic cone', 'can of manwich', 'red solo cup', 'glass soda bottle',
    'floppy disk reader', 'lite brite', 'smurfs lunchbox', 'bluetooth keyboard',
    'Barbasol shaving cream', 'trapper keeper', 'lantern', '2 x 4', 'drum sticks', 'mason jar']


var regions = ['the wild blue yonder', 'Berry, AL', 'Holly Pond, AL', 'the Back Forty',
    'the Barn', 'Welti, AL', 'Walter, AL', 'Bankston, AL', 'the red barn',
    'Havelock']

var suspects = ['Leroy Brown', 'Brandy', 'Jolene', 'Bobby McGee', 'a boy named Sue']



// On page load use for loop to add 100 h3 element with text saying 'Acusation X'.  
// Append h3 to body of html doc
// Append text to he element
document.addEventListener("DOMContentLoaded", function () {

    for (var i = 0; i < 100; i++) {

        var h3 = document.createElement('h3');
        var h3Text = document.createTextNode(`Accusation: ${i + 1}`);
        document.body.appendChild(h3);
        h3.appendChild(h3Text);

        h3.onclick = function () {randomAlert()};
        
    }

    function randomAlert() {
        // var copyh3Text = h3Text.cloneNode(true);
        // var accNum = document.getElementsByTagName('h3').innerHTML
        var suspectee = Math.floor(Math.random() * suspects.length);
        var region = Math.floor(Math.random() * regions.length);
        var thing = Math.floor(Math.random() * things.length);

        alert(`${copyh3Text} I accuse ${suspects[suspectee]}, with the ${things[thing]} in the ${regions[region]}!`);
    }

});










//'Accusation' + ' ' + i


