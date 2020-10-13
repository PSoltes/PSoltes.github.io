import React, { PropsWithChildren } from 'react';

import * as S from './styled';

type Props = {
  backgroundImageUrl: string;
  hasOverlay?: boolean;
};

const ParallaxContainer = ({
  children,
  backgroundImageUrl,
  hasOverlay = false,
}: PropsWithChildren<Props>) => (
  <S.Wrapper url={backgroundImageUrl}>
    {hasOverlay ? <S.Overlay>{children}</S.Overlay> : children}
  </S.Wrapper>
);

export default ParallaxContainer;
