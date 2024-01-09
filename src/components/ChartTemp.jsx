import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LineChartTemp = ({ dataPoints }) => {
  // Extraction des heures et des températures
  const hours = dataPoints.map((point) => point.heure);
  const temperatures = dataPoints.map((point) => {
    // Enlever "°C" et convertir en nombre
    return Number(point.temperature.replace("°C", ""));
  });

  const chartContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "60%", // Largeur du graphique
    margin: "auto", // Centrer le graphique horizontalement
  };

  const data = {
    labels: hours,
    datasets: [
      {
        label: "Température (°C)",
        data: temperatures,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div style={chartContainerStyle}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartTemp;