import { NavLink, useLocation } from "react-router-dom";

const navbarLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Works",
    path: "/works",
  },
  {
    title: "Blog",
    path: "/blogs",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Navbar({ className }: { className?: string }) {
  const location = useLocation();

  return (
    <nav
      className={`${className} md:flex text-lg font-semibold justify-end gap-4`}
    >
      {navbarLinks.map((item) => (
        <NavLink
          className={location.pathname === item.path ? "text-primary" : ""}
          key={item.title}
          to={item.path}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}
