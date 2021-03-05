// ==UserScript==
// @name         Widescreen Blaseball
// @namespace    http://tampermonkey.net/
// @version      0.3
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

.Navigation-Era{
	padding-left: 100px !important;
}

.Navigation-SubEra{
	padding-left: 100px !important;
}

//.Main-Body > div > div > ul {
// 	display: grid;
// 	grid-template-columns: repeat(auto-fit, 49%);
// 	grid-gap: 20px;
//	justify-content: center;
//	margin-bottom: 20px;
//}

.Main-Body > div > div > ul > ul {
 	display: grid;
 	grid-template-columns: repeat(auto-fit, 49%);
 	grid-gap: 20px;
	justify-content: center;
	margin-bottom: 20px;
}

.GameWidget {
	margin-bottom: 0;
}

.GameWidget-Full-Live {
	//grid-template-columns: 1fr 308px 307px;
}

.Decrees {
	padding-right: 100px;
	padding-left: 100px;
}

.Decrees-Container {
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
	width: 100%;
}

.Blessings {
	padding-right: 100px;
	padding-left: 100px;
}

.Blessings-Container {
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
	width: 100%;
}

.Wills {
	padding-right: 100px;
	padding-left: 100px;
}

.Wills-Container {
  grid-template-columns: repeat(auto-fill, 250px);
  justify-content: center;
	width: 100%;
}

.Bulletin {
	padding-right: 100px;
	padding-left: 100px;
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
`
    document.body.appendChild(s);
})();
