export default function About(){
    return(
        <main>
            <section className="flex flex-col items-center gap-10 p-5 md:flex-row md:gap-0 md:space-x-20 md:justify-center md:items-center md:p-20">
                <img src="/hero-about.svg" className="w-full max-w-full rounded-2xl md:max-w-none md:w-auto md:h-full" />
                <div className="space-y-5">
                    <p className="text-lg uppercase font-medium">About PrintForge</p>
                    <h1 className="text-5xl max-w-110 leading-15">Empowering makers worldwide</h1>
                    <p className="text-2xl max-w-120 leading-7">
                        Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.
                    </p>
                    <p className="text-2xl max-w-123 leading-7">
                        Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.
                    </p>
                </div>
            </section>
            <section className="flex space-x-10 justify-center items-center mt-5">
                <div className="max-w-66 space-y-2">
                    <div className="flex items-center space-x-1">
                        <img src="/stack-icon.svg" className="size-6.5"/>
                        <h2 className="">100K+ Models</h2>
                    </div>
                    <p className="text-md">Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
                </div>
                <img src="/line.svg" className="size-25"/>
                <div className="max-w-66 space-y-2">
                    <div className="flex items-center space-x-1">
                        <img src="/globe-icon.svg" className="size-6.5"/>
                        <h2 className="">Active Community</h2>
                    </div>
                    <p className="text-md">Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
                </div>
                <img src="/line.svg" className="size-25"/>
                <div className="max-w-66 space-y-2">
                    <div className="flex items-center space-x-1">
                        <img src="/flag-icon.svg" className="size-6.5"/>
                        <h2 className="">Free to Use</h2>
                    </div>
                    <p className="text-md">Most models are free to download, with optional premium features for power users.</p>
                </div>
            </section>
            <section className="min-w-full justify-center flex my-15">
                <div className="max-w-138">
                    <h1 className="text-5xl my-5">Our vision</h1>
                    <p className="text-xl">
                        At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what's possible with 3D printing.
                    </p>
                    <img src="/hor-line.svg"/>
                    <p className="text-xl">
                        Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.
                    </p>
                </div>
            </section>
        </main>
    )
}