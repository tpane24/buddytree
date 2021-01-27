// pages/index.js

import Layout from '../components/layout';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Slider from '../components/slider';
import Grid from '../components/grid';

const Home = () => (
  <Layout>
    <Box style={{ marginTop: '15px' }}>
      <Typography variant="h5" gutterBottom>
            <span style={{ color: '#036994' }}>Upgrade your social life.</span>
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        It's been a long time coming that there was an alternative to Meetup which focused on providing quality experiences for people, not just bringing people together and assuming that community will magically develop.
      </Typography>
      {/* <Grid />
      <Slider /> */}
    </Box>
  </Layout>
);

export default Home;