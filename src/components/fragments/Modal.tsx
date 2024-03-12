export default function Modal({
  rightFull,
  setModal,
  children,
}: {
  rightFull: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  return (
    <div
      className={` ${
        rightFull ? "right-4" : "-right-full"
      } top-16 fixed md:hidden h-fit py-2 px-4 rounded-md w-fit z-10 bg-[#EDF7FA] text-slate-800 duration-500 p-2`}
    >
      {children}

      <button
        className="bg-[#FF6464] rounded-md text-white px-6 py-2 mt-8"
        onClick={() => setModal(false)}
      >
        Close
      </button>
    </div>
  );
}
