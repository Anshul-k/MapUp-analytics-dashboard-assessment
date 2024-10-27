export const pieOptions = {
  animation: {
    animateRotate: true,
    animateScale: true,
    duration: 1500,
    easing: "easeOutCirc",
  },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 32);
          size = size > 10 ? 10 : size;
          return {
            weight: "bold",
            size: size,
          };
        },
        color: "white",
        padding: 10,
        usePointStyle: true,
      },
    },
    datalabels: {
      color: "#fff",
      formatter: (value) => {
        return `${value}`;
      },
      font: function (context) {
        var width = context.chart.width;
        var size = Math.round(width / 32);
        size = size > 12 ? 12 : size;
        return {
          weight: "bold",
          size: size,
        };
      },
      anchor: "center",
      align: "center",
    },
  },
};

export const barOptions = {
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 32);
          size = size > 10 ? 10 : size;
          return {
            weight: "bold",
            size: size,
          };
        },
        color: "white",
      },
    },
    datalabels: {
      color: "#fff",
      anchor: "end",
      align: "top",
      offset: -5,
      font: function (context) {
        var width = context.chart.width;
        var size = Math.round(width / 32);
        size = size > 10 ? 10 : size;
        return {
          weight: "bold",
          size: size,
        };
      },
      formatter: (value) => {
        return `${value}`;
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Manufacturers",
        color: "white",
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 32);
          size = size > 12 ? 12 : size;
          return {
            weight: "bold",
            size: size,
          };
        },
      },
      ticks: {
        color: "white",
      },
    },
    y: {
      title: {
        display: true,
        text: "Number of Vehicles",
        color: "white",
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 32);
          size = size > 12 ? 12 : size;
          return {
            weight: "bold",
            size: size,
          };
        },
      },
      ticks: {
        color: "white",
      },
    },
  },
  animation: {
    delay: (context) => {
      let delay = 0;
      if (context.type === "data" && context.mode === "default") {
        delay = context.dataIndex * 50 + context.datasetIndex * 50;
      }
      return delay;
    },
  },
};

export const histogramOptions = {
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 32);
          size = size > 10 ? 10 : size;
          return {
            weight: "bold",
            size: size,
          };
        },
        color: "white",
      },
    },
    datalabels: {
      display: true,
      color: "#fff",
      font: function (context) {
        var width = context.chart.width;
        var size = Math.round(width / 32);
        size = size > 12 ? 12 : size;
        return {
          weight: "bold",
          size: size,
        };
      },
      anchor: "end",
      align: "top",
      offset: -5,
      formatter: (value) => `${value}`,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Electric Range (miles)",
        color: "white",
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 32);
          size = size > 12 ? 12 : size;
          return {
            weight: "bold",
            size: size,
          };
        },
      },
      ticks: {
        color: "white",
      },
    },
    y: {
      title: {
        display: true,
        text: "Number of Vehicles",
        color: "white",
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 32);
          size = size > 12 ? 12 : size;
          return {
            weight: "bold",
            size: size,
          };
        },
      },
      ticks: {
        color: "white",
      },
    },
  },
  animation: {
    delay: (context) => {
      let delay = 0;
      if (context.type === "data" && context.mode === "default") {
        delay = context.dataIndex * 300 + context.datasetIndex * 100;
      }
      return delay;
    },
  },
};

export const lineOptions = {
  responsive: true,
  animation: {
    duration: 1000,
    delay: (context) => context.dataIndex * 150,
    loop: false,

    animations: {
      y: {
        from: 0,
        delay: (context) => context.dataIndex * 50,
        duration: 100,
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
      labels: {
        font: {
          size: 10,
          weight: "bold",
        },
        color: "white",
      },
    },
    datalabels: {
      color: "#fff",
      font: function (context) {
        var width = context.chart.width;
        var size = Math.round(width / 32);
        size = size > 12 ? 12 : size;
        return {
          weight: "bold",
          size: size,
        };
      },
      anchor: "end",
      align: "top",
      offset: -5,
      formatter: (value) => `${value}`,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Year",
        color: "white",
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 32);
          size = size > 12 ? 12 : size;
          return {
            weight: "bold",
            size: size,
          };
        },
      },
      ticks: {
        color: "white",
      },
    },
    y: {
      title: {
        display: true,
        text: "Number of Registrations",
        color: "white",
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 32);
          size = size > 12 ? 12 : size;
          return {
            weight: "bold",
            size: size,
          };
        },
      },
      ticks: {
        color: "white",
      },
    },
  },
};
