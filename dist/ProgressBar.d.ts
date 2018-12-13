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
    hideTimeLine: RegExpMatchArray | boolean;
}
/**
 * Progress bar component.
 */
export default class ProgressBar extends React.Component<Props, any> {
    state: any;
    props: Props;
    private progressBar;
    constructor(props: Props);
    /**
     *  Convert seconds (number) to a human readable time format: 2u 3m 34s
     */
    convertToReadableTime: (seconds: number) => string;
    render(): JSX.Element;
}
