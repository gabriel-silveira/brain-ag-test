import React, {useState} from 'react';
import {Label, Listbox, ListboxButton, ListboxOption, ListboxOptions} from '@headlessui/react';
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid';

const people = [
  {
    id: 1,
    name: 'Acre',
  },
  {
    id: 2,
    name: 'Alagoas',
  },
  {
    id: 3,
    name: 'Amapá',
  },
  {
    id: 4,
    name: 'Amazonas',
  },
  {
    id: 5,
    name: 'Bahia',
  },
  {
    id: 6,
    name: 'Ceará',
  },
  {
    id: 7,
    name: 'Distrito Federal',
  },
  {
    id: 8,
    name: 'Espírito Santo',
  },
  {
    id: 9,
    name: 'Goiás',
  },
  {
    id: 10,
    name: 'Maranhão',
  },
  {
    id: 11,
    name: 'Mato Grosso',
  },
  {
    id: 12,
    name: 'Mato Grosso do Sul',
  },
  {
    id: 13,
    name: 'Minas Gerais',
  },
  {
    id: 14,
    name: 'Pará',
  },
  {
    id: 15,
    name: 'Paraíba',
  },
  {
    id: 16,
    name: 'Paraná',
  },
  {
    id: 17,
    name: 'Pernambuco',
  },
  {
    id: 18,
    name: 'Piauí',
  },
  {
    id: 19,
    name: 'Rio de Janeiro',
  },
  {
    id: 20,
    name: 'Rio Grande do Norte',
  },
  {
    id: 21,
    name: 'Rio Grande do Sul',
  },
  {
    id: 22,
    name: 'Rondônia',
  },
  {
    id: 23,
    name: 'Roraima',
  },
  {
    id: 24,
    name: 'Santa Catarina',
  },
  {
    id: 25,
    name: 'São Paulo',
  },
  {
    id: 26,
    name: 'Sergipe',
  },
  {
    id: 27,
    name: 'Tocantins',
  },
];

function BrazilStatesListBox() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Label>
      <div className="relative mt-2">
        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <span className="flex items-center">
            {/*<img alt="" src={selected.avatar} className="h-5 w-5 flex-shrink-0 rounded-full" />*/}
            <span className="ml-3 block truncate">{selected.name}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {people.map((person) => (
            <ListboxOption
              key={person.id}
              value={person}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <div className="flex items-center">
                {/*<img alt="" src={person.avatar} className="h-5 w-5 flex-shrink-0 rounded-full" />*/}
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {person.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}

export default BrazilStatesListBox;
