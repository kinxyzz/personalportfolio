export default function Modal({
  rightFull,
  setModal,
}: {
  rightFull: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={` ${
        rightFull ? "right-0" : "-right-full"
      } top-0 fixed md:hidden h-screen w-3/4 z-10 bg-[#EDF7FA] text-slate-800 duration-500 p-2`}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore
      accusamus nulla soluta adipisci earum quidem voluptas asperiores explicabo
      perferendis.
      <button
        className="bg-[#FF6464] text-white px-6 py-3 mt-8"
        onClick={() => setModal(false)}
      >
        Click
      </button>
    </div>
  );
}
