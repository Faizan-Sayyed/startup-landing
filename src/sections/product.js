/** @jsx jsx */
import { jsx, Box, Grid, Flex, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import app from 'assets/images/app.png';
import Accordion from 'components/accordion/accordion';

const data = [

  {
    title: 'Fulfill recruitment needs',
    contents: (
      <div>
       HiringBird focuses exclusively on
the internship needs of college
students and the recruitment
needs of freshers.
      </div>
    ),
  },
  {
    title: `Learn more`,
    contents: (
      <div>
        Learn More...
      </div>
    ),
  },
];

const AppFeature = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              
              sx={styles.heading}
              title="Join your dream internship with the help of HiringBird."
              description="HiringBird focuses on providing
              an intuitive user experience
              through its design and sessions."
            />
            <Box sx={styles.features}>
              {data?.map(({ id, label }) => (
                <Flex key={id} as="span" sx={{ alignItems: 'flex-start' }}>
                  <Text as="span">{label}</Text>
                </Flex>
              ))}
               <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.illustration}>
            <Image sx={styles.appp} src={app} alt="workHard" />
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default AppFeature;

const styles = {
  section: {
    pt: [6, null, null, 9, 7, 4, 9],
    pb: [8, null, null, 11, 0],
  },
  grid: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ['flex', null, null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'column', 'row'],
    gridTemplateColumns: ['0.9fr 1.1fr'],
    alignItems: 'center',
  },
  
  appp: {
    height:'700px',
    width:'700px',
  },
  
  heading: {
    maxWidth: ['auto', null, null, '462px', 'auto'],
    textAlign: ['center', null, null, null, 'left'],
    mb: ['300px'],
    ml: [0],
    h1: {
      color: 'heading',
      fontSize: ['24px', null, null, '36px', '31px', 10, 40],
      lineHeight: [1.33, 1.33, 1.26, null, 1.5, 1.26],
      letterSpacing: '-1px',
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: [24, null, null, 30, 25, null, '100%'],
      top: ['4px', '8px', null, null, '4px', '8px'],
      '@media screen and (min-width: 1441px) and (max-width:1600px)': {
        maxWidth: 50,
      },
    },
    p: {
      maxWidth: 430,
    },
  },
  features: {
    columnCount: [1, 2],
    lineHeight: 2.81,
    ml: ['20px', 0],
    mt: [null, null, null, 6, 0],
    img: {
      mr: '10px',
      mt: '11px',
    },
    '+ a': {
      mt: '25px',
      ml: ['20px', 0],
    },
  },
  illustration: {
    mb: [0, null, null, null, '-150px', '-260px'],
    mt: [0],
    zIndex: '-1',
    img: {
      display: ['none', null, null, null, 'block'],
    },
    '@media screen and (max-width: 767px)': {
      background: `transparent url(${app}) no-repeat center top / cover`,
      width: '100%',
      minHeight: 310,
      marginBottom: 40,
    },
  },
  accordionGroup: {
    position: "absolute",
        width: "420px",
    height: "80px",
    left: "109px",
    top: "1680px",

      m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],

  },
};
