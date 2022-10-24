import 'styles/import.scss'
import 'styles/globals.scss'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
