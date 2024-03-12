import { NavLink } from "react-router-dom";

export interface project {
  title?: string;
  imageUrl?: string;
  date?: string;
  label?: string;
  description: string;
  id?: number;
}

export default function CardProject({ item }: { item: project }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 pb-2 border-b-2 border-gray-200">
      <div>
        <img
          className="rounded-md md:w-[246px] md:h-[180px] "
          src={item.imageUrl}
          alt=""
        />
      </div>
      <div className="flex-1">
        <NavLink to={`/works/${item.id}`} className="text-3xl font-bold">
          {item.title}
        </NavLink>
        <div className="flex gap-6 items-center mt-4">
          <p className="px-4 py-1 rounded-lg bg-slate-800 font-semibold text-white ">
            {item.date}
          </p>
          <p className="text-gray-400 text-xl">{item.label}</p>
        </div>
        <p className="mt-4 lg:w-3/4 ">
          {item.description.substring(0, 250) + "..."}
        </p>
      </div>
    </div>
  );
}
