import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Junlee</p>
        <p className="mt-1 text-lg text-gray-300">
          Frontend Developer, Game ProjectManager and a Student
        </p>

        <p className="mt-4 text-gray-400">
          프론트엔드 개발자가 되기위해 공부하고있습니다.<br /> 
          게임 기획과 PM 공부 발자취는 아래 블로그에 :)
    
        </p>

        <Link href="https://blog.naver.com/lj9806" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            블로그 읽으러 가기
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>

        <Link href="https://toon.at/donate/638210408292330133" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            작업물이 마음에 드시나요? 주노에게 커피값 후원하기!
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>

      <div className="hidden custom:block">
        <Image
          src="/assests/avatar.png"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
