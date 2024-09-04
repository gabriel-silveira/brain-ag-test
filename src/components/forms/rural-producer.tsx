import React from 'react';
import {useState} from 'react';
import {Label, Listbox, ListboxButton, ListboxOption, ListboxOptions} from '@headlessui/react';
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid';

const people = [
  {name: "Acre", acronym: "AC"},
  {name: "Alagoas", acronym: "AL"},
  {name: "Amapá", acronym: "AP"},
  {name: "Amazonas", acronym: "AM"},
  {name: "Bahia", acronym: "BA"},
  {name: "Ceará", acronym: "CE"},
  {name: "Distrito Federal", acronym: "DF"},
  {name: "Espírito Santo", acronym: "ES"},
  {name: "Goiás", acronym: "GO"},
  {name: "Maranhão", acronym: "MA"},
  {name: "Mato Grosso", acronym: "MT"},
  {name: "Mato Grosso do Sul", acronym: "MS"},
  {name: "Minas Gerais", acronym: "MG"},
  {name: "Pará", acronym: "PA"},
  {name: "Paraíba", acronym: "PB"},
  {name: "Paraná", acronym: "PR"},
  {name: "Pernambuco", acronym: "PE"},
  {name: "Piauí", acronym: "PI"},
  {name: "Rio de Janeiro", acronym: "RJ"},
  {name: "Rio Grande do Norte", acronym: "RN"},
  {name: "Rio Grande do Sul", acronym: "RS"},
  {name: "Rondônia", acronym: "RO"},
  {name: "Roraima", acronym: "RR"},
  {name: "Santa Catarina", acronym: "SC"},
  {name: "São Paulo", acronym: "SP"},
  {name: "Sergipe", acronym: "SE"},
  {name: "Tocantins", acronym: "TO"},
];

function RuralProducerForm() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div>
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
          <Listbox value={selected} onChange={setSelected}>
            <Label className="block text-sm font-medium leading-6 text-gray-900">Estado</Label>

            <div className="relative mt-2">
              <ListboxButton
                className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10
                text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none
                focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
              >
                <span className="flex items-center">
                  <span className="ml-1 block truncate">{selected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400"/>
                </span>
              </ListboxButton>

              <ListboxOptions
                transition
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
              >
                {people.map((person) => (
                  <ListboxOption
                    key={person.acronym}
                    value={person}
                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                  >
                    <div className="flex items-center">
                      <span className="ml-1 block truncate font-normal group-data-[selected]:font-semibold">
                        {person.name}
                      </span>
                    </div>

                    <span
                      className="absolute inset-y-0 right-0 flex items-center pr-4
                      text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden"
                    >
                      <CheckIcon aria-hidden="true" className="h-5 w-5"/>
                    </span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
      </div>

      <div className="mt-4 w-full">
        <button
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Cadastrar
        </button>
      </div>
    </div>
  )
}

export default RuralProducerForm;
