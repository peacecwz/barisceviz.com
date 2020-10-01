import React from "react";
import {DefaultSeo} from 'next-seo'

const SeoConfig = {
    titleTemplate: "%s | Baris Ceviz",
    description: 'Jedi Software Engineer',
    noIndex: false,
    openGraph: {
        type: 'website',
        locale: 'tr_TR',
        url: 'https://barisceviz.com',
        site_name: 'Baris Ceviz',
    },
    twitter: {
        handle: '@PeaceCwz',
        site: '@PeaceCwz',
        cardType: 'summary_large_image',
    },
}

export const RootSeo = () => <DefaultSeo {...SeoConfig} />
