export default function Badge({
  name,
  height = 1,
}: {
  name: string | null;
  height?: number;
}) {
  return (
    <p
      className={`shadow-md bg-primary  text-secondary w-fit rounded-md px-3 py-${height.toString()} drop-shadow-md`}
    >
      {name}
    </p>
  );
}
