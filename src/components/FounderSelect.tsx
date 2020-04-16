import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

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
  const [currentTitles, setCurrentTitles] = React.useState('');

  /*TODO: build the correct states & handlers. I stopped renaming to speed up the layout making process */
  const [fate, setFate] = React.useState('');
  const [keywords, setKeywords] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [batch, setBatch] = React.useState('');
  const [stages, setStages] = React.useState('');

  const handleChangeCurrentTitles = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCurrentTitles(event.target.value as string);
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
      <InputLabel id="currentTitles-label">Titles</InputLabel>
      <Select
      labelId="currentTitles-label"
      id="currentTitles"
      value={currentTitles}
      onChange={handleChangeCurrentTitles}
      label="Current Titles"
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
      <InputLabel id="currentTitles-label">Companies</InputLabel>
      <Select
      labelId="currentTitles-label"
      id="currentTitles"
      value={currentTitles}
      style={{minWidth: 140}}
      onChange={handleChangeCurrentTitles}
      label="Current Titles"
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
      <InputLabel id="fates-label">Sector</InputLabel>
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
      <InputLabel id="keywords-label">Locations</InputLabel>
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
      <InputLabel id="location-label">Prior Titles</InputLabel>
      <Select
      labelId="location-label"
      style={{minWidth: 140}}
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
      <InputLabel id="location-label">Prior Companies</InputLabel>
      <Select
      labelId="batch-label"
      id="batch"
      style={{minWidth: 170}}
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
      <InputLabel id="location-label">Prior Sectors</InputLabel>
      <Select
      labelId="batch-label"
      id="batch"
      style={{minWidth: 145}}
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
      <InputLabel id="location-label">Founder in Batches</InputLabel>
      <Select
      labelId="batch-label"
      id="batch"
      style={{minWidth: 190}}
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

    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="location-label">Schools</InputLabel>
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
