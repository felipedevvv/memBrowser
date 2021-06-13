import { Card, Typography } from '@material-ui/core';

const Message = () => {

    let message = <Typography variant="body1">
            <i>Desktop Reactive</i>, <i>Error Handling</i> and <i>Scheduled For</i> features coming soon... &amp; <i>Chrome Extension</i> too.
        </Typography>;

    return(
        <div className="App">
            <Card style={{ padding: 30, minWidth: 250, maxWidth: 250, marginBottom: 20, marginTop: 20 }}>
                {message}
            </Card>
        </div>
        
    );
}

export default Message;