import { useState } from "react";
import { createPortal } from "react-dom";
import { FaBars } from "react-icons/fa";
import Modal from "../fragments/Modal";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  return (
    <>
      <header className="header">
        <nav className="hidden md:flex text-lg font-semibold justify-end gap-4">
          <a>Works</a>
          <a>Blog</a>
          <a>Contacs</a>
        </nav>
        <button
          onClick={() => setShowModal((showModal) => !showModal)}
          className="md:hidden text-3xl mr-4"
        >
          <FaBars />
        </button>
      </header>
      {createPortal(
        <Modal rightFull={showModal} setModal={setShowModal} />,
        document.body
      )}
    </>
  );
}
