var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#d42000",
                backgroundColor: "#ff9a88",
                borderWidth:2,

              }, {
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#ff8b00",
                backgroundColor: "#ffd199",
                borderWidth:2,

              }, {
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#2727cc",
                backgroundColor:"#a5a5ee",
                borderWidth:2,

              }, {
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#31b800",
                backgroundColor:"#9fff7d",
                borderWidth:2,

              }, {
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#fcf50f",
                backgroundColor:"#fefb9f",
                borderWidth:2,

              }, {
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#843ba3",
                backgroundColor:"#d0aae0",
                borderWidth:2,

              }, {
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#febb26",
                backgroundColor:"#ffe4a8",
                borderWidth:2,

              }, {
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#017cf3",
                backgroundColor:"#95cbff",
                borderWidth:2,

              }, {
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#d29ce3",
                backgroundColor:"#edd7f4",
                borderWidth:2,

              }

            ]
          },
          options: {
            plugins: {
              title: {
                  display: true,
                  text: 'Life expectancy and GDP per capita of the 10 largest countries by population',
                  font: {
                      size: 18
                  }
              },
              subtitle: {
                  display: true,
                  text: 'Life expectancy tends to be longer in countries with a higher GDP'
              }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life Expectancy'
                  }
              }
            }
          }
        });
