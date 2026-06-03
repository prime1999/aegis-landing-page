const Navbar = () => {
  return (
    <nav className="w-full md:w-10/12 mx-auto flex items-center justify-between p-4">
      <h1 className="font-jura text-xl font-bold tracking-widest">AEGIS</h1>
      <div className="flex items-center gap-6 text-sm font-geist-mono">
        <button className="text-white rounded-full py-2 px-4 bg-linear-to-t from-cyan-700 to-cyan-800 cursor-pointer duration-800 transition hover:from-cyan-800 hover:to-cyan-700">
          Contact us
        </button>
        <button className="hidden md:block rounded-full px-4 py-2 bg-cyan-950 text-white cursor-pointer duration-500 transition hover:bg-cyan-900">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
