import React from "react";

import { Link } from "react-router-dom";


const List = ({ name, url }) => {
  return (
    
    <div className="list">
      <p>{name}</p>
      <Link to={`/pokemon/${name}`}> {url}</Link>
    </div>
  );
};

export default List;
