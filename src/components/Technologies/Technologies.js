import React from "react";
import { DiDart, DiJava, DiReact } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with different technologies based off of my course work at
      university and my personal intrests.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Web development</ListTitle>
          <ListParagraph>
            Experience with <br />
            react.js and andgular.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div style={{ display: "flex" }}>
          <DiJava size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>OO programming</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java and C++
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDart size="3rem" />
        <ListContainer>
          <ListTitle>Mobile development</ListTitle>
          <ListParagraph>
            Experience with <br />
            Dart and Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
