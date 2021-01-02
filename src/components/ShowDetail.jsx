import React from 'react';

const ShowDetail = (props) => {
  // const { name, company, blog, location, bio } = props.details;
  const { name } = props.details;
  return (
    <div className="center">
      <div className="loaded">Details Loaded</div>
      <div>
        <strong>Name: </strong>
        {name}
      </div>
    </div>
  );
};

export default ShowDetail;