import { Grid, withStyles, WithStyles } from "@material-ui/core";
import { Heading } from "components";
import React from "react";
import { theme } from "theme";
import { CareerSectionWrapper } from "./styled";
interface IProps extends WithStyles<typeof styles> {
  id?: string;
}

const styles = (theme) => ({
    mobile_1: {
        order: 1,
        [theme.breakpoints.up('md')]: {
            order: 2
        },
    },
    mobile_2: {
        order: 2,
        [theme.breakpoints.up('md')]: {
            order: 1
        },
    }
})
const Career = ({ id, classes }: IProps) => (
  <CareerSectionWrapper id={id}>
    <Heading level={3}>Education</Heading>
    <Grid container spacing={4} justify="center">
      <Grid item md={9}>
        <p>
          I am currently studying second year of masters studies at FIIT STU. I
          finished bachelors studies with honors (cum laude) in 2019. During
          study i mostly specialize in web app developement and bio-inspired
          optimization algorithms.
        </p>
      </Grid>
      <Grid item md={3}>
        <img alt="FIIT STU logo" src="/fiit_logo.png" />
      </Grid>
    </Grid>
    <Grid container spacing={4} justify="center">
      <Grid item md={3} className={classes.mobile_2}>
        <picture>
          <source
            media={`(min-width: ${theme.breakpoints.mobile + 1}px)`}
            srcSet="/frameworklogos.png"
          />
          <img
            src="frameworklogos.png"
            alt="Web frameworks logos i've worked with"
          />
        </picture>
      </Grid>
      <Grid item md={9} className={classes.mobile_1}>
        <Heading level={3}>Career</Heading>
        <p>
          My programming work experience started in 2019 at the start of my
          master studies. As i was always interested in web design and
          developement I found my place at{" "}
          <a href="https://amcef.sk/">
            <strong>AMCEF</strong>
          </a>{" "}
          , small company founded at FIIT by FIIT students. There i improved my
          skills with Angular and React. I worked on few projects like custom
          e-shop for ski centers, website for transfers providers or site for
          finance advisors. During my time there i acquired my love to
          Typescript and React. As i continue to work there i strive to be
          better at design and be on lookout for new technologies such as
          Svelte. For more structured info, please, see my{" "}
          <a href="/CV_placeholder.pdf" target="_blank">
            CV
          </a>{" "}
          or head on out to my linked.in.
        </p>
      </Grid>
    </Grid>
  </CareerSectionWrapper>
);

export default withStyles(styles)(Career);
