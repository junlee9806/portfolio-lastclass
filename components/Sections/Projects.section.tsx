import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="px-3 my-16 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="flex flex-col items-center justify-center gap-10 my-8 sm:flex-row">
        <Link href="https://github.com/junlee9806" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center w-full h-full px-2 font-medium text-center rounded-lg bg-primary">
              <p className="text-xl font-semibold">My github </p>
              <p>My study portfolio</p>
            </div>
          </a>
        </Link>

        <Link href="https://github.com/junlee9806/rcp-next" passHref>
          <a
            className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center justify-center w-full h-full px-2 font-medium text-center rounded-lg bg-primary">
              <p className="text-xl font-semibold">리액트 프로그래밍 실습</p>
              <p>React component library built with Tailwind CSS</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
