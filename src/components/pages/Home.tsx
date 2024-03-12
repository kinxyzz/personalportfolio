import Content from "../templates/Content";
import Header from "../templates/Header";
import Hero from "../templates/Hero";

export default function Home() {
  return (
    <div className="flex w-screen items-center flex-col">
      <Header />
      <Hero />
      <Content />
    </div>
  );
}
