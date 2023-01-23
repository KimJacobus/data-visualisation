import Chart from 'chart.js/auto';



var countries = {}

for (let trindex = 2; trindex < 37; trindex++) {

      var trtags = table1.querySelector(`tr:nth-child(${trindex})`);
      var tdtags = trtags.querySelectorAll('td');
      var getinnerHTML = [];

      for (let i = 0; i < tdtags.length; i++) {
       getinnerHTML.push(tdtags[i].textContent);
}
      countries[`tr-${trindex}`] = getinnerHTML;
}

var countryNames = Object.values(countries).map(country => country.shift());

// get years

console.log(countries);
console.log(countries['tr-2']);


function getYears() {

var var1 = Object.values(countries).map(firstval => firstval.shift());
var var2 = var1.join('/').replaceAll(',', '.').split("/");

return var2; 
}

// var year2002 = getYears();
// var year2003 = getYears();
// var year2004 = getYears();
// var year2005 = getYears();
// var year2006 = getYears();
// var year2007 = getYears();
// var year2008 = getYears();
// var year2009 = getYears();
// var year2010 = getYears();
// var year2011 = getYears();
// var year2012 = getYears();



//put into html 

var Title = document.getElementById('Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police');

var container = document.createElement('div');
container.setAttribute('class', 'chart-container');
Title.append(container);
var getContainer = document.querySelector(".chart-container");


container.setAttribute('style', 'position: relative; height:40vh; width:45vw');

 var newCanvas = document.createElement('canvas');
 newCanvas.setAttribute('id', 'dimensions');


      getContainer.append(newCanvas);



var miniTitle = table1.getElementsByTagName('caption')[0];
miniTitle.remove();




// chart config


 let  tdchart = document.getElementById('dimensions').getContext('2d');

 let  ArrChart = new Chart(tdchart, {
    type: 'line', 

    options: {
      plugins: {
      title: {
        display: true,
        text: 'offences recorded by the police (Number in the thousands)',
        position: 'bottom',
      },
      layout: {
        padding: {
          top: 10,
      }
    }
  }



    },



    data: {
       labels:countryNames,
      // would be nice to have a function here instead of hardcoding

    datasets: [{
       label:countryNames[0],
       data: ,
    }, {
       label:countryNames[1],
       data: year2003,
       hidden: true
    }, {
      label:countryNames[2],
      data: year2004,
      hidden: true

      }, {
      label:countryNames[3],
      data: year2005,
      hidden: true

      }, {
      label:countryNames[4],
      data: year2006,
      hidden: true

      }, {
      label:countryNames[5],
      data: year2007,
      hidden: true

      }, {
      label:countryNames[6],
      data: year2008,
      hidden: true

      }, {
      label:countryNames[7],
      data: year2009,
      hidden: true

      }, {
      label:countryNames[8],
      data: year2010,
      hidden: true

      }, {
      label:countryNames[9],
      data: year2011,
      hidden: true

      }, {
      label:countryNames[10],
      data: year2012,
      hidden: false

    }],
},
});

