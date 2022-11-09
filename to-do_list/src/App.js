import React from 'react';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './component/sidebar/Sidebar';
import {SignIn, SignUp, Index} from './pages/index';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <React.Fragment>
          <div className='row'>
            <div className='col-2'><Sidebar /></div>
            <div className='col-9'>
              <Route path="/dashboard" element={<Index />} />
            </div>
          </div>
          </React.Fragment> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
