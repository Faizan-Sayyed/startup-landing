/** @jsx jsx */
import { jsx, Box, Grid, Flex, Container, Image, Heading,Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import app from 'assets/images/app.png';

import  arrow from 'assets/images/icons/right-arrow.png';

const AppFeature = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box  sx={styles.rightContent}>
            <SectionHeading
              
              sx={styles.heading}
              title="Join your dream internship with the help of HiringBird."
              description="HiringBird focuses on providing
              an intuitive user experience
              through its design and sessions."
            />
          

              <div sx={styles.bigbox}>

<Box sx={styles. accordion}>
           <heading as="h3"  sx={styles.title}> Improve session time
         
        </heading ><br/><br/>
        <text >
        HiringBird focuses exclusively on
the internship needs of college
students and the recruitment
needs of freshers.
        </text>
        </Box><br/>

        <Box  onClick={function() {
          window.open("http://www.hiringbird.in")
      }} sx={styles. accordion}>
        <Heading as="h3"  sx={styles.title}> Learn More
        <Image src={arrow}
                    sx={styles.arrow}
                  ></Image>
         </Heading >

        </Box>

</div>

              
           
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
  arrow: {
    marginLeft:"220px",
    position:"relative",
    '@media screen and (max-width:303px) ': {
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
     },
  

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
  //  width:'900px',
  //  margin:"-30px",
    // marginBottom:"170px",
    height:"400px",

  },
  
  heading: {
    maxWidth: ['auto', null, null, '462px', 'auto'],
    textAlign: ['center', null, null, null, 'left'],
    margin:"10px",
    mb: ['300px'],
    ml: [],
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
    // mb: [0, null, null, null, '-150px', '-260px'],
    // mt: [0],
    // width:"590px",
    // height:"700px",
    
   
    
    // zIndex: '-1',
    // img: {
    //   display: ['none', null, null, null, 'block'],
    // },
    // '@media screen and (max-width: 767px)': {
    //   background: `transparent url(${app}) no-repeat center top / cover`,
    //   width: '100%',
    //   minHeight: 310,
    //   marginBottom: 40,
    // }, '@media screen and (max-width: 1022px)': {
    //   background: `transparent url(${app}) no-repeat center top / cover`,
    //   width: '80%',
    //   minHeight: 310,
    //   marginBottom: 40,
    // },
  },
  bigbox:{
    // position:"absolute",
    // width:"400px",
    // top:"1760px",
    // margin:"-0px",
    //   },
    // '@media screen  and (max-width: 425px)': {
    //   top:"4950px",
      marginTop:"-280px",
      marginLeft:"-10px",
          },

};
