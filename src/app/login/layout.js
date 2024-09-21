"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {pathname !== "/login/loginteacher" ? (
        <ul className="flex justify-center items-center gap-5 text-2xl">
          <h1 className="text-slate-500">Login Navbar</h1>
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/login/loginstudent">Student Login</Link>
          </li>
          <li>
            <Link href="/login/loginteacher">Teacher Login</Link>
          </li>
        </ul>
      ) : (
        <Link className="text-2xl" href="/login">
          Go to Login Main Page
        </Link>
      )}
      {children}
    </div>
  );
};

export default Layout;
