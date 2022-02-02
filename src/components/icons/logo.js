import React from 'react';
import toplogo from 'assets/images/logosvg.png';
import { jsx, Box, Flex, Container, Heading, Text } from 'theme-ui';
import Image from 'components/image';

const Logo = ({ isWhite, ...props }) => {
  return (
  <box>
  <Flex as="figure" sx={styles.bannerImage}>
  <Image sx={styles.top} src={toplogo} alt="illustration" />
</Flex>
</box>
  );
};

export default Logo;
const styles = {
  bannerImage: {
    alignItems: 'left',
    mt: [9, null, null, null, 1],
  },
top:{
  left:"700px",
}
  }
