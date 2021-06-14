import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Card,
	OutlinedInput,
	Typography,
	Button,
	FormControl,
	InputLabel,
	Checkbox,
	FormControlLabel,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	inputs: {
		marginBottom: 20,
	},
	heading: {
		marginBottom: 10,
	},
}));

const Form = () => {
	const [mem, setMem] = useState("");
	const [memKey, setMemKey] = useState("");
	const [resMsg, setResMsg] = useState("");
	const [snoozeTill, setSnoozeTill] = useState(null);
	const [isSnoozed, setIsSnoozed] = useState(false);
	const [formFilled, setFormFilled] = useState(false);
	const classes = useStyles();

	const sendMem = async (e) => {
		let apiBody = {};
		isSnoozed
			? (apiBody = { content: mem, snoozeTill: snoozeTill })
			: (apiBody = { content: mem });
		console.log(apiBody);
		axios
			.post("https://api.mem.ai/v0/mems", apiBody, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `ApiAccessToken ${memKey}`,
				},
			})
			.then((res) => {
				setMem("");
				setMemKey("");
				setSnoozeTill(null);
				setIsSnoozed(false);
				setFormFilled(false);

				console.log(res.status);
			})
			.catch((err) => {
				console.log(err.response.status);
			});
	};

	useEffect(() => {
		setFormFilled(
			memKey !== "" &&
				mem !== "" &&
				(isSnoozed ? snoozeTill !== null : true)
		);
	}, [mem, memKey, isSnoozed, snoozeTill]);

	return (
		<div className="App">
			<Card style={{ padding: 30, minWidth: 250, maxWidth: 250 }}>
				<Typography variant="h6" className={classes.heading}>
					Mem from anywhere!
				</Typography>
				<FormControl id="form-key" fullWidth variant="outlined">
					<InputLabel>API Key</InputLabel>
					<OutlinedInput
						id="mem-key"
						label="Mem Key"
						variant="outlined"
						size="small"
						color="primary"
						value={memKey}
						className={classes.inputs}
						multiline={true}
						onChange={(e) => {
							setMemKey(e.target.value.trim());
							setResMsg("");
						}}
					/>
				</FormControl>
				<FormControl id="form-mem" fullWidth variant="outlined">
					<InputLabel>Mem</InputLabel>
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
					<FormControlLabel
						control={
							<Checkbox
								label="Snooze?"
								name="Snoozed"
								checked={isSnoozed}
								onChange={() => {
									setIsSnoozed(!isSnoozed);
									setSnoozeTill(null);
								}}
							/>
						}
						label="Snooze?"
						labelPlacement="start"
					/>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<DateTimePicker
							label="Snooze Until..."
							inputVariant="outlined"
							minDate={Date.now}
							className={classes.inputs}
							disabled={!isSnoozed}
							disablePast={true}
							value={snoozeTill}
							onChange={(e) => {
								setSnoozeTill(e.toISOString());
							}}
						/>
					</MuiPickersUtilsProvider>
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
};

export default Form;
