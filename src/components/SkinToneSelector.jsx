import React from 'react';
import './SkinToneSelector.css';
import { skinTones } from '../data/skinTones';

const SkinToneSelector = ({ selectedTone, onToneChange }) => {
  return (
    <div className="skin-tone-selector">
      <h3 className="selector-title">Escolha seu tom de pele:</h3>
      <div className="tone-options">
        {skinTones.map((tone) => (
          <button
            key={tone.id}
            className={`tone-btn ${selectedTone === tone.id ? 'active' : ''}`}
            onClick={() => onToneChange(tone.id)}
            style={{ '--tone-color': tone.color }}
            aria-label={`Selecionar ${tone.name}`}
          >
            <span className="tone-color"></span>
            <span className="tone-name">{tone.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkinToneSelector;
