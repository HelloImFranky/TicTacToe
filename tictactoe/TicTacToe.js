const CST2409GUI = (function (callBack) {
   
   let tdNode = document.querySelectorAll("td");
   let tds = Array.from(tdNode);
      tds.forEach( e => e.setAttribute("data-move", "?" ));

   let nextMove = "X";

   let xOrO = function() {
      this.innerHTML = nextMove;
      this.dataset.move = nextMove;
      nextMove = nextMove == "X" ? "O" : "X";
      this.onclick=null;
      this.style.backgroundImage = 'url(whiteWood.jpg)';
      this.style.backgroundSize = '150%';
      this.style.color = "rgba(82, 65, 20)";

      const data = tds.map(m => m.dataset.move);
      const status = callBack(data);
      console.log(status);
   }

   tds.forEach( e => e.onclick = xOrO);

   let button = document.querySelector("button");

   let reset = function () {
      grabBox = document.querySelector("table");
      showBox = document.getElementById("hiddenBox");
      winningWood = document.getElementById("winningWood");
      grabBox.style.display = "block";
      showBox.style.display="none";
      winningWood.style.display="none";
      nextMove = "X";
      tds.forEach( e => {
         e.innerHTML = "?";
         e.style.backgroundImage = "";
         e.style.color = "rgba(230, 190, 132, 0.959)";
         e.onclick = xOrO;
         e.dataset.move = "";
      });

   };

   button.onclick = reset;

});