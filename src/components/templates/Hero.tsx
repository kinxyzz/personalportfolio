import { FaDownload } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="container px-4 py-2 mb-8">
      <div className="w-full h-[40rem] flex flex-col-reverse duration-300 transition-all ease-in-out md:flex-row justify-center items-center ">
        <div className="flex-1 text-center md:text-left  ">
          <h1 className="text-slate-700 ">
            Hi, I am Kin <br /> Web Developer
          </h1>
          <p className="mt-8">
            I'm a frontend developer focused on creating engaging and responsive
            user interfaces. With skills in HTML, CSS, and JavaScript, I craft
            captivating web designs with seamless user experiences. I also have
            experience using frameworks like React and Next.js to build modern,
            dynamic, and interactive web applications. Additionally. With a
            dedication to learning and growing, I'm ready to bring added value
            to every project I work on.
          </p>
          <button className="bg-primary drop-shadow-sm rounded-md text-white px-6 py-3 mt-8">
            <div className="flex items-center gap-2">
              <FaDownload className="animate-bounce" /> <p>Download Resume</p>
            </div>
          </button>
        </div>
        <div className="flex-1  ">
          <div className=" relative mx-auto w-[13.5rem] h-[13.5rem] md:w-[19rem] md:h-[19rem] rounded-full bg-primary drop-shadow-md">
            <div className="absolute right-0 mx-auto w-52 h-52 md:w-72 md:h-72 rounded-full bg-blue-900 overflow-hidden flex items-center justify-center">
              <img
                className="rounded w-52 h-52 md:w-72 md:h-72"
                src={`https://picsum.photos/id/${Math.floor(
                  Math.random() * 300
                )}/600/400`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
