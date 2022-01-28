import React from 'react';
import hiringbird from 'assets/images/hiringbird.png';
import Image from 'components/image';

const PieChart = ({ fill, ...props }) => {
  return (
    <Image src= {hiringbird}></Image>
  );
};

export default PieChart;
