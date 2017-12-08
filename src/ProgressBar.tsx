import * as React from 'react';

export interface Props {
    currentTime: number;
    duration: number;
    percentage: number;
    onElapsedTimeUpdate: (...args: any[]) => void;
    autoPlay: boolean;
    isBuffering: boolean;
    hideTimeLine: RegExpMatchArray|boolean;
}
/**
 * Progress bar component.
 */
export default class ProgressBar extends React.Component<Props, any> {
    public state: any;
    public props: Props;

    private progressBar: any;

    constructor(props: Props) {
        super(props);
        this.props = props;
    }

    render() {
        const spinner = this.props.isBuffering ? (
            <div className="spinner">
                <div className="double-bounce1"/>
                <div className="double-bounce2"/>
            </div>
        ) : "";

        const timeLine = this.props.hideTimeLine ? "" : (
            <div className={"time-line"} >
                <span className="time-line-progress-bar"  style={{width : this.props.percentage + "%"}} >
                    {spinner}
                </span>
                <input
                    ref={(progressBar) => { this.progressBar = progressBar; }}
                    type="range"
                    step="0.01"
                    value={this.props.percentage}
                    onInput={this.props.onElapsedTimeUpdate}
                    onChange={this.props.onElapsedTimeUpdate}
                />
            </div>
        );

        return (
            <div className="progress">
                <div>
                    {timeLine}
                </div>

                <div className="counters">
                    <span>
                        {(this.props.currentTime === 0) ? "" : this.props.currentTime}
                    </span>
                    <span>
                        {(this.props.duration === 0) ? "" : this.props.duration}
                    </span>
                </div>
            </div>
        );
    }
}
