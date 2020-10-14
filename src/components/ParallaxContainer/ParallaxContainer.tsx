import React, { PropsWithChildren, ReactNode } from 'react';
import { theme } from 'theme';

import * as S from './styled';

type Props = {
  backgroundImageUrl: string;
  hasOverlay?: boolean;
  title?: string;
  content?: ReactNode | ReactNode[];
  bigTitle?: boolean;
};

const ParallaxContainer = ({
  children,
  backgroundImageUrl,
  hasOverlay = false,
  title,
  content,
}: PropsWithChildren<Props>) => {
  const parallaxInsides = children ? (
    <>
      <div style={{ height: theme.toolbar.height }}></div>
      {children}
    </>
  ) : (
    <S.ContentWrapper>
      <div style={{ height: theme.toolbar.height }}></div>
      <h1 className="parallax-title">
        {title}
      </h1>
      <p className="parallax-paragraph">
        {content}
      </p>
    </S.ContentWrapper>
  );
  return (
    <S.ParallaxBackground url={backgroundImageUrl}>
      {hasOverlay ? <S.Overlay>{parallaxInsides}</S.Overlay> : parallaxInsides}
    </S.ParallaxBackground>
  );
};

export default ParallaxContainer;
