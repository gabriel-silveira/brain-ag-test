import React from 'react';

function CropPlanted(props: { value: string, index: number }) {
  return (
    <span
      className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-1"
      key={props.index}
    >
      {props.value}
    </span>
  )
}

export default CropPlanted;
