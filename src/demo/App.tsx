
import '../lib/tailwind/theme.css';
import { useState } from 'react';
import ReactNavigableList from '../lib/components/ReactNavigableList'
import React from 'react';

const App = () => {
  const [selected, setSelected] = useState([1]);
  const [disabled, _setDisabled] = useState<number[]>([2, 3, 9]);
  const items = [
    { label: 'option 1', value: 'option_1' },
    { label: 'option 2', value: 'option_2' },
    { label: 'option 3', value: 'option_3' },
    { label: 'option 4', value: 'option_4' },
    { label: 'option 5', value: 'option_5' },
    { label: 'option 6', value: 'option_6' },
    { label: 'option 7', value: 'option_7' },
    { label: 'option 8', value: 'option_8' },
    { label: 'option 9', value: 'option_9' },
    { label: 'option 10', value: 'option_10' },
    { label: 'option 11', value: 'option_11' },
    { label: 'option 12', value: 'option_12' },
    { label: 'option 13', value: 'option_13' },
    { label: 'option 14', value: 'option_14' },
    { label: 'option 15', value: 'option_15' },
    { label: 'option 16', value: 'option_16' },
    { label: 'option 17', value: 'option_17' },
  ];

  return (
    <div className='flex justify-center gap-x-5 m-10 '>
      <div className='flex w-[200px] flex-col justify-between border border-[#BCB8B1] bg-white px-1 py-[2px]'>
        <ReactNavigableList
          items={items}
          selected={selected}
          setSelected={setSelected}
          disabled={disabled}
          multiple={false}
          checkboxOnMultiple={true}
          onChange={(selected) => {
            console.log(selected);
          }}
        />
      </div>

      <div className='flex h-[220px] w-[200px] flex-col justify-between border border-[#BCB8B1] bg-white px-1 py-[2px]'>
        <ReactNavigableList
          items={items}
          selected={selected}
          setSelected={setSelected}
          disabled={disabled}
          multiple={false}
          checkboxOnMultiple={true} 
          overflowY={false}
          onChange={(selected) => {
            console.log(selected);
          }}
        />
      </div>

      <div className='flex h-[220px] w-[200px] flex-col justify-between border border-[#BCB8B1] bg-white px-1 py-[2px]'>
        <ReactNavigableList
          items={items}
          disabled={disabled}
          multiple={true}
          checkboxOnMultiple={false}
          onChange={(selected) => {
            console.log(selected);
          }}
        />
      </div>

      <div className='flex h-[220px] w-[200px] flex-col justify-between border border-[#BCB8B1] bg-white px-1 py-[2px]'>
        <ReactNavigableList
          items={items}
          disabled={disabled}
          listItemStyles={{
            focusedClasses: 'bg-purple-500 text-white',
            disabledClasses: 'text-[#C7C8CC]',
            selectedClasses: 'bg-purple-300 text-white',
          }}
          multiple={true}
          checkboxOnMultiple={true}
          onChange={(selected) => {
            console.log(selected);
          }}
        />
      </div>

      <div className='flex h-[220px] w-[200px] flex-col justify-between border border-[#BCB8B1] bg-white px-1 py-[2px]'>
        <ReactNavigableList
          items={items}
          disabled={disabled}
          listItemStyles={{
            disabledClasses: 'text-pink-300',
            checkboxClasses: 'accent-black',
          }}
          multiple={true}
          checkboxOnMultiple={true}
          onChange={(selected) => {
            console.log(selected);
          }}
        />
      </div>
    </div>
  );
};

export default App;
