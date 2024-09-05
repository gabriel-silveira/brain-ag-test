import React from 'react';
import {useNavigate} from "react-router-dom";
import BrazilStatesListBox from "../listboxes/brazil-states";
import {useDispatch} from "react-redux";
import {createRuralProducer} from "../../store/rural-producer/actions";

function RuralProducerForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goHome = () => navigate('/');

  const submitRuralProducer = () => {
    dispatch(createRuralProducer(
      {
        "document": 25889365000140,
        "producer_name": "Fulano de Tal",
        "farm_name": "Fazenda do Fulano",
        "city": "Salvador",
        "state": "Bahia",
        "farm_area": 230,
        "arable_area": 140,
        "vegetation_area": 190,
        "crops_planted": ["Cana de Açúcar", "Soja", "Café"]
      }));

    goHome();
  };

  return (
    <div className="card">
      <div className="flex-container rural-producer-form-first-row">
        <div className="flex-item">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            CPF / CNPJ
          </label>
          <div className="mt-2">
            <input
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex-item">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Nome do produtor
          </label>
          <div className="mt-2">
            <input
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex-item">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Nome da fazenda
          </label>
          <div className="mt-2">
            <input
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex-item">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Cidade
          </label>
          <div className="mt-2">
            <input
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex-item">
          <BrazilStatesListBox/>
        </div>
      </div>

      <div className="flex-container mt-5">
        <div className="flex-item w-2 pr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Área total em hectares da fazenda
          </label>
          <div className="mt-2">
            <input
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex-item w-2 pl-2 pr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Área agricultável em hectares
          </label>
          <div className="mt-2">
            <input
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex-item w-2 pl-2 pr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Área de vegetação em hectares
          </label>
          <div className="mt-2">
            <input
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"
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
              <input type="checkbox" id="soja" name="soja" value="Soja"/>
              <label htmlFor="soja">Soja</label>
            </div>

            <div className="cursor-pointer float-left mr-30">
              <input type="checkbox" id="milho" name="milho" value="Milho"/>
              <label htmlFor="milho">Milho</label>
            </div>

            <div className="cursor-pointer float-left mr-30">
              <input type="checkbox" id="algodao" name="algodao" value="Algodão"/>
              <label htmlFor="algodao">Algodão</label>
            </div>

            <div className="cursor-pointer float-left mr-30">
              <input type="checkbox" id="cafe" name="cafe" value="Café"/>
              <label htmlFor="cafe">Café</label>
            </div>

            <div className="cursor-pointer float-left">
              <input type="checkbox" id="cana" name="cana" value="Cana de Açúcar"/>
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
