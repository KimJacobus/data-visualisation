import Chart from 'chart.js/auto';


// window.onload = getData();


const getData = async () => {

   const response = await fetch('https://canvasjs.com/services/data/datapoints.php');
    const data = await response.json();

    return data; 

};

var dataArr = ( await getData());

// getData().then((data) => { 

// return data;
   
// }
// );
 
var getlabels = [];
var getvalues = [];

for (let i = 0; i < dataArr.length; i++) {
    getlabels.push(dataArr[i][0])
    getvalues.push(dataArr[i][1])

}




console.log(getlabels);
console.log(getvalues);




//put into html 

var firstH1 = document.getElementsByTagName('h1')[0];

var container3 = document.createElement('div');

container3.setAttribute('class', 'chart-container');
firstH1.append(container3);
var getContainer3 = document.querySelector(".chart-container");

container3.setAttribute('style', 'position: relative; height: 50vh; width: 45vw,');

 var newCanvas3 = document.createElement('canvas');
 newCanvas3.setAttribute('id', 'realTime');


      getContainer3.append(newCanvas3);


// chart config


 let  tdchart3 = document.getElementById('realTime').getContext('2d');

 let  ArrChart3 = new Chart(tdchart3, {
    type: 'bar', 
    data: {

        labels: getlabels,
      // would be nice  have a function here instead of hardcoding

    datasets: [{
        label: 'shitbutt',
        data: getvalues

    }]
},
});

