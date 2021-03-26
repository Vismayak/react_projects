import React from 'react';

const UserOutput = (props) =>{
    return(
        <div>
         <p>{props.name}</p>
         <p>{props.age}</p>
         </div>
    ) 
};

export default UserOutput;