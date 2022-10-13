import { GetServerSideProps, GetStaticProps } from 'next'
import fs from 'fs'

// const files = fs.readdirSync('data')

const Detail = () => {
  return <div>test</div>
}

// export const getStaticProps: GetStaticProps = async () => {
//   const files = fs.readdirSync('data')
//   console.log(files)
//   let work = files.map((workName) => {
//     const slug = workName
//   })
// }

export default Detail
