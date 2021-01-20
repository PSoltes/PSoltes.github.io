import React, { PropsWithChildren} from "react";

import * as S from "./styled";

type IProps = {
  backgroundImageUrl: string;
  overlayColor?: string;
};

const ParallaxContainer = ({
  children,
  backgroundImageUrl,
  overlayColor = 'transparent',
}: PropsWithChildren<IProps>) => {
  return (
    <S.ParallaxBackground url={backgroundImageUrl} overlayColor={overlayColor}>
      {children}
    </S.ParallaxBackground>
  );
};

export default ParallaxContainer;
