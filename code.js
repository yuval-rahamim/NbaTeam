const teamName = document.getElementById("teamName");
const cool = document.getElementById("cool");

teams.forEach(team => {
    var option = document.createElement("option");
    option.value = team.teamId; // Set the value to the team's ID
    option.text = team.full_name;
    teamName.appendChild(option);
});

function test(event) {
    cool.innerHTML = ""; // Clear previous results
    var value = event.target.value;
    
    players.forEach(p => {
        var ho = document.createElement("div");
        ho.id = 'ho';
        if (value == p.teamId) { // Compare with the team ID directly
            var playerName = document.createElement("h1");
            playerName.textContent = p.first_name;
            ho.appendChild(playerName);

            var playerPhoto = document.createElement("img");
            playerPhoto.src = "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/"+p.playerId+".png"
            ho.appendChild(playerPhoto);

            var playerNumber = document.createElement("h2");
            playerNumber.textContent = "number: "+p.jersey;
            ho.appendChild(playerNumber);

            var playerPosition = document.createElement("h2");
            playerPosition.textContent = "position: "+p.position;
            ho.appendChild(playerPosition);

            cool.appendChild(ho);
        }
    });
     // Append the list of players to the "cool" div
}
