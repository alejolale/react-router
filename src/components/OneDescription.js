import React from "react";

import { Link } from "react-router-dom";


const Onedescription = ({url}) => {
  return (
    
    <div className="list">
      <p>Name: {url}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default Onedescription;
