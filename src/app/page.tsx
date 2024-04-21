import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="hero flex items-center py-20">

        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">hey, I'm akash</h1>
          <p className="text-xl">Im a software developer based in Chandigarh.</p>
          <p className="text-xl mb-8">Welcome to my personal website.</p>
        </div>
        <div className="w-1/2">
          <Image
            src="/dharmacakra.svg"
            alt="Dharmacakra Wheel"
            width={200}
            height={200}
            className="dharmacakra-wheel w-[200px] h-[150px]"
          />
        </div>
      </section>

      <section className="featured-projects py-20">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        {/* Add your featured projects here */}
      </section>

      <section className="skills py-20">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        {/* Add your skills here */}
      </section>
    </div>
  );
}
