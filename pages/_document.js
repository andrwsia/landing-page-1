import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                    integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
                    crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@200;300;500;600;700&display=swap" rel="stylesheet" />
                {/* Global site tag (gtag.js) - Google Analytics */}
                <script>
                    async src={`https://www.googletagmanager.com/gtag/js?id=G-6QZQ32GWGF`}
                </script>
                <script>
                    dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-6QZQ32GWGF');
                    `,
                    }}
                </script>
                </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Html>
                )
}