"use client";

import styled from "styled-components";
import { TitledParagraph } from "$/lib/components";

export function SingleBookDescription() {
  return (
    <$>
      <TitledParagraph title="Discovery">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
        inventore?
      </TitledParagraph>
      <TitledParagraph title="What Will You Learn">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam deserunt
        quam architecto, eaque laborum perspiciatis culpa possimus provident
        vero iure nobis ducimus sunt, iste similique reiciendis fugit quibusdam?
        Facere ducimus eos deserunt inventore nulla deleniti, necessitatibus at
        numquam voluptas recusandae ad sed minus veniam officia eveniet.
        Nesciunt labore iste asperiores ex nisi qui quam sapiente vitae maxime
        quas ea beatae deserunt unde, est voluptatum sint aliquam tenetur
        perspiciatis error cupiditate ullam! Quae est eveniet reprehenderit
        fugit doloribus, quaerat asperiores magnam consectetur vitae incidunt
        officia laboriosam! Vel atque nostrum officiis possimus magnam! Esse
        voluptatum commodi adipisci voluptatem unde nihil quae recusandae.
      </TitledParagraph>
    </$>
  );
}

const $ = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;
