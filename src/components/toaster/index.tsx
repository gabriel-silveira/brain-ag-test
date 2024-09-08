import React from 'react';

function Toaster(props: { message: string, type: string }) {
  const { message, type } = props;

  return (
    <div id="toaster-wrapper">
      <div id="toaster" className={type}>{ message }</div>
    </div>
  )
}

export default Toaster;
