import {
  FaBars,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import CardPost from "./components/templates/CardPost";
import CardProject from "./components/templates/CardProject";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex w-screen items-center flex-col">
        <header className="header">
          <nav className="hidden md:flex text-lg font-semibold justify-end gap-4">
            <a>Works</a>
            <a>Blog</a>
            <a>Contacs</a>
          </nav>
          <button className="md:hidden text-3xl mr-4">
            <FaBars />
          </button>
        </header>
        <section className="container px-4">
          <div className="w-full h-[40rem] flex flex-col md:flex-row justify-center items-center ">
            <div className=" flex-1 flex items-center  md:hidden ">
              <div className=" relative mx-auto w-[13.5rem] h-[13.5rem] rounded-full bg-[#EDF7FA]">
                <div className="absolute right-0 mx-auto w-52 h-52 rounded-full bg-blue-900"></div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left ">
              <h1 className="text-slate-700 ">
                Hi, I am Kinxyzz, <br /> Front End Dev
              </h1>
              <p className="mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam expedita impedit esse totam, voluptatem tempora quos
                veritatis maiores magnam iste.
              </p>
              <button className="bg-[#FF6464] text-white px-6 py-3 mt-8">
                Download Resume
              </button>
            </div>
            <div className="flex-1 hidden md:block ">
              <div className=" relative mx-auto w-[19rem] h-[19rem] rounded-full bg-[#EDF7FA]">
                <div className="absolute right-0 mx-auto w-72 h-72 rounded-full bg-blue-900"></div>
              </div>
            </div>
          </div>
        </section>
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Libero nostrum ea consequatur quas, dolores laudantium animi
                  alias esse labore in quidem ut quibusdam aperiam officia
                  dignissimos dicta vitae totam debitis?
                </CardPost>
                <CardPost
                  title="Making Design System from Stratch"
                  date="20 feb 2022"
                  label="Design, Pattern"
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Libero nostrum ea consequatur quas, dolores laudantium animi
                  alias esse labore in quidem ut quibusdam aperiam officia
                  dignissimos dicta vitae totam debitis?
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
                  inventore reprehenderit placeat quod corrupti nam pariatur!
                  Ullam sequi tempora sunt et architecto! Facere quasi dolorem,
                  modi cumque saepe nihil soluta.
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
                  inventore reprehenderit placeat quod corrupti nam pariatur!
                  Ullam sequi tempora sunt et architecto! Facere quasi dolorem,
                  modi cumque saepe nihil soluta.
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
                  inventore reprehenderit placeat quod corrupti nam pariatur!
                  Ullam sequi tempora sunt et architecto! Facere quasi dolorem,
                  modi cumque saepe nihil soluta.
                </CardProject>
              </div>
            </div>
          </div>
        </main>
        <footer className="w-screen h-36 flex items-center justify-center">
          <div className="container px-4 flex flex-col gap-4 items-center justify-center">
            <div className="flex gap-4 text-4xl">
              <FaFacebookSquare />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedin />
            </div>
            <p>Copyright ©2020 All rights reserved </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
