import React from 'react'
import Countdown from './Countdown'

export default { title: 'Countdown' }

export const basic = () => {
  const startCounting = (startCount:()=>void) => {
    // you can do other operation here
    // and startCount
    startCount()
  }
  return <div>
  <div>
    <h1>Start counter manually</h1>
    <div>Click to start</div>
    <Countdown intervalSecond={1} duration={60}>
      {(isCounting, restTime, startCount) => (
        <button disabled={isCounting} onClick={() => startCounting(startCount)}>
          {isCounting ? `${restTime}s` : 'done'}
        </button>
      )}
    </Countdown>
  </div>
  <div>
    <h1>Auto trigger</h1>
    <Countdown intervalSecond={1} duration={60} autoTrigger>
      {(isCounting, restTime, startCount) => (
        <button disabled={isCounting} onClick={() => startCounting(startCount)}>
          {isCounting ? `${restTime}s` : 'done'}
        </button>
      )}
    </Countdown>
  </div>
</div>}
