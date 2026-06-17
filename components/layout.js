
export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen my-28 md:my-28 lg:mt-32">
        <main>{children}</main>
      </div>
    </>
  )
}
// Source - https://stackoverflow.com/a/76247186
// Posted by Jagroop
// Retrieved 2026-06-17, License - CC BY-SA 4.0

import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=%27+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GOOGLE_TAG_MANAGER_ID');
            `,
          }}
        />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-G-EX7L25BCHS"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
