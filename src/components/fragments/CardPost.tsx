import { NavLink } from "react-router-dom";

export interface items {
  title?: string;
  created_at?: string;
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
  const textOnly = item?.body?.replace(/<[^>]*>/g, "");

  return (
    <div
      className={`${padding && "p-4 md:py-4 md:px-10"}  w-full ${
        height === "fit" ? "h-fit" : "h-56"
      } overflow-hidden bg-white rounded-md ${
        border && "border-b border-b-slate-200"
      }`}
    >
      <NavLink
        to={`/blogs/${item?.id}`}
        className="text-xl text-slate-600 font-semibold mt-2"
      >
        {item?.title}
      </NavLink>
      <div className="flex text-slate-700 items-center gap-2 mt-2">
        <p className="text-sm font-light">
          {item?.created_at?.substring(0, 4)}
        </p>
        <p className="text-sm font-light">|</p>
        <p className="text-sm font-light">{item?.label}</p>
      </div>
      <p className="mt-4 w-3/4">{textOnly?.substring(0, 150) + "..."}</p>
    </div>
  );
}
