import Ad from "@/app/(mainsite)/components/homepage/Ad/Ad";
import Detailing from "@/app/(mainsite)/components/homepage/Detailing/Detailing";
import DJ from "@/app/(mainsite)/components/homepage/DJ/DJ";
import DontStress from "@/app/(mainsite)/components/homepage/DontStress/DontStress";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Find from "@/app/(mainsite)/components/homepage/Impounded/Find";
import InlineReviews from "@/app/(mainsite)/components/homepage/InlineReviews/InlineReviews";
import Junk from "@/app/(mainsite)/components/homepage/Junk/Junk";
import Mechanic from "@/app/(mainsite)/components/homepage/Mechanic/Mechanic";
import Pressure from "@/app/(mainsite)/components/homepage/Pressure/Pressure";
import Proven from "@/app/(mainsite)/components/homepage/Proven/Proven";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon";
import Storage from "@/app/(mainsite)/components/homepage/Storage/Storage";


export default function Home() {
  return (
    <>
      <Header />
      {/* <Ad /> */}
      <Proven />
      {/* <Pressure /> */}
      {/* <Mechanic />*/}
      {/* <Storage /> */}
      <InlineReviews />
      <Detailing />
      <StatsRibbon />
      {/* <Find /> */}
      <ServiceArea />
      {/* <Junk /> */}
      {/* <DJ /> */}
      <DontStress />
    </>
  )
}
