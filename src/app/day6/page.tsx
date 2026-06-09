import { PresentationViewer } from "@/components/PresentationViewer";
import { SlideD6_1 } from "@/components/day6/SlideD6_1";
import { SlideD6_2 } from "@/components/day6/SlideD6_2";
import { SlideD6_3 } from "@/components/day6/SlideD6_3";
import { SlideD6_4 } from "@/components/day6/SlideD6_4";
import { SlideD6_5 } from "@/components/day6/SlideD6_5";
import { SlideD6_6 } from "@/components/day6/SlideD6_6";
import { SlideD6_7 } from "@/components/day6/SlideD6_7";
import { SlideD6_8 } from "@/components/day6/SlideD6_8";
import { SlideD6_9 } from "@/components/day6/SlideD6_9";
import { SlideD6_10 } from "@/components/day6/SlideD6_10";
import { SlideD6_11 } from "@/components/day6/SlideD6_11";
import { SlideD6_12 } from "@/components/day6/SlideD6_12";
import { SlideD6_13 } from "@/components/day6/SlideD6_13";
import { SlideD6_14 } from "@/components/day6/SlideD6_14";
import { SlideD6_15 } from "@/components/day6/SlideD6_15";
import { SlideD6_16 } from "@/components/day6/SlideD6_16";
import { SlideD6_17 } from "@/components/day6/SlideD6_17";

export default function Day6() {
  const slides = [
    <SlideD6_1 key="d6-1" />,
    <SlideD6_2 key="d6-2" />,
    <SlideD6_3 key="d6-3" />,
    <SlideD6_4 key="d6-4" />,
    <SlideD6_5 key="d6-5" />,
    <SlideD6_6 key="d6-6" />,
    <SlideD6_7 key="d6-7" />,
    <SlideD6_8 key="d6-8" />,
    <SlideD6_9 key="d6-9" />,
    <SlideD6_10 key="d6-10" />,
    <SlideD6_11 key="d6-11" />,
    <SlideD6_12 key="d6-12" />,
    <SlideD6_13 key="d6-13" />,
    <SlideD6_14 key="d6-14" />,
    <SlideD6_15 key="d6-15" />,
    <SlideD6_16 key="d6-16" />,
    <SlideD6_17 key="d6-17" />,
  ];

  return <PresentationViewer slides={slides} />;
}
