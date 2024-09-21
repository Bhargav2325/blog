// import React from "react";

const Student = ({params}) => {
    console.log(params); // { id: '1' }

  return (
    <div>
      <h1>Student Details</h1>
      <h3>Name: {params.student}</h3>
    </div>
  );
};

export default Student;
