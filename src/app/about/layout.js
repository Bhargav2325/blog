"use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <ul className="flex justify-center items-center gap-5 text-2xl">
      <h1 className="text-slate-500">About Navbar</h1>
        <li>
          <Link href="/about">About Main</Link>
        </li>
        <li>
          <Link href="/about/aboutcollege">About College</Link>
        </li>
        <li>
          <Link href="/about/aboutstudent">About Student</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
