import Content from "../templates/Content";
import Hero from "../templates/Hero";

export default function Home() {
  return (
    <div className="flex w-screen items-center flex-col">
      {/* <Header /> */}
      <Hero />
      <Content />
    </div>
  );
}
