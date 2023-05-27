import Image, { StaticImageData } from 'next/image'

export default function ProjectCard(props: {
  image: StaticImageData
  title: string
  description: string
  techs: string[]
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 rounded-lg md:items-center">
      <Image
        src={props.image}
        width={673}
        alt="projectImage"
        className="shrink-0 rounded-md"
      />
      <div className="space-y-5 md:w-6/12">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <h1 className="text-2xl font-bold">Descrição</h1>
        <p className="">{props.description}</p>
        <div className="flex flex-wrap gap-2 text-lg">
          {props.techs.map((tech, key) => (
            <h2
              className="cursor-default rounded-md bg-gray-900 px-2 py-1 transition-colors hover:bg-gray-800"
              key={key}
            >
              {tech}
            </h2>
          ))}
        </div>
      </div>
    </div>
  )
}
