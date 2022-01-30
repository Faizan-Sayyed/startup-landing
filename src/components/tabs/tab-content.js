/** @jsx jsx */
import { jsx, Box, Heading, Text, Button , Link} from 'theme-ui';




const TabContent = ({ tabContent }) => {

    const handleClick = () => {
     window.open("http://www.google.com");}
    
    
      

  
  return tabContent.map((item, index) => (
    <Box key={index} sx={styles.tabContent}>
      <Box sx={styles.content}>
        <Heading>{item.title}</Heading>
        <Text as="p">{item.description}</Text>
        
        <Button  sx={styles.more} onClick = {handleClick} 
     >
     More Details
      </Button> 

    
      </Box>



 {/* function App() { } 
  const handleClick = () => {
    window.open("http://twitter.com/saigowthamr");
  };

  return (
    <div>
      <h2>App</h2>
      <button onClick={handleClick}>Twitter</button>
    </div>
  );
}

export default App;*/}


      <Box
        sx={{ backgroundImage: `url(${item?.image})`, ...styles.illustration }}
      />
    </Box>
  ));
};

export default TabContent ;

const styles = {
  tabContent: {
    display: ['flex'],
    flexDirection: ['column-reverse', null, null, null, 'row'],
    alignItems: 'flex-start',
  },
  more:{
    backgroundColor:'#EC1D25',
    
  },
  content: {
    maxWidth: [480, null, null, 580, 480],
    ml: [null, null, null, 'auto', 'unset'],
    mr: [0, null, null, 'auto', 10, 8, 10],
    textAlign: [null, null, null, 'center', 'left'],
    
    h2: {
      fontWeight: 700,
      fontSize: [6, null, null, 10],
      lineHeight: 1.5,
      letterSpacing: 'heading',
    },
    p: {
      fontSize: [1, null, null, 2],
      lineHeight: [1.8, null, null, 2.2],
      mt: [5],
    },
    button: {
      mt: [6, null, null, null, 7, null, 9],
    },
  },
  illustration: {
    alignItems: 'flex-start',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: [5, null, null, 0],
    display: 'flex',
    minHeight: [256, null, null, 538, 470, 510, 633],
    mb: [5, null, null, null, 0],
    width: '100%',
  },
};
