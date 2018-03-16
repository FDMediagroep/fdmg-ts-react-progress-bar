[![Build Status](https://travis-ci.org/FDMediagroep/fdmg-ts-react-progress-bar.svg?branch=master)](https://travis-ci.org/FDMediagroep/fdmg-ts-react-progress-bar)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fdmg-ts-react-progress-bar/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fdmg-ts-react-progress-bar?branch=master)

[![npm version](https://badge.fury.io/js/%40fdmg%2Fts-react-progress-bar.svg)](https://badge.fury.io/js/%40fdmg%2Fts-react-progress-bar)

# fdmg-ts-react-progress-bar

[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fdmg-ts-react-progress-bar.svg)](https://greenkeeper.io/)
[ReactJS](https://reactjs.org/) ProgressBar component. This component renders a progress bar using an input of 
`type=range`. An screenshot of the ProgressBar in action below:

![alt text](https://github.com/FDMediagroep/fdmg-ts-react-progress-bar/blob/master/demo/screenshots/audio-widget.png)

## Installation
- Run `npm i --save-dev @fdmg/ts-react-progress-bar`

or

- Run `yarn add @fdmg/ts-react-progress-bar --dev`

## Usage
### TypeScript
```
import * as React from 'react';
import H1 from 'fdmg-ts-react-progress-bar';

export default class foo {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
        this.handleElapsedTimeUpdate = this.handleElapsedTimeUpdate.bind(this);
    }
    
    handleElapsedTimeUpdate(e) {
        console.log('Elapsed time percentage', e.target.value);
    }

    render() {
        return (
            <ProgressBar
                ref={(progressBar) => { this.progressBar = progressBar; }}
                currentTime={12}
                duration={300}
                percentage={4}
                onElapsedTimeUpdate={this.handleElapsedTimeUpdate}
                autoPlay={true}
                isBuffering={false}
                hideTimeLine={false}
            />
        );
    }
}
```

### Resulting HTML
```
<div class="progress">
    <div>
        <div class="time-line">
            <span class="time-line-progress-bar" style="width: 4%;"></span>
            <input type="range" step="0.01">
        </div>
    </div>
    <div class="counters">
        <span>12s</span>
        <span>5m 0s</span>
    </div>
</div>
```
