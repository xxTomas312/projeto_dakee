import React, { useState } from 'react';
import './add_place.css';
import '../../App.css';

interface MeuComponenteProps {
  texto: string;
}

const MeuComponente: React.FC<MeuComponenteProps> = ({ texto }) => {
  const [inputs, setInputs] = useState<string[]>([]);

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  return (
    <div className="container">
      <div className='add_button_container'>
        <button className='add_input_button' onClick={handleAddInput}>+ Add another place</button>
      </div>
      <div className='new_input_container'>
        {inputs.map((value, index) => (
          <div key={index} className="coluna">
            <input />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeuComponente;