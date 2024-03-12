export default function Hero() {
  return (
    <section className="container px-4 py-2">
      <div className="w-full h-[40rem] flex flex-col md:flex-row justify-center items-center ">
        <div className=" flex-1 flex items-center  md:hidden ">
          <div className=" relative mx-auto w-[13.5rem] h-[13.5rem] rounded-full bg-[#EDF7FA]">
            <div className="absolute right-0 mx-auto w-52 h-52 rounded-full bg-blue-900 overflow-hidden flex items-center justify-center">
              <img
                className="rounded w-52 h-52"
                src={`https://picsum.photos/id/${Math.floor(
                  Math.random() * 300
                )}/600/400`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex-1 text-center md:text-left ">
          <h1 className="text-slate-700 ">
            Hi, I am Kin <br /> Front End Dev
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
          <button className="bg-[#FF6464] rounded-md text-white px-6 py-3 mt-8">
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
  );
}
