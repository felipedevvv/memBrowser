import { Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    a: {
        color: 'black'
    }
}));

const Disclaimer = () => {

    const classes = useStyles();

    return(
        <div className="App">
            <Card style={{ padding: 30, minWidth: 250, maxWidth: 250, marginBottom: 20, marginTop:  25 }}>
                <Typography variant="body1">
                    This is not affiliated in any way with<a className={classes.a} href="https://mem.ai">mem.ai</a>. We only use their API and we do not store your API Key whatsoever.
                </Typography>
            </Card>
        </div>
        
    );
}

export default Disclaimer;