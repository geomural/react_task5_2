import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopPane from './components/TopPane';
import MainPane from './components/MainPane';
import yandexImg from './img/yandex.jpg';

function App() {
  return (
    <div className="App">
      <TopPane />
      <table>
        <tbody>
          <tr>
            <td style={{verticalAlign: 'top'}}>
              <img src={yandexImg} alt="" id="yandexIcon"/>
            </td>
            <td>
              <MainPane />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
