import Document, {Head, Main, NextScript} from 'next/document';
import React from 'react';

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
            <Head>
                <meta name="description"
                      content="Baris Ceviz Software Engineer @Trendyol, Microsoft Student Partner"/>
                <meta name="author" content="Baris Ceviz"/>
                <meta http-equiv="cleartype" content="on"/>
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
