import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Noto+Sans&display=swap" />
      <title>Academy</title>
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content="A statically generated blog example for Litrex academy" />
      <meta property="og:image" content="/image.png" />
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js" />
      <script dangerouslySetInnerHTML={{
        __html: 'function onSuccess(id) {\n' +
          '          $(`#mlb2-${id} .Contact-success`).show();\n' +
          '          $(`#mlb2-${id} .Contact-form`).hide();\n' +
          '      }\n' +
          '\n' +
          '      function ml_webform_success_2166978() {\n' +
          '          onSuccess(2166978)\n' +
          '      }\n' +
          '\n' +
          '      function ml_webform_success_1561498() {\n' +
          '          onSuccess(1561498)\n' +
          '      }'
      }} />
    </Head>
  )
}
