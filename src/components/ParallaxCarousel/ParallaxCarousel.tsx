import { Parallax } from "components";
import React, { ReactNode, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as S from "./styled";

interface ParallaxCarouselProps {
  id?: string;
  content: {
    path: string;
    imageContent: {
      title: string;
      content?: ReactNode | ReactNode[];
    };
  }[];
}
const ParallaxCarousel = ({ content, id }: ParallaxCarouselProps) => {
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
              hasOverlay
              backgroundImageUrl={content[selectedImageIndex].path}
              title={content[selectedImageIndex].imageContent.title}
              content={content[selectedImageIndex].imageContent.content}
              onLeftClick={() => {
                const nextIndex = (selectedImageIndex - 1) > -1 ? selectedImageIndex - 1 : content.length - 1;
                setSelectedImageIndex(nextIndex);
              }}
              onRightClick={() => {
                const nextIndex = (selectedImageIndex + 1) % content.length;
                setSelectedImageIndex(nextIndex);
              }}
            />
          </S.ParallaxWrapperForCarousel>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default ParallaxCarousel;
