import { Heading, Parallax } from "components";
import React from "react";
import { theme } from "theme";
import { IntroSectionWrapper } from "./styled";

interface IProps {
  id?: string;
}

const Intro = ({id}: IProps) => (
  <IntroSectionWrapper id={id}>
    <Parallax
      overlayColor={theme.colors.darkBackground}
      backgroundImageUrl={{
        large: "/main-page-background.jpg",
        mobile: "/main-page-background_mobile.jpg",
      }}
    >
      <div className="intro_content">
        <Heading level={1} colored>
          Hello
        </Heading>
        <p>
          To base of <span style={{ color: "#E44D26" }}>HTML</span> and{" "}
          <span style={{ color: "#2965F1" }}>CSS</span> add love to{" "}
          <span
            style={{
              color: "#fff",
              backgroundColor: "#007ACC",
              borderRadius: 3,
              padding: 2,
            }}
          >
            typescript.
          </span>{" "}
          Gently whisk in{" "}
          <span
            style={{
              color: "#000",
              backgroundColor: "#B52E31",
              borderRadius: 3,
              padding: 2,
            }}
          >
            Angular
          </span>{" "}
          and <span style={{ color: "#61DBFB" }}>React</span>. Bake for few
          years at <span style={{ color: "#36B9C1" }}>FIIT STU</span> and
          voila.... you got me. (I also love baking.... :D)
        </p>
      </div>
    </Parallax>
  </IntroSectionWrapper>
);

export default Intro;
