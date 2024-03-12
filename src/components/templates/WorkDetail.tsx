import { useParams } from "react-router-dom";

export default function WorkDetail() {
  let { id } = useParams();

  return (
    <div className="flex flex-col items-center ">
      <div className="container px-4">
        <h2 className="text-4xl font-bold mb-2">Web Ecommerce</h2>
        <div className="flex gap-6 items-center mb-4">
          <p className="px-4 py-1 rounded-lg bg-slate-800 font-semibold text-white ">
            2024
          </p>
          <p className="text-gray-400 text-xl">WebCommerce</p>
        </div>
        <div className="flex justify-center md:w-3/5 mx-auto rounded-md mt-2">
          <img
            src={"/batikproject.webp"}
            width={"100%"}
            height={"100%"}
            alt=""
          />
        </div>
        <div className="lg:w-3/4">
          <h3 className="text-2xl font-bold mb-2">Description</h3>
          <p>
            proyek webcommerce yang saya kembangkan menekankan pada pengalaman
            pengguna yang optimal. Saya fokus pada desain responsif dan estetis
            yang meningkatkan interaksi pengguna dengan platform, serta
            fungsionalitas yang kuat untuk memastikan efisiensi dalam manajemen
            inventaris dan navigasi yang mudah. Meskipun tidak melibatkan
            integrasi pembayaran, proyek-proyek ini mencerminkan dedikasi saya
            dalam menciptakan solusi e-commerce yang sesuai dengan kebutuhan
            klien dan pengguna. Dengan pendekatan yang cermat dan teliti, saya
            berupaya menciptakan pengalaman belanja online yang menarik dan
            memikat.
          </p>
          <h3 className="text-2xl font-bold mt-2">Tech Stack</h3>
          <div className="flex gap-2 flex-wrap mt-2">
            <p className="border-2 border-slate-600 w-fit rounded-md px-3 py-1 drop-shadow-md ">
              NextJs
            </p>
            <p className="border-2 border-slate-600 w-fit rounded-md px-3 py-1 drop-shadow-md ">
              React
            </p>
            <p className="border-2 border-slate-600 w-fit rounded-md px-3 py-1 drop-shadow-md ">
              Tanstack Query
            </p>
            <p className="border-2 border-slate-600 w-fit rounded-md px-3 py-1 drop-shadow-md ">
              Supabase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
