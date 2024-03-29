import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-screen h-36 flex items-center justify-center">
      <div className="container px-4 flex flex-col gap-4 items-center justify-center">
        <div className="flex gap-4 text-primary text-4xl">
          <FaFacebookSquare />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
        <p className="mb-4">&copy; 2023 Kin. All rights reserved.</p>
      </div>
    </footer>
  );
}
