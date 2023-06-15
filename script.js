var moon = document.getElementById('moon');
moon.onclick = function(){
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')){
    
  moon.src = "sun-icon.png";
} else{
  moon.src = "moon-icon.png";
}
}

fetch('https://restcountries.com/v3.1/all')
.then((data)=>{
  //console.log(data)
  return data.json();
}).then ((givendata)=>{
  //console.log(givendata);
  let data1 = "";
  givendata.map((values)=>{
    data1+= `
      <div class="card" id="card">
        <img src= ${values.flags.png} class="card-img-top" alt="...">
        <div class="cards">
          <h5 class="card-title">${ values.name.common}</h5>
          <p class="" id="country">Population: ${ values.population }</p>
          <p class="" id="country">Region: ${ values.region}
          <p class="" id="country">Capital: ${ values.capital}</p>
        </div>
        </div>`
  });
  document.getElementById("page").innerHTML =data1;

}).catch((err)=>{
  console.log(err);
}) 


//To Filter by Country

search.oninput = filterCountries;
function filterCountries() {
  const liElement = document.querySelectorAll('card');
  for (let page of liElement){
    const countryName = page.innerText.toLowerCase();
    const searchCountry = this.value.toLowerCase();
    if(!countryName.includes(searchCountry))
    page.setAttribute('hidden', true);
    else page.removeAttribute('hidden');
  }
}

/*const search = () =>{
  const searchpan = document.getElementById("search-item").vlaue.toUpperCase();
  const searchitems = document.getElementById("page");
  const result = document.querySelectorAll(".card");
  const resultname = searchitems.getElementsByTagName("h5");

  for(let i=0; i < resultname.length; i++){
    let match = result[i].getElementsByTagName("h5")[0];

    if (match){
      let textvalue = match.textContent || match.innerHTML

      if (textvalue.toUpperCase().indexOf(searchpan) > -1){
        result[i].style.display = "";
      }else{
        result[i].style.display = "none";

      }
    }
  }
}*/


//To Filter by Continent

/*let fetchData = document.getElementById('Afri');
Afri.onclick = function (){
fetch('https://restcountries.com/v3.1/name/africa')
.then((data)=>{
  //console.log(data)
  return data.json();
}).then ((givendata)=>{
  //console.log(givendata);
  let data1 = "";
  givendata.map((values)=>{
    data1+= `<div id="page">
      <div class="card" id="card">
        <img src= ${values.flags.png} class="card-img-top" alt="...">
        <div class="cards">
          <h5 class="card-title">${ values.name.common}</h5>
          <p class="" id="country">${ values.population }</p>
          <p class="" id="country">${ values.region}
          <p class="" id="country">${ values.capital}</p>
        </div>
        </div>
      </div>`
  });
  document.getElementById("page").innerHTML =data1;

}).catch((err)=>{
  console.log(err);
})
}*/

/*const url = 'https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'ajayakv-rest-countries-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

let output = document.getElementById('country');
      function fetchData() {
         fetch('https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all')
         .then(response => response.json())
         .then(data => {
            output.innerHTML += "name = " + data.name;
            output.innerHTML += "population = " + data.population;
            output.innerHTML += "region = " + data.region;
            output.innerHTML += "capital = " + data.capital;
           
         })
      }*/
   