import React from 'react';
import suitcase from 'assets/images/logosvg.png';
import { jsx, Box, Flex, Container, Heading, Text } from 'theme-ui';
import Image from 'components/image';

const Logo = ({ isWhite, ...props }) => {
  return (
  <box>
  <Flex as="figure" sx={styles.bannerImage}>
  <Image src={suitcase} alt="illustration" />
</Flex>
</box>
  );
};

export default Logo;
const styles = {
  bannerImage: {
    alignItems: 'left',
    mt: [9, null, null, null, 1],
    img: {
     color:'white',
     
width: '123.15px',
height: '23.86px',
left: '162.85px',
top: '0.79px',
}
  }}
