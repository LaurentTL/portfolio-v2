import Head
    from "next/head";
export default function Layout({ children }) {

    return (
        <>
            <Head>
                <link rel="prelaod" href="/public/assets/fonts/Migra/migra-stylesheet.css" as="font" />
                <link rel="preload" href="/public/assets/fonts/Neue_Montreal/neue-montreal-stylesheet.css" as="font" />
            </Head>
            {children}
        </>
    );
}