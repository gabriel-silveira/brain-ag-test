import React, {useEffect} from 'react';
import RuralProducerForm from "../../components/forms/rural-producer";
import {setTitle} from "../../store/rural-producer/ruralProducerSlice";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";

function CreateRuralProducerPage() {
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(setTitle('Editar informações do produtor rural'));
    } else {
      dispatch(setTitle('Cadastrar produtor rural'));
    }
  }, [dispatch, id]);

  return (
    <RuralProducerForm/>
  )
}

export default CreateRuralProducerPage;
