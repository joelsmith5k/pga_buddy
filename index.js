const tournament_url = "https://weekly-pga-data.netlify.app/next_tourney.json";
const players_url =
  "https://weekly-pga-data.netlify.app/this_weeks_top_players.json";


async function getNextTournament() {
  const response = await fetch(tournament_url);
  const next_tournament = await response.json();
  console.log(next_tournament);
  build_tournament_card(next_tournament);
}

getNextTournament();

function build_tournament_card(next_tournament) {
  body = document.getElementById("tournamentDiv");

  tournament_container = document.createElement("div");
  tournament_container.setAttribute("class", "container");
  tournament_container.setAttribute("id", "tournament_container");
  body.appendChild(tournament_container);

  tournament_card = document.createElement("div");
  tournament_card.setAttribute("class", "hoverable card bg-dark text-white tourney-card");
  tournament_card.setAttribute(
    "style",
    "width: 18rem; margin-top: 1rem; margin-left: auto; margin-right: auto; margin-botton: 1rem;"
  );

  tournament_photo = document.createElement("img");
  tournament_photo.setAttribute("src", "images/safeway.jpg");
  tournament_photo.setAttribute("class", "card-img-top");

  tournament_body = document.createElement("div");
  tournament_body.setAttribute("class", "card-body");

  tournament_title = document.createElement("h5");
  tournament_title.setAttribute("class", "card-title");
  tourney_name = document.createTextNode(next_tournament.Name);
  tournament_title.appendChild(tourney_name);

  tournament_info = document.createElement("p");
  tourney_venue = document.createTextNode(next_tournament.Venue);
  tournament_info.appendChild(tourney_venue);

  tournament_par_length = document.createElement("p");
  par_length_info = document.createTextNode(
    "Par: " + next_tournament.Par + ", Length: " + next_tournament.Yards
  );
  tournament_par_length.appendChild(par_length_info);

  tournament_button = document.getElementById("buttonTwo");
  tournament_button.setAttribute("type", "button");
  tournament_button.setAttribute("value", "Stats");
  tournament_button.setAttribute("onclick", "display_players()");

  body.appendChild(tournament_container);
  tournament_container.appendChild(tournament_card);
  tournament_card.appendChild(tournament_photo);
  tournament_card.appendChild(tournament_body);
  tournament_body.appendChild(tournament_title);
  tournament_body.appendChild(tournament_info);
  tournament_body.appendChild(tournament_par_length);
  tournament_body.appendChild(tournament_par_length);
}

async function display_players() {
  const response_two = await fetch(players_url);
  const player_stats = await response_two.json();
  console.log(player_stats);
  body = document.getElementById("playersDiv");
  players_container = document.createElement("div");
  players_container.setAttribute("class", "container");
  players_container.setAttribute("id", "players_container");
  body.appendChild(players_container);

  var arrayLength = player_stats.length;
  for (var i = 0; i < arrayLength; i++) {
    if (player_stats[i].Rank !== null) {
      console.log(player_stats[i]);

      if (player_stats[i].Rank == 0){
      player_card = document.createElement("div");
      player_card.setAttribute("class", "card bg-dark  text-white player-card");
      player_card.setAttribute(
        "style",
        "width: 18rem; margin-top: 2rem; margin-left: auto; margin-right: auto;"
      );

      player_photo = document.createElement("img");
      player_name_split = player_stats[i].Name.split(" ")
      player_photo.setAttribute("src", "images/players/" + player_name_split[0] + "_" + player_name_split[1] + ".png");
      player_photo.setAttribute("alt", "No Player Photo Available");
      player_photo.setAttribute("class", "card-img-top");

      player_card_body = document.createElement("div");
      player_card_body.setAttribute("class", "card-body");

      player_card_title = document.createElement("h5");
      player_card_title.setAttribute("class", "card-title");
      player_name = document.createTextNode(player_stats[i].Name + ' ------- ' + player_stats[i].Country);
      player_card_title.appendChild(player_name);

      player_card_info = document.createElement("p");
      player_card_info.setAttribute("class", "card-title");
      player_country = document.createTextNode(player_stats[i].Country);
      player_card_info.appendChild(player_name);

      card_stats_list = document.createElement("ul");
      card_stats_list.setAttribute("class", "list-group list-group-flush");

      player_rank_row = document.createElement("li");
      player_rank_row.setAttribute("class", "list-group-item text-primary");
      player_rank = document.createTextNode("Rank: Win");
      player_rank_row.appendChild(player_rank);

      player_total_topar_row = document.createElement("li");
      player_total_topar_row.setAttribute("class", "list-group-item text-primary bg-light");
      player_rank = document.createTextNode("Cumulative Score: " + player_stats[i].TotalScore);
      player_total_topar_row.appendChild(player_rank);

      player_pars_row = document.createElement("li");
      player_pars_row.setAttribute("class", "list-group-item text-primary");
      player_pars = document.createTextNode("Avg Pars: " + player_stats[i].Pars);
      player_pars_row.appendChild(player_pars);

      player_birdies_row = document.createElement("li");
      player_birdies_row.setAttribute("class", "list-group-item text-primary bg-light");
      player_birdies = document.createTextNode("Avg Birdies: " + player_stats[i].Birdies);
      player_birdies_row.appendChild(player_birdies);

      player_eagles_row = document.createElement("li");
      player_eagles_row.setAttribute("class", "list-group-item text-primary");
      player_eagles = document.createTextNode("Avg Eagles: " + player_stats[i].Eagles);
      player_eagles_row.appendChild(player_eagles);

      player_bogeys_row = document.createElement("li");
      player_bogeys_row.setAttribute("class", "list-group-item text-primary bg-light");
      player_bogeys = document.createTextNode("Avg Bogeys: " + player_stats[i].Bogeys);
      player_bogeys_row.appendChild(player_bogeys);

      player_dbl_bogeys_row = document.createElement("li");
      player_dbl_bogeys_row.setAttribute("class", "list-group-item text-primary");
      player_dbl_bogeys = document.createTextNode("Avg Double Bogeys: " + player_stats[i].DoubleBogeys);
      player_dbl_bogeys_row.appendChild(player_dbl_bogeys);

      player_streaks_row = document.createElement("li");
      player_streaks_row.setAttribute("class", "list-group-item text-primary bg-light");
      player_streaks = document.createTextNode("Avg Birdie Streaks: " + player_stats[i].ConsecutiveBirdieOrBetterCount);
      player_streaks_row.appendChild(player_streaks);

      player_mc_row = document.createElement("li");
      player_mc_row.setAttribute("class", "list-group-item text-primary");
      player_mc = document.createTextNode("Avg Double Bogeys: " + player_stats[i].MadeCut * 100);
      player_mc_row.appendChild(player_mc);

      player_odds_row = document.createElement("li");
      player_odds_row.setAttribute("class", "list-group-item text-primary bg-light");
      player_odds = document.createTextNode("Outright Odds: " + player_stats[i].OddsToWin);
      player_odds_row.appendChild(player_odds);

      players_container.appendChild(player_card);
      player_card.appendChild(player_photo);
      player_card.appendChild(player_card_body);
      player_card_body.appendChild(player_card_title);
      player_card_body.appendChild(player_card_info);
      player_card.appendChild(card_stats_list);

      card_stats_list.appendChild(player_rank_row);
      card_stats_list.appendChild(player_total_topar_row);
      card_stats_list.appendChild(player_pars_row);
      card_stats_list.appendChild(player_birdies_row);
      card_stats_list.appendChild(player_eagles_row);
      card_stats_list.appendChild(player_bogeys_row);
      card_stats_list.appendChild(player_dbl_bogeys_row);
      card_stats_list.appendChild(player_streaks_row);
      card_stats_list.appendChild(player_mc_row);
      card_stats_list.appendChild(player_odds_row);
      }
      else {
        player_card = document.createElement("div");
      player_card.setAttribute("class", "card bg-dark  text-white player-card");
      player_card.setAttribute(
        "style",
        "width: 18rem; margin-top: 2rem; margin-left: auto; margin-right: auto;"
      );

      player_photo = document.createElement("img");
      player_name_split = player_stats[i].Name.split(" ")
      player_photo.setAttribute("src", "images/players/" + player_name_split[0] + "_" + player_name_split[1] + ".png");
      player_photo.setAttribute("alt", "No Player Photo Available");
      player_photo.setAttribute("class", "card-img-top");

      player_card_body = document.createElement("div");
      player_card_body.setAttribute("class", "card-body");

      player_card_title = document.createElement("h3");
      player_card_title.setAttribute("class", "card-title");
      player_name = document.createTextNode(player_stats[i].Name + ' ~ ' + player_stats[i].Country);
      player_card_title.appendChild(player_name);

      player_card_info = document.createElement("p");
      player_card_info.setAttribute("class", "card-title");
      player_country = document.createTextNode(player_stats[i].Country);
      player_card_info.appendChild(player_name);

      card_stats_list = document.createElement("ul");
      card_stats_list.setAttribute("class", "list-group list-group-flush");

      player_rank_row = document.createElement("li");
      player_rank_row.setAttribute("class", "list-group-item text-primary");
      player_rank = document.createTextNode("Rank: " + player_stats[i].Rank);
      player_rank_row.appendChild(player_rank);

      player_total_topar_row = document.createElement("li");
      player_total_topar_row.setAttribute("class", "list-group-item text-primary bg-light");
      player_rank = document.createTextNode("Cumulative Score: " + player_stats[i].TotalScore);
      player_total_topar_row.appendChild(player_rank);

      player_pars_row = document.createElement("li");
      player_pars_row.setAttribute("class", "list-group-item text-primary");
      player_pars = document.createTextNode("Avg Pars: " + player_stats[i].Pars);
      player_pars_row.appendChild(player_pars);

      player_birdies_row = document.createElement("li");
      player_birdies_row.setAttribute("class", "list-group-item text-primary bg-light");
      player_birdies = document.createTextNode("Avg Birdies: " + player_stats[i].Birdies);
      player_birdies_row.appendChild(player_birdies);

      player_eagles_row = document.createElement("li");
      player_eagles_row.setAttribute("class", "list-group-item text-primary");
      player_eagles = document.createTextNode("Avg Eagles: " + player_stats[i].Eagles);
      player_eagles_row.appendChild(player_eagles);

      player_bogeys_row = document.createElement("li");
      player_bogeys_row.setAttribute("class", "list-group-item text-primary bg-light");
      player_bogeys = document.createTextNode("Avg Bogeys: " + player_stats[i].Bogeys);
      player_bogeys_row.appendChild(player_bogeys);

      player_dbl_bogeys_row = document.createElement("li");
      player_dbl_bogeys_row.setAttribute("class", "list-group-item text-primary");
      player_dbl_bogeys = document.createTextNode("Avg Double Bogeys: " + player_stats[i].DoubleBogeys);
      player_dbl_bogeys_row.appendChild(player_dbl_bogeys);

      player_streaks_row = document.createElement("li");
      player_streaks_row.setAttribute("class", "list-group-item text-primary bg-light");
      player_streaks = document.createTextNode("Avg Birdie Streaks: " + player_stats[i].ConsecutiveBirdieOrBetterCount);
      player_streaks_row.appendChild(player_streaks);

      player_mc_row = document.createElement("li");
      player_mc_row.setAttribute("class", "list-group-item text-primary");
      player_mc = document.createTextNode("Made Cut: " + player_stats[i].MadeCut);
      player_mc_row.appendChild(player_mc);

      player_odds_row = document.createElement("li");
      player_odds_row.setAttribute("class", "list-group-item text-primary bg-light");
      player_odds = document.createTextNode("Outright Odds: " + player_stats[i].OddsToWin);
      player_odds_row.appendChild(player_odds);

      players_container.appendChild(player_card);
      player_card.appendChild(player_photo);
      player_card.appendChild(player_card_body);
      player_card_body.appendChild(player_card_title);
      player_card_body.appendChild(player_card_info);
      player_card.appendChild(card_stats_list);

      card_stats_list.appendChild(player_rank_row);
      card_stats_list.appendChild(player_total_topar_row);
      card_stats_list.appendChild(player_pars_row);
      card_stats_list.appendChild(player_birdies_row);
      card_stats_list.appendChild(player_eagles_row);
      card_stats_list.appendChild(player_bogeys_row);
      card_stats_list.appendChild(player_dbl_bogeys_row);
      card_stats_list.appendChild(player_streaks_row);
      card_stats_list.appendChild(player_mc_row);
      card_stats_list.appendChild(player_odds_row);
      }
    }
  }
  window.scroll({
    top: 800,
    left: 800,
    behavior: "smooth",
  });
}


