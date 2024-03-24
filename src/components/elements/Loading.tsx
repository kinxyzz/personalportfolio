export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div>
        <div className="flex gap-2 items-center justify-center ">
          <div className="h-8 w-8 bg-primary dark:bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-primary dark:bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-primary dark:bg-slate-300 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
