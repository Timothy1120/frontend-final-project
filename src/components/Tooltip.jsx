import { useState, useEffect, useRef } from "react";

export default function Tooltip({ text, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isOpen]);
  return (
    <>
      <button
        className="bg-darkblue-04 px-3 py-2 text-sm text-white rounded-md w-full"
        onClick={toggle}
        ref={dropdownRef}
      >
        {text}
      </button>
      {isOpen && (
        <div className="relative">
          <div className="absolute mt-14 left-1/2 top-4 -translate-x-1/2 -translate-y-1/2  bg-white shadow-sm shadow-neutral-02 rounded w-32">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
