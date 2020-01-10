import React from "react";
import QRCode from "qrcode.react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <QRCode value="a" />
      <QRCode value="a" />
      <QRCode value="a" />
      <QRCode value="a" />
    </div>
  );
}

export default App;
