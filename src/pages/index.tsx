import FirstSection from '@/components/firstSection'
import Layout from '@/components/layout'
import Projects from '@/components/projects'
import SecondSection from '@/components/secondSection'

export default function Home() {
  return (
    <div>
      <Layout>
        <FirstSection />
        <SecondSection />
        <Projects />
      </Layout>
    </div>
  )
}
