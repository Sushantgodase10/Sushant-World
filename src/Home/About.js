
import React from 'react'
import User from './User';

import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

const About = () => {

  return (
    <> 
    <div >About Us</div>
    <div>This is Sushant World web Series</div>
   <div>
    loggedIn User
    <UserContext.Consumer>
      {({ loggedInUser}) => (
        <h1 className="text-xl font-bold">{loggedInUser}</h1>
      )}
    </UserContext.Consumer>
   </div>
    
    <div >
       {/* <User/>
       <UserClass/> */}
    </div>
    </>
  )
};

export default About;