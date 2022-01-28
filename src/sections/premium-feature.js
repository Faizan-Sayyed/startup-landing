/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import messenger from 'assets/images/messenger.png';

const data = [

  {
    title: 'Improve session time',
    contents: (
      <div>
        CollegeKing focuses on
        improving the time spent by users
        in each session through its
        experience and content.
      </div>
    ),
  },
  {
    title: `Learn more`,
    contents: (
      <div>
       Learn More.....
      </div>
    ),
  },
];

const PremiumFeature = () => {
  return (
    <section id="product" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <div className='bord'sx={styles.bord}>
          <Box as="figure" sx={styles.illustration}>
            <Image sx={styles.imm} src={messenger} alt="messenger" />
          </Box></div>
          <Box sx={styles.rightContent}>
            <SectionHeading

              sx={styles.heading}
              title="Find the best suited colleges for you with CollegeKing."
              description="Ease the overwhelming process of searching through colleges with the help of CollegeKing’s minimalistic design."
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  imm:{
    height:'419px',
    width:'832px',
  },
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      '1fr 431px',
      '1fr 530px',
      '1fr 550px',
    ],
  },
  heading: {
    textAlign: ['left', null, null, 'center', 'left'],
    ml: [null, null, null, 'auto'],
    maxWidth: [null, null, null, 520, 660],
    h1: {
      fontSize: [null, null, null, 10, 8, 10, 40],

    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [-6, null, null, -8, 0],
   top:"120px",
   height:"500px"


  },
  bord :{
    borderRadius:7000,
    backgroundcolor: "#353448",

height: "400px",
screenLeft: "164px",
screenTop: "1223px",
rightContent:"500px",

  },
  
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
  },
};
