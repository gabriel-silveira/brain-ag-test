import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useParams} from 'react-router';
import BrazilStatesListBox from "../listboxes/brazil-states";
import {useDispatch, useSelector} from "react-redux";
import {createRuralProducer, updateRuralProducer} from "../../store/rural-producer/actions";
import {IRuralProducer} from "../../_interfaces/rural_producer";
import CNPJInput from "../inputs/cnpj";
import Toaster from "../toaster";

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

  const [validations, setValidations] = useState<{
    [key: string]: boolean,
  }>({
    document: false,
    producer_name: false,
    farm_name: false,
    city: false,
    state: false,
    farm_area: false,
    arable_area: false,
    vegetation_area: false,
    crops_planted: false,
  });

  const [invalidDocument, setInvalidDocument] = useState(false);
  const [invalidAreas, setInvalidAreas] = useState(false);

  const {ruralProducer, ruralProducers}: {
    ruralProducer: IRuralProducer,
    ruralProducers: IRuralProducer[]
    // @ts-ignore
  } = useSelector(rootReducer => rootReducer.ruralProducerReducer);

  useEffect(() => {
    if (id) setDetails((prev) => ({...ruralProducer}));
  }, [id, ruralProducer]);

  function goHome() {
    navigate('/');
  }

  function checkDocumentFormat() {
    if (ruralProducerData.document === '') return true;

    if (ruralProducerData.document.length !== 14 && ruralProducerData.document.length !== 18) {
      setValidations((prev) => ({...prev, document: true}));
      setInvalidDocument(() => true);

      return false;
    }

    return true;
  }

  function validWorkableArea() {
    const { farm_area, arable_area, vegetation_area } = ruralProducerData;
    if (!arable_area || !vegetation_area || !farm_area) return false;

      if (Number(arable_area) + Number(vegetation_area) <= Number(farm_area)) return true;

    setValidations((prev) => ({...prev, arable_area: true}));
    setValidations((prev) => ({...prev, vegetation_area: true}));
    setInvalidAreas(() => true);

    return false;
  }

  function validateFields() {
    setInvalidDocument(() => false);
    setInvalidAreas(() => false);
    let hasInvalidField = false;

    for (const key of Object.keys(ruralProducerData)) {
      if (key === 'crops_planted') {
        if (!ruralProducerData[key].length) {
          hasInvalidField = true;

          setValidations((prev) => ({...prev, crops_planted: true}));
        } else {
          setValidations((prev) => ({...prev, crops_planted: false}));
        }
      } else {
        // @ts-ignore
        if (!ruralProducerData[key]) {
          hasInvalidField = true;

          setValidations((prev) => ({...prev, [key]: true}));
        } else {
          setValidations((prev) => ({...prev, [key]: false}));
        }
      }
    }

    if (!checkDocumentFormat()) return false;

    if (!validWorkableArea()) return false;

    return !hasInvalidField;
  }

  function submitRuralProducer() {
    if (validateFields()) {
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
    }
  }

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

  function setDocument(value: string) {
    setDetails((prev) => ({
      ...prev,
      document: value,
    }));
  }

  return (
    <div className="card">
      <div className="flex-container rural-producer-form-first-row">
        <div className="flex-item">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            CPF / CNPJ
          </label>
          <div className="mt-2">
            <CNPJInput
              value={ruralProducerData.document}
              error={validations.document}
              onChange={($event) => setDocument($event)}
            />
            {validations.document ? (<div className="invalidField">{invalidDocument ? 'Documento inválido' : 'Informe o CPF / CNPJ'}</div>) : ''}
          </div>
        </div>

        <div className="flex-item">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Nome do produtor
          </label>
          <div className="mt-2">
            <input
              className={(validations.producer_name ? "error" : "") + " block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"}
              type="text"
              name="producer_name"
              required
              onChange={($event) => setRuralProducer($event)}
              value={ruralProducerData.producer_name}
            />
            {validations.producer_name ? (<div className="invalidField">Informe o nome do produtor</div>) : ''}
          </div>
        </div>

        <div className="flex-item">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Nome da fazenda
          </label>
          <div className="mt-2">
            <input
              className={(validations.farm_name ? "error" : "") + " block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"}
              type="text"
              name="farm_name"
              required
              onChange={($event) => setRuralProducer($event)}
              value={ruralProducerData.farm_name}
            />
            {validations.farm_name ? (<div className="invalidField">Informe o nome da fazenda</div>) : ''}
          </div>
        </div>

        <div className="flex-item">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Cidade
          </label>
          <div className="mt-2">
            <input
              className={(validations.city ? "error" : "") + " block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"}
              type="text"
              name="city"
              required
              onChange={($event) => setRuralProducer($event)}
              value={ruralProducerData.city}
            />
            {validations.city ? (<div className="invalidField">Informe a cidade</div>) : ''}
          </div>
        </div>

        <div className="flex-item">
          <BrazilStatesListBox
            onChange={($event) => changeBrazilState($event)}
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
              className={(validations.farm_area ? "error" : "") + " block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"}
              type="text"
              name="farm_area"
              required
              onChange={($event) => setRuralProducer($event)}
              value={ruralProducerData.farm_area}
            />
            {validations.farm_area ? (<div className="invalidField">Informe a área total</div>) : ''}
          </div>
        </div>

        <div className="flex-item w-2 pl-2 pr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Área agricultável em hectares
          </label>
          <div className="mt-2">
            <input
              className={(validations.arable_area ? "error" : "") + " block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"}
              type="text"
              name="arable_area"
              required
              onChange={($event) => setRuralProducer($event)}
              value={ruralProducerData.arable_area}
            />
            {validations.arable_area ? (<div className="invalidField">Informe a área agricultável</div>) : ''}
          </div>
        </div>

        <div className="flex-item w-2 pl-2 pr-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Área de vegetação em hectares
          </label>
          <div className="mt-2">
            <input
              className={(validations.vegetation_area ? "error" : "") + " block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"}
              type="text"
              name="vegetation_area"
              required
              onChange={($event) => setRuralProducer($event)}
              value={ruralProducerData.vegetation_area}
            />
            {validations.vegetation_area ? (<div className="invalidField">Informe a área de vegetação</div>) : ''}
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
              <input
                type="checkbox"
                id="soja"
                name="soja"
                value="Soja"
                onChange={($event) => handleCropsPlanted($event)}
              />
              <label htmlFor="soja">Soja</label>
            </div>

            <div className="cursor-pointer float-left mr-30">
              <input
                type="checkbox"
                id="milho"
                name="milho"
                value="Milho"
                onChange={($event) => handleCropsPlanted($event)}
              />
              <label htmlFor="milho">Milho</label>
            </div>

            <div className="cursor-pointer float-left mr-30">
              <input
                type="checkbox"
                id="algodao"
                name="algodao"
                value="Algodão"
                onChange={($event) => handleCropsPlanted($event)}
              />
              <label htmlFor="algodao">Algodão</label>
            </div>

            <div className="cursor-pointer float-left mr-30">
              <input
                type="checkbox"
                id="cafe"
                name="cafe"
                value="Café"
                onChange={($event) => handleCropsPlanted($event)}
              />
              <label htmlFor="cafe">Café</label>
            </div>

            <div className="cursor-pointer float-left">
              <input
                type="checkbox"
                id="cana"
                name="cana"
                value="Cana de Açúcar"
                onChange={($event) => handleCropsPlanted($event)}
              />
              <label htmlFor="cana">Cana de Açúcar</label>
            </div>
          </div>
        </div>
      </div>
      <div>{validations.crops_planted ? (<div className="invalidField">Informe as culturas plantadas</div>) : ''}</div>

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
            onClick={() => goHome()}
          >
            Cancelar
          </button>
        </div>

        <div className="flex-item w-1 pl-2">
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 font-semibold px-3 py-1.5
            leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => submitRuralProducer()}
          >
            Cadastrar
          </button>
        </div>
      </div>

      {invalidAreas ? (
        <Toaster
          type="negative"
          message="A soma de área agrícultável e vegetação, não deverá ser maior que a área total da fazenda."
        />
      ) : ('')}
    </div>
  )
}

export default RuralProducerForm;
