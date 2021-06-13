import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, OutlinedInput, Typography, Button, FormControl, InputLabel } from '@material-ui/core';
// Checkbox, FormControlLabel
// import DateFnsUtils from '@date-io/date-fns';
// import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import axios from 'axios';


const useStyles = makeStyles((theme) => ({

	inputs: {
		marginBottom: 20
	},
    heading: {
        marginBottom: 10
    }
}));

const Form = () => {
  const [mem, setMem] = useState("");
  const [memKey, setMemKey] = useState("");
  const [resMsg, setResMsg] = useState("");
//   const [isScheduled, setIsScheduled] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const classes = useStyles();

  const sendMem = async (e) => {

    axios.post('https://api.mem.ai/v0/mems', {
        content: mem
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `ApiAccessToken ${memKey}`
        }
    }).then(res => {
        setMem("");
        setMemKey("");
        setFormFilled(false);

        console.log(res.status);
    }).catch(err => {
        console.log(err.response.status)
    })
    
  };

  useEffect(() => {
    setFormFilled(memKey !== "" && mem !== "");
}, [mem, memKey]);

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
        <Card style={{ padding: 30, minWidth: 400 }}>
            <Typography variant="h6" className={classes.heading}>
                Mem from anywhere!
            </Typography>
            <FormControl id="form-key" fullWidth variant="outlined">
                
                <InputLabel>
                    API Key
                </InputLabel>
                <OutlinedInput 
                    id="mem-key" 
                    label="Mem Key" 
                    variant="outlined" 
                    size="small"
                    color="primary"
                    value={memKey}
                    className={classes.inputs}
                    onChange={(e) => {
                        setMemKey(e.target.value);
                        setResMsg("");
                    }}
                />
            </FormControl>
            <FormControl id="form-mem" fullWidth variant="outlined">
                <InputLabel>
                    Mem
                </InputLabel>
                <OutlinedInput 
                    id="mem-text" 
                    label="Mem" 
                    variant="outlined" 
                    multiline={true}
                    size="small"
                    color="primary"
                    value={mem}
                    className={classes.inputs}
                    onChange={(e) => {
                        setMem(e.target.value);
                        setResMsg("");
                    }}
                />
                {/* <FormControlLabel
                    control={
                        <Checkbox
                            label="Schedule?"
                            name="Scheduled"
                            value={isScheduled}
                            onChange={() => {
                                setIsScheduled(!isScheduled)
                                }
                            }
                        />
                    }
                    label="Schedule?"
                    labelPlacement="start"
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DateTimePicker
                        label="Scheduled For"
                        inputVariant="outlined"
                        minDate={Date.now}
                        className={classes.inputs}
                        disabled={!isScheduled}
                        disablePast={true}
                        // value={selectedDate}
                        onChange={(e) => {
                            console.log(e);
                        }}
                    />
                </MuiPickersUtilsProvider> */}
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!formFilled}
                    onClick={sendMem}
                >
                    Mem It!
                </Button>
                <Typography variant="caption" display="box">
                    {`${resMsg}`}
                </Typography>
            </FormControl>
        </Card>
      
    </div>
  );
}

export default Form;
