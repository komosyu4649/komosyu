import 'styles/import.scss'
import 'styles/globals.scss'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import Meta from 'comoponents/Meta'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from "../utils/gtag"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    console.log(gtag)
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete",handleRouteChange)
    }
  },[router.events])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Meta />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
