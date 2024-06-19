import React from 'react';

interface MyComponentProps {
  calculate: () =>void; 
  label: string;
}

export const CalculatorButton: React.FC<MyComponentProps> = ({ calculate , label }) => {

    return         <button
    className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
    onClick={ calculate}
  >
    {label}
  </button>;

  }