import React, { useState } from 'react';
import './App.css';
import Columns from './components/columns';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './components/layout/layout';
import 'react-calendar/dist/Calendar.css';

function App() {
  return (


    < Layout >
      <Columns />
    </Layout >



  );
}

export default App;