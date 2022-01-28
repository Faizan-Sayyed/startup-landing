/** @jsx jsx */
import { useRef, useEffect, useState } from 'react';
import { rgba } from 'polished';
import { jsx, Box, Container } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import TabTitle from 'components/tabs/tab-title';
import TabContent from 'components/tabs/tab-content';
import Currency from 'components/icons/currency';
import Cog from 'components/icons/cog';
import PieChart from 'components/icons/pie-chart';
import Suitcase from 'components/icons/suitcase';
import BarChart from 'components/icons/bar-chart';
import dashboard from 'assets/images/dashboard.png';
import dashboard1 from 'assets/images/dashboard1.png';
import dashboard2 from 'assets/images/dashboard2.png';
import dashboard3 from 'assets/images/dashboard3.png';
import dashboard4 from 'assets/images/dashboard4.png';


const data = [
  {
    id: 1,
    tabPane: [
      {
        icon: <Currency />,
        title: 'CollegeKing',
      },

    ],
    tabContent: [
      {
        image: dashboard,
        title: `Get all the information to make the right choices 
        with collegeking`,
        description: `CollegeKing is a platform for providing information and guidance to
class 12 students for exploring colleges and streams.`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 2,
    tabPane: [
      {
        icon: <Cog />,
        title: 'Careerbug',
      },
    ],
    tabContent: [
      {
        image: dashboard1,
        title: `Improve your self-learning abilities with the assistance of careerbug`,
        description: `Careerbug is a platform for career exploration and development through guidance and community-driven practices.`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 3,
    tabPane: [
      {
        icon: <PieChart />,
        title: 'HiringBird',
      },
    ],
    tabContent: [
      {
        image: dashboard2,
        title: `Get an intuitive experience to fulfill the recruitment needs with HiringBird`,
        description: `HiringBird is a platform designed to make it easy for college students to apply for internships and new jobs.`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 4,
    tabPane: [
      {
        icon: <Suitcase />,
        title: 'Mentoring',
      },
    ],
    tabContent: [
      {
        image: dashboard3,
        title: `Get guidance from industry experts with  our mentoring platform.`,
        description: `The yet-to-be-named platform focuses on providing mentorship to students through industry experts and making the mentoring process easily accessible to all student in need of mentorship and guidance.`,
        readMore: '#introduce-quality',
      },
    ],
  },
  {
    id: 5,
    tabPane: [
      {
        icon: <BarChart />,
        title: 'Commerce',
      },
    ],
    tabContent: [
      {
        image: dashboard4,
        title: `Cater to all your material requirements with our e-commerce platform`,
        description: `The yet-to-be-named platform focuses on fulfiling the material needs of its users and to provide a comfortable user experience through its design and
        interactive sessions.`,
        readMore: '#introduce-quality',
      },
    ],
  },
];

const Dashboard = () => {
  const containerRef = useRef();
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });
  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  return (
    <Box as="section" sx={styles.section}>
      <Container ref={containerRef} />
      <Box sx={{ pl: containerOffset.left + 30, ...styles.container }}>
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          defaultActiveKey="2"
        >
          {data?.map((tab) => (
            <TabPane key={tab?.id} tab={<TabTitle tab={tab.tabPane} />}>
              <TabContent tabContent={tab?.tabContent} />
            </TabPane>
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default Dashboard;

const styles = {
  section: {
    backgroundColor: '#353448',
    pt: [9, null, null, 11, 10, 12, null],
    pb: [9, null, null, null, 0],
  },
  container: {
    maxWidth: ['none !important'],
    pr: [6, null, null, 0],
  },
  tabs: {
    border: 0,
    color: 'white',
    '.rc-tabs-nav': {
      mb: [8, null, null, 7, 10, null, 12],
    },
    '.rc-tabs-nav-wrap': {
      '::before': {
        backgroundColor: rgba('#fff', 0.1),
        content: ['none', null, null, `''`],
        height: 1,
        position: 'absolute',
        left: 0,
        top: 51,
        width: '100%',
      },
      '::after': {
        borderColor: ['primary'],
      },
    },
    '.rc-tabs-nav-list': {
      display: ['flex'],
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      '+ .rc-tabs-tab': {
        ml: [5, null, null, 5, 8, 12],
        // mt: [0, null, null, 0],
      },
      'svg g, svg path': {
        transition: '0.3s ease-in-out 0s',
      },
    },
    '.rc-tabs-tab-btn': {
      alignItems: 'center',
      display: ['flex', null, null, 'block'],
      outline: '0 none',
      fontSize: [null, null, null, 15, 2],
    },
    '.rc-tabs-tab-active': {
     color:'#EC1D25',
      'svg g, svg path': {
       
      },
      h5: {
        color: 'primary',
      },
    },
    '.rc-tabs-ink-bar': {
      backgroundColor: '#EC1D25',
      borderRadius: 5,
      bottom: [47],
      display: ['none', null, null, 'block'],
    },
    '.rc-tabs-tabpane': {
      outline: '0 none',
    },
  },
};
