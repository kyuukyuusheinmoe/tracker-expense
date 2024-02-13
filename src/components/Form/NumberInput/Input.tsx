import React from 'react'
import { InputNumber } from 'primereact/inputnumber';
import { useFormContext } from 'react-hook-form';

function InputNumberComponent({label,name,value, onChange}) {
const { register } = useFormContext()

  return (
      <div className="grid grid-cols-12 items-center rounded-full px-4">
        <label className='col-span-4 text-center text-md font-bold'>{label}</label>
        <InputNumber name={name} inputId="integeronly" value={value} onValueChange={(e) => onChange(e.value)} />
      </div>
  )
}

export default InputNumberComponent
