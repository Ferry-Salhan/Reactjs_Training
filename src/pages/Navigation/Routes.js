import React from 'react' ;
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import Homes from '../Homes';
import About from '../About';
import Contact from '../Contact';
import News from '../News';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default function NavRoutes() {
    return (
      <Router>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <Header/>
              <Footer/>
             <Switch>
            <Route path="/about">
              <About />
            </Route>
            
            <Route path="/news">
            <News/>
            </Route>

            <Route path="/contact">
            <Contact/>
             </Route>

           
            <Route path="/homes">
              <Homes/>
              </Route>
              
           
            
          </Switch>

      </Router>
    );
  }
