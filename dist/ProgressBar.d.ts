/// <reference types="react" />
import * as React from 'react';
export interface Props {
    currentTime: number;
    duration: number;
    percentage: number;
    onElapsedTimeUpdate: (...args: any[]) => void;
    autoPlay: boolean;
    isBuffering: boolean;
    hideTimeLine: RegExpMatchArray | boolean;
}
/**
 * Progress bar composition.
 */
export default class ProgressBar extends React.Component<Props, any> {
    state: any;
    props: Props;
    private progressBar;
    constructor(props: Props);
    render(): JSX.Element;
}
