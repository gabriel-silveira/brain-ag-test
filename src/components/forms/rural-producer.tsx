import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useParams} from 'react-router';
import BrazilStatesListBox from "../listboxes/brazil-states";
import {useDispatch, useSelector} from "react-redux";
import {createRuralProducer, updateRuralProducer} from "../../store/rural-producer/actions";
import {IRuralProducer} from "../../_interfaces/rural_producer";

function RuralProducerForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  const [ruralProducerData, setDetails] = useState<IRuralProducer>({
    document: "",
    producer_name: "",
    farm_name: "",
    city: "",
    state: "",
    farm_area: "",
    arable_area: "",
    vegetation_area: "",
    crops_planted: []
  });

  const {ruralProducer, ruralProducers}: {
    ruralProducer: IRuralProducer,
    ruralProducers: IRuralProducer[]
    // @ts-ignore
  } = useSelector(rootReducer => rootReducer.ruralProducerReducer);

  useEffect(() => {
    if (id) setDetails((prev) => ({...ruralProducer}));
  }, [id, ruralProducer]);

  const goHome = () => navigate('/');

  const submitRuralProducer = () => {
    if (id) {
      const updatedRuralProducers: IRuralProducer[] = [];

      let i = 0;

      for (const currentRuralProducer of ruralProducers) {
        if (i !== (Number(id) - 1)) {
          updatedRuralProducers.push(currentRuralProducer);
        } else {
          updatedRuralProducers.push(ruralProducerData);
        }

        i += 1;
      }

      dispatch(updateRuralProducer([...updatedRuralProducers]));
    } else {
      dispatch(createRuralProducer({...ruralProducerData}));
    }

    goHome();
  };

  const setRuralProducer = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setDetails((prev) => ({...prev, [name]: value}));
  };

  const changeBrazilState = (value: string) => {
    setDetails((prev) => ({...prev, state: value}));
  };

  const handleCropsPlanted = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, checked} = e.target;

    if (checked) {
      // add crop planted
      setDetails((prev) => ({
        ...prev,
        crops_planted: [...ruralProducerData.crops_planted, value],
      }));
    } else if (!checked) {
      const updatedCropsPlanted = [...ruralProducerData.crops_planted];

      updatedCropsPlanted.splice(updatedCropsPlanted.indexOf(value), 1);

      setDetails((prev) => ({
        ...prev,
        crops_planted: [...updatedCropsPlanted],
      }));
    }
  }

  return (
    <div className="card">
      <div className="flex-container rural-producer-form-first-row">
        <div className="flex-item">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            CPF / CNPJ
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
              type="text"
              name="document"
              required
              onChange={setRuralProducer}
              value={ruralProducerData.document}
            />
          </div>
        </div>

        <div className="flex-item">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Nome do produtor
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
              type="text"
              name="producer_name"
              required
              onChange={setRuralProducer}
              value={ruralProducerData.producer_name}
            />
          </div>
        </div>

        <div className="flex-item">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Nome da fazenda
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
              type="text"
              name="farm_name"
              required
              onChange={setRuralProducer}
              value={ruralProducerData.farm_name}
            />
          </div>
        </div>

        <div className="flex-item">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Cidade
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
              type="text"
              name="city"
              required
              onChange={setRuralProducer}
              value={ruralProducerData.city}
            />
          </div>
        </div>

        <div className="flex-item">
          <BrazilStatesListBox
            onChange={changeBrazilState}
          />
        </div>
      </div>

      <div className="flex-container mt-5">
        <div className="flex-item w-2 pr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Área total em hectares da fazenda
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
              type="text"
              name="farm_area"
              required
              onChange={setRuralProducer}
              value={ruralProducerData.farm_area}
            />
          </div>
        </div>

        <div className="flex-item w-2 pl-2 pr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Área agricultável em hectares
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
              type="text"
              name="arable_area"
              required
              onChange={setRuralProducer}
              value={ruralProducerData.arable_area}
            />
          </div>
        </div>

        <div className="flex-item w-2 pl-2 pr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Área de vegetação em hectares
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
              type="text"
              name="vegetation_area"
              required
              onChange={setRuralProducer}
              value={ruralProducerData.vegetation_area}
            />
          </div>
        </div>
      </div>

      <div className="flex-container mt-5">
        <div className="flex-item">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Culturas plantadas
          </label>

          <div className="mt-2 ml-2">
            <div className="cursor-pointer float-left mr-30">
              <input type="checkbox" id="soja" name="soja" value="Soja" onChange={handleCropsPlanted}/>
              <label htmlFor="soja">Soja</label>
            </div>

            <div className="cursor-pointer float-left mr-30">
              <input type="checkbox" id="milho" name="milho" value="Milho" onChange={handleCropsPlanted}/>
              <label htmlFor="milho">Milho</label>
            </div>

            <div className="cursor-pointer float-left mr-30">
              <input type="checkbox" id="algodao" name="algodao" value="Algodão" onChange={handleCropsPlanted}/>
              <label htmlFor="algodao">Algodão</label>
            </div>

            <div className="cursor-pointer float-left mr-30">
              <input type="checkbox" id="cafe" name="cafe" value="Café" onChange={handleCropsPlanted}/>
              <label htmlFor="cafe">Café</label>
            </div>

            <div className="cursor-pointer float-left">
              <input type="checkbox" id="cana" name="cana" value="Cana de Açúcar" onChange={handleCropsPlanted}/>
              <label htmlFor="cana">Cana de Açúcar</label>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-5"/>

      <div className="flex-container mt-5">
        <div className="flex-item w-2"></div>
        <div className="flex-item w-2"></div>
        <div className="flex-item w-3"></div>
        <div className="flex-item w-3"></div>

        <div className="flex-item w-1 pr-2">
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-3 py-1.5
            border border-gray-400 rounded shadow"
            onClick={goHome}
          >
            Cancelar
          </button>
        </div>

        <div className="flex-item w-1 pl-2">
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 font-semibold px-3 py-1.5
            leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={submitRuralProducer}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default RuralProducerForm;
