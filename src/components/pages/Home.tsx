import Content from "../templates/Content";
import Footer from "../templates/Footer";
import Header from "../templates/Header";
import Hero from "../templates/Hero";

export default function Home() {
  return (
    <div className="flex w-screen items-center flex-col">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}
