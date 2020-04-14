import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {InputLabel, MenuItem, FormControl, Select} from '@material-ui/core/';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}),
);

export default function DirectorySelect() {
  const classes = useStyles();
  const [sector, setSector] = React.useState('');
  const [fate, setFate] = React.useState('');
  const [keywords, setKeywords] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [batch, setBatch] = React.useState('');
  const [stages, setStages] = React.useState('');

  const handleChangeSector = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSector(event.target.value as string);
  };

  const handleChangeFate = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFate(event.target.value as string);
  };

  const handleChangeKeywords = (event: React.ChangeEvent<{ value: unknown }>) => {
    setKeywords(event.target.value as string);
  };

  const handleChangeLocation = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLocation(event.target.value as string);
  };

  const handleChangeBatch = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBatch(event.target.value as string);
  };

  const handleChangeStages = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStages(event.target.value as string);
  };

  return (
  <div>
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="sector-label">Sector</InputLabel>
      <Select
      labelId="sector-label"
      id="sector"
      value={sector}
      onChange={handleChangeSector}
      label="Sector"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="fates-label">Fates</InputLabel>
      <Select
      labelId="fates-label"
      id="fates"
      value={fate}
      onChange={handleChangeFate}
      label="Fates"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="keywords-label">Keywords</InputLabel>
      <Select
      labelId="keywords-label"
      id="keywords"
      value={keywords}
      onChange={handleChangeKeywords}
      label="Keywords">
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="location-label">Location</InputLabel>
      <Select
      labelId="location-label"
      id="location"
      value={location}
      onChange={handleChangeLocation}
      label="Location">
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="location-label">Batch</InputLabel>
      <Select
      labelId="batch-label"
      id="batch"
      value={batch}
      onChange={handleChangeBatch}
      label="Batch">
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="location-label">Stages</InputLabel>
      <Select
      labelId="stages-label"
      id="stages"
      value={stages}
      onChange={handleChangeStages}
      label="Stages">
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>

  </div>
  );
}
