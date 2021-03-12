import React from 'react';

class Homes extends React.Component{
    render()
    {
        return(
            <div className="Form">
            <h1>Forms In Reactjs</h1>
            <form className="myform">
            FirstName: <input type="text"  name="firstname"></input><br/><br/>
            LasttName: <input type="text"  name="lasttname"></input><br/><br/>
            Phone No. <input type="text" name="PhoneNo"></input><br/><br/>
            <input type="button" name="Submit" onClick="submitForm()">Submit</input>
            </form>
            </div>
           
        )
    }
}
export default Homes;