import React, { useState } from "react";

export default function InputComp({
  children,
  type,
  value,
  setValue,
  notrequired,
  pattern,
  title,
}) 
{
  const [internalValue,setInternalValue] = useState("")
  const isControlled = value !== undefined && setValue != undefined; 
  const inputValue = isControlled ? value : internalValue;
  const handleChange = (e)=>{
    isControlled ? setValue(e.target.value) : setInternalValue(e.target.value);

  }
 
  return (
    <>
      <label
        htmlFor={
          children.endsWith("*")
            ? children.substring(0, children.length - 1)
            : children
        }
        className="block mt-4 sm:mt-8"
      >
        {children}
      </label>
      <input
        required={notrequired === "true" ? false : true}
        name={
          children.endsWith("*")
            ? children.substring(0, children.length - 1)
            : children
        }
        id={
          children.endsWith("*")
            ? children.substring(0, children.length - 1)
            : children
        }
        value={inputValue}
        onChange={handleChange}
        type={type}
        placeholder={`Your ${
          children.endsWith("*")
            ? children.substring(0, children.length - 1)
            : children
        }`}
        pattern={pattern ? pattern : ".*"}
        title={title ? title : ""}
        className=" block w-full mt-1 p-2 border-t-0 border-x-0 border-1 sm:p-1 border-gray-300 focus:border-black outline-none cursor-pointer "
      />
    </>
  );
}
