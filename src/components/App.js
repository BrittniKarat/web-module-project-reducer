import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers/index';
import { applyNumber, changeOperation, clearDisplay, addMemory, applyMemory, clearMemory } from '../actions/index';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApplyNumber = (e) => {
    dispatch(applyNumber(e.target.value));
  };
  const handleOperator = (e) => {
    dispatch(changeOperation(e.target.value))
  };
  const handleClear = () => {
    dispatch(clearDisplay())
  };
  const handleAddMemory = () => {
    dispatch(addMemory())
  };
  const handleApplyMemory = () => {
    dispatch(applyMemory())
  };
  const handleClearMemory = () => {
    dispatch(clearMemory())
  };
 
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleAddMemory}/>
              <CalcButton value={"MR"} onClick={handleApplyMemory}/>
              <CalcButton value={"MC"} onClick={handleClearMemory}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleApplyNumber}/>
              <CalcButton value={2} onClick={handleApplyNumber}/>
              <CalcButton value={3} onClick={handleApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={handleApplyNumber}/>
              <CalcButton value={5} onClick={handleApplyNumber}/>
              <CalcButton value={6} onClick={handleApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={handleApplyNumber}/>
              <CalcButton value={8} onClick={handleApplyNumber}/>
              <CalcButton value={9} onClick={handleApplyNumber}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperator}/>
              <CalcButton value={"*"} onClick={handleOperator}/>
              <CalcButton value={"-"} onClick={handleOperator}/>
              
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
