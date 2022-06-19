import React from "react";

class TimerC extends React.Component {
    constructor() {
        super();
        this.state = {
            time: 0
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({time: this.state.time + 1});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                {this.state.time}
            </div>
        );
    }
}

export default TimerC;