import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../../scss/ProgressBar.scss';
import ProgressBar from '../../src/ProgressBar';

interface iMain {
    currentTime: number;
    duration: number;
    percentage?: number;
}

class Main extends React.Component<iMain, iMain> {
    props: any;
    state: any;

    constructor(props: any) {
        super(props);
        this.props = props;
        // Initial state
        this.state = Object.assign({}, {
            currentTime: this.props.currentTime,
            duration: this.props.duration,
            percentage: this.getPercentage(this.props.currentTime, this.props.duration)
        }, props);
        this.handleOnElapsedTimeUpdate = this.handleOnElapsedTimeUpdate.bind(this);
    }

    handleOnElapsedTimeUpdate(e) {
        this.setState({
            percentage: e.target.value,
            currentTime: this.getElapsedTimeFromPercentage(e.target.value)
        });
    }

    getPercentage(part, total) {
        return part/total*100;
    }

    getElapsedTimeFromPercentage(percentage) {
        return this.state.duration/100*percentage;
    }


    render() {
        return (
            <ProgressBar
                percentage={this.state.percentage}
                currentTime={this.state.currentTime}
                duration={this.state.duration}
                onElapsedTimeUpdate={this.handleOnElapsedTimeUpdate}
                autoPlay={false}
                isBuffering={false}
                hideTimeLine={false}
            />
        );
    }
}

// Render react components.
const component = ReactDOM.render(
    <Main
        currentTime='1234'
        duration='12345'
    />,
    document.getElementById('root')
);

