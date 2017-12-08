import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import ProgressBar from "../src/ProgressBar";
import toJson from 'enzyme-to-json';

console.info = () => {};

describe('ProgressBar', () => {
    const empty = () => {};

    beforeAll(() => {
        Enzyme.configure({ adapter: new Adapter() });
    });

    test('renders correctly', () => {
        const component = shallow(
            <ProgressBar
                percentage={33}
                currentTime={1234}
                duration={12345}
                onElapsedTimeUpdate={empty}
                autoPlay={false}
                isBuffering={false}
                hideTimeLine={false}
            />);

        expect(toJson(component)).toMatchSnapshot();
    });

    test('renders correctly without time-line', () => {
        const component = shallow(
            <ProgressBar
                percentage={33}
                currentTime={1234}
                duration={12345}
                onElapsedTimeUpdate={empty}
                autoPlay={false}
                isBuffering={false}
                hideTimeLine={true}
            />);

        expect(toJson(component)).toMatchSnapshot();
    });

    test('input should handle onChange event', () => {
        const updateTrackTime = jest.fn((e) => {
            expect(e.target.value).toBe(75);
        });
        const progressBarComponent = mount(
            <ProgressBar
                percentage={33}
                currentTime={50}
                duration={100}
                onElapsedTimeUpdate={updateTrackTime}
                autoPlay={false}
                isBuffering={false}
                hideTimeLine={false}
            />);

        progressBarComponent.find('input').simulate('change', { target: { value: 75 }});
        expect(updateTrackTime).toHaveBeenCalled();
    });
});
