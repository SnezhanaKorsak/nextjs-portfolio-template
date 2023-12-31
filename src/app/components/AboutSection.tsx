"use client";
import { useState, useTransition } from "react";
import Image from "next/image";

import TabButton from "./TabButton";
import { TAB_DATA } from "@/app/constants";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const tabData = TAB_DATA.find((t) => t.id === tab)?.content || "";

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  if (isPending) {
    return <span>Loading...</span>;
  }

  return (
    <section className="text-white" id="about">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image
          src="/images/about-image.png"
          alt="about-image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white texxt-base md:text-lg">
            I am a web developer with a passion for creating interactive and
            responsive web applications. I have experience working with
            JavaScript, React, Redux, Next, Node.js, Express, PostgreSQL, HTML,
            CSS, and Git. I am a quick learner and I am always looking to expand
            my knowledge and skill set. I am a team player and I am excited to
            work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">{tabData}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
