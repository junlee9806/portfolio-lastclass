import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import type { NextComponentType } from "next";

import Link from "next/link";
import { VscGithubAlt } from "../Misc/Icons.collection";

import type { linkProps } from "../../@types/prop.types";

interface HeaderProps {}

const TextLink: NextComponentType<HeaderProps, {}, linkProps> = ({
  text,
  url,
}) => {
  return (
    <a
      href={url}
      className="cursor-pointer rounded-md px-4 py-[0.10rem] text-xl text-gray-200 duration-100 hover:bg-zinc-800"
    >
      {text}
    </a>
  );
};

const Header: NextComponentType<HeaderProps> = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header
      className={`font-jost py-8 sm:flex sm:flex-row sm:items-center sm:justify-between ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <p className="hidden sm:flex sm:flex-row sm:gap-x-4">
        <TextLink text="Home" url="#" />
        <TextLink text="Skills" url="#skills" />
        <TextLink text="Projects" url="#projects" />
        <TextLink text="Contact" url="#contact" />
      </p>

      <Link href="https://github.com/junlee9806" passHref>
        <a
          className="float-right p-2 mr-2 text-2xl text-white transition-all duration-150 rounded-lg bg-zinc-800 ring-zinc-300 hover:ring-2 sm:float-none sm:mr-0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github-repo"
        >
          <VscGithubAlt />
        </a>
      </Link>

      <button
        className="float-right p-2 mr-2 text-2xl text-white transition-all duration-150 rounded-lg bg-zinc-800 ring-zinc-300 hover:ring-2 sm:float-none sm:mr-0"
        onClick={toggleDarkMode}
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </header>
  );
};

export default Header;
