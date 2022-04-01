import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { LandingPage } from './Pages/LandingPage/LandingPage';

import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
          <LandingPage/>
    </Router>
  );
}

const Section = styled.section`
text-align: center;
`

export default App;
