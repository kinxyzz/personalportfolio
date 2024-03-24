import { useState } from "react";
import { createPortal } from "react-dom";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Navbar from "../elements/Navbar";
import Modal from "../fragments/Modal";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const htmlClass = document.documentElement.classList;
  darkMode ? htmlClass.add("dark") : htmlClass.remove("dark");

  return (
    <>
      <header className="header gap-4">
        <Navbar className="hidden" />
        <div className="-mt-6">
          <input
            type="checkbox"
            id="darkmode-toggle"
            onChange={() => setDarkMode((darkMode) => !darkMode)}
          />
          <label id="labelDarkmode" htmlFor="darkmode-toggle" />
        </div>
        <button
          onClick={() => setShowModal((showModal) => !showModal)}
          className={`md:hidden ${
            showModal && "rotate-90"
          } transition-all ease-in-out text-slate-700 dark:text-slate-200 duration-500 text-3xl mr-4`}
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
