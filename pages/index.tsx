import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ice Cream Template</title>
        <link rel="icon" href="/ice-cream-fav.png" />
      </Head>

      <Navbar />
      <main className='flex flex-col justify-between' style={{
            backgroundImage: `url(${'scoop2.jpeg'})`,
            backgroundAttachment: 'fixed',
            backgroundRepeat: "no-repeat",
          }}>
        {/* Home */}
        <div id='home' className='flex flex-row'>
          <div className='flex flex-col h-[92vh] w-[50%] justify-center items-center bg-white
            md:h-[100vh]'
          >
            <div className='flex flex-col'>
              <h1 className='text-3xl font-bold py-1 px-2
                md:text-[3rem]
                lg:text-[3.5rem] lg:py-2'
              >
                Ice Cream E-Shop
              </h1>
              <p className='text-slate-600 px-2'>
                A template created by <a href='https://cosiamo.dev' className='text-green-800'> cosiamo.dev</a>
              </p>
            </div>
          </div>
          <div className='flex flex-col bg-green-200 h-[92vh] w-[50%] justify-center items-end
            md:h-[100vh]
            xl:pb-[5rem]'
          >
            <div className='w-[10rem] h-[15rem]
              md:w-[20rem] md:h-[30rem]
              lg:w-[25rem] lg:h-[35rem]
              xl:w-[27rem] xl:h-[35rem]'
            >
              <img 
                src='ice_cream_w_hand.png'
              />
            </div>
          </div>
        </div>

        {/* About */}
        <div id='about' className="flex flex-row w-full justify-center h-[60vh]
        md:h-[80vh]" 
        >
          <div className="flex flex-col justify-center align-center text-center">
            <div className="flex flex-col w-[20rem] h-[23rem] bg-slate-100/70 items-center rounded-xl
              md:w-[35rem] md:h-[22rem]
              lg:w-[40rem]"
            >
              <h1 className="titles">About Us</h1>
              <p className="px-2 md:text-lg lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="px-2 pb-1 md:text-lg lg:text-xl"><br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>

        {/* Flavors */}
        <div id='flavors' className='flex flex-col bg-slate-100 justify-center items-center'>
          <div className='flex h-[8vh] items-end'>
            <h1 className="titles">Flavors</h1>
          </div>
          <div className='flex flex-col w-full justify-center items-center h-[40vh]
            md:flex-row md:justify-around md:h-[50vh]'
          >
            <Carousel />
          </div>
        </div>

        {/* Contact */}
        <div id='contact' className='flex justify-center w-full h-[80vh] bg-gradient-to-r from-purple-500 to-pink-500'>
          <div className='flex flex-col justify-center'>
            <div className="flex flex-col w-[20rem] h-[23rem] bg-slate-100/70 items-center rounded-xl
              md:w-[35rem] md:h-[25rem]
              lg:w-[45rem]"
            >
              <h1 className="titles">Contact Us</h1>
              <form className='flex flex-col'>
                  <div className='flex flex-col pb-2
                    md:flex-row md:justify-between md:pb-3'
                  >
                    <div className='flex flex-col justify-center items-center px-2 py-1'>
                      <label className='text-lg font-bold'>Name</label>
                      <input type='text' className='w-[13rem] h-[1.5rem]'></input>
                    </div>
                    <div className='flex flex-col justify-center items-center px-2 py-1'>
                      <label className='text-lg font-bold'>Email</label>
                      <input type='text' className='w-[13rem] h-[1.5rem]'></input>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center px-2 py-1'>
                      <label className='text-lg font-bold pb-1'>Questions?</label>
                      <input type='text' className='w-[15rem] h-[8rem]
                        lg:w-[30rem] lg:h-[13rem]'
                      ></input>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
