// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';




function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (massege, type) => {
    setAlert({
      msg: massege,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#363131';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now!';
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" >
        <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />
        </div>
    </>
  );
}

export default App;
