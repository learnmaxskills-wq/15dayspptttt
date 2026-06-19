import { PresentationViewer } from "@/components/PresentationViewer";
import { SlideD13_1 } from "@/components/day13/SlideD13_1";
import { SlideD13_2 } from "@/components/day13/SlideD13_2";
import { SlideD13_3 } from "@/components/day13/SlideD13_3";
import { SlideD13_4 } from "@/components/day13/SlideD13_4";
import { SlideD13_5 } from "@/components/day13/SlideD13_5";
import { SlideD13_6 } from "@/components/day13/SlideD13_6";
import { SlideD13_7 } from "@/components/day13/SlideD13_7";
import { SlideD13_8 } from "@/components/day13/SlideD13_8";
import { SlideD13_9 } from "@/components/day13/SlideD13_9";
import { SlideD13_10 } from "@/components/day13/SlideD13_10";
import { SlideD13_11 } from "@/components/day13/SlideD13_11";
import { SlideD13_12 } from "@/components/day13/SlideD13_12";
import { SlideD13_13 } from "@/components/day13/SlideD13_13";
import { SlideD13_14 } from "@/components/day13/SlideD13_14";
import { SlideD13_15 } from "@/components/day13/SlideD13_15";
import { SlideD13_16 } from "@/components/day13/SlideD13_16";
import { SlideD13_17 } from "@/components/day13/SlideD13_17";
import { SlideD13_18 } from "@/components/day13/SlideD13_18";
import { SlideD13_19 } from "@/components/day13/SlideD13_19";
import { SlideD13_20 } from "@/components/day13/SlideD13_20";

export default function Day13() {
  const slides = [
    <SlideD13_1 key="d13-1" />,
    <SlideD13_2 key="d13-2" />,
    <SlideD13_3 key="d13-3" />,
    <SlideD13_4 key="d13-4" />,
    <SlideD13_5 key="d13-5" />,
    <SlideD13_6 key="d13-6" />,
    <SlideD13_7 key="d13-7" />,
    <SlideD13_8 key="d13-8" />,
    <SlideD13_9 key="d13-9" />,
    <SlideD13_10 key="d13-10" />,
    <SlideD13_11 key="d13-11" />,
    <SlideD13_12 key="d13-12" />,
    <SlideD13_13 key="d13-13" />,
    <SlideD13_14 key="d13-14" />,
    <SlideD13_15 key="d13-15" />,
    <SlideD13_16 key="d13-16" />,
    <SlideD13_17 key="d13-17" />,
    <SlideD13_18 key="d13-18" />,
    <SlideD13_19 key="d13-19" />,
    <SlideD13_20 key="d13-20" />,
  ];

  return <PresentationViewer slides={slides} />;
}
