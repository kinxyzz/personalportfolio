export default function Hero() {
  return (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            expedita impedit esse totam, voluptatem tempora quos veritatis
            maiores magnam iste.
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
  );
}
