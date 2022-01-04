var Player1_Name = ""
var Player2_Name = ""
function Login () {
    Player1_Name = document.getElementById("Player_1").value
    Player2_Name = document.getElementById("Player_2").value
    localStorage.setItem("Save_Player1", Player1_Name)
    localStorage.setItem("Save_Player2", Player2_Name)
    window.location="game_page.html"
}