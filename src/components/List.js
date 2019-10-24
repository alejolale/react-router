import React from "react";

import { Link } from "react-router-dom";

const List = ({ name, url }) => {
  return (
    <div className="list">
      <p>{name}</p>
      <button>
        <Link to={`/pokemon/${name}`}>{url}</Link>
      </button>
    </div>
  );
};

export default List;
