var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: [
              'Gold',
              'Silver',
              'Bronze'
            ],
            datasets: [{
              label: 'US',
              data: [39, 41, 33],
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)'
            },
            {
              label: 'China',
              data: [38, 32, 18],
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(54, 162, 235)'
            },
            {
              label: 'ROC (Taiwan)',
              data: [20, 28, 23],
              fill: true,
              backgroundColor: 'rgba(51, 166, 38, 0.2)',
              borderColor: 'rgb(51, 166, 38)',
              pointBackgroundColor: 'rgb(51, 166, 38)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(51, 166, 38)'
            },
            {
              label: 'Great Britain',
              data: [22, 21, 22],
              fill: true,
              backgroundColor: 'rgba(255, 226, 0, 0.2)',
              borderColor: 'rgb(255, 226, 0)',
              pointBackgroundColor: 'rgb(255, 226, 0)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 226, 0)'
            },
            {
              label: 'Japan',
              data: [27, 14, 17],
              fill: true,
              backgroundColor: 'rgba(255, 94, 13, 0.2)',
              borderColor: 'rgb(255, 94, 13)',
              pointBackgroundColor: 'rgb(255, 94, 13)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 94, 13)'
            },
            ]
          },
          options: {
            responsive: true,
            plugins: {
            title: {
              display: true,
              text: 'Top Five Countries in Total Medals'
            },
          subtitle: {
              display: true,
              text: ''
          },
            elements: {
              line: {
                borderWidth: 3
              }
            }
          }
        }
        });
