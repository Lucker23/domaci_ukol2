import { useEffect, useState } from 'react';
import './style.css';

export const HomePage = () => {
  const [dateTime, setDateTime] = useState('')
  const [timeZone, setTimeZone] = useState('Europe/Prague')


  useEffect(() => {
    const fetchDateTime = async () => {
      const response = await fetch('https://worldtimeapi.org/api/timezone/' + timeZone);
      const data = await response.json();
      setDateTime(data.datetime);
    };

    fetchDateTime();
  }, [timeZone]);


  const onChange = (e) => {
    const value = e.target.value;
    setTimeZone(value)
//jaky byl vybrany option pro time zone  jakoe je Value    setTimeZone(value)
  }

  return (
    <>
  <form>
    <select onChange={onChange}>
      <option value="America/New_York">New York</option>
      <option value="Europe/London">Londýn</option>
      <option value="Europe/Moscow">Moskva</option>
      <option value="Europe/Prague">Praha</option>
      <option value="Asia/Hong_Kong">Hong Kong</option>
      <option value="Asia/Jerusalem">Jeruzalém</option>
    </select>

  </form>

      {dateTime}
    </>
  );
};
