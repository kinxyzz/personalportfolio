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
        height === "fit" ? "h-fit" : "h-56"
      } overflow-hidden bg-white rounded-md ${
        border && "border-b border-b-slate-200"
      }`}
    >
      <NavLink
        to={`/blogs/${item?.id}`}
        className="text-xl text-slate-600 font-semibold mt-2 "
      >
        Ini Judul
      </NavLink>
      <div className="flex text-slate-700 items-center gap-2 mt-2">
        <p className="text-sm font-light">{"Ini Tanggal" || "2024"} </p>
        <p className="text-sm font-light">|</p>
        <p className="text-sm font-light">{"ini Label" || "Your Label"}</p>
      </div>
      <p className="mt-2 lg:w-3/4">
        {"Ini Description max 150 text" ||
          item?.body?.substring(0, 158) + "..."}
      </p>
    </div>
  );
}
