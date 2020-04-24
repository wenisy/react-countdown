# React Countdown HOC
It's a `render props` component, or `FaCC(Function as Child Component)`.

know more details about `render props` [Render Props – React](https://reactjs.org/docs/render-props.html)

## Use this Component

```javascript
<Countdown intervalSecond={1} duration={60}>
  {(isCounting, restTime, startCount) => (
    <button disabled={isCounting} onClick={() => startCounting(startCount)}>
      {isCounting ? `${restTime}s` : 'done'}
    </button>
  )}
</Countdown>
```

## Props
|Name|Type|Default|Description|
|:--|:--:|:-----:|:----------|
|intervalSecond|`number`|`required`|Interval delay in second|
|duration|`number`|`required`|Count down time|
|[**children**](#children)|`number`|`(isCounting: boolean, durationTime: number, startCount: () => void) => React.ReactNode`|A React child for the countdown's state|
|autoTrigger|`boolean`|`undefined`|When Component mounted, auto starting count|
|detectChanges|`string`|`undefined`|A compare condition to rerender countdown |

### `children`
You could put a button here but start counting, and display rest of time.

`isCounting` is a flag to tell you if countdown completed

`durationTime` tells you rest time for current countdown

`startCount` is a function, to start count



## Contribute to this repo

To install dependencies

```
$ yarn
```

To build

```
$ yarn build
```

To run tests

```
$ yarn test
```

To run Storybook

```
$ yarn start
```
