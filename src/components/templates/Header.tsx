import { useState } from "react";
import { createPortal } from "react-dom";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Navbar from "../elements/Navbar";
import Modal from "../fragments/Modal";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  return (
    <>
      <header className="header">
        <Navbar className="hidden" />
        <button
          onClick={() => setShowModal((showModal) => !showModal)}
          className={`md:hidden ${
            showModal && "rotate-90"
          } transition-all ease-in-out duration-500 text-3xl mr-4`}
        >
          {showModal ? <GrClose className="" /> : <FaBars />}
        </button>
      </header>
      {createPortal(
        <Modal rightFull={showModal} setModal={setShowModal}>
          <Navbar className="flex flex-col" />
        </Modal>,
        document.body
      )}
    </>
  );
}
