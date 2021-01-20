import { Grid, Hidden, IconButton } from "@material-ui/core";
import { ChevronRight, ChevronLeft } from "@material-ui/icons";
import { Heading } from "components";
import React, { PropsWithChildren, ReactNode } from "react";
import { theme } from "theme";

import * as S from "./styled";

type Props = {
  backgroundImageUrl: string;
  overlayColor?: string;
  title?: string;
  content?: ReactNode | ReactNode[];
  bigTitle?: boolean;
  onLeftClick?: () => void;
  onRightClick?: () => void;
};

const ParallaxContainer = ({
  children,
  backgroundImageUrl,
  overlayColor = 'transparent',
  bigTitle,
  title,
  content,
  onLeftClick,
  onRightClick,
}: PropsWithChildren<Props>) => {
  const parallaxInsides = children ? (
    <>
      <div style={{ height: theme.toolbar.height }}></div>
      {children}
    </>
  ) : (
      <Grid container style={{ height: "100%" }}>
        <Hidden mdDown>
          <Grid item container md={3} alignContent="center" justify="center">
            {onLeftClick && (
              <IconButton color="primary" onClick={onLeftClick} aria-label="right-carousel">
                <ChevronLeft fontSize="large" />
              </IconButton>
            )}
          </Grid>
        </Hidden>
        <Grid item direction="column" xs={12} md={6} component={S.ContentWrapper}>
          <div style={{ height: theme.toolbar.height }}></div>
          <Heading level={bigTitle ? 1 : 2} colored>{title}</Heading>
          <p className="parallax-paragraph">{content}</p>
        </Grid>

        <Hidden mdDown>
          <Grid item container md={3} alignContent="center" justify="center">
            {onRightClick && (
              <IconButton color="primary" onClick={onRightClick} aria-label="right-carousel">
                <ChevronRight fontSize="large" />
              </IconButton>
            )}
          </Grid>
        </Hidden>
      </Grid>
  );
  return (
    <S.ParallaxBackground url={backgroundImageUrl} overlayColor={overlayColor}>
      {parallaxInsides}
    </S.ParallaxBackground>
  );
};

export default ParallaxContainer;
