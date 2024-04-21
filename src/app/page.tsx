import Image from "next/image";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="hero flex items-center py-20">

        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">hey Im akash</h1>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="CipherVault"
            description="CipherVault is a desktop password application built using ElectronJS"
            imageUrl="/cipher.jpg"
            sourceCodeUrl="https://github.com/AkashMV/cipher-vault"
          />
          <ProjectCard
            title="Music Genre Classifier"
            description="A Machine Learning Project that classifies 30 sec .wav music files into 10 respective genres"
            imageUrl="/mgc.jpg"
            sourceCodeUrl="https://github.com/AkashMV/Music-Genre-Classifier"
          />
          {/* Add more ProjectCard components for other projects */}
        </div>
      </section>

      <section className="skills py-20">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        {/* Add your skills here */}
      </section>
    </div>
  );
}
