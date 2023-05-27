import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="flex w-full flex-wrap items-center justify-between bg-alt shadow-sm shadow-gray-950">
      <h1 className="px-10 py-3 text-2xl font-bold">
        <Link href="/">Portfolio...</Link>
      </h1>
      <div className="flex flex-wrap gap-3 px-10 py-3 text-lg font-semibold">
        <a href="#about">sobre</a>
        <a href="#projects">projetos</a>
        <a href="#tecnologies">tecnologias</a>
        <a href="#contacts">contatos</a>
      </div>
    </div>
  )
}
