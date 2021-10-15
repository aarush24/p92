function adduser(){
	player1_name = document.getElementById("player_1");
	player2_name = document.getElementById("player_2");

	localStorage.setItem("player_1",player1_name);
	localStorage.setItem("player_2",player2_name);

	window.location.replace("game_page.html");
}
