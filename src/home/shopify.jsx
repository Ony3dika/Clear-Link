import work from "../assets/work.svg";
import shopify from "../assets/shopify.svg";
import stars from "../assets/stars.svg";
import head from "../assets/head.svg";
import arrows from "../assets/arrows.svg";

export const Shopify = () => {
  return (
    <main className='lg:mt-48 flex lg:flex-row flex-col justify-between'>
      {/* Content */}

      <section className='lg:order-1 order-2 lg:basis-[48%]'>
        <img src={shopify} alt='shopify-logo' />
        <img src={stars} className='lg:mt-8 mt-3' alt='stars' />

        <h2 className='text-title font-medium text-md lg:text-4xl mt-5 lg:leading-normal'>
          ClearLink has upgraded our <br className='lg:block hidden' /> remote
          meetings. High-quality <br className='lg:block hidden' /> video,
          screen sharing, and <br className='lg:block hidden' /> top-notch
          security make it <br className='lg:block hidden' /> essential for our
          team.
        </h2>

        <div className='flex justify-between mt-5'>
          <div className='flex items-center'>
            <img src={head} className='h-10' alt='head-shot' />

            <div className='ml-3'>
              <p className='font-semibold lg:text-sm text-xs text-title'>
                Sarah Thompson
              </p>
              <p className='text-content lg:text-sm text-xs'>
                Project Manager, Shopify
              </p>
            </div>
          </div>

          <img
            src={arrows}
            className='lg:h-10 h-8'
            alt='directional-arrows'
          />
        </div>
      </section>

      {/* Image of Workers */}

      <section className='lg:order2 order-1 flex items-center justify-center lg:basis-[48%]'>
        <img src={work} className='h-96' alt='people-working' />
      </section>
    </main>
  );
};


export default Shopify;