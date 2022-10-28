import Head from 'next/head'

type Props = {
  title: string
  description: string
}

// const Meta = ({ title, description }: Props) => {
const Meta = () => {
  return (
    <Head>
      {/* <title>{title} | komosyu blog</title>
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
      /> */}
      {/*  */}
      <meta name="application-name" content="" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
      <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
      <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
      <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
      <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
      <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
      <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
      {/* lato */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap"
        rel="stylesheet"
      /> */}
      {/* inter */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}

export default Meta
