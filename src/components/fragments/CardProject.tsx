import { NavLink } from "react-router-dom";

export interface project {
  body: string | null;
  created_at: string;
  id: number;
  imageUrl: string | null | undefined;
  label: string | null;
  title: string | null;
  techStack: {
    name: string | null;
  }[];
}

export default function CardProject({ item }: { item: project }) {
  return (
    <div className="rounded-md drop-shadow-sm p-2 pb-2 border-b-2 dark:border-b-slate-700">
      <div className="flex flex-col md:flex-row gap-4 ">
        <NavLink
          to={`/works/${item.id}`}
          className="border-4 border-primary dark:border-darksecondary rounded-md hover:scale-105 duration-300 transform ease-in-out"
        >
          <img
            className="w-full md:w-[246px] md:h-[180px] "
            src={item?.imageUrl || ""}
            alt=""
          />
        </NavLink>
        <div className="flex-1">
          <NavLink to={`/works/${item.id}`} className="text-3xl  font-bold">
            {item?.title}
          </NavLink>
          <div className="flex gap-6 items-center mt-4">
            <p className="px-4 py-1 rounded-lg bg-slate-800 font-semibold text-white ">
              {item?.created_at?.substring(0, 4)}
            </p>
            <p className="text-slate-800 dark:text-slate-300 text-xl">
              {item.label}
            </p>
          </div>
          <p className="mt-4 lg:w-3/4 ">
            {item?.body?.substring(0, 250) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
}
