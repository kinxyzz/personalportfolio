export default function Test() {
  const price = 10000000;
  return (
    <div className="flex flex-col  text-white h-screen">
      <h3>test</h3>
      <div>
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </div>
    </div>
  );
}
