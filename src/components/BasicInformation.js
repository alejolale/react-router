import React from "react";

import { Link } from "react-router-dom";


const BasicInformation = () => {
  return (
    
    <div className="basic">
      <p>Hello World !</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default BasicInformation;
