import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Navbar from "../Navbar";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import s from "./PieChart.module.css";

const PieChart_1 = () => {
  const [carData, setCarData] = useState({ manufacturer: [], counts: [] });
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Users From",
        data: [],
      },
    ],
  });

  useEffect(() => {
    const loopData = [];
    for (let i = 0; i < 100000; i++) {
      const randomModel = faker.vehicle.model();
      const randomManufacturer = faker.vehicle.manufacturer();

      let data = {
        model: randomModel,
        manufacturer: randomManufacturer,
      };
      loopData.push(data);
    }

    const carInfo = {};
    loopData.forEach((data) => {
      const { manufacturer, model } = data;
      if (!carInfo[manufacturer]) {
        carInfo[manufacturer] = [];
      }
      carInfo[manufacturer].push(model);
    });

    const manufacturerModelCounts = Object.entries(carInfo).map((el) => {
      const [manufacturer, models] = el;
      console.log(models);
      return {
        manufacturer,
        modelCount: models.length,
      };
    });
    console.log(manufacturerModelCounts);

    const labels = manufacturerModelCounts.map((entry) => entry.manufacturer);
    const data = manufacturerModelCounts.map((entry) => entry.modelCount);

    setCarData({ manufacturer: labels, counts: data });
  }, []);

  useEffect(() => {
    setData({
      labels: carData.manufacturer,
      datasets: [
        {
          label: "Models",
          data: carData.counts,
          backgroundColor: [
            "#FFA07A",
            "#FA8072",
            "#E9967A",
            "	#F08080",
            "#CD5C5C",
            "#FF7F50",
            "#FF6347",
            "#EEE8AA",
            "#F0E68C",
            "#FFDAB9",
            "	#FFE4B5",
          ],
        },
      ],
    });
  }, [carData]);

  return (
    <div>
      <Navbar />
      <div className={s.parent}>
        <div>
          <p>Pie chart for their car models on the basis of their Car Maker</p>
          <p>hover the chart for the datas</p>
        </div>
        <div className={s.child}>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default PieChart_1;
