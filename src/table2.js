import Chart from 'chart.js/auto';



var countries2 = {}

var table2 = document.getElementById('table2');

for (let trindex = 2; trindex < 30; trindex++) {

      var trtags2 = table2.querySelector(`tr:nth-child(${trindex})`);
      var tdtags2 = trtags2.querySelectorAll('td');
      var getinnerHTML = [];

      for (let i = 0; i < tdtags2.length; i++) {
       getinnerHTML.push(tdtags2[i].innerHTML);
}
      countries2[`tr-${trindex}`] = getinnerHTML;
}



let countryNames2 = Object.values(countries2).map(country => country.shift());
countryNames2[6] = "England and Wales(UK)";




// table 2



// get years

function getYears() {

var var1 = Object.values(countries2).map(firstval => firstval.shift());
var var2 = var1.join('/').replaceAll(',', '.').split("/");

return var2; 
}

var yearHomicide2007 = getYears();
var yearHomicide2010 = getYears();





//put into html 

var Title2 = document.getElementById('Homicides');

var container2 = document.createElement('div');
container2.setAttribute('class', 'chart-container2');
Title2.append(container2);
var getContainer2 = document.querySelector(".chart-container2");


container2.setAttribute('style', 'position: relative; width: 45vw');

 var newCanvas2 = document.createElement('canvas');
 newCanvas2.setAttribute('id', 'homicideChart');


      getContainer2.append(newCanvas2);


var miniTitle2 = table2.getElementsByTagName('caption')[0];
      miniTitle2.remove();


// chart config



 let  tdchart2 = document.getElementById('homicideChart').getContext('2d');

 let  ArrChart2 = new Chart(tdchart2, {
    type: 'bar', 

    options: {
      plugins: {
      title: {
        display: true,
        text: 'Prison population (per 100,000 inhabitants)'
      },
      layout: {
        padding: {
          top: 20,
      }
    }
  }



    },


    data: {
       labels:countryNames2,
    datasets: [{
       label:'2007-09',
       data: yearHomicide2007,
    }, {
       label:'2010-12',
       data: yearHomicide2010,
    }
    ] 
},




});


