import CardProject, { project } from "../fragments/CardProject";

export const data = [
  {
    id: 1,
    title: "E-commerce Website",
    imageUrl: "batikproject.webp",
    date: "2024",
    label: "WebCommerce",
    description:
      "proyek webcommerce yang saya kembangkan menekankan pada pengalaman pengguna yang optimal. Saya fokus pada desain responsif dan estetis yang meningkatkan interaksi pengguna dengan platform, serta fungsionalitas yang kuat untuk memastikan efisiensi dalam manajemen inventaris dan navigasi yang mudah. Meskipun tidak melibatkan integrasi pembayaran, proyek-proyek ini mencerminkan dedikasi saya dalam menciptakan solusi e-commerce yang sesuai dengan kebutuhan klien dan pengguna. Dengan pendekatan yang cermat dan teliti, saya berupaya menciptakan pengalaman belanja online yang menarik dan memikat.",
  },
  {
    id: 2,
    title: "Dashboard E-commerce",
    imageUrl: "https://picsum.photos/200/300",
    date: "2024",
    label: "WebCommerce",
    description:
      "proyek webcommerce yang saya kembangkan menekankan pada pengalaman pengguna yang optimal.",
  },
];

export default function WorkTile() {
  return (
    <>
      <div className="flex w-screen items-center  flex-col  ">
        <div className="container px-4 mt-8 md:mt-24">
          <h2 className="text-3xl font-bold underline">Works</h2>
          <section className="mt-12 flex flex-col gap-4 ">
            {data?.map((item: project) => (
              <CardProject key={item.id} item={item} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
