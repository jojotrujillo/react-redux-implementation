import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { WeatherState, weatherAsync } from './weatherSlice';
import styles from './Weather.module.css';

export function Weather() {
  //const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [response, setResponse] = useState({
    isLoaded: false,
    items: [] as WeatherState[],
  });

  let list;

  if (response.isLoaded) {
    list = response.items.map((item) => (
      <li>{item.date + ' ' + item.summary + ' ' + item.temperaturec}</li>
    ));
  } else {
    list = <h2>No Weather Forecast...yet</h2>;
  }

  const gettingWeather = () => {
    dispatch(weatherAsync())
      .then((forecast) => {
        setResponse({
          isLoaded: true,
          items: forecast.payload,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={() => gettingWeather()}>
        Click to get Weather Forecast
      </button>
      {list}
    </div>
  );
}
