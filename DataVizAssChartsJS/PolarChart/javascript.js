var ctx = document.getElementById('polarChartUS').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
                'United States',
                'People\'s Republic of China',
                'ROC (Taiwan)',
                'Great Britain',
                'Japan',
            ],
            datasets: [{
              label: 'Total Medals',
              data: [113, 88, 71, 65, 58],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              },
              title: {
                display: true,
                text: 'Total Medals by Country'
              }
            }
          }
        });
