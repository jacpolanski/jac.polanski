import React from "react";
import Container from "react-bootstrap/Container";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const generateRGBA = (a) => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgba = "rgb(" + r + "," + g + "," + b + "," + a + ")";
  return rgba;
};

const labels = [
  "Organizational skills",
  "Self-development",
  "Attention to detail",
  "Friendliness",
  "Communication skills",
  "Curiosity",
];

const skillsData = [73, 70, 60, 59, 61, 81];
const chartBackgroundColor = labels.map(() => generateRGBA(0.5));
const chartBorderColors = chartBackgroundColor.map((color) =>
  color.replace(/[^,]+(?=\))/, "1.0")
);

export const data = {
  labels: labels,
  datasets: [
    {
      label: "# of Importance",
      data: skillsData,
      backgroundColor: chartBackgroundColor,
      borderColor: chartBorderColors,
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "white",
        font: {
          size: 18,
          family: "Indie Flower",
        },
      },
    },
  },
  scales: {
    r: {
      max: 100,
      min: 0,
      ticks: {
        stepSize: 25,
        // textStrokeColor: "rgb(136,28,11)",
        color: "rgba(240, 240, 240, 0.5)",
        backdropColor: "rgb(47, 56, 62)",
      },
      grid: {
        color: "lightgreen",
      },
      angleLines: {
        color: "rgba(240, 240, 240,0.8)",
      },
      pointLabels: {
        color: "white",
        font: {
          size: 15,
        },
      },
    },
  },
};

function SkillsChart() {
  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <PolarArea data={data} options={options} className="polarChart" />
    </Container>
  );
}

export default SkillsChart;
