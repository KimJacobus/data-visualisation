import Chart from 'chart.js/auto';

var getlabels = [];
var getvalues = [];
var start = 0; 
var count = 0;

const getData = async () => {

   const response = await fetch('https://canvasjs.com/services/data/datapoints.php');
    const data = await response.json();
    console.log(`checking data every second, this is the ${count}nd check`, data);
    count++;
    return data; 

};

async function CallData() {

    var dataArr = ( await getData());
    
    getData().then((data) => { 
    return data;
    }
    );


if(start < 1) {
    for (let i = 0; i < dataArr.length; i++) {
        getlabels.push(dataArr[i][0])
        getvalues.push(dataArr[i][1])
    }
    start++;
}
else {
    for (let i = 0; i < dataArr.length; i++) {
        getlabels.pop(dataArr[i][0])
        getvalues.pop(dataArr[i][1])

        getlabels.push(dataArr[i][0])
        getvalues.push(dataArr[i][1])
    }
   }};

// CallData();




//put into html 

var firstH1 = document.getElementsByTagName('h1')[0];

var container3 = document.createElement('div');

container3.setAttribute('class', 'chart-container');
firstH1.append(container3);
var getContainer3 = document.querySelector(".chart-container");

container3.setAttribute('style', 'position: relative; height: 40vh; width: 45vw,');

 var newCanvas3 = document.createElement('canvas');
 newCanvas3.setAttribute('id', 'realTime');


      getContainer3.append(newCanvas3);



 let  tdchart3 = document.getElementById('realTime').getContext('2d');

 let  ArrChart3 = new Chart(tdchart3, {
    type: 'bar', 
    options: {
        plugins: {
        title: {
          display: true,
          text: 'Crime statistics',
          position : 'bottom'
        },
        layout: {
          padding: {
            top: 50,
        }
      }
    }
      },


    data: {
        labels: getlabels,

    datasets: [{
        label: 'shitbutt',
        data: getvalues

    }]
},
});


// setInterval(function CallChart(){
//     getData();
//     ArrChart3.data.datasets.data = getvalues;
//     ArrChart3.data.labels = getlabels;
//     ArrChart3.update('none');
//     CallData();
// }, 1000);

