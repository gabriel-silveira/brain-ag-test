import React from 'react';
import './styles.css';
import {IRuralProducer} from "../../../_interfaces/rural_producer";
import {useSelector} from "react-redux";

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

  return (
    <div className="flex-container w-full rural-producers-dashboard">
      <div className="flex-item text-center">
        <div className="card">
          <div className="number">{ruralProducers.length}</div>
          <div className="subtitle">Total de fazendas</div>
        </div>
      </div>

      <div className="flex-item text-center">
        <div className="card">
          <div className="number">{totalFarmsArea()}</div>
          <div className="subtitle">Área total das fazendas (ha)</div>
        </div>
      </div>

      <div className="flex-item">

      </div>

      <div className="flex-item">

      </div>

      <div className="flex-item">

      </div>
    </div>
  )
}

export default RuralProducersDashboard;
