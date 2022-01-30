/** @jsx jsx */
import { jsx, Container, Grid, Box, Flex, Heading, Text } from 'theme-ui';
import Image from 'components/image';
import connect from 'assets/images/support.png';
import rightArrow from 'assets/images/icons/right-arrow.png';
import { useState } from 'react';

const data = [
  {
    id: 1,
    icon: connect,
    title: 'Become an Investor for Skilzen',
    description: `Help us grow our services by becoming an investor for skilzen.`,

  },
  {
    id: 2,
    icon: connect,
    title: 'Join the Skilzen Team',
    description: `Joing our team and extend your support for the cause we all love.`,
  },
];

var email = "faixanfra";

const Connect = () => {

  
  const [flip, setflip] = useState(false);
  const changetext = () => {
    let val = flip;
    (val === data) ?
      setflip(email) : setflip(data);
  }

  return (



    <Box as="section" id="connect" sx={styles.section}>
      <div
      onClick={() => setflip(!flip)}>
      </div>

      <div className='hello'> 
      "faixanfra";
        <div className='back '>{data.title}
        </div>
        {flip ? data.title : data.description}
      </div>
      <Container>
        <Grid sx={styles.grid}  >
          {data?.map((item) => (
            <Flex key={item.id} sx={styles.supportItem} onClick={() => setflip(!flip)}>
              <Flex as="figure" sx={styles.media} onClick={() => setflip(!flip)}>
                <Image src={item?.icon} alt={item?.title} onClick={() => setflip(!flip)} />
              </Flex>
              <Box sx={styles.content} onClick={changetext}>
                <Heading>
                  {item?.title} <Image src={rightArrow} alt="rightArrow"/>
                </Heading>

                <Text as="p">{item?.description}  </Text>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Connect;

const styles = {
  section: {
    pt: [9, null, null, 10, 11, 11, 11],
    pb: [7, null, null, 8, null, 9, 10],
  },
  hello:{

    
  },
  grid: {
    gap: ['30px 30px'],
    justifyContent: 'center',
    cursor: 'pointer',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      null,
      'repeat(2, 540px)',
    ],
  },
  supportItem: {
    backgroundColor: '#F6F8FB',
    borderRadius: 7,
    flexDirection: ['column', null, null, null, null, 'row'],
    alignItems: 'flex-start',
    p: ['25px 25px 20px', null, null, null, '35px 30px', '45px 40px 50px'],
    transition: '0.3s ease-in-out 0s',
    ':hover': {
      backgroundColor: 'white',
      boxShadow: '0px 15px 60px rgba(63, 90, 130, 0.12)',
      
      ':onClick': {
        backgroundColor: 'red',
      }
    },
  },
  media: {
    alignItems: 'center',
    mr: [6],
    mb: [5, null, null, null, null, 0],
    minWidth: [80],
    img: {
      maxWidth: [60, null, null, null, null, '100%'],
    },
  },
  content: {
    mt: ['-7px'],
    h2: {
      fontWeight: 700,
      fontSize: [2, null, null, null, 4],
      lineHeight: 1.5,
      color: 'textSecondary',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    p: {
      fontSize: [1, null, null, null, 15],
      lineHeight: [2.13],
      color: 'headingSecondary',
      mt: [3],
    },
  },
};
