import React, { FC } from 'react';

interface ChatHeaderProps {
  therapistName: string;
  therapistSpecialty: string;
  options: ChatOption[];
}

interface ChatOption {
  label: string;
  onClick: () => void;
}

const ChatHeader: FC<ChatHeaderProps> = ({ therapistName, therapistSpecialty, options }) => {
  return (
    <div className="chat-header">
      <div className="therapist-info">
        <h2>{therapistName}</h2>
        <p>{therapistSpecialty}</p>
      </div>
      <div className="chat-options">
        {options.map((option, index) => (
          <button key={index} onClick={option.onClick}>
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatHeader;
