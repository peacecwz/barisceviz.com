import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import siteConfig from '../data/site';

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
            <Head>
                <meta name="description" content={siteConfig.description}/>
                <meta name="author" content={siteConfig.siteName}/>
                <link
                    href="https://fonts.googleapis.com/css?family=Inter:400,600,700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        );
    }
}

export default MyDocument;
