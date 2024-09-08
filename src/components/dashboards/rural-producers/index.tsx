import React from 'react';
import './styles.css';
import {IRuralProducer} from "../../../_interfaces/rural_producer";
import {useSelector} from "react-redux";
import Chart from "react-apexcharts";

function RuralProducersDashboard() {
  const {ruralProducers}: {
    ruralProducers: IRuralProducer[],
    // @ts-ignore
  } = useSelector(rootReducer => rootReducer.ruralProducerReducer);

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

  function arableAreaData() {
    let totalArable = 0;
    let totalVegetation = 0;

    for (const ruralProducer of ruralProducers) {
      console.log(Number(ruralProducer.arable_area), Number(ruralProducer.vegetation_area));
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
      <div className="flex-item text-center" style={{width:"20%"}}>
        <div className="card">
          <div className="number">{ruralProducers.length}</div>
          <div className="subtitle">Total de fazendas</div>
        </div>
      </div>

      <div className="flex-item text-center" style={{width:"20%"}}>
        <div className="card">
          <div className="number">{totalFarmsArea()}</div>
          <div className="subtitle">Área total das fazendas (ha)</div>
        </div>
      </div>

      <div className="flex-item" style={{width:"30%"}}>
        <Chart
          options={statesChartData().options}
          series={statesChartData().series}
          type="pie"
          height="280"
        />
      </div>

      <div className="flex-item" style={{width:"30%"}}>

      </div>

      <div className="flex-item" style={{width:"30%"}}>
        <Chart
          options={arableAreaData().options}
          series={arableAreaData().series}
          type="pie"
          height="280"
        />
      </div>
    </div>
  )
}

export default RuralProducersDashboard;
