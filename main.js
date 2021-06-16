function addplayer(){
    var player1name=document.getElementById("Player1Input").value;
    var player2name=document.getElementById("Player2Input").value;

     localStorage.setItem("Player1",player1name);
     localStorage.setItem("Player2",player2name);
    
    
    window.location="game_page.html"
    
    }