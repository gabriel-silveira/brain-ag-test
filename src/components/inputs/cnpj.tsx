import React, {useEffect, useState} from 'react';
import {CNPJ, CPF, onlyNumbers} from "../../services/data-transform";

function CNPJInput(props: {
  value: string,
  error: boolean,
  onChange: (value: string) => void,
}) {
  const {value, error, onChange} = props;

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(() => (value));
  }, [value]);

  function updateInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    const {value: newValue} = e.target;

    setInputValue(() => (newValue));

    onChange(newValue);
  }

  function removeFormat() {
    const noFormat = onlyNumbers(inputValue);
    setInputValue(() => (noFormat));
    props.onChange(noFormat);
  }

  function formatDocument() {
    if (!inputValue.includes('.') && !inputValue.includes('/') && !inputValue.includes('-')) {
      if (inputValue.length === 11) {
        const formattedCPF = CPF(inputValue);
        setInputValue(() => (formattedCPF));
        props.onChange(formattedCPF);
      } else if (inputValue.length === 14) {
        const formattedCNPJ = CNPJ(inputValue);
        setInputValue(() => (formattedCNPJ));
        props.onChange(formattedCNPJ);
      }
    }
  }

  return (
    <input
      className={(error ? "error" : "") + " block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6"}
      type="text"
      id="document"
      name="document"
      required
      maxLength={18}
      value={inputValue}
      onChange={($event) => updateInputValue($event)}
      onFocus={() => removeFormat()}
      onBlur={() => formatDocument()}
    />
  )
}

export default CNPJInput;
