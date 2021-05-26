var options = {
    series: [
      {
        name: " Total Study Hours ",
        data: [44, 55, 57, 40, 10, 30, 46, 60, 66,70,50,75],
      },
      
    ],
    chart: {
      type: "bar",
      height: 400,
      sparkline: {
        enabled: true, 
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["January","February", "March", "April", "May", "June", "July", "August", 
      "September", "October","November","December"],
    },
    yaxis: {
      title: {
        text: "(Hours)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val ;
        },
      },
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#apex1"), options);
  chart.render();
  
  // Sidebar Toggle Codes;
  
  var sidebarOpen = false;
  var sidebar = document.getElementById("sidebar");
  var sidebarCloseIcon = document.getElementById("sidebarIcon");
  
  function toggleSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add("sidebar_responsive");
      sidebarOpen = true;
    }
  }
  
  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove("sidebar_responsive");
      sidebarOpen = false;
    }
  }

  
  var options = {
    series: [79],
    chart: {
    height: 200,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '50%',
      }
    },
  },
  labels: ['Course 1'],
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();

  var options = {
    series: [84],
    chart: {
    height: 200,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '50%',
      }
    },
  },
  labels: ['Course 2'],
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();

  var options = {
    series: [42],
    chart: {
    height: 200,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '50%',
      }
    },
  },
  labels: ['Course 3'],
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();

  var options = {
    series: [28],
    chart: {
    height: 200,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '50%',
      }
    },
  },
  labels: ['Course 4'],
  };

  var chart = new ApexCharts(document.querySelector("#chart4"), options);
  chart.render();