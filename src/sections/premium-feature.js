/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import messenger from 'assets/images/messenger.png';
import  arrow from 'assets/images/icons/right-arrow.png';


const PremiumFeature = () => {
  return (
    <section id="product" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          
          <Box as="figure" sx={styles.illustration}>
            <Image sx={styles.imm} src={messenger} alt="messenger" />
          </Box>
          <Box  >
            <SectionHeading

              sx={styles.heading}
              title="Find the best suited colleges for you with CollegeKing."
              description="Ease the overwhelming process of searching through colleges with the help of CollegeKing’s minimalistic design."
            />
           <Box sx={styles. accordion}>
           <heading as="h3"  sx={styles.title}> Improve session time
         
        </heading ><br/><br/>
        <text >
        CollegeKing focuses on
        improving the time spent by <br/> users
        in each session through its
        experience and content.
        </text>
        </Box><br/>
        <Box  onClick={function() {
          window.open("http://www.collegeking.in")
      }} sx={styles. accordion}>
        <heading as="h3"  sx={styles.title}> Learn More
       
         </heading >
        <img src={arrow}
                    sx={styles.arrow}
                  ></img>

        </Box>
            {/* <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box> */}
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  arrow: {
marginLeft :"350px",
'@media screen and (max-width:425px) ': {
  marginLeft :"190px",
  },'@media screen and (max-width:320px) ': {
    marginLeft :"40px",
    
    },'@media screen and (max-width:303px) ': {
      marginLeft :"100px",
      
      },'@media screen and (max-width:375px) ': {
        marginLeft :"150px",
        
        },
  },

  title:{
    color: 'heading',
    fontWeight: 500,
    fontSize: [1, null, null, 2],
    letterSpacing: [0, null, null, null, 'heading'],
    lineHeight: [1.5, 1.8],
  },

  accordion: {
   
    backgroundColor: '#F6F8FB',
    borderRadius: 10,
    cursor:"pointer",
    p: ['15px', '20px 30px', '30px 45px', '20px 25px', '20px 35px'],
    '&.is-open': {
      backgroundColor: '#fff',
      boxShadow: '0px 9px 30px rgba(69, 88, 157, 0.08)',
    }},


  imm:{
    height:'400px',
    // width:'750px',
    // margin:"-10px",
  //     '@media screen and (max-width:666px) ': {
  //   maxWidth: "500px",
  // }, '@media screen and (max-width:320px) ': {
  //   maxWidth: "250px",
  // },
   
  },
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: 'center',
    // '@media screen  ': {
    // margin:-7,
    // },
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
   margin:"20px",
    // screenLeft:"900px",
    textAlign: 'left',
    ml: [null, null, null, 'auto','30px'],
    maxWidth: [null, null, null, 520, 660],
    h1: {
      fontSize: [null, null, null, 10, 8, 10, 40],
     

    },
    p: {
      fontSize: [null, null, null, 2],
     
    },
  },
  illustration: {
    // mb: [-6, null, null, -8, 0],
   
  //  width:"600px",
  //  marginRight:"10px",
   
  //  '@media screen and (max-width:602px) ': {
  //   maxWidth: 200,
  // },

  },
  bord :{
    borderRadius:7000,
    backgroundcolor: "#353448",

height: "400px",
// screenLeft: "164px",
// screenTop: "1223px",
// rightContent:"500px",

  },
  
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
    margin:"10px",
  },
};
