import Detailing from "@/app/(mainsite)/components/homepage/Detailing/Detailing";
import DontStress from "@/app/(mainsite)/components/homepage/DontStress/DontStress";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Find from "@/app/(mainsite)/components/homepage/Impounded/Find";
import Junk from "@/app/(mainsite)/components/homepage/Junk/Junk";
import Mechanic from "@/app/(mainsite)/components/homepage/Mechanic/Mechanic";
import Proven from "@/app/(mainsite)/components/homepage/Proven/Proven";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon";
import Storage from "@/app/(mainsite)/components/homepage/Storage/Storage";


export default function Home() {
  return (
    <>
      <Header />
      <Proven />
      {/* <Mechanic />
      <Storage /> */}
      <Detailing />
      <StatsRibbon />
      <Find />
      <ServiceArea />
      {/* <Junk /> */}
      <DontStress />
    </>
  )
}
