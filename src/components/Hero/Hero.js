import Link from "next/link";
import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <Button>Learn More</Button>
    </a>
  );
});

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey, I'm <br />
        Nicholas Spaulding
      </SectionTitle>
      <SectionText>
        I'm a software developer from Oklahoma City, OK. Thank you for visiting
        my website and please scroll down to learn more.
      </SectionText>
      <Link href="#projects">
        <MyButton />
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;

//onClick={() => (window.location = "https://google.com")}
