import Head from 'next/head'

type Props = {
  title: string
  description: string
}

const Meta = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title} | komosyu blog</title>
      <meta name="description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="" />
      <meta name="msapplication-TileColor" content="" />
      <meta name="theme-color" content="" />
      <link rel="mask-icon" href="g" color="" />
      <meta name="msapplication-TileColor" content="" />
      <meta name="theme-color" content=""></meta>
      <meta name="msapplication-TileColor" content="" />
      <meta name="theme-color" content="" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />
      <meta property="og:title" content={`${title} | komosyu blog`} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={`${title} | komosyu blog`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="Twitter:site" content="" />
      <meta name="twitter:image" content="" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0"
      />
      {/* lato */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap"
        rel="stylesheet"
      /> */}
      {/* inter */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans+JP:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}

export default Meta
