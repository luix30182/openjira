import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { useContext } from 'react';
import { EntriesContext } from '../context/entries/EntriesContext';
import { EntryList, NewEntry } from '../components/ui';

const HomePage: NextPage = () => {
  const { entries } = useContext(EntriesContext);

  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pending" />
            <NewEntry />
            <EntryList status="pending" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Inprogess" />
            <CardContent>
              <EntryList status="in-progress" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completed" />
            <CardContent>
              <EntryList status="finished" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
