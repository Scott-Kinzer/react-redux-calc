import React from 'react';
import './App.css';
import Calc from "./components/Calc/Calc";
import {store} from "./redux/store/store";
import { Provider } from 'react-redux'

function App() {
  return (
    <React.Fragment>
        <Provider  store={store}>
        <Calc />

        </Provider>
    </React.Fragment>
  )
}

export default App;
