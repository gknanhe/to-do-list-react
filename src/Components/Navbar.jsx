import logo from "../assets/icons/logo.svg";

const Navbar = () => {
  return (
    // <header className="w-full  bg-slate-800 backdrop-blur-sm">
    //   <nav class="flex flex-wrap items-center justify-start p-5 ">
    //     <div className="w-14 mx-8">
    //       <img src={logo} alt="logo" />
    //     </div>
    //     <div className="text-[25px] font-bold text-indigo-500">To Do List</div>
    //   </nav>
    // </header>

    <header className="sticky top-0 z-30 h-[80px] bg-gray-900/50 backdrop-blur backdrop-filter">
      <div className="mx-auto max-w-8xl xl:px-8">
        <div className="flex items-center justify-center gap-6 border-b border-gray-800 px-4 py-5 sm:px-6 lg:px-8 xl:px-0">
          <a className="block" href="/react">
            <div className="w-10 ">
              <img src={logo} alt="logo" />
            </div>
          </a>
          <div className="text-[25px] font-bold text-indigo-500">
            To Do List
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
