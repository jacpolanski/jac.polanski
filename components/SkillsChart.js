import React from "react";
import Container from "react-bootstrap/Container";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const generateRGBA = (a) => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgba = "rgb(" + r + "," + g + "," + b + "," + a + ")";
  return rgba;
};

const backgroundColor = generateRGBA(0.5);
const borderColor = backgroundColor.replace(/[^,]+(?=\))/, "1.0");

const labels = [
  "Organizational skills",
  "Self-development",
  "Attention to detail",
  "Friendliness",
  "Communication skills",
  "Curiosity",
];

const skillsData = [73, 70, 60, 59, 61, 81];

export const data = {
  labels: labels,
  datasets: [
    {
      label: "Importance",
      data: skillsData,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    r: {
      max: 100,
      min: 0,
      ticks: {
        stepSize: 20,
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
          size: 18,
        },
      },
    },
  },
};

function SkillsChart() {
  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Radar
        data={data}
        options={options}
        style={{ maxWidth: "80vw", maxHeight: "80vh" }}
      />
    </Container>
  );
}

export default SkillsChart;
