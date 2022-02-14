/*
    TicTacToeBL.js
    BL- Business Logic

*/
(function () {



winningCombo = [{w1:0,w2:1,w3:2}, 
        {w1:3,w2:4,w3:5}, 
        {w1:6,w2:7,w3:8}, 
        {w1:0,w2:3,w3:6}, 
        {w1:1,w2:4,w3:7}, 
        {w1:2,w2:5,w3:8}, 
        {w1:0,w2:4,w3:8},
        {w1:2,w2:4,w3:6}
    ];

    /*
        data = "xxx??????".split("")
        data = "?????????".split("")
    */ 
    const getWinner = function(data) {
        
        let winner = winningCombo.find( e => data[e.w1] == data[e.w2] && data[e.w1] == data[e.w3] && data[e.w1] && data[e.w3] != "?" );

        if (winner){
            winner.isWinner = true;
            grabBox = document.querySelector("table");
            showBox = document.getElementById("hiddenBox");
            winningWood = document.getElementById("winningWood");
            grabBox.style.display= "none";
            showBox.style.display= "block";
            showBox.innerHTML="<h2 class='makeItNice particles'>WE HAVE A WINNER!</h2>";
            winningWood.innerHTML="<img class='resizeMe' size='100px' src='winningWood.png'>";
            winningWood.style.display="block";
        }
        else {
            winner = {isWinner: false};
        }
        return winner;
    };

//winningCombo.find();
new CST2409GUI(getWinner);


})();