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


function getYears(index) {

var var2 = countries[`tr-${index}`].join('/').replaceAll(',', '.').split("/");

return var2; 
}

var Years0 = getYears(2)
var Years1 = getYears(3)
var Years2 = getYears(4)
var Years3 = getYears(5)
var Years4 = getYears(6)
var Years5 = getYears(7)
var Years6 = getYears(8)
var Years7 = getYears(9)
var Years8 = getYears(10)
var Years9 = getYears(11)
var Years10 = getYears(12)
var Years11 = getYears(13)
var Years12 = getYears(14)
var Years13 = getYears(15)
var Years14 = getYears(16)
var Years15 = getYears(17)
var Years16 = getYears(18)
var Years17 = getYears(19)
var Years18 = getYears(20)
var Years19 = getYears(21)
var Years20 = getYears(22)
var Years21 = getYears(23)
var Years22 = getYears(24)
var Years23 = getYears(25)
var Years24 = getYears(26)
var Years25 = getYears(27)
var Years26 = getYears(28)
var Years27 = getYears(29)
var Years28 = getYears(30)
var Years29 = getYears(31)
var Years30 = getYears(32)
var Years31 = getYears(33)
var Years32 = getYears(34)
var Years33 = getYears(35)
var Years34 = getYears(36)

console.log(Years34);


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
       labels: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
      // would be nice to have a function here instead of hardcoding

    datasets: [{
       label:countryNames[0],
       data: Years0,
       hidden: false
    }, {
       label:countryNames[1],
       data: Years1,
       hidden: true
    }, {
      label:countryNames[2],
      data: Years2,
      hidden: true

      }, {
      label:countryNames[3],
      data: Years3,
      hidden: true

      }, {
      label:countryNames[4],
      data: Years4,
      hidden: true

      }, {
      label:countryNames[5],
      data: Years5,
      hidden: true

      }, {
      label:countryNames[6],
      data: Years6,
      hidden: true

      }, {
      label:countryNames[7],
      data: Years7,
      hidden: true

      }, {
      label:countryNames[8],
      data: Years8,
      hidden: true

      }, {
      label:countryNames[9],
      data: Years9,
      hidden: true

      }, {
      label:countryNames[10],
      data: Years10,
      hidden: true
      }, {
      label:countryNames[11],
      data: Years11,
      hidden: true
      }, {
      label:countryNames[12],
      data: Years12,
      hidden: true
      }, {
      label:countryNames[13],
      data: Years13,
      hidden: true
      }, {
      label:countryNames[14],
      data: Years14,
      hidden: true
      }, {
      label:countryNames[15],
      data: Years15,
      hidden: true
      }, {
      label:countryNames[16],
      data: Years16,
      hidden: true
      }, {
      label:countryNames[17],
      data: Years17,
      hidden: true
      }, {
      label:countryNames[18],
      data: Years18,
      hidden: true
      }, {
      label:countryNames[19],
      data: Years19,
      hidden: true
      }, {
      label:countryNames[20],
      data: Years20,
      hidden: true
      }, {
      label:countryNames[21],
      data: Years21,
      hidden: true
      }, {
      label:countryNames[22],
      data: Years22,
      hidden: true
      }, {
      label:countryNames[23],
      data: Years23,
      hidden: true
      }, {
      label:countryNames[24],
      data: Years24,
      hidden: true
      }, {
      label:countryNames[25],
      data: Years25,
      hidden: true
      }, {
      label:countryNames[26],
      data: Years26,
      hidden: true
      }, {
      label:countryNames[27],
      data: Years27,
      hidden: true
      }, {
      label:countryNames[28],
      data: Years28,
      hidden: true
      }, {
      label:countryNames[29],
      data: Years29,
      hidden: true
      }, {
      label:countryNames[30],
      data: Years30,
      hidden: true
      }, {
      label:countryNames[31],
      data: Years31,
      hidden: true
      }, {
      label:countryNames[32],
      data: Years32,
      hidden: true
      }, {
      label:countryNames[33],
      data: Years33,
      hidden: true
      }, {
      label:countryNames[34],
      data: Years34,
      hidden: true
      },
     
    ]},

});

