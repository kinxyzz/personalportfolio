export default function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={`${className} md:flex text-lg font-semibold justify-end gap-4`}
    >
      <a>Works</a>
      <a>Blog</a>
      <a>Contacs</a>
    </nav>
  );
}
