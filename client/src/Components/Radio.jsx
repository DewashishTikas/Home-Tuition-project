import { useState } from "react";
export const Radio = ({options,col,title,value,setValue}) => {
  return (
    <>
      <p>{title+'*'}</p>
      <div className={`grid grid-cols-1 md:grid-cols-${col} gap-4 mt-2`}>
        {options.map((option) => (
          <label
            key={option}
            className={`border p-3 pl-7 rounded-xl cursor-pointer transition-all ${
              value === option
                ? "border-blue-600 bg-blue-50 shadow-md"
                : "border-gray-300"
            }`}
          >
            <input required
            className="hidden"
              type="radio"
              name={title}
              value={option}
              checked={value === option}
              onChange={(e) =>{
                setValue(option)}}
            />
            <div >{option}</div>
          </label>
        ))}
      </div>
    </>
  );
}
