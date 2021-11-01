// ==UserScript==
// @name         Widescreen Blaseball
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  Widescreen Blaseball layout
// @author       Edgarware
// @updateURL    https://raw.githubusercontent.com/edgarware/widescreen-blaseball/master/widescreen_blaseball.user.js
// @downloadURL  https://raw.githubusercontent.com/edgarware/widescreen-blaseball/master/widescreen_blaseball.user.js
// @match        https://blaseball.com/*
// @match        https://www.blaseball.com/*
// @grant        none
// ==/UserScript==
// Based on UserScript from Fugi: https://gist.github.com/Fugiman/1cbe3b776bb9603298fc4258495af09a


/* THE COMMISSIONER IS DOING A GREAT JOB */

/*
 TODO:
 	* About page doesn't resize right
  	* Main display doesnt resize right
  	
*/
(function() {
    'use strict';

    const s = document.createElement('style');
    s.innerHTML = `
.Main {
	padding-right: 20px;
	padding-left: 20px;
}

.Navigation {
	padding-right: 100px;
	padding-left: 100px;
}

.Header{
	padding-left: 100px;
	padding-right: 100px;
}

.Main-Body > ul {
 	display: grid;
 	grid-template-columns: repeat(auto-fit, 49%);
 	grid-gap: 20px;
	justify-content: center;
	margin-bottom: 20px;
}

.Main-Body > div > ul {
 	display: grid;
 	grid-template-columns: repeat(auto-fit, 49%);
 	grid-gap: 20px;
	justify-content: center;
	margin-bottom: 20px;
}

.Main-Body > div > div > ul > ul{
 	display: grid;
 	grid-template-columns: repeat(auto-fit, 49%);
 	grid-gap: 20px;
	justify-content: center;
	margin-bottom: 20px;
}

.GameWidget {
	margin-bottom: 0 !important;
}

.Bet{
	padding-left: 300px;
	padding-right: 300px;
}

.Bet-Schedule-Date{
	width: 500px;
}

.Bet-Schedule{
	width: 800px;
}

.League-Schedule-Wrapper{
	width: 100%;
}

.League-Schedule{
	width: 100%;
}

.Main-Body > .League-Schedule-Scroll-Wrapper{
	padding-right: 200px;
	padding-left: 200px;
	justify-content: center;
	align-items: center;
}

.PlayoffSetup-Header {
	grid-column-start: 1;
	grid-column-end: 3;
}

.Decrees {
	padding-right: 200px;
	padding-left: 200px;
}

.Decrees-Container {
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
	width: 100%;
}

.Blessings {
	padding-right: 200px;
	padding-left: 200px;
}

.Blessings-Container {
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
	width: 100%;
}

.Wills {
	padding-right: 200px;
	padding-left: 200px;
}

.Wills-Container {
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
	width: 100%;
}

.Bulletin {
	padding-right: 200px;
	padding-left: 200px;
}

.LeagueFeed {
	padding-right: 300px;
	padding-left: 300px;
}

.Standings-League {
	padding-right: 15%;
	padding-left: 15%;
}

.About-All {
	flex-wrap: wrap;
	column-gap: 100px;
	height: 1000px;
	width: 80%;
	max-width: 80%;
}

.About-All >* {
	max-width: 550px;
}

.About-Header {
	padding-top: 10px;
}

.About-Body-Container {
	max-width: 920px;
}

.TheBook-All {
	max-width: 1024px;
}

.Leaderboard-Player-Container {
	display: flex !important;
}

.Events-ButtonList-Home {
	justify-content: flex-end;
	margin: 0;
	width: 70%;
}
`
    document.body.appendChild(s);
})();
