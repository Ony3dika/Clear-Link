import check from "../assets/check.svg";
import video from "../assets/video-call.png"

const Path = () => {
  return (
    <main className='lg:mt-48 lg:flex justify-between mt-10'>
      <section className='basis-[47%]'>
        <h1 className='text-title font-semibold text-lg lg:text-5xl mt-2 lg:mt-5'>
          Ready to clear the path to perfect communication?
        </h1>

        <section className='px-5 mt-10'>
          {/* One */}
          <div className='flex items-center my-3'>
            <img src={check} className='h-5' alt='check-icon' />
            <p className='text-content ml-3 text-sm lg:text-lg'>
              30 days free trial
            </p>
          </div>

          {/* Two */}

          <div className='flex items-center my-3'>
            <img src={check} className='h-5' alt='check-icon' />
            <p className='text-content ml-3 text-sm lg:text-lg'>
              Cancel at any time
            </p>
          </div>

          {/* Three */}

          <div className='flex items-center my-3'>
            <img src={check} className='h-5' alt='check-icon' />
            <p className='text-content ml-3 text-sm lg:text-lg'>
              Access to all features
            </p>
          </div>

          {/* Four */}

          <div className='flex items-center my-3'>
            <img src={check} className='h-5' alt='check-icon' />
            <p className='text-content ml-3 text-sm lg:text-lg'>
              Personalized onboarding
            </p>
          </div>
        </section>

        <section className='mt-5 flex lg:block justify-center '>
          <button className='border-2 text-title lg:text-base text-xs font-semibold border-border lg:px-6 px-4 py-3 lg:py-4 rounded-full'>
            Talk to sales
          </button>
          <button className='bg-blu text-white lg:text-base text-xs font-semibold ml-2 lg:px-6 px-4 py-3 lg:py-4 rounded-full'>
            Start your free trial
          </button>
        </section>
      </section>

      <section className='basis-[47%] relative lg:mt-0 mt-5'>
        <img src={video} className='lg:absolute h-auto -right-28 top-0' alt='laptop' />
      </section>

    </main>
  );
};

export default Path;
