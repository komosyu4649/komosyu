import Layout from 'comoponents/Layout'
import WorksMain from 'comoponents/WorksMain'
import { GetStaticProps, NextPage } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import { Works } from 'type'

const path = 'pages/works/detail/data'

const Works: NextPage<Works> = ({ works }) => {
  return (
    <Layout>
      <WorksMain works={works} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path)
  let works = files.map((fileName) => {
    const slug = fileName.replace(/\.json$/, '')
    const fileContent = fs.readFileSync(`${path}/${fileName}`, 'utf-8')
    const workData = JSON.parse(fileContent)
    return {
      workData,
      slug,
    }
  })

  return {
    props: {
      works,
    },
  }
}

export default Works
