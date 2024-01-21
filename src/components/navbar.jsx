import logo from "../assets/logo.svg";
import down from "../assets/down.svg";
import { useState } from "react";
import sound from "../assets/sound.svg";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  return (
    <main className='sticky bg-transparent left-0 top-5'>
      <nav className='flex bg-secondary border-[1.5px] justify-between rounded-full lg:py-4 py-2 px-4 lg:px-6 border-border mt-10'>
        <section className='flex basis-[20%] items-center'>
          <img src={logo} className='lg:h-6 h-5' alt='logo' />
          <p className='text-title font-semibold lg:ml-3 ml-1 lg:text-lg text-base'>
            ClearLink<span className='text-blu'>.</span>
          </p>
        </section>

        <section className='lg:flex hidden basis-[50%] justify-center'>
          <div className='flex items-center mx-3 font-semibold text-content'>
            <p>Products</p>
            <img src={down} alt='down' />
          </div>

          <div className='flex items-center mx-3 font-semibold text-content'>
            <p>Solutions</p>
            <img src={down} alt='down' />
          </div>

          <div className='flex items-center mx-3 font-semibold text-content'>
            <p>Resources</p>
            <img src={down} alt='down' />
          </div>

          <div className='mx-3 flex items-center font-semibold text-content'>
            <p>Pricing</p>
          </div>
        </section>

        <section className='lg:flex hidden basis-[30%] justify-end'>
          <button className='border-2 text-title lg:text-base text-xs font-semibold border-border px-6 py-3 rounded-full'>
            Talk to sales
          </button>
          <button className='bg-blu text-white lg:text-base text-xs font-semibold ml-2 px-6 py-3 rounded-full'>
            Sign up for free
          </button>
        </section>

        {/* Mobile Menu */}
        <section className='lg:hidden block'>
          <img
            src={sound}
            className='h-9'
            onClick={() => setmenu(true)}
            alt='menu'
          />

          <div
            className={`w-9/12 backdrop-blur-xl hero border-border border-2 rounded-r-2xl bg-secondary fixed transition-all duration-200 ease-linear top-0  h-screen ${
              menu ? "left-0" : "left-[-100%]"
            }`}
          >
            <div className='flex px-5 items-center pt-12 justify-between'>
              <p className='text-title font-semibold lg:ml-3 ml-1 lg:text-lg text-base'>
                ClearLink<span className='text-blu'>.</span>
              </p>

              <img
                src={sound}
                className='h-9'
                onClick={() => setmenu(false)}
                alt='menu'
              />
            </div>

            <section className='flex justify-around items-center mt-20 flex-col'>
              <div className='flex items-center my-8 font-semibold text-content'>
                <p>Products</p>
                <img src={down} alt='down' />
              </div>

              <div className='flex items-center my-8 font-semibold text-content'>
                <p>Solutions</p>
                <img src={down} alt='down' />
              </div>

              <div className='flex items-center my-8 font-semibold text-content'>
                <p>Resources</p>
                <img src={down} alt='down' />
              </div>

              <div className='flex items-center my-8 font-semibold text-content'>
                <p>Pricing</p>
              </div>
            </section>
          </div>
        </section>
      </nav>
    </main>
  );
};

export default Navbar;
