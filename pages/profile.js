// pages/profile.js

import { useSession, signin } from 'next-auth/client';
import Layout from '../components/layout';
import Link from 'next/link';
import Slider from '../components/slider';
import Grid from '../components/grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Profile = () => {
  const [session, loading] = useSession();

  if (loading) return <div>loading...</div>;
  if (!session) return <Layout>
  <p>
    You do not have an active session. Please <Link href="/">
          <a className="logo">
            <span>return home</span>
          </a>
        </Link> or <a
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signin();
              }}
            >
              <span>Sign In</span>
            </a>.
  </p>
</Layout>;

  return (
    <Layout>
      {session && (
        <>
          <img src={session.user.image} className="avatar" />
          <h1>{session.user.name}</h1>
          <p>{session.user.email}</p>
          <Box style={{ marginTop: '15px' }}>
            <Typography variant="h5" gutterBottom>
                  <span style={{ color: '#036994' }}>Upgrade your social life.</span>
            </Typography>
            
            <Grid />
            <Slider />
          </Box>
        </>
      )}

      <style jsx>{`
        .avatar {
          width: 220px;
          border-radius: 10px;
        }
      `}</style>
    </Layout>
  );
};

export default Profile;