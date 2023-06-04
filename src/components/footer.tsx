import Image from 'next/image'
import { LinkedinLogo, GithubLogo, EnvelopeSimple } from 'phosphor-react'

export default function Footer() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4 bg-navbarcolor p-4">
      <section className="flex items-center justify-center gap-2">
        <h1>Portfolio desenvolvido com: </h1>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          alt="nextjs"
          height={26}
          width={26}
          className="rounded-full bg-white"
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          alt="nextjs"
          height={26}
          width={26}
          className=""
        />
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="nextjs"
          height={26}
          width={26}
          className=""
        />
      </section>
      <div className="w-[1px] bg-white md:h-5"></div>
      <section className="flex items-center justify-center gap-1">
        <h1>Redes: </h1>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/arthur-ian-6220aa239/"
          rel="noreferrer"
        >
          <LinkedinLogo color="white" size={26} />
        </a>
        <a
          target="_blank"
          href="https://github.com/Arthur07Melo"
          rel="noreferrer"
        >
          <GithubLogo color="white" size={26} />
        </a>
        <a
          target="_blank"
          href="mailto:Arthur00melo@gmail.com"
          rel="noreferrer"
        >
          <EnvelopeSimple color="white" size={26} />
        </a>
      </section>
    </div>
  )
}
