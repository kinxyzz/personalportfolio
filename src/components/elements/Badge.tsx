export default function Badge({ name }: { name: string | null }) {
  return (
    <p className=" shadow-md bg-primary text-secondary w-fit rounded-md px-3 py-1 drop-shadow-md ">
      {name}
    </p>
  );
}
