import { Outlet } from "react-router-dom";

export default function Blog() {
  return (
    <div className="flex w-screen items-center  flex-col  ">
      <div className="container px-4 mt-8 md:mt-24">
        <h2 className="text-3xl font-bold lg:text-center">Blog</h2>
        <section className="mt-12 flex-col flex gap-4 ">
          <Outlet />
        </section>
      </div>
    </div>
  );
}
