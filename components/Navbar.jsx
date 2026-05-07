export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4">

        <h1 className="text-4xl md:text-2xl font-bold gradient-text">
          Harry.dev
        </h1>

        <div className="flex gap-4 md:gap-6 mt-4 md:mt-0 text-sm md:text-base">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}
