import { NavLink } from "react-router-dom";
import { getPost } from "../../services/getPost";
import { getProject } from "../../services/getProject";
import CardPost, { items } from "../fragments/CardPost";
import CardProject, { project } from "../fragments/CardProject";

export default function Content() {
  const { data: posts = {} } = getPost();
  const { data: projectPortfolio = [] } = getProject();

  return (
    <main>
      <div className="bg-secondary w-screen h-fit py-4 flex pt-4 justify-center">
        <div className="container px-4">
          <div className="flex justify-between items-center w-full h-16">
            <h2 className="text-2xl">Recent Posts</h2>
            <NavLink to={"/blogs"} className="text-blue-400 self-end">
              view all
            </NavLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 justify-center items-center">
            {posts.length > 0 ? (
              posts
                ?.slice(0, 2)
                ?.map((item: items) => (
                  <CardPost padding={true} key={item.id} item={item} />
                ))
            ) : (
              <div>loading...</div>
            )}
          </div>
        </div>
      </div>
      <div className=" h-fit py-2 mb-24 w-screen flex justify-center">
        <div className="container px-4 ">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl mt-4">Featured Work</h2>
            <NavLink className="text-blue-400 self-end" to="./works">
              ShowMore...
            </NavLink>
          </div>

          <div className="flex flex-col gap-8 mt-6">
            {Array.isArray(projectPortfolio) &&
              projectPortfolio
                .slice(0, 3)
                ?.map((item: project) => (
                  <CardProject key={item.id} item={item} />
                ))}
          </div>
        </div>
      </div>
    </main>
  );
}
