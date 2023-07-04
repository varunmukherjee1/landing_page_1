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

            <div className = "hidden md:flex gap-5">
              <a href="#" className = "hover:text-darkGrayishBlue">Pricing</a>
              <a href="#" className = "hover:text-darkGrayishBlue">Product</a>
              <a href="#" className = "hover:text-darkGrayishBlue">About Us</a>
              <a href="#" className = "hover:text-darkGrayishBlue">Careers</a>
              <a href="#" className = "hover:text-darkGrayishBlue">Community</a>
            </div>

            <a href="#" className = "hidden md:block bg-brightRed text-white px-6 py-2 rounded-full hover:bg-brightRedLight">
              Get Started
            </a>
          </div>
        </nav>
      </header>    
    </>
  )
}
