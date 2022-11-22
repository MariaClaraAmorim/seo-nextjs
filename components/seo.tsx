import { NextSeo, NextSeoProps } from "next-seo";

interface SeoProps {
  title?: string;
  description?: string;
  images?: Array<{
    url: string;
    width: number;
    height: number;
    alt: string;
    type: string;
  }>;
  canonical?: string;
  url?: string;
  siteName?: string;
}

export function Seo(props: SeoProps) {
  const defaultSeoParams = {
    pageTitle: "Dantas Bikes",
    url: "www.dantasbikes.com.br",
    description:
      "Compre produtos de Dantas Bikes por internet. Temos ofertas, bicicletas e mais. Faça seu pedido, pague-o online e receba onde quiser.",
    images: [
      {
        url: "https://seo-nextjs-sage.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
        type: "image/jpeg",
      },
    ],
    siteName: "Dantas Bikes",
    handle: "@DantasLojas",
    site: "@DantasLojas",
  };

  return (
    <NextSeo
      title={props.title ?? defaultSeoParams.pageTitle}
      description={props.description ?? defaultSeoParams.description}
      canonical={props.canonical ?? defaultSeoParams.url}
      openGraph={{
        url: props.url ?? defaultSeoParams.url,
        title: props.title ?? defaultSeoParams.pageTitle,
        description: props.description ?? defaultSeoParams.description,
        images:
          props.images && props.images.length > 0
            ? props.images
            : defaultSeoParams.images,
        site_name: props.siteName ?? defaultSeoParams.siteName,
      }}
      twitter={{
        handle: "@DantasLojas",
        site: "@DantasLojas",
        cardType: "summary_large_image",
      }}
    />
  );
}
