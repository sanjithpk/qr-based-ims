import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import QRGenerator from "./pages/qr-generator";
import QRScanner from "./pages/qr-scanner";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/generate" component={QRGenerator} />
        <Route path="/scanner" component={QRScanner} />
      </Switch>
    </div>
  );
}

export default App;
