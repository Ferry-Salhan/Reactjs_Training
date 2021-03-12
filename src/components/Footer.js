import React from 'react';

import {Link} from 'react-router-dom';
class Footer extends React.Component {
render(){
    return (
        <div className="Footer">
        <footer>
  
  <a href="d:/React Tutorials/first-app/src/pages/Homes"><Link to='/homes'>Home</Link></a><br/>
  <a href="d:/React Tutorials/first-app/src/pages/About"><Link to='/about'>About</Link></a><br/>
  <a href="d:/React Tutorials/first-app/src/pages/Contact"><Link to='/conatct'>Contact</Link></a><br/>
  <a href="d:/React Tutorials/first-app/src/pages/About"><Link to='/about'>About</Link></a><br/>
  <p>Contact us: Author: Hege Refsnes<br/>
  © 2021 Gandalf<br/>
  Mail at: <a href="mailto:hege@example.com">hege@example.com</a>
  </p>
  
</footer>
        
    
</div>

    );
}
}

export default Footer;