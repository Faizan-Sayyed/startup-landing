import React from 'react';
import toplogo from 'assets/images/logosvg.png';
import { jsx, Box, Flex, Container, Heading, Text } from 'theme-ui';
import Image from 'components/image';

const Logo = ({ isWhite, ...props }) => {
  return (
  <box>
  <Flex as="figure">
  <Image sx={styles.top} src={toplogo} alt="illustration" />
</Flex>
</box>
  );
};

export default Logo;
const styles = {
 
top:{
  left:"700px",
  '@media screen  and (max-width: 992px)': {
          
                    },
}
  }
