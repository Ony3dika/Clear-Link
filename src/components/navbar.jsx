import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <div className="sticky bg-transparent left-0 top-5">
      <nav className='flex bg-secondary border-[1.5px] rounded-full lg:py-4 py-2 px-4 lg:px-6 border-border mt-10'>
        <div className='basis-1/5 flex items-center'>
          <img src={logo} className='h-6' alt='logo' />
          <p className='text-title font-semibold ml-3 text-lg'>
            ClearLink<span className='text-blu'>.</span>
          </p>
        </div>

        <div></div>
      </nav>
    </div>
  );
}

export default Navbar