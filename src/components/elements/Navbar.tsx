import { NavLink } from "react-router-dom";

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={`${className} md:flex text-lg font-semibold justify-end gap-4`}
    >
      <NavLink to={"/"}>Works</NavLink>
      <NavLink to={"/blog"}>Blog</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </nav>
  );
}
