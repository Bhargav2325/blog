"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Component, useState } from "react";

export default function Home() {
  const router = useRouter();

  const navigate =(name)=>{
    router.push(name)
  }
  // const [name, setName] = useState("Bhargav");
  // const apple = () => {
  //   // alert(item);
  //   setName("Raj");
  // };
  // const InnnerComp = () => {
  //   return <h1>inner Component</h1>;
  // };
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <h1>Events, Function and State {name}</h1>

      <button type="submit" onClick={() => apple("Fruits")}>
        Click Me
      </button>
      {/* <InnnerComp /> */}
      {/* {InnnerComp()} */} 

      <h1>Basic Routing | Make New Page</h1>
      <Link href="/login" className="  text-slate-700 px-4 py-2">Go to Login Page</Link><br/><br/>
      <Link href="/about" className="  text-slate-700 px-4 py-2">Go to About Page</Link><br/><br/>
      <button onClick={()=>navigate("/login")}>Go to Login Page</button>
      <button onClick={()=>navigate("/about")}>Go to about Page</button>

    </div>
  );
}
