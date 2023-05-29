import React, { useState } from 'react';
import './add_place.css';
import '../../App.css';

interface MeuComponenteProps {
  texto: string;
}

const MeuComponente: React.FC<MeuComponenteProps> = ({ texto }) => {
  const [inputs, setInputs] = useState<{id: number, value: string}[]>([]);
  const [nextId, setNextId] = useState(0);

  const handleAddInput = () => {
    if (inputs.length < 2) {
      setInputs([...inputs, { id: nextId, value: '' }]);
      setNextId(nextId + 1);
    }
  };

  const handleDeleteInput = (id: number) => {
    const newInputs = inputs.filter(input => input.id !== id);
    setInputs(newInputs);
  };

  const handleInputChange = (id: number, value: string) => {
    const newInputs = inputs.map(input => {
      if (input.id === id) {
        return { ...input, value };
      } else {
        return input;
      }
    });
    setInputs(newInputs);
  };

  return (
    <div className="container">
      <div className='add_button_container'>
        <button className='add_input_button' onClick={handleAddInput}>+ Add another place</button>
      </div>
      <div className='new_input_container'>
        {inputs.map((input) => (
          <div key={input.id} className="coluna">
            <input value={input.value} onChange={(event) => handleInputChange(input.id, event.target.value)} />
            <button onClick={() => handleDeleteInput(input.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeuComponente;