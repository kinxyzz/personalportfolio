export default function CardPost({
  title,
  date,
  label,
  children,
}: {
  title: string;
  date: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-2 w-full h-72 overflow-hidden bg-white md:py-4 md:px-10 rounded-md">
      <h3 className="text-xl font-semibold mt-4 ">{title}</h3>
      <div className="flex items-center gap-2 mt-4">
        <p className="text-sm font-light">{date}</p>
        <p className="text-sm font-light">|</p>
        <p className="text-sm font-light">{label}</p>
      </div>
      <p className="mt-4">{children}</p>
    </div>
  );
}
