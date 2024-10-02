# React user activity tracker

## installation  
`npm i react-user-activity-tracker`

## basic example
```
import Tracker from 'react-user-activity-tracker';

function App() {
  const [id, setId] = useState(0);
  const changeId = (e) => {
    setId(e.target.value);
  } 
  return (
    <div className="App">
        <button onClick={changeId} value={0}>Button 0</button>
        <button onClick={changeId} value={1}>Button 1</button>
        <Tracker trackerId={id} onTrackerIdChange={ (id, value) => console.log(`${id} has been active for ${value} seconds. `)} timeout={1500} />
    </div>
  )
}

```

## props

### trackerId
number, the identifier for the state being tracked.

### onTrackerIdChange
function, fired when trackedId changes, get the trackerid and the time is has been active/viewed in seconds.

### timeout
number, time in seconds when tracking should stop. Default 1800 seconds ( 30 minutes ).

### debugOn
boolean, display a box with values.

### trackerSubmitInterval
number, second passed between each onIntervalSubmit function

### onIntervalSubmit
function, fired every (x : trackerSubmitInterval ) seconds