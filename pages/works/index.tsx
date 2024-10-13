import Layout from 'comoponents/Layout'
import WorksMain from 'comoponents/WorksMain'
import { GetStaticProps, NextPage } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import { WorkData, Works } from 'type'
import Meta from 'comoponents/Meta'
import { NextSeo } from 'next-seo'

const path = 'pages/works/detail/data'

const Works = ({ works }: { works: WorkData[] }) => {
  return (
    <Layout>
      <NextSeo
        title="works"
        description="これまでJamstackで制作・開発してきたwebサイト・サービスの実績を掲載しています"
      />
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

  works = works.sort((a, b) =>
    new Date(a.workData.date) > new Date(b.workData.date) ? -1 : 1
  )

  works = works.filter((work) => work.workData.public)

  return {
    props: {
      works,
    },
  }
}

export default Works
