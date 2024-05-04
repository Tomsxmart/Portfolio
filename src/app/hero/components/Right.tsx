import Image from "next/image";
import Link from "next/link";
import styles from "./Right.module.css";

import { LinkedIn, X, GitHub } from "@/components/icons";

const socials = [
  {
    name: "github",
    Icon: GitHub,
    url: "https://github.com/Tomsxmart",
  },
  {
    name: "linkedin",
    Icon: LinkedIn,
    url: "https://www.linkedin.com/in/toms-en%C4%A3elis-878654213/",
  },
  { name: "x", Icon: X, url: "https://twitter.com/xmarEUW" },
];

const Right = () => {
  return (
    <div className="absolute right-0 top-[50%] mr-8 translate-y-[-50%] flex flex-col">
      {socials.map((social, key) => {
        const Icon = social.Icon;
        return (
          <Link key={key} target="_blank" href={social.url}>
            <div className={styles.wrapper + " my-4 "}>
              <Icon />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Right;
