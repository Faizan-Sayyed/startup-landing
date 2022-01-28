import React from 'react';
import { rgba } from 'polished';
import career from 'assets/images/career.png';
import Image from 'components/image';

const Cog = ({ fill, ...props }) => {
  return (
    <Image src= {career}></Image>
  );
};

export default Cog;
