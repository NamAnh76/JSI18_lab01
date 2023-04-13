const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cfa2048429msh402a554195b387bp1a726ajsnfb8a1614358e',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Canada', options)
	.then(response => response.json())
	.then(response =>  {
        console.log(response)
        let deathsoutput = response.data.deaths;
        // console.log(deathsoutput)
        let confirmedoutput = response.data.confirmed;
        // console.log(confirmedoutput)
        let todayoutput = response.data.lastChecked;
        // console.log(todayoutput);


        document.getElementById('death').innerHTML = deathsoutput;
        document.getElementById('confirmed').innerHTML = confirmedoutput;
        document.getElementById('today').innerHTML = todayoutput;
    })
	.catch(err => console.error(err));