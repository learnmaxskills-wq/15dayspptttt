import { PresentationViewer } from "@/components/PresentationViewer";
import { Slide0 } from "@/components/Slide0";
import { Slide1 } from "@/components/Slide1";
import { Slide2 } from "@/components/Slide2";
import { Slide3 } from "@/components/Slide3";
import { Slide4 } from "@/components/Slide4";
import { Slide5 } from "@/components/Slide5";
import { Slide6 } from "@/components/Slide6";
import { Slide7 } from "@/components/Slide7";
import { Slide8 } from "@/components/Slide8";
import { Slide9 } from "@/components/Slide9";
import { Slide10 } from "@/components/Slide10";
import { Slide11 } from "@/components/Slide11";
import { Slide12 } from "@/components/Slide12";
import { Slide13 } from "@/components/Slide13";
import { Slide14 } from "@/components/Slide14";
import { Slide15 } from "@/components/Slide15";
import { Slide16 } from "@/components/Slide16";
import { Slide17 } from "@/components/Slide17";
import { Slide18 } from "@/components/Slide18";
import { Slide19 } from "@/components/Slide19";

export default function Home() {
  const slides = [
    <Slide0 key="slide0" />,
    <Slide1 key="slide1" />,
    <Slide2 key="slide2" />,
    <Slide3 key="slide3" />,
    <Slide4 key="slide4" />,
    <Slide5 key="slide5" />,
    <Slide6 key="slide6" />,
    <Slide7 key="slide7" />,
    <Slide8 key="slide8" />,
    <Slide9 key="slide9" />,
    <Slide10 key="slide10" />,
    <Slide11 key="slide11" />,
    <Slide12 key="slide12" />,
    <Slide13 key="slide13" />,
    <Slide14 key="slide14" />,
    <Slide15 key="slide15" />,
    <Slide16 key="slide16" />,
    <Slide17 key="slide17" />,
    <Slide18 key="slide18" />,
    <Slide19 key="slide19" />,
  ];

  return <PresentationViewer slides={slides} />;
}
