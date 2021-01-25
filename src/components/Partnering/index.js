import React from 'react';

// helpers
import { localPath2Img } from '../../helpers';

// styles
import './styles.scss';

const Partnering = ({ icon, title, description }) => {
  return (
    <div className="partnering-wrapper">
      <div className="card-top">
        <img src={localPath2Img(`partnerings/${icon}.svg`)} alt="partnering-card" />
      </div>
      <div className="card-bottom">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Partnering;
