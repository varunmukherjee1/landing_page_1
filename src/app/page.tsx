import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header>
        {/* Navbar */}
        <nav className = "relative container mx-auto p-6">
          <div className = "flex items-center justify-between">
            {/* logo */}
            <div className = "">
              <img src="/img/logo.svg" alt="logo" />
            </div>

            {/* menu */}

            <div className = "hidden gap-5 md:flex">
              <a href="#" className = "hover:text-darkGrayishBlue">Pricing</a>
              <a href="#" className = "hover:text-darkGrayishBlue">Product</a>
              <a href="#" className = "hover:text-darkGrayishBlue">About Us</a>
              <a href="#" className = "hover:text-darkGrayishBlue">Careers</a>
              <a href="#" className = "hover:text-darkGrayishBlue">Community</a>
            </div>

            <a href="#" className = "hidden bg-brightRed text-white px-6 py-2 rounded-full hover:bg-brightRedLight md:block">
              Get Started
            </a>
          </div>
        </nav>
      </header> 

      <main>
        {/* hero sec */}
        <section>
          <div className = "container flex flex-col-reverse items-center px-6 mx-auto mt-10 md:flex-row">
            {/* left */}
            <div className = "flex flex-col space-y-12 mb-32 md:w-1/2">
              <h1 className = "max-w-md font-bold text-4xl text-center md:text-5xl md:text-left">
                Bring everyone together to build better products.
              </h1>
              <p className = "max-w-sm text-center text-darkGrayishBlue md:text-left">
                Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view
              </p>
              <div className = "flex justify-center md:justify-start">
                <a href="#" className = "px-6 py-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight">Get Started</a>
              </div>
            </div>

            {/* right */}
            <div>
              <img src="/img/illustration-intro.svg" alt="img" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
