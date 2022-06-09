const data = [
  {
    month: "January",
    nett: 19000,
    gross: 21000,
    APV: 17000,
    UPT: 7.98,
  },
  {
    month: "February",
    nett: 17000,
    gross: 20000,
    APV: 17000,
    UPT: 7.98,
  },
  {
    month: "March",
    nett: 18000,
    gross: 22000,
    APV: 17000,
    UPT: 7.98,
  },
  {
    month: "April",
    nett: 16000,
    gross: 19000,
    APV: 17000,
    UPT: 7.98,
  },
  {
    month: "May",
    nett: 12000,
    gross: 14000,
    APV: 17000,
    UPT: 7.98,
  },
  {
    month: "June",
    nett: 20000,
    gross: 21000,
    APV: 17000,
    UPT: 7.98,
  },
];

function getNett(item) {
  return [item.nett];
}
function getGross(item) {
  return [item.gross];
}
function getDeductions(item) {
  return [item.gross - item.nett];
}

export const graphData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Nett",
      data: data.map(getNett),
      backgroundColor: "#37B04C",
      barThickness: 30,
    },
    {
      label: "Gross",
      data: data.map(getDeductions),
      backgroundColor: "#289E45",
      barThickness: 30,
    },
  ],
};

export const chartOptions = {
  plugins: {
    legend: {
      position: "bottom",
      align: "start",
      labels: {
        boxWidth: 7,
      },
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          let index = context.dataIndex;
          let label = context.dataset.label || '';
          
          if(label == "Nett") {
            label += ": " + context.parsed.y
          }
          else if(label == "Gross") {
            label += ": " + (data.map(getGross)[index])
          }
          return label;
        }
      }
    }
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
