import React, { useRef, useState } from "react";

export default function UploadFile({ name, value, setValue, }) {
  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef();
  const[message,setMessage] = useState()
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if(message){
setMessage("")
    }
    if(uploadedFile.size > 1024*1024) {
      setMessage("File size must be less than 1MB");
      return;
    }
    if (uploadedFile) {
      setValue(uploadedFile);
      if (
        uploadedFile.type.startsWith("image/") ||
        uploadedFile.type === "application/pdf"
      ) {
        setPreview(URL.createObjectURL(uploadedFile));
      } else {
        setPreview(null);
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files?.[0];
        if (droppedFile.size > 1024 * 1024) {
          setMessage("File size must be less than 1MB");
          return;
        }
    if (droppedFile) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(droppedFile);
      inputRef.current.files = dataTransfer.files;
      handleFileChange({ target: { files: dataTransfer.files } });
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleRemove = () => {
    setValue(null);
    setPreview(null);
    inputRef.current.value = null;
  };
  return (
    <>
      <p>{name + "*"}</p>
      <div className="max-w-md mx-auto">
        <label
          htmlFor={name}
          className={`flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-6 cursor-pointer transition-all ${
            dragActive
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-white"
          } ${value ? "pointer-events-none opacity-70" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {message}
          <input
            required
            name={name}
            ref={inputRef}
            id={name}
            type="file"
            className="sr-only"
            onChange={handleFileChange}
          />
          {!value && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-400 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16v-4a4 4 0 014-4h.586a1 1 0 00.707-.293l2.414-2.414a1 1 0 011.414 1.414L14.414 9H15a6 6 0 016 6v1a1 1 0 01-1 1H7z"
                />
              </svg>
              <p className="text-gray-600 text-sm text-center">
                <span className="md:block hidden">
                  Drag & drop a file here, or{" "}
                </span>
                <span className="text-blue-600 underline">browse</span>
              </p>
            </>
          )}
          {value && (
            <div className="mt-4 text-center w-full">
              <p className="text-sm font-medium text-gray-800 truncate">
                {value.name}
              </p>
              {preview && value.type === "application/pdf" && (
                <iframe
                  src={preview}
                  title="PDF Preview"
                  className="mt-2 rounded-xl max-h-48 object-contain mx-auto  pointer-events-auto"
                />
              )}
              {preview && value.type.startsWith("image/") && (
                <img
                  src={preview}
                  alt="preview"
                  className="mt-2 rounded-xl max-h-48 object-contain mx-auto"
                />
              )}
            </div>
          )}
        </label>

        {value && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={handleRemove}
              className="text-red-500 transition duration-700 cursor-pointer hover:text-red-700 text-sm underline"
            >
              Remove file
            </button>
          </div>
        )}
      </div>
    </>
  );
}
