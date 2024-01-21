import robot from "../assets/robot.svg"
import avatar from "../assets/avatar.svg"
import stars from "../assets/stars.svg"
import users from "../assets/users.svg";

const Hero = () => {
  return (
    <main className='lg:flex hero pt-10 lg:pt-24'>
      <section className='basis-1/2 self-center'>
        <h1 className='font-bold lg:leading-tight text-title text-3xl lg:text-start text-center lg:text-6xl'>
          Uniting the world, <br /> one video call at a time
        </h1>

        <p className='text-content mt-5 text-base lg:text-start text-center lg:text-xl'>
          Experience the future of communication with ClearLink -
          <br className='lg:block hidden' /> where crystal-clear video
          conferencing meets <br className='lg:block hidden' /> unparalleled
          simplicity.
        </p>

        <div className='lg:mt-5 mt-8 flex lg:justify-start md:justify-center justify-around'>
          <button className='bg-blu text-white rounded-full lg:text-base text-sm lg:py-4 py-3 px-3 lg:px-5'>
            Start your free trial
          </button>

          <button className='flex items-center text-blu rounded-full lg:text-base text-sm lg:py-4 py-3 px-3 lg:px-5'>
            <img src={robot} alt='robot' className='mr-2' />
            Discover AI assistant
          </button>
        </div>

        <div className='flex lg:justify-start justify-center lg:mt-5 mt-8'>
          <img src={avatar} className='h-10' alt='user-icons' />

          <div className='ml-3'>
            <div className='flex items-center'>
              <img src={stars} alt='stars' className='h-3' />
              <p className='font-bold text-sm text-title'>5.0</p>
            </div>

            <p className='text-sm'>from 3,000+ reviews</p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className='basis-1/2 self-center lg:mt-0 mt-5'>
        <img src={users} alt='users' />
      </section>
    </main>
  );
}

export default Hero