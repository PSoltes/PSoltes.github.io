import { Heading, ParallaxCarousel } from "components";
import { images } from "images";
import React from "react";
import { theme } from "theme";
import { HobbiesSectionWrapper } from "./styled";
interface IProps {
  id?: string;
}
const Hobbies = ({ id }: IProps) => (
  <HobbiesSectionWrapper>
    <ParallaxCarousel
      id="hobbies"
      overlayColor={theme.colors.darkBackground}
      content={images.map((image) => ({
        path: image.path,
        imageContent: (
          <div className="hobbies_carousel-content">
            <Heading level={2} colored>
              {image.title}
            </Heading>
            <p>{image.content}</p>
          </div>
        ),
      }))}
    />
  </HobbiesSectionWrapper>
);

export default Hobbies;
