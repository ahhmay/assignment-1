import React, { useState } from 'react';

const Input = ({ data, value, valueChanged }) => {

  return (
    <div className="input-container mx-4 my-2">
        <label className="color-white fs-12 color-white">{data?.label}</label>
        <input
          className="form-control"
          type={data?.type}
          placeholder={`${data?.label}\t(in ${data?.unit})`}
          readOnly={data?.isReadonly}
          required={data?.isRequired}
          value={value}
          onChange={(e) => valueChanged(data?.key, e.target.value)}
        />
    </div>
  )
}
export default Input;