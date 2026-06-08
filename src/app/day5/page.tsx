import { PresentationViewer } from "@/components/PresentationViewer";
import { SlideD5_1 } from "@/components/day5/SlideD5_1";
import { SlideD5_2 } from "@/components/day5/SlideD5_2";
import { SlideD5_3 } from "@/components/day5/SlideD5_3";
import { SlideD5_4 } from "@/components/day5/SlideD5_4";
import { SlideD5_5 } from "@/components/day5/SlideD5_5";
import { SlideD5_6 } from "@/components/day5/SlideD5_6";
import { SlideD5_7 } from "@/components/day5/SlideD5_7";
import { SlideD5_8 } from "@/components/day5/SlideD5_8";
import { SlideD5_9 } from "@/components/day5/SlideD5_9";
import { SlideD5_10 } from "@/components/day5/SlideD5_10";
import { SlideD5_11 } from "@/components/day5/SlideD5_11";
import { SlideD5_12 } from "@/components/day5/SlideD5_12";
import { SlideD5_13 } from "@/components/day5/SlideD5_13";
import { SlideD5_14 } from "@/components/day5/SlideD5_14";
import { SlideD5_15 } from "@/components/day5/SlideD5_15";
import { SlideD5_16 } from "@/components/day5/SlideD5_16";
import { SlideD5_17 } from "@/components/day5/SlideD5_17";
import { SlideD5_18 } from "@/components/day5/SlideD5_18";
import { SlideD5_19 } from "@/components/day5/SlideD5_19";

export default function Day5() {
  const slides = [
    <SlideD5_1 key="d5-1" />,
    <SlideD5_2 key="d5-2" />,
    <SlideD5_3 key="d5-3" />,
    <SlideD5_4 key="d5-4" />,
    <SlideD5_5 key="d5-5" />,
    <SlideD5_6 key="d5-6" />,
    <SlideD5_7 key="d5-7" />,
    <SlideD5_8 key="d5-8" />,
    <SlideD5_9 key="d5-9" />,
    <SlideD5_10 key="d5-10" />,
    <SlideD5_11 key="d5-11" />,
    <SlideD5_12 key="d5-12" />,
    <SlideD5_13 key="d5-13" />,
    <SlideD5_14 key="d5-14" />,
    <SlideD5_15 key="d5-15" />,
    <SlideD5_16 key="d5-16" />,
    <SlideD5_17 key="d5-17" />,
    <SlideD5_18 key="d5-18" />,
    <SlideD5_19 key="d5-19" />,
  ];

  return <PresentationViewer slides={slides} />;
}
