import { Grid, Hidden, IconButton } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Parallax } from "components";
import React, { ReactNode, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as S from "./styled";

interface ParallaxCarouselProps {
  id?: string;
  overlayColor?: string;
  content: {
    path: string | { mobile: string; large: string };
    imageContent: ReactNode | ReactNode[];
  }[];
}
const ParallaxCarousel = ({
  content,
  id,
  overlayColor,
}: ParallaxCarouselProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const nextIndex = (selectedImageIndex + 1) % content.length;
  //     setSelectedImageIndex(nextIndex);
  //   }, 5000);
  // }, [selectedImageIndex, content]);

  return (
    <div id={id} style={{ height: "100vh" }}>
      <TransitionGroup>
        <CSSTransition
          classNames="slide"
          timeout={{ enter: 1100, exit: 1100 }}
          key={selectedImageIndex}
        >
          <S.ParallaxWrapperForCarousel>
            <Parallax
              key={selectedImageIndex}
              backgroundImageUrl={content[selectedImageIndex].path}
              overlayColor={overlayColor}
            >
              <Grid container style={{ height: "100%" }}>
                <Hidden mdDown>
                  <Grid
                    item
                    container
                    md={3}
                    alignContent="center"
                    justify="center"
                  >
                    {
                      <IconButton
                        color="primary"
                        onClick={() => {
                          const nextIndex =
                            selectedImageIndex - 1 > -1
                              ? selectedImageIndex - 1
                              : content.length - 1;
                          setSelectedImageIndex(nextIndex);
                        }}
                        aria-label="right-carousel"
                      >
                        <ChevronLeft fontSize="large" />
                      </IconButton>
                    }
                  </Grid>
                </Hidden>
                <Grid item direction="column" xs={12} md={6}>
                  {content[selectedImageIndex].imageContent}
                </Grid>

                <Hidden mdDown>
                  <Grid
                    item
                    container
                    md={3}
                    alignContent="center"
                    justify="center"
                  >
                    {
                      <IconButton
                        color="primary"
                        onClick={() => {
                          const nextIndex =
                            (selectedImageIndex + 1) % content.length;
                          setSelectedImageIndex(nextIndex);
                        }}
                        aria-label="right-carousel"
                      >
                        <ChevronRight fontSize="large" />
                      </IconButton>
                    }
                  </Grid>
                </Hidden>
              </Grid>
            </Parallax>
            <div className="parallax-carousel_dot-container">
              {content.map((item, index) => (
                <div
                  className={`parallax-carousel_dot ${
                    index === selectedImageIndex &&
                    "parallax-carousel_dot_selected"
                  }`}
                ></div>
              ))}
            </div>
          </S.ParallaxWrapperForCarousel>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default ParallaxCarousel;
