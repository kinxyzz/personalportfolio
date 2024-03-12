import { Outlet } from "react-router-dom";

export default function Work() {
  return (
    <div className="flex w-screen items-center  flex-col  ">
      <div className="container px-4 mt-8 md:mt-24">
        <h2 className="text-3xl font-bold">Work</h2>
        <section className="mt-12 flex flex-col gap-4 h-[80vh] overflow-y-scroll">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
