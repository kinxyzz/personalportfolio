import React from "react";

export default function CardProject({
  title,
  imageUrl,
  date,
  label,
  children,
}: {
  title: string;
  imageUrl: string;
  date: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 pb-2 border-b-2 border-gray-200">
      <img
        className="rounded-md md:w-[246px] md:h-[180px] "
        src={imageUrl}
        alt=""
      />
      <div>
        <h3 className="text-3xl font-bold">{title}</h3>
        <div className="flex gap-6 items-center mt-4">
          <p className="px-4 py-1 rounded-lg bg-slate-800 font-semibold text-white ">
            {date}
          </p>
          <p className="text-gray-400 text-xl">{label}</p>
        </div>
        <p className="mt-4">{children}</p>
      </div>
    </div>
  );
}
