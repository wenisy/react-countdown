import React from 'react';
interface CountdownProps {
    intervalSecond: number;
    duration: number;
    children: (isCounting: boolean, durationTime: number, startCount: () => void) => React.ReactNode;
    autoTrigger?: boolean;
    detectChanges?: string;
}
interface CountdownState {
    durationTime: number;
}
export default class Countdown extends React.Component<CountdownProps, CountdownState> {
    interval: any;
    mounted: boolean;
    state: CountdownState;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<CountdownProps>): void;
    componentWillUnmount(): void;
    startCount: () => void;
    countdown: () => void;
    render(): React.ReactNode;
}
export {};
