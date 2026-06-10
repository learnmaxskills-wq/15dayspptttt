import { PresentationViewer } from "@/components/PresentationViewer";
import { SlideD7_1 } from "@/components/day7/SlideD7_1";
import { SlideD7_2 } from "@/components/day7/SlideD7_2";
import { SlideD7_3 } from "@/components/day7/SlideD7_3";
import { SlideD7_4 } from "@/components/day7/SlideD7_4";
import { SlideD7_5 } from "@/components/day7/SlideD7_5";
import { SlideD7_6 } from "@/components/day7/SlideD7_6";
import { SlideD7_7 } from "@/components/day7/SlideD7_7";
import { SlideD7_8 } from "@/components/day7/SlideD7_8";
import { SlideD7_9 } from "@/components/day7/SlideD7_9";
import { SlideD7_10 } from "@/components/day7/SlideD7_10";
import { SlideD7_11 } from "@/components/day7/SlideD7_11";
import { SlideD7_12 } from "@/components/day7/SlideD7_12";
import { SlideD7_13 } from "@/components/day7/SlideD7_13";
import { SlideD7_14 } from "@/components/day7/SlideD7_14";
import { SlideD7_15 } from "@/components/day7/SlideD7_15";
import { SlideD7_16 } from "@/components/day7/SlideD7_16";
import { SlideD7_17 } from "@/components/day7/SlideD7_17";

export default function Day7() {
  const slides = [
    <SlideD7_1 key="d7-1" />,
    <SlideD7_2 key="d7-2" />,
    <SlideD7_3 key="d7-3" />,
    <SlideD7_4 key="d7-4" />,
    <SlideD7_5 key="d7-5" />,
    <SlideD7_6 key="d7-6" />,
    <SlideD7_7 key="d7-7" />,
    <SlideD7_8 key="d7-8" />,
    <SlideD7_9 key="d7-9" />,
    <SlideD7_10 key="d7-10" />,
    <SlideD7_11 key="d7-11" />,
    <SlideD7_12 key="d7-12" />,
    <SlideD7_13 key="d7-13" />,
    <SlideD7_14 key="d7-14" />,
    <SlideD7_15 key="d7-15" />,
    <SlideD7_16 key="d7-16" />,
    <SlideD7_17 key="d7-17" />,
  ];

  return <PresentationViewer slides={slides} />;
}
