import React, {useEffect} from 'react';
import {showCreateToaster, showEditToaster} from "../../store/rural-producer/actions";
import {useDispatch} from "react-redux";

function Toaster(props: {
  message: string,
  type: string,
  onClose?: () => void,
  timeout?: number,
} = {
  message: 'Minha mensagem',
  type: 'positive',
  onClose: undefined,
  timeout: undefined,
}) {
  const { message, type, onClose, timeout } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (timeout && onClose) {
      setTimeout(() => {
        onClose();
      }, timeout);
    }
  }, [timeout, onClose]);

  // unset on unmount
  useEffect(() => {
    return () => {
      dispatch(showCreateToaster(false));
      dispatch(showEditToaster(false));
    };
  }, [dispatch]);

  return (
    <div id="toaster-wrapper">
      <div id="toaster" className={type}>{ message }</div>
    </div>
  )
}

export default Toaster;
