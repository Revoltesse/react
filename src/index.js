import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";


const Days = () => {
  return (
    <div>
      <p>Week days</p>
      <ul>
        <li>Sunday</li>
        <li>Monday</li>
        <li>Tuesday</li>
        <li>Wednesday</li>
        <li>Thursday</li>
        <li>Friday</li>
        <li>Saturday</li>
      </ul>
    </div>
  )
}
const Zodiak = () => {
  return (
    <div>
      <p>Zodiak</p>
      <ul>
        <li>Aries</li>
        <li>Taurus</li>
        <li>Gemini</li>
        <li>Cancer</li>
        <li>Leo</li>
        <li>Virgo</li>
        <li>Libra</li>
        <li>Scorpio</li>
        <li>Sagittarius</li>
        <li>Capricorn</li>
        <li>Aquarius</li>
        <li>Pisces</li>
      </ul>
    </div>
  )
}

const Month = () => {
  return (
    <div>
      <p>Months</p>
      <ul>
        <li>January</li>
        <li>February</li>
        <li>March</li>
        <li>April</li>
        <li>May</li>
        <li>June</li>
        <li>July</li>
        <li>August</li>
        <li>September</li>
        <li>October</li>
        <li>November</li>
        <li>December</li>
      </ul>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <Days></Days>
      <Zodiak></Zodiak>
      <Month></Month>
    </div>
  )
}


ReactDOM.render(<App></App>, document.querySelector('#root'));


