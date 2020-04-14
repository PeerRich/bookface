import React from 'react';
import DailyIframe from '@daily-co/daily-js';

class VideoCallFrame extends React.Component {

  constructor(props) {
    super(props);
    this.iframeRef = React.createRef();
  }

  componentDidMount() {
    if (!this.props.url) {
      console.error('please set REACT_APP_DAILY_ROOM_URL env variable!');
      return;
    }
    this.daily = DailyIframe.wrap(this.iframeRef.current);
    this.daily.join({url: this.props.url});
  }

  render() {
    return <div style={{
      position: "relative",
      overflow: "hidden",
      paddingTop: "50.25%",
    }}>
      <iframe style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: 0
      }}
              title="video call iframe"
              ref={this.iframeRef}
              allow="camera; microphone; fullscreen"/>
    </div>
  }
}

export default VideoCallFrame;
