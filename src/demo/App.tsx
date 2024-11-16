import '../lib/tailwind/theme.css';
import { useState } from 'react';
import ReactNavigableList from '../lib/components/ReactNavigableList';
import React from 'react';

const App = () => {
  const [selected, setSelected] = useState([1]);
  const [disabled, _setDisabled] = useState<number[]>([0, 1, 3, 9, 999]);
  const items: any = [];

  for (let i = 1; i <= 2200; i++) {
    items.push({
      label: `option ${i}`,
      value: `option_${i}`
    });
  }

  return (
    <div className="flex justify-center gap-x-5 m-10 ">
      <div className="flex w-[200px] flex-col justify-between border border-[#BCB8B1] bg-white px-1 py-[2px]">
        <ReactNavigableList
          items={items}
          selected={selected}
          disabled={disabled}
          multiple={false}
          checkboxOnMultiple={true}
          onChange={selected => {
            console.log(selected);
          }}
        />
      </div>

      <div className="flex w-[200px] flex-col justify-between border border-[#BCB8B1] bg-white px-1 py-[2px]">
        <ReactNavigableList
          items={items}
          selected={selected}
          disabled={disabled}
          multiple={false}
          checkboxOnMultiple={true}
          overflowY={false}
          onChange={selected => {
            console.log(selected);
          }}
        />
      </div>

      <div className="flex h-[220px] w-[200px] flex-col justify-between border border-[#BCB8B1] bg-white px-1 py-[2px]">
        <ReactNavigableList
          items={items}
          disabled={disabled}
          multiple={true}
          checkboxOnMultiple={false}
          onChange={selected => {
            console.log(selected);
          }}
          onScroll={(e, b, c) => {
            console.log(c);
          }}
        />
      </div>

      <div className="flex h-[220px] w-[200px] flex-col justify-between border border-[#BCB8B1] bg-white px-1 py-[2px]">
        <ReactNavigableList
          items={items}
          disabled={disabled}
          listItemStyles={{
            focusedClasses: 'bg-purple-500 text-white',
            disabledClasses: 'text-[#C7C8CC]',
            selectedClasses: 'bg-purple-300 text-white'
          }}
          multiple={true}
          checkboxOnMultiple={true}
          onChange={selected => {
            console.log(selected);
          }}
          maxSelection={4}
        />
      </div>

      <div className="flex h-[220px] w-[200px] flex-col justify-between border border-[#BCB8B1] bg-white px-1 py-[2px]">
        <ReactNavigableList
          items={items}
          disabled={disabled}
          listItemStyles={{
            disabledClasses: 'text-pink-300',
            checkboxClasses: 'accent-black'
          }}
          multiple={true}
          checkboxOnMultiple={true}
          onChange={selected => {
            console.log(selected);
          }}
          enableVirtualization
        />
      </div>
    </div>
  );
};

export default App;
