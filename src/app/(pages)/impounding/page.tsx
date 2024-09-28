import Find from "@/app/(mainsite)/components/homepage/Impounded/Find"
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon"
import ImpoundingLot from "@/app/(mainsite)/components/impoundingpage/AboutUs/ImpoundingLot"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Impounding | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Impounding | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function ImpoundingPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="Impounding"/>
			<ImpoundingLot />
			<StatsRibbon />
			<Find />
	 	 </>
	 )
}