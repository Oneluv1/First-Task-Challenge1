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
    data1+= `<div id="page">
      <div class="card">
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
   