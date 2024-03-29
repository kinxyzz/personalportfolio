import { NavLink } from "react-router-dom";
import Badge from "../elements/Badge";

export interface items {
  title?: string;
  created_at?: string;
  label?: string;
  description?: string;
  id?: number;
  tag_list?: string[];
  tags: string;
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
  // const textOnly = item?.body?.replace(/<[^>]*>/g, "");

  return (
    <div
      className={`${padding && "p-4 md:py-4 md:px-10"} drop-shadow-lg  w-full ${
        height === "fit" ? "h-fit" : "h-56"
      } overflow-hidden bg-white dark:bg-gray-950 rounded-md ${
        border && "border-b border-b-slate-200 dark:border-b-slate-700"
      }`}
    >
      <NavLink
        to={`/blogs/${item?.id}`}
        className="text-xl  font-semibold mt-2"
      >
        {item?.title}
      </NavLink>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-sm font-light">
          {item?.created_at?.substring(0, 4)}
        </p>
        <p className="text-sm font-light">|</p>
        {item?.tags && <Badge height={0.5} name={item?.tags.split(",")[0]} />}
      </div>
      <div className="mt-4 text-sm text-left ">
        <p className="">{item.description}</p>
      </div>
    </div>
  );
}
