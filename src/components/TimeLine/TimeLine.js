import React, { useState, useRef, useEffect } from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm a recent graduate from the Univeristy of Central Oklahoma where I
        majored in Software Engineering. I'm looking to continue learning about
        software development and furthering my abilities.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
