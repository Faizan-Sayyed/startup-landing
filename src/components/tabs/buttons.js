import { jsx, Box, Heading, Text, Button , Link} from 'theme-ui';

const handleClick = () => {
    window.open("http://www.google.com");

return(

<Button sx={styles.ccc} onClick={handleClick} >{Button}khjshjkshias</Button>
);
}

export default {handleClick}

const styles={
ccc :{
width:"800px",

},
}