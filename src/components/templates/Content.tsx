import CardPost from "../fragments/CardPost";
import CardProject from "../fragments/CardProject";

export default function Content() {
  return (
    <main>
      <div className="bg-[#EDF7FA] w-screen h-fit py-4 flex pt-4 justify-center">
        <div className="container px-4">
          <div className="flex justify-between items-center w-full h-16">
            <h2 className="text-2xl">Recent Posts</h2>
            <p className="text-blue-400 self-end">view all</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 justify-center items-center">
            <CardPost
              title="Making Design System from Stratch"
              date="20 feb 2022"
              label="Design, Pattern"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              nostrum ea consequatur quas, dolores laudantium animi alias esse
              labore in quidem ut quibusdam aperiam officia dignissimos dicta
              vitae totam debitis?
            </CardPost>
            <CardPost
              title="Making Design System from Stratch"
              date="20 feb 2022"
              label="Design, Pattern"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              nostrum ea consequatur quas, dolores laudantium animi alias esse
              labore in quidem ut quibusdam aperiam officia dignissimos dicta
              vitae totam debitis?
            </CardPost>
          </div>
        </div>
      </div>
      <div className=" h-fit py-2 mb-24 w-screen flex justify-center">
        <div className="container px-4 ">
          <h2 className="text-2xl mt-4">Featured Work</h2>
          <div className="flex flex-col gap-8 mt-6">
            <CardProject
              imageUrl={`https://picsum.photos/id/${Math.floor(
                Math.random() * 300
              )}/600/400`}
              date="2024"
              label="Ecommerce"
              title="Ecommerce Website"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              inventore reprehenderit placeat quod corrupti nam pariatur! Ullam
              sequi tempora sunt et architecto! Facere quasi dolorem, modi
              cumque saepe nihil soluta.
            </CardProject>
            <CardProject
              imageUrl={`https://picsum.photos/id/${Math.floor(
                Math.random() * 300
              )}/600/400`}
              date="2024"
              label="Dashboard"
              title="Dashboard Website"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              inventore reprehenderit placeat quod corrupti nam pariatur! Ullam
              sequi tempora sunt et architecto! Facere quasi dolorem, modi
              cumque saepe nihil soluta.
            </CardProject>
            <CardProject
              imageUrl={`https://picsum.photos/id/${Math.floor(
                Math.random() * 300
              )}/600/400`}
              date="2024"
              label="Game"
              title="Simple memory Game"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              inventore reprehenderit placeat quod corrupti nam pariatur! Ullam
              sequi tempora sunt et architecto! Facere quasi dolorem, modi
              cumque saepe nihil soluta.
            </CardProject>
          </div>
        </div>
      </div>
    </main>
  );
}
