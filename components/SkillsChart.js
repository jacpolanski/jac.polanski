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
const backgroundColor = labels.map(() => generateRGBA(0.8));

export const data = {
  labels: labels,
  datasets: [
    {
      label: "# of Importance",
      data: skillsData,
      backgroundColor: backgroundColor,
      borderWidth: 2,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      labels: {
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
      <PolarArea
        data={data}
        options={options}
        style={{ maxWidth: "50vw", maxHeight: "50vh" }}
      />

    </Container>
  );
}

export default SkillsChart;
