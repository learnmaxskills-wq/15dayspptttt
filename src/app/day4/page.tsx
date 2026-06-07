import { PresentationViewer } from "@/components/PresentationViewer";
import { SlideD4_1 } from "@/components/day4/SlideD4_1";
import { SlideD4_2 } from "@/components/day4/SlideD4_2";
import { SlideD4_3 } from "@/components/day4/SlideD4_3";
import { SlideD4_4 } from "@/components/day4/SlideD4_4";
import { SlideD4_5 } from "@/components/day4/SlideD4_5";
import { SlideD4_6 } from "@/components/day4/SlideD4_6";
import { SlideD4_7 } from "@/components/day4/SlideD4_7";
import { SlideD4_8 } from "@/components/day4/SlideD4_8";
import { SlideD4_9 } from "@/components/day4/SlideD4_9";
import { SlideD4_10 } from "@/components/day4/SlideD4_10";
import { SlideD4_11 } from "@/components/day4/SlideD4_11";
import { SlideD4_12 } from "@/components/day4/SlideD4_12";
import { SlideD4_13 } from "@/components/day4/SlideD4_13";
import { SlideD4_14 } from "@/components/day4/SlideD4_14";
import { SlideD4_15 } from "@/components/day4/SlideD4_15";
import { SlideD4_16 } from "@/components/day4/SlideD4_16";
import { SlideD4_17 } from "@/components/day4/SlideD4_17";
import { SlideD4_18 } from "@/components/day4/SlideD4_18";
import { SlideD4_19 } from "@/components/day4/SlideD4_19";
import { SlideD4_20 } from "@/components/day4/SlideD4_20";
import { SlideD4_21 } from "@/components/day4/SlideD4_21";

export default function Day4() {
  const slides = [
    <SlideD4_1 key="d4-1" />,
    <SlideD4_2 key="d4-2" />,
    <SlideD4_3 key="d4-3" />,
    <SlideD4_4 key="d4-4" />,
    <SlideD4_5 key="d4-5" />,
    <SlideD4_6 key="d4-6" />,
    <SlideD4_7 key="d4-7" />,
    <SlideD4_8 key="d4-8" />,
    <SlideD4_9 key="d4-9" />,
    <SlideD4_10 key="d4-10" />,
    <SlideD4_11 key="d4-11" />,
    <SlideD4_12 key="d4-12" />,
    <SlideD4_13 key="d4-13" />,
    <SlideD4_14 key="d4-14" />,
    <SlideD4_15 key="d4-15" />,
    <SlideD4_16 key="d4-16" />,
    <SlideD4_17 key="d4-17" />,
    <SlideD4_18 key="d4-18" />,
    <SlideD4_19 key="d4-19" />,
    <SlideD4_20 key="d4-20" />,
    <SlideD4_21 key="d4-21" />,
  ];

  return <PresentationViewer slides={slides} />;
}
