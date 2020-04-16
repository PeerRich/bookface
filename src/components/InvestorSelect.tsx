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

export default function InvestorSelect() {
  const classes = useStyles();
  const [currentTitles, setCurrentTitles] = React.useState('');

  /*TODO: build the correct states & handlers. I stopped renaming to speed up the layout making process */
  const [fate, setFate] = React.useState('');
  const [keywords, setKeywords] = React.useState('');
  const [location, setLocation] = React.useState('');

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

  return (
  <div>
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="currentTitles-label">Series</InputLabel>
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
      <InputLabel id="currentTitles-label">Investment Amount</InputLabel>
      <Select
      labelId="currentTitles-label"
      id="currentTitles"
      value={currentTitles}
      style={{minWidth: 210}}
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
      <InputLabel id="fates-label">Geographies invested in</InputLabel>
      <Select
      labelId="fates-label"
      id="fates"
      style={{minWidth: 240}}
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
      <InputLabel id="keywords-label">Invests internationally? (investor reported)
      </InputLabel>
      <Select
      labelId="keywords-label"
      id="keywords"
      value={keywords}
      style={{minWidth: 360}}
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
      <InputLabel id="location-label">Sectors invested in</InputLabel>
      <Select
      labelId="location-label"
      style={{minWidth: 290}}
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

  </div>
  );
}
