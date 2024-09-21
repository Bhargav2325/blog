// import React from "react";

import Link from "next/link";

const StudentList = () => {
  return (
    <div>
      <h1>Student List</h1>
      <li>
        <Link href="/studentlist/anil">Anil</Link>
      </li>
      <li>
      <Link href="/studentlist/ayush">ayush</Link>
      </li>
      <li>
        <Link href="/studentlist/rajesh">Rajesh</Link>
      </li>
      <li>
        <Link href="/studentlist/ramesh">Ramesh</Link>
      </li>
    </div>
  );
};

export default StudentList;
