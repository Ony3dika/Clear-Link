import robot from "../assets/robot.svg"
import avatar from "../assets/avatar.svg"
import stars from "../assets/stars.svg"
import users from "../assets/users.png";

const Hero = () => {
  return (
    <main className='lg:flex hero pt-10 lg:pt-24'>
      <section className='basis-1/2 self-center'>
        <h1 className='font-bold lg:leading-tight text-title text-2xl lg:text-start text-center lg:text-6xl'>
          Uniting the world, <br /> one video call at a time
        </h1>

        <p className='text-content mt-5 text-sm lg:text-start text-center lg:text-xl'>
          Experience the future of communication with ClearLink -
          <br className='lg:block hidden' /> where crystal-clear video
          conferencing meets <br className='lg:block hidden' /> unparalleled
          simplicity.
        </p>

        <div className='lg:mt-5 mt-8 flex lg:justify-start justify-center '>
          <button className='bg-blu text-white rounded-full lg:text-base text-sm lg:py-4 py-3 px-8 lg:px-5'>
            <span className='lg:inline hidden'>Start your free trial</span>

            <span className='lg:hidden inline'>Free Trial</span>
          </button>

          <button className='flex items-center text-blu rounded-full ml-3 lg:text-base text-sm lg:py-4 py-3 px-4 lg:px-5'>
            <img src={robot} alt='robot' className='mr-2 ' />
            <span className='lg:inline hidden'>Discover AI assistant</span>
            <span className='lg:hidden inline'>Discover AI</span>
          </button>
        </div>

        <div className='flex lg:justify-start justify-center lg:mt-5 mt-8'>
          <img src={avatar} className='h-10' alt='user-icons' />

          <div className='ml-3'>
            <div className='flex items-center'>
              <img src={stars} alt='stars' className='h-3' />
              <p className='font-bold lg:text-sm text-xs text-title'>5.0</p>
            </div>

            <p className='lg:text-sm text-xs'>from 3,000+ reviews</p>
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