const Navbar = () => {
  return (
    <nav className="bg-strong-violet">
      <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="/vite.svg" alt="Landing Page" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
