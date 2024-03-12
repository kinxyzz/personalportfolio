import { NavLink } from "react-router-dom";

export interface items {
  title?: string;
  date?: string;
  label?: string;
  body?: string;
  id?: number;
}

export default function CardPost({
  border,
  height,
  padding,
  item,
}: {
  border?: boolean;
  height?: string;
  padding?: boolean;
  item: items;
}) {
  return (
    <div
      className={`${padding && "p-4 md:py-4 md:px-10"}  w-full ${
        height === "fit" ? "h-fit" : "h-72"
      } overflow-hidden bg-white rounded-md ${
        border && "border-b border-b-slate-200"
      }`}
    >
      <NavLink
        to={`/blogs/${item?.id}`}
        className="text-xl font-semibold mt-2 "
      >
        {item?.title}
      </NavLink>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-sm font-light">{item?.date || "2024"} </p>
        <p className="text-sm font-light">|</p>
        <p className="text-sm font-light">{item?.label || "Your Label"}</p>
      </div>
      <p className="mt-2 lg:w-3/4">{item?.body}</p>
    </div>
  );
}
