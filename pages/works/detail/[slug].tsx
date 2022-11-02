import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from 'next'
import fs from 'fs'
import { WorkDetail } from 'type'
import WorkDetailMain from 'comoponents/WorkDetailMain'
import Layout from 'comoponents/Layout'
import Meta from 'comoponents/Meta'
import { ArticleJsonLd, NextSeo } from 'next-seo'

const path = 'pages/works/detail/data'

const Detail: NextPage<{ workData: WorkDetail }> = ({
  workData,
}: {
  workData: WorkDetail
}) => {
  return (
    <Layout>
      <NextSeo title={workData.name} description={workData.description} />
      <ArticleJsonLd
        type="Blog"
        url="https://komosyu.dev/"
        title={workData.name}
        images={[
          `https://komosyu.dev/asset/${workData.thumbnail}`
        ]}
        datePublished={workData.date}
        authorName="komosyu"
        description={workData.description}
      />
      <WorkDetailMain workData={workData} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (params) => {
  const context = params.params!
  const file = fs.readFileSync(`${path}/${context.slug}.json`, 'utf-8')
  const workData = JSON.parse(file)
  return {
    props: {
      workData,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path)
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.json/, ''),
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export default Detail
