// ==UserScript==
// @name         Blaseball
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Widescreen blaseball layout
// @author       Edgarware
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
	padding-right: 40px;
	padding-left: 40px;
}

.Main-Body > div > div > ul {
 	display: grid;
 	grid-template-columns: repeat(auto-fit, 950px);
 	grid-gap: 20px;
	justify-content: center;
	margin-bottom: 20px;
}


.GameWidget {
	margin-bottom: 0;
}

.Shop {
	max-width: 100%;
}

.Shop-Grid {
  	display: grid;
  	grid-template-columns: repeat(auto-fit, 300px);
  	grid-gap: 20px;
  	justify-content: center;
  	margin-bottom: 20px;
}

.Shop-Item {
	width: 100%;
}

.Decrees-Container {
  	grid-template-columns: repeat(auto-fill, 300px);
  	justify-content: center;
	width: 100%;
}

.Blessings-Container {
  	grid-template-columns: repeat(auto-fill, 250px);
  	justify-content: center;
	width: 100%;
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
