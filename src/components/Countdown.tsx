import React from 'react'

interface CountdownProps {
  intervalSecond: number
  duration: number
  children: (isCounting: boolean, durationTime: number, startCount: () => void) => React.ReactNode
  autoTrigger?: boolean
  detectChanges?: string
}

interface CountdownState {
  durationTime: number
}

export default class Countdown extends React.Component<CountdownProps, CountdownState> {
  interval: any
  mounted: boolean = false
  state: CountdownState = {
    durationTime: this.props.duration,
  }

  componentDidMount(): void {
    this.mounted = true
    this.props.autoTrigger && this.startCount()
  }

  componentDidUpdate(prevProps: Readonly<CountdownProps>): void {
    if (this.props.detectChanges !== prevProps.detectChanges) {
      clearInterval(this.interval)
      this.setState({ durationTime: prevProps.duration }, this.startCount)
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    this.mounted = false
  }

  startCount = () => {
    this.countdown()
    this.interval = setInterval(this.countdown, this.props.intervalSecond * 1000)
  }

  countdown = () => {
    const { durationTime } = this.state
    if (durationTime <= 0) {
      clearInterval(this.interval)
      this.mounted && this.setState({ durationTime: this.props.duration })
    } else {
      this.mounted && this.setState({ durationTime: durationTime - 1 })
    }
  }

  render() {
    const { durationTime } = this.state
    const isCounting = durationTime !== this.props.duration && durationTime !== 0
    return this.props.children(isCounting, durationTime, this.startCount)
  }
}
