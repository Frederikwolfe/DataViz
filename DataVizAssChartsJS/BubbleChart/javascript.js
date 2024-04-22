var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bubble',
          data: {
            datasets: [{
                data: [
                  {x: 33, y: 41, r: 39},
                ],
                label: "United States",
                borderColor: "#d42000",
                backgroundColor: "#ff9a88",
                borderWidth:2,

              }, {
                data: [
                  {x: 18, y: 32, r: 38},
                ],
                label: "People's Republic of China",
                borderColor: "#ff8b00",
                backgroundColor: "#ffd199",
                borderWidth:2,

              }, {
                data: [
                {x: 17, y: 14, r: 27},
                ],
                label: "Japan",
                borderColor: "#2727cc",
                backgroundColor:"#a5a5ee",
                borderWidth:2,

              }, {
                data: [
                {x: 22, y: 21, r: 22},
                ],
                label: "Great Britain",
                borderColor: "#31b800",
                backgroundColor:"#9fff7d",
                borderWidth:2,

              }, {
                data: [
                {x: 23, y: 28, r: 20},
                ],
                label: "ROC (Taiwan)",
                borderColor: "#fcf50f",
                backgroundColor:"#fefb9f",
                borderWidth:2,

              }, {
                data: [
                {x: 22, y: 7, r: 17},
                ],
                label: "Australia",
                borderColor: "#843ba3",
                backgroundColor:"#d0aae0",
                borderWidth:2,

              }, {
                data: [
                {x: 14, y: 12, r: 10},
                ],
                label: "Netherlands",
                borderColor: "#febb26",
                backgroundColor:"#ffe4a8",
                borderWidth:2,

              }, {
                data: [
                {x: 11, y: 12, r: 10},
                ],
                label: "France",
                borderColor: "#017cf3",
                backgroundColor:"#95cbff",
                borderWidth:2,

              }, {
                data: [
                {x: 16, y: 11, r: 10},
                ],
                label: "Germany",
                borderColor: "#d29ce3",
                backgroundColor:"#edd7f4",
                borderWidth:2,

              }

            ]
          },
          options: {
            aspectRatio: 1,
            plugins: {
              title: {
                  display: true,
                  text: 'Medals at the 2020 Tokyo Olympics',
                  font: {
                      size: 18
                  }
              },
              subtitle: {
                  display: true,
                  text: 'Gold, Silver, and Bronze Medals by the Top 9 Countries at the 2020 Tokyo Olympics.'
              },
              legend: {
                  display: true,

              }
            },
            scales: {
              y: {
                max: 45,
                title: {
                  display: true,
                  text: 'Silver Medals'
                }
              },
              x: {
                  max: 45,
                  title: {
                      display: true,
                      text: 'Bronze Medals'
                  }
              }
            }
          }
        });
