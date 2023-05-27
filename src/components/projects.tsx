import calculatorapp from '../../public/reactCalculatorApp.png'
import reviwersapp from '../../public/reviwersapp.png'
import taskfullapp from '../../public/taskfullapp.png'
import vercepapp from '../../public/vercepapp.png'
import ProjectCard from './projectCard'

export default function Projects() {
  return (
    <div className="flex flex-col justify-center gap-3 overflow-hidden bg-alt p-16">
      <h1 className="mb-20 text-3xl font-semibold underline">PROJETOS</h1>
      <ProjectCard
        image={taskfullapp}
        title="Taskfull"
        description={
          'Site de gerenciamento de tarefas, inspirado na semana nlw setup da rocketseat. Utilizando banco de dados em postgreSQL, gerenciado pela ORM prismaJS e API criada em express.'
        }
        techs={[
          'Typescript',
          'React',
          'Tailwindcss',
          'nextJS',
          'expressJS',
          'PrismaORM',
        ]}
      />

      <div className="h-[1px] w-full bg-gray-800/30" />

      <ProjectCard
        image={vercepapp}
        title="VerCep App"
        description={
          'Site feito utilizando NextJS, com base no consumo da API Viacep, que mostra os dados de cada localidade de acordo com o CEP inserido.'
        }
        techs={['Typescript', 'React', 'Tailwindcss', 'nextJS']}
      />

      <div className="h-[1px] w-full bg-gray-800/30" />

      <ProjectCard
        image={reviwersapp}
        title="Revieweres webpage"
        description={
          'Site feito em nextjs, utilizando talwindcss e typescript, bem como alguns componentes extras (radix UI e outros). Por enquanto apenas frontend desenvolvido.'
        }
        techs={['Typescript', 'React', 'Tailwindcss', 'nextJS']}
      />

      <div className="h-[1px] w-full bg-gray-800/30" />

      <ProjectCard
        image={calculatorapp}
        title="Calculadora React"
        description={
          'Calculadora simples feita em react, utilizando o template de projetos do viteJS. Utilizados também: Html, Css, Javascript.'
        }
        techs={['Typescript', 'React', 'CSS3', 'Vite']}
      />
    </div>
  )
}
