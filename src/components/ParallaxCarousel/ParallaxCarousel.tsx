import { Parallax } from 'components';
import React, { ReactNode, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as S from './styled';


interface ParallaxCarouselProps {
  id?: string;
  content: {
    path: string;
    imageContent: ReactNode | ReactNode[]
  }[]
}
const ParallaxCarousel = ({content, id}: ParallaxCarouselProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      const nextIndex = (selectedImageIndex + 1) % content.length;
      setSelectedImageIndex(nextIndex);
    }, 5000);
  }, [selectedImageIndex, content]);

  return (
    <div id={id} style={{height: '100vh'}}>
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
            >
              {content[selectedImageIndex].imageContent}
            </Parallax>
          </S.ParallaxWrapperForCarousel>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default ParallaxCarousel;
