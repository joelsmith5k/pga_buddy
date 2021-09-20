const tournament_url = "https://weekly-pga-data.netlify.app/next_tourney.json";
const players_url =
  "https://weekly-pga-data.netlify.app/this_weeks_top_players.json";


async function getNextTournament() {
  const response = await fetch(tournament_url);
  const next_tournament = await response.json();
  build_tournament_card(next_tournament);
}

getNextTournament();

function build_tournament_card(next_tournament) {
  var body = document.getElementById("tournamentDiv");

  var tournament_container = document.createElement("div");
  tournament_container.setAttribute("class", "container");
  tournament_container.setAttribute("id", "tournament_container");
  body.appendChild(tournament_container);

  var tournament_card = document.createElement("div");
  tournament_card.setAttribute("class", "hoverable card bg-dark text-white tourney-card");
  tournament_card.setAttribute(
    "style",
    "width: 18rem; margin-top: 1rem; margin-left: auto; margin-right: auto; margin-botton: 1rem;"
  );

  var tournament_photo = document.createElement("img");
  tournament_photo.setAttribute("src", "images/country_club_jackson.jpg");
  tournament_photo.setAttribute("class", "card-img-top");

  var tournament_body = document.createElement("div");
  tournament_body.setAttribute("class", "card-body");

  var tournament_title = document.createElement("h5");
  tournament_title.setAttribute("class", "card-title");
  var tourney_name = document.createTextNode(next_tournament.Name);
  tournament_title.appendChild(tourney_name);

  var tournament_info = document.createElement("p");
  var tourney_venue = document.createTextNode(next_tournament.Venue);
  tournament_info.appendChild(tourney_venue);

  var tournament_par_length = document.createElement("p");
  var par_length_info = document.createTextNode(
    "Par: " + next_tournament.Par + ", Length: " + next_tournament.Yards
  );
  tournament_par_length.appendChild(par_length_info);

  var tournament_button = document.getElementById("buttonTwo");
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
  var body = document.getElementById("playersDiv");
  var players_container = document.createElement("div");
  players_container.setAttribute("class", "container");
  players_container.setAttribute("id", "players_container");
  body.appendChild(players_container);

  var arrayLength = player_stats.length;
  for (var i = 0; i < arrayLength; i++) {
    if (player_stats[i].Rank !== null) {

      if (player_stats[i].Rank == 0){
      var player_card = document.createElement("div");
      player_card.setAttribute("class", "card bg-dark  text-white player-card");
      player_card.setAttribute(
        "style",
        "width: 18rem; margin-top: 2rem; margin-left: auto; margin-right: auto;"
      );

      var player_photo = document.createElement("img");
      var player_name_split = player_stats[i].Name.split(" ")
      player_photo.setAttribute("src", "images/players/" + player_name_split[0] + "_" + player_name_split[1] + ".png");
      player_photo.setAttribute("alt", "No Player Photo Available");
      player_photo.setAttribute("class", "card-img-top");

      var player_card_body = document.createElement("div");
      player_card_body.setAttribute("class", "card-body");

      var player_card_title = document.createElement("h5");
      player_card_title.setAttribute("class", "card-title");
      var player_name = document.createTextNode(player_stats[i].Name + ' ~ ' + player_stats[i].Country);
      player_card_title.appendChild(player_name);


      var card_stats_list = document.createElement("ul");
      card_stats_list.setAttribute("class", "list-group list-group-flush");

      var player_rank_row = document.createElement("li");
      player_rank_row.setAttribute("class", "list-group-item text-primary");
      var player_rank = document.createTextNode("Finish Last Year: Win");
      player_rank_row.appendChild(player_rank);

      var player_total_topar_row = document.createElement("li");
      player_total_topar_row.setAttribute("class", "list-group-item text-primary bg-light");
      player_rank = document.createTextNode("Cumulative Score: " + player_stats[i].TotalScore);
      player_total_topar_row.appendChild(player_rank);

      var player_pars_row = document.createElement("li");
      player_pars_row.setAttribute("class", "list-group-item text-primary");
      var player_pars = document.createTextNode("Pars: " + player_stats[i].Pars);
      player_pars_row.appendChild(player_pars);

      var player_birdies_row = document.createElement("li");
      player_birdies_row.setAttribute("class", "list-group-item text-primary bg-light");
      var player_birdies = document.createTextNode("Birdies: " + player_stats[i].Birdies);
      player_birdies_row.appendChild(player_birdies);

      var player_eagles_row = document.createElement("li");
      player_eagles_row.setAttribute("class", "list-group-item text-primary");
      var player_eagles = document.createTextNode("Eagles: " + player_stats[i].Eagles);
      player_eagles_row.appendChild(player_eagles);

      var player_bogeys_row = document.createElement("li");
      player_bogeys_row.setAttribute("class", "list-group-item text-primary bg-light");
      var player_bogeys = document.createTextNode("Bogeys: " + player_stats[i].Bogeys);
      player_bogeys_row.appendChild(player_bogeys);

      var player_dbl_bogeys_row = document.createElement("li");
      player_dbl_bogeys_row.setAttribute("class", "list-group-item text-primary");
      var player_dbl_bogeys = document.createTextNode("Double Bogeys: " + player_stats[i].DoubleBogeys);
      player_dbl_bogeys_row.appendChild(player_dbl_bogeys);

      var player_streaks_row = document.createElement("li");
      player_streaks_row.setAttribute("class", "list-group-item text-primary bg-light");
      var player_streaks = document.createTextNode("Birdie Streaks: " + player_stats[i].ConsecutiveBirdieOrBetterCount);
      player_streaks_row.appendChild(player_streaks);

      var player_mc_row = document.createElement("li");
      player_mc_row.setAttribute("class", "list-group-item text-primary");
      var player_mc = document.createTextNode("Made Cut: " + player_stats[i].MadeCut);
      player_mc_row.appendChild(player_mc);

      var player_odds_row = document.createElement("li");
      player_odds_row.setAttribute("class", "list-group-item text-primary bg-light");
      var player_odds = document.createTextNode("Outright Odds: " + player_stats[i].OddsToWin);
      player_odds_row.appendChild(player_odds);

      players_container.appendChild(player_card);
      player_card.appendChild(player_photo);
      player_card.appendChild(player_card_body);
      player_card_body.appendChild(player_card_title);
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
        var player_card = document.createElement("div");
        player_card.setAttribute("class", "card bg-dark  text-white player-card");
        player_card.setAttribute("style", "width: 18rem; margin-top: 2rem; margin-left: auto; margin-right: auto;");

        var player_photo = document.createElement("img");
        var player_name_split = player_stats[i].Name.split(" ")
        player_photo.setAttribute("src", "images/players/" + player_name_split[0] + "_" + player_name_split[1] + ".png");
        player_photo.setAttribute("alt", "No Player Photo Available");
        player_photo.setAttribute("class", "card-img-top");

        var player_card_body = document.createElement("div");
        player_card_body.setAttribute("class", "card-body");

        var player_card_title = document.createElement("h5");
        player_card_title.setAttribute("class", "card-title");
        var player_name = document.createTextNode(player_stats[i].Name + ' ~ ' + player_stats[i].Country);
        player_card_title.appendChild(player_name);

        var card_stats_list = document.createElement("ul");
        card_stats_list.setAttribute("class", "list-group list-group-flush");

        var player_rank_row_two = document.createElement("li");
        player_rank_row_two.setAttribute("class", "list-group-item text-primary");
        var player_rank_two = document.createTextNode("Finish Last Year: " + player_stats[i].Rank);
        player_rank_row_two.appendChild(player_rank_two);

        var player_total_topar_row = document.createElement("li");
        player_total_topar_row.setAttribute("class", "list-group-item text-primary bg-light");
        var player_total_topar = document.createTextNode("Cumulative Score: " + player_stats[i].TotalScore);
        player_total_topar_row.appendChild(player_total_topar);

        var player_pars_row = document.createElement("li");
        player_pars_row.setAttribute("class", "list-group-item text-primary");
        var player_pars = document.createTextNode("Pars: " + player_stats[i].Pars);
        player_pars_row.appendChild(player_pars);

        var player_birdies_row = document.createElement("li");
        player_birdies_row.setAttribute("class", "list-group-item text-primary bg-light");
        var player_birdies = document.createTextNode("Birdies: " + player_stats[i].Birdies);
        player_birdies_row.appendChild(player_birdies);

        var player_eagles_row = document.createElement("li");
        player_eagles_row.setAttribute("class", "list-group-item text-primary");
        var player_eagles = document.createTextNode("Eagles: " + player_stats[i].Eagles);
        player_eagles_row.appendChild(player_eagles);

        var player_bogeys_row = document.createElement("li");
        player_bogeys_row.setAttribute("class", "list-group-item text-primary bg-light");
        var player_bogeys = document.createTextNode("Bogeys: " + player_stats[i].Bogeys);
        player_bogeys_row.appendChild(player_bogeys);

        var player_dbl_bogeys_row = document.createElement("li");
        player_dbl_bogeys_row.setAttribute("class", "list-group-item text-primary");
        var player_dbl_bogeys = document.createTextNode("Double Bogeys: " + player_stats[i].DoubleBogeys);
        player_dbl_bogeys_row.appendChild(player_dbl_bogeys);

        var player_streaks_row = document.createElement("li");
        player_streaks_row.setAttribute("class", "list-group-item text-primary bg-light");
        var player_streaks = document.createTextNode("Birdie Streaks: " + player_stats[i].ConsecutiveBirdieOrBetterCount);
        player_streaks_row.appendChild(player_streaks);

        var player_mc_row = document.createElement("li");
        player_mc_row.setAttribute("class", "list-group-item text-primary");
        var player_mc = document.createTextNode("Made Cut: " + player_stats[i].MadeCut);
        player_mc_row.appendChild(player_mc);

        var player_odds_row = document.createElement("li");
        player_odds_row.setAttribute("class", "list-group-item text-primary bg-light");
        var player_odds = document.createTextNode("Outright Odds: " + player_stats[i].OddsToWin);
        player_odds_row.appendChild(player_odds);

        players_container.appendChild(player_card);
        player_card.appendChild(player_photo);
        player_card.appendChild(player_card_body);
        player_card_body.appendChild(player_card_title);
        player_card.appendChild(card_stats_list);

        card_stats_list.appendChild(player_rank_row_two);
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


