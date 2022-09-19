import React, {useState} from 'react';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import Input from '../Input/Input';
import DrugDataSet1 from "./../../assets/json/drug1.json";
import DrugDataSet2 from "./../../assets/json/drug2.json";
import './GenericForm.css';

const GenericForm = () => {
    const [values, setValues] = useState({});

    const valueChanged = (key, value) => {
        setValues(prev => {
            prev[key] = value;
            return prev;
        })
        console.log("Object: ",values);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(values);
    }
    
    return (
        <div className="form-container mx-4 my-2">
            <h3 className="color-white d-flex justify-content-center my-2">Form</h3>
            <form onSubmit={submit}>
                {
                    DrugDataSet2.fields.sort((a, b) => (a.order - b.order)).map(form => 
                    {
                        switch(form?.type) {
                            case "date": 
                                return (
                                    <Input 
                                        key={form?.key}
                                        data={form}
                                        value={values[form?.key]}
                                        valueChanged={valueChanged}
                                    />
                                );
                            case "number": 
                                return (
                                    <Input 
                                        key={form?.key}
                                        data={form}
                                        value={values[form?.key]}
                                        valueChanged={valueChanged}
                                    />
                                );
                            case "dropdown": 
                                return (
                                    <Dropdown
                                        key={form?.key}
                                        data={form}
                                        value={values[form?.key]}
                                        valueChanged={valueChanged}
                                    />
                                );
                        }
                    }
                    )
                }
                <Button />
            </form>
        </div>
    )
}
export default GenericForm;