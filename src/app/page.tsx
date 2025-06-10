export default function Home() {
  return(
    <main className="min-h-screen">
      <section className="hero-section md:justify-between items-center lg:mx-60">
        <div className="hero-left font-albert uppercase md:flex lg:justify-between">
          <div className="p-10 lg:max-w-155">
            <p className="font-medium tracking-widest text-md pb-5">Your go-to platform for 3D printing files</p>
            <h1 className="text-6xl normal-case leading-17">Discover what's possible with 3D printing</h1>
            <h2 className="normal-case font-normal text-3xl mt-5 mb-15">Join our community of creators and explore a vast library of user-submitted models.</h2>
            <button className="text-xl uppercase border-2 font-semibold p-2 px-3 hover:bg-neutral-300 hover:cursor-pointer">Browse models</button>
          </div>
            <img src="hero.svg" className="hero-right md:ml-auto md:max-w-100 lg:max-w-full lg:ml-auto"/>
        </div>


      </section>
    </main>
  )
}
