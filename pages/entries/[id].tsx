import {
  capitalize,
  Card,
  Grid,
  CardHeader,
  CardContent,
  TextField,
  CardActions,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton
} from '@mui/material';
import { GetServerSideProps } from 'next';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Layout } from '../../components/layouts';
import { Entry, Entry, EntryStatus } from '../../interfaces/entry';
import { ChangeEvent, useMemo, useState, FC } from 'react';
import { dbEntries } from '../../database';

const validStatus: Array<EntryStatus> = ['pending', 'in-progess', 'finished'];

interface Props {
  entry: Entry;
}

export const EntryPage: FC<Props> = ({ entry }) => {
  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);

  const isNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    console.log(inputValue, status);
  };

  return (
    <Layout title={inputValue.substring(0, 20) + '...'}>
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entry`}
              subheader={`Created: ... ${entry.createdAt}`}
            ></CardHeader>
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="New entry"
                autoFocus
                multiline
                label="New entry"
                value={inputValue}
                onChange={onTextFieldChange}
                helperText={isNotValid && 'Enter a value'}
                onBlur={() => setTouched(true)}
                error={isNotValid}
              ></TextField>

              {/* Radio */}
              <FormControl>
                <FormLabel>Status:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChange}>
                  {validStatus.map(option => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      label={capitalize(option)}
                      control={<Radio />}
                    ></FormControlLabel>
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={inputValue.length <= 0}
              ></Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.dark'
        }}
      >
        <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
      </IconButton>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { id } = ctx.params as { id: string };

  const entry = await dbEntries.getEntryById(id);
  if (!entry) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
  return {
    props: { entry }
  };
};

export default EntryPage;
