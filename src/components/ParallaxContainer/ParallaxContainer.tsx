import React, { PropsWithChildren } from "react";

import * as S from "./styled";

type IProps = {
  backgroundImageUrl: string | { mobile: string; large: string; };
  overlayColor?: string;
};

const ParallaxContainer = ({
  children,
  backgroundImageUrl,
  overlayColor = "transparent",
}: PropsWithChildren<IProps>) => {
  const normalizedBackgroundImageURL = typeof backgroundImageUrl === "string" ? {
    mobile: backgroundImageUrl,
    large: backgroundImageUrl
  } : backgroundImageUrl 
  return (
    <S.ParallaxBackground url={normalizedBackgroundImageURL} overlayColor={overlayColor}>
      {children}
    </S.ParallaxBackground>
  );
};

export default ParallaxContainer;
