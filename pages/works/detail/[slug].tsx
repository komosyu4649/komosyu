import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from 'next'
import fs from 'fs'
import { WorkDetail } from 'type'

const path = 'pages/works/detail/data'

const Detail: NextPage<{ workData: WorkDetail }> = ({
  workData,
}: {
  workData: WorkDetail
}) => {
  return <div>test</div>
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
