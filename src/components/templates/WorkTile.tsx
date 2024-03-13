import { getProject } from "../../services/getProject";
import CardProject, { project } from "../fragments/CardProject";

export default function WorkTile() {
  const { data: projectPortfolio = [] } = getProject();

  return (
    <>
      <div className="flex w-screen items-center  flex-col  ">
        <div className="container px-4 mt-8 md:mt-24">
          <h2 className="text-3xl font-bold underline">Works</h2>
          <section className="mt-12 flex flex-col gap-4 ">
            {Array.isArray(projectPortfolio) &&
              projectPortfolio?.map((item: project) => (
                <CardProject key={item.id} item={item} />
              ))}
          </section>
        </div>
      </div>
    </>
  );
}
