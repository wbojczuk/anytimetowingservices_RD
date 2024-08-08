import Detailing from "@/app/(mainsite)/components/homepage/Detailing/Detailing";
import DJ from "@/app/(mainsite)/components/homepage/DJ/DJ";
import DontStress from "@/app/(mainsite)/components/homepage/DontStress/DontStress";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Find from "@/app/(mainsite)/components/homepage/Impounded/Find";
import Proven from "@/app/(mainsite)/components/homepage/Proven/Proven";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon";


export default function Home() {
  return (
    <>
      <Header />
      <Proven />
      <Detailing />
      <StatsRibbon />
      <Find />
      <ServiceArea />
      <DontStress />
      <DJ />
    </>
  )
}
