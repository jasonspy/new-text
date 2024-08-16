// src/components/Card.tsx
import React from 'react';
import './TeamCard.css';

interface CardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const TeamCard: React.FC<CardProps> = ({ id, title, subtitle, image }) => {
  return (
      <>
      <input type="radio" name="slide" id={id} className="hidden" />
      <label htmlFor={id} className="card" style={{ backgroundImage: `url(${image})` }}>
        <div className="card-text">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </label>
      </>
  );
};

export default TeamCard;
