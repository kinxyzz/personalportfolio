import { getProject } from "../../services/getProject";
import Badge from "../elements/Badge";

export default function WorkDetail() {
  const { data: project } = getProject();

  if (Array.isArray(project)) {
    return <div>loading...</div>;
  }

  const desc = project?.body?.split("\n");

  return (
    <div className="flex flex-col items-center ">
      <div className="container px-4">
        <h2 className="text-4xl font-bold mb-2">{project?.title}</h2>
        <div className="flex gap-6 items-center mb-4">
          <p className="px-4 py-1 rounded-lg bg-slate-800 font-semibold text-white ">
            {project?.created_at?.substring(0, 4)}
          </p>
          <p className="text-gray-400 text-xl">{project?.label}</p>
        </div>
        <div className="flex justify-center md:w-3/5 mx-auto rounded-md mt-2">
          <img
            src={project?.imageUrl || ""}
            width={"100%"}
            height={"100%"}
            alt=""
          />
        </div>
        <div className="lg:w-3/4">
          <h3 className="text-2xl font-bold mb-2">Description</h3>
          {desc?.map((item, index) => (
            <p key={index} className="mt-2">
              {item}
            </p>
          ))}
          <h3 className="text-2xl font-bold mt-2">Demo</h3>
          <div className="flex mt-2  gap-2">
            <a
              className="px-4 py-1 shadow-md rounded-md bg-secondary "
              href={project?.repository?.toString()}
            >
              {project?.repository ? "Repo Avaiable" : "Repo Secret"}
            </a>
            <a
              className="px-4 py-1 shadow-md rounded-md bg-secondary "
              href={project?.webUrl?.toString()}
            >
              {project?.webUrl ? "Demo Avaiable" : "Demo Secret"}
            </a>
          </div>
          <h3 className="text-2xl font-bold mt-2">Tech Stack</h3>
          <div className="flex gap-2 flex-wrap mt-2">
            {project?.techStack.map((item) => (
              <Badge key={item.name} name={item.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
