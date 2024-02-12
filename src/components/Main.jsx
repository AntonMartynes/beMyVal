/* eslint-disable react/prop-types */
import '../styles/main.scss';
import no0 from '../assets/no0.gif';
import no1 from '../assets/no1.gif';
import no2 from '../assets/no2.gif';
import no3 from '../assets/no3.gif';
import yes from '../assets/yes.gif';
import { useState } from 'react';
import Button from '@mui/material/Button';

export const Main = ({ setIsPressed, isPressed }) => {
  const [imgCounter, setImgCounter] = useState(0);
  const [isClassAdded, setIsClassAdded] = useState(false);
  const [topValue, setTopValue] = useState(0);
  const [rightValue, setRightValue] = useState(0);

  const handleButtonClick = () => {
    setIsClassAdded(true);
    setImgCounter(imgCounter + 1);
  };
  const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
  };
  const handleButtonClick1 = () => {
    // Изменение значений top и right (замените на свои значения)
    setTopValue(random(0, 90));
    setRightValue(random(0, 90));
  };

  const img = () => {
    if (isPressed) {
      return yes;
    } else if (imgCounter === 0) {
      return no0;
    } else if (imgCounter < 3) {
      return no1;
    } else if (imgCounter < 5) {
      return no2;
    }
    return no3;
  };

  const text = () => {
    if (imgCounter === 0) {
      return 'No';
    } else if (imgCounter < 3) {
      return 'Are You Sure ?';
    } else if (imgCounter < 5) {
      return 'Think better';
    }
    return 'Think even better';
  };

  const elementStyle = {
    position: 'absolute',
    top: `${topValue}%`,
    right: `${rightValue}%`,
  };
  return (
    <main className="main">
      {isPressed ? (
        'Hooooray, Mashenka will be my valentine'
      ) : (
        <p>Mashulka, be my Valentine </p>
      )}
      <img src={img()} alt="" />
      {isPressed ? (
        ''
      ) : (
        <div className="buttons">
          <Button variant="outlined" onClick={() => setIsPressed(true)}>
            YES!!!
          </Button>
          {imgCounter === 0 ? (
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                handleButtonClick();
                handleButtonClick1();
              }}
            >
              {text()}
            </Button>
          ) : (
            <Button
              className={isClassAdded ? 'noBtn' : ''}
              style={elementStyle}
              variant="outlined"
              color="error"
              onClick={() => {
                handleButtonClick();
                handleButtonClick1();
              }}
            >
              {text()}
            </Button>
          )}
        </div>
      )}
    </main>
  );
};
