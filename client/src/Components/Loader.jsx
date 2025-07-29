import React from "react";

export default function Loading({ border, paddinginline }) {
  return (
    <div className={`flex items-center justify-center bg-transparent px-${paddinginline}`}>
      <div
        className={`w-8 h-8 border-4 border-${border}  border-t-transparent rounded-full animate-spin box-border`}
      ></div>
    </div>
  );
}
