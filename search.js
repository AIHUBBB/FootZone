const FOOTZONE_DATA = [

{
name:"Lionel Messi",
type:"👤 لاعب",
description:"🇦🇷 Argentina — Inter Miami — رقم 10",
page:"player.html?player=messi"
},

{
name:"Kylian Mbappé",
type:"👤 لاعب",
description:"🇫🇷 France — Real Madrid — رقم 9",
page:"player.html?player=mbappe"
},

{
name:"Lamine Yamal",
type:"👤 لاعب",
description:"🇪🇸 Spain — Barcelona — رقم 10",
page:"player.html?player=yamal"
},

{
name:"Erling Haaland",
type:"👤 لاعب",
description:"🇳🇴 Norway — Manchester City",
page:"player.html?player=haaland"
},

{
name:"Mohamed Salah",
type:"👤 لاعب",
description:"🇪🇬 Egypt — Liverpool",
page:"player.html?player=salah"
},

{
name:"Kevin De Bruyne",
type:"👤 لاعب",
description:"🇧🇪 Belgium — Napoli",
page:"player.html?player=debruyne"
},

{
name:"Vinícius Júnior",
type:"👤 لاعب",
description:"🇧🇷 Brazil — Real Madrid",
page:"player.html?player=vinicius"
},

{
name:"Thibaut Courtois",
type:"👤 لاعب",
description:"🇧🇪 Belgium — Real Madrid",
page:"player.html?player=courtois"
},

{
name:"Barcelona",
type:"🏆 فريق",
description:"🇪🇸 Spain — La Liga",
page:"team.html?team=barcelona"
},

{
name:"Real Madrid",
type:"🏆 فريق",
description:"🇪🇸 Spain — La Liga",
page:"team.html?team=realmadrid"
},

{
name:"Manchester City",
type:"🏆 فريق",
description:"🏴 England — Premier League",
page:"team.html?team=mancity"
},

{
name:"Manchester United",
type:"🏆 فريق",
description:"🏴 England — Premier League",
page:"team.html?team=manunited"
},

{
name:"Liverpool",
type:"🏆 فريق",
description:"🏴 England — Premier League",
page:"team.html?team=liverpool"
},

{
name:"Chelsea",
type:"🏆 فريق",
description:"🏴 England — Premier League",
page:"team.html?team=chelsea"
},

{
name:"Arsenal",
type:"🏆 فريق",
description:"🏴 England — Premier League",
page:"team.html?team=arsenal"
},

{
name:"PSG",
type:"🏆 فريق",
description:"🇫🇷 France — Ligue 1",
page:"team.html?team=psg"
},

{
name:"Marseille",
type:"🏆 فريق",
description:"🇫🇷 France — Ligue 1",
page:"team.html?team=marseille"
},

{
name:"Inter",
type:"🏆 فريق",
description:"🇮🇹 Italy — Serie A",
page:"team.html?team=inter"
},

{
name:"AC Milan",
type:"🏆 فريق",
description:"🇮🇹 Italy — Serie A",
page:"team.html?team=milan"
},

{
name:"Juventus",
type:"🏆 فريق",
description:"🇮🇹 Italy — Serie A",
page:"team.html?team=juventus"
},

{
name:"Bayern Munich",
type:"🏆 فريق",
description:"🇩🇪 Germany — Bundesliga",
page:"team.html?team=bayern"
},

{
name:"Dortmund",
type:"🏆 فريق",
description:"🇩🇪 Germany — Bundesliga",
page:"team.html?team=dortmund"
},

{
name:"Espérance de Tunis",
type:"🏆 فريق",
description:"🇹🇳 Tunisia",
page:"team.html?team=esperance"
},

{
name:"Club Africain",
type:"🏆 فريق",
description:"🇹🇳 Tunisia",
page:"team.html?team=clubafricain"
},

{
name:"Étoile du Sahel",
type:"🏆 فريق",
description:"🇹🇳 Tunisia",
page:"team.html?team=etoile"
},

{
name:"CS Sfaxien",
type:"🏆 فريق",
description:"🇹🇳 Tunisia",
page:"team.html?team=sfaxien"
},

{
name:"Barcelona Real Madrid",
type:"⚽ مباراة",
description:"Barcelona 🆚 Real Madrid",
page:"matches.html"
},

{
name:"PSG Marseille",
type:"⚽ مباراة",
description:"PSG 🆚 Marseille",
page:"matches.html"
},

{
name:"Manchester City Arsenal",
type:"⚽ مباراة",
description:"Manchester City 🆚 Arsenal",
page:"matches.html"
},

{
name:"Inter AC Milan",
type:"⚽ مباراة",
description:"Inter 🆚 AC Milan",
page:"matches.html"
},

{
name:"أخبار كرة القدم",
type:"📰 خبر",
description:"أحدث أخبار كرة القدم العالمية",
page:"news.html"
},

{
name:"سوق الانتقالات",
type:"📰 خبر",
description:"آخر أخبار انتقالات اللاعبين",
page:"transfers.html"
}

];


function goToSearch(query){

query=query.trim();

if(!query)return;

window.location.href=
"search.html?q="+encodeURIComponent(query);

}


function setupSearchInputs(){

const inputs=
document.querySelectorAll(".search");

inputs.forEach(input=>{

input.addEventListener("keydown",event=>{

if(event.key==="Enter"){

goToSearch(input.value);

}

});

});

}


function displayResults(){

const resultsContainer=
document.getElementById("results");

const queryText=
document.getElementById("queryText");

const searchInput=
document.getElementById("globalSearch");

if(!resultsContainer)return;

const params=
new URLSearchParams(window.location.search);

const query=
(params.get("q")||"").trim();

if(queryText)
queryText.textContent=query||"الكل";

if(searchInput)
searchInput.value=query;

if(!query){

resultsContainer.innerHTML=`
<div class="empty">
<h2>🔎 اكتب كلمة للبحث</h2>
<p>مثلاً Messi أو Barcelona</p>
</div>
`;

return;

}

const q=query.toLowerCase();

const results=
FOOTZONE_DATA.filter(item=>{

const text=
(
item.name+
" "+
item.type+
" "+
item.description
).toLowerCase();

return text.includes(q);

});


if(results.length===0){

resultsContainer.innerHTML=`
<div class="empty">
<h2>❌ ما لقيناش نتائج</h2>
<p>جرّب Messi أو Barcelona أو Real Madrid.</p>
</div>
`;

return;

}


resultsContainer.innerHTML=
results.map(item=>`

<div class="result">

<div class="type">
${item.type}
</div>

<h2>${item.name}</h2>

<p>${item.description}</p>

<a href="${item.page}">
مشاهدة التفاصيل →
</a>

</div>

`).join("");

}


document.addEventListener(
"DOMContentLoaded",
()=>{

setupSearchInputs();
displayResults();

}
);
