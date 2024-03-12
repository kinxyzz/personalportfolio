import { NavLink } from "react-router-dom";

export default function CardPost({
  title,
  date,
  label,
  children,
  border,
  height,
  padding,
  id,
}: {
  title: string;
  date: string;
  label: string;
  children: React.ReactNode;
  border?: boolean;
  height?: string;
  padding?: boolean;
  id?: number;
}) {
  return (
    <div
      className={`${padding && "p-4 md:py-4 md:px-10"}  w-full ${
        height === "fit" ? "h-fit" : "h-72"
      } overflow-hidden bg-white rounded-md ${
        border && "border-b border-b-slate-200"
      }`}
    >
      <NavLink to={`/blogs/${id}`} className="text-xl font-semibold mt-4 ">
        {title}
      </NavLink>
      <div className="flex items-center gap-2 mt-4">
        <p className="text-sm font-light">{date}</p>
        <p className="text-sm font-light">|</p>
        <p className="text-sm font-light">{label}</p>
      </div>
      <p className="mt-4">{children}</p>
    </div>
  );
}
