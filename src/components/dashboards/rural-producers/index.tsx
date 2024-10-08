import React from 'react';
import './styles.css';
import {useSelector} from "react-redux";
import Chart from "react-apexcharts";
import type {RootState} from "../../../store/store";

function RuralProducersDashboard() {
  const ruralProducers = useSelector((state: RootState) => state.ruralProducerReducer.ruralProducers);

  function totalFarmsArea() {
    let totalFarmsArea = 0;
    for (const ruralProducer of ruralProducers) {
      totalFarmsArea += Number(ruralProducer.farm_area);
    }
    return totalFarmsArea;
  }

  function statesChartData() {
    const totals: { [key: string]: number } = {};
    let grandTotal = 0;
    const series: number[] = [];
    const labels: string[] = [];

    for (const ruralProducer of ruralProducers) {
      if (!totals[ruralProducer.state]) totals[ruralProducer.state] = 0;
      totals[ruralProducer.state] += 1;
    }

    for (const key of Object.keys(totals)) {
      grandTotal += totals[key];
    }

    for (const key of Object.keys(totals)) {
      const percentage = Number(((totals[key] / grandTotal) * 100).toFixed(0));
      series.push(percentage);
      labels.push(key);
    }

    return {
      options: {
        plotOptions: {
          pie: {
            expandOnClick: true
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val: number) {
            return val.toFixed(0) + "%"
          },
          offsetX: 100,
          offsetY: 100,
        },
        legend: {
          show: true,
          formatter: function(label: string, opts: { seriesIndex: number }) {
            return labels[opts.seriesIndex];
          }
        }
      },
      series,
      labels,
    };
  }

  function cultureData() {
    const totals: { [key: string]: number } = {};
    let grandTotal = 0;

    const series: number[] = [];
    const labels: string[] = [];

    for (const ruralProducer of ruralProducers) {
      for (const crop_planted of ruralProducer.crops_planted) {
        if (!totals[crop_planted]) totals[crop_planted] = 1;
        else totals[crop_planted] += 1;
      }
    }

    for (const key of Object.keys(totals)) {
      grandTotal += totals[key];
    }

    for (const key of Object.keys(totals)) {
      const percentage = Number(((totals[key] / grandTotal) * 100).toFixed(0));
      series.push(percentage);
      labels.push(key);
    }

    return {
      options: {
        plotOptions: {
          pie: {
            expandOnClick: true
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val: number) {
            return val.toFixed(0) + "%"
          },
          offsetX: 100,
          offsetY: 100,
        },
        legend: {
          show: true,
          formatter: function(label: string, opts: { seriesIndex: number }) {
            return labels[opts.seriesIndex];
          }
        }
      },
      series,
      labels,
    };
  }

  function arableAreaData() {
    let totalArable = 0;
    let totalVegetation = 0;

    for (const ruralProducer of ruralProducers) {
      totalArable += Number(ruralProducer.arable_area);
      totalVegetation += Number(ruralProducer.vegetation_area);
    }

    const labels = ['Área agric.', 'Vegetação'];

    return {
      options: {
        plotOptions: {
          pie: {
            expandOnClick: true
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val: number) {
            return val.toFixed(0) + "%"
          },
          offsetX: 100,
          offsetY: 100,
        },
        legend: {
          show: true,
          formatter: function(label: string, opts: { seriesIndex: number }) {
            return labels[opts.seriesIndex];
          }
        }
      },
      series: [totalArable, totalVegetation],
      labels,
    };
  }

  return (
    <div className="flex-container w-full rural-producers-dashboard">
      <div className="flex-item text-center" style={{width:"15%"}}>
        <div className="card">
          <div>
            <div className="number w-full">{ruralProducers.length}</div>
            <div className="subtitle w-full">Total de fazendas</div>
          </div>
        </div>
      </div>

      <div className="flex-item text-center" style={{width:"15%"}}>
        <div className="card">
          <div>
            <div className="number">{totalFarmsArea()}</div>
            <div className="subtitle">Área total das fazendas (ha)</div>
          </div>
        </div>
      </div>

      <div className="flex-item" style={{width: "30%"}}>
        <Chart
          options={statesChartData().options}
          series={statesChartData().series}
          type="pie"
        />
      </div>

      <div className="flex-item" style={{width:"30%"}}>
        <Chart
          options={cultureData().options}
          series={cultureData().series}
          type="pie"
        />
      </div>

      <div className="flex-item" style={{width:"30%"}}>
        <Chart
          options={arableAreaData().options}
          series={arableAreaData().series}
          type="pie"
        />
      </div>
    </div>
  )
}

export default RuralProducersDashboard;
