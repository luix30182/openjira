import {
  Card,
  Grid,
  CardHeader,
  CardContent,
  TextField,
  CardActions,
  Button
} from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { Layout } from '../../components/layouts';

export const EntryPage = () => {
  return (
    <Layout title="... ... ..">
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title="Entry"
              subheader={`Created: ... ago`}
            ></CardHeader>
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="New entry"
                autoFocus
                multiline
                label="New entry"
              ></TextField>

              {/* Radio */}
              <CardActions>
                <Button
                  startIcon={<SaveOutlinedIcon />}
                  variant="contained"
                  fullWidth
                ></Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default EntryPage;
