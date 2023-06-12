import React from 'react';
import './Toggle.css';

export interface ToggleProps {
  toggled: boolean;
  onClick: () => void;
}

export default function Toggle(props: ToggleProps) {
  const { onClick, toggled } = props;
  return (
    <div onClick={onClick} className={`toggle${toggled ? ' night' : ' light'}`}>
      <div className="notch"></div>
      <div>
        <div className="cloud sm" />
        <div className="cloud sm" />
        <div className="cloud md" />
        <div className="cloud lg" />
      </div>
    </div>
  );
}
