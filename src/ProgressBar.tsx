import * as React from 'react';

export interface Props {
    currentTime: number;
    duration: number;
    percentage: number;
    hideProgressBarCurrentTime: boolean;
    hideProgressBarDuration: boolean;
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

    /**
     *  Convert seconds (number) to a human readable time format: 2u 3m 34s
     */
    convertToReadableTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor(seconds % 3600 / 60);
        const s = Math.floor(seconds % 3600 % 60);

        const hDisplay = h > 0 ? h + "u " : "";
        const mDisplay = m > 0 ? m + "m " : "";
        const sDisplay = s > 0 ? s + "s" : "";

        return hDisplay + mDisplay + sDisplay;
    }

    render() {
        console.log(this.props.hideProgressBarCurrentTime, this.props.hideProgressBarDuration);
        const spinner = this.props.isBuffering ? (
            <div className="loader">
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

        const currentTime = this.props.hideProgressBarCurrentTime ? "" : (
            <span>
                {(this.props.currentTime === 0) ? "" : this.convertToReadableTime(this.props.currentTime)}
            </span>
        );

        const duration = this.props.hideProgressBarDuration ? "" : (
            <span>
                {(this.props.duration === 0) ? "" : this.convertToReadableTime(this.props.duration)}
            </span>
        );

        const counters = this.props.hideProgressBarCurrentTime && this.props.hideProgressBarDuration ? "" : (
            <div className="counters">
                {currentTime}
                {duration}
            </div>
        );

        return (
            <div className="progress">
                <div>
                    {timeLine}
                </div>
                {counters}
            </div>
        );
    }
}
