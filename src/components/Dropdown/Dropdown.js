import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ data, value, valueChanged }) =>  {
    const [ddValues, setDDValues] = useState(data.items.map(item=> item.text));

    return (
        <div className="dropdown mx-4 my-2 d-flex justify-content-end">
            <label className="color-white d-flex align-items-center">{data?.label}:</label>
            &nbsp;&nbsp;&nbsp;
            <select
                className="dropdown"
                disabled={data?.isReadonly}
                required={data?.isRequired}
                value={value}
                onChange={(e) => valueChanged(data?.key, e.target.value)}
                defaultValue={'Select one'}
            >
                <option value="Select one" disabled>Select one</option> 
                {data?.items.map((option) => (
                    <option key={option?.value} value={option?.value}>{option?.text}</option>
                ))}
            </select>
        </div>
    )
}
export default Dropdown;