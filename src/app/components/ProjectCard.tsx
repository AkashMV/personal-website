import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  sourceCodeUrl: string;
}

export default function ProjectCard({ title, description, imageUrl, sourceCodeUrl }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-black shadow-md rounded-lg p-4 flex flex-col">
      <Image src={imageUrl} alt={title} width={400} height={250} className="rounded-lg mb-4 [260px] h-[140px]" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex-grow">
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
      </div>
      <div className="mt-auto">
        <a
          href={sourceCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:underline"
        >
          <FaGithub className="mr-2" />
          View Source Code
        </a>
      </div>
    </div>
  );
}
