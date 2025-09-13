# Keyboard performance settings

## Get key performance configuration

ServiceKeyboard.getPerformance()

**Brief description:**
Get all performance-related configuration information of the specified key, including mode, stroke value, dead zone and other parameters.

---

### parameter

| Parameter name | Type     | Description                                          | Required | Default |
| -------------- | -------- | ---------------------------------------------------- | -------- | ------- |
| `params`       | `object` | An object containing key position information.       | Yes      | None    |
| `params.row`   | `number` | The row number of the key in the keyboard matrix.    | Yes      | None    |
| `params.col`   | `number` | The column number of the key in the keyboard matrix. | Yes      | None    |

---

### Return value

- **Overall Type:** `Promise<IPerformanceInfo>`
- **Description:** Returns a `Promise`, which resolves to an object containing all the performance configuration information of the key.
- **Resolve object structure (`IPerformanceInfo`):**

| Field Name          | Type     | Description                         | Sample Value |
| ------------------- | -------- | ----------------------------------- | ------------ |
| `mode`              | `number` | Trigger method                      | `0`          |
| `normalPress`       | `number` | Normal trigger press stroke         | `2`          |
| `normalRelease`     | `number` | Normal trigger release schedule     | `2`          |
| `rtFirstTouch`      | `number` | RT triggers first trip              | `0.5`        |
| `rtPress`           | `number` | RT triggers the first trip to press | `0.3`        |
| `rtRelease`         | `number` | RT first trigger release stroke     | `0.3`        |
| `pressDeadStroke`   | `number` | Press Dead Zone                     | `0.2`        |
| `releaseDeadStroke` | `number` | lift dead zone                      | `0.2`        |
| `axis`              | `number` | Get index of the axis list          | `0`          |
| `calibrate`         | `number` | Calibration mark                    | `0`          |

**Return value example:**

```js
{
    "mode": 0,
    "normalPress": 2,
    "normalRelease": 2,
    "rtFirstTouch": 0.5,
    "rtPress": 0.3,
    "rtRelease": 0.3,
    "pressDeadStroke": 0.2,
    "releaseDeadStroke": 0.2,
    "axis": 0,
    "calibrate": 0
}
```

---

### Example of usage

```typescript
async function getKeyPerformance(row: number, col: number) {
  try {
    const result = await ServiceKeyboard.getPerformance({
      row: row,
      col: col,
    });
    console.log('Key performance configuration:', result);
  } catch (error) {
    console.error('Failed to obtain key performance configuration:', error);
  }
}

// Example: Get the key performance configuration of row 5, column 14
getKeyPerformance(5, 14);
```

---

### Things to note

::: tip

- The values ​​of `row` and `col` need to be determined based on the actual matrix layout of the keyboard.
- The returned configuration information contains all performance-related parameters of the key, which can be used to display or modify the performance settings of the key.
  :::

---

## Set button performance configuration

ServiceKeyboard.setPerformance()

**Brief description:**
Set all performance-related configuration information of the specified key, including trigger method, stroke value, dead zone and other parameters.

---

### parameter

| Parameter name             | Type     | Description                                                     | Required | Default |
| -------------------------- | -------- | --------------------------------------------------------------- | -------- | ------- |
| `params`                   | `object` | An object containing key performance configuration information. | Yes      | None    |
| `params.row`               | `number` | Line number of keys in keyboard matrix                          | Yes      | None    |
| `params.col`               | `number` | column number of keys in keyboard matrix                        | Yes      | None    |
| `params.mode`              | `number` | Triggering method                                               | Yes      | None    |
| `params.normalPress`       | `number` | Normal trigger press stroke                                     | Yes      | None    |
| `params.normalRelease`     | `number` | Normal trigger release schedule                                 | Yes      | None    |
| `params.rtFirstTouch`      | `number` | RT triggers first trip                                          | Yes      | None    |
| `params.rtPress`           | `number` | RT triggers the first trip to press                             | Yes      | None    |
| `params.rtRelease`         | `number` | RT first trigger release trip                                   | Yes      | None    |
| `params.pressDeadStroke`   | `number` | Press Dead Zone                                                 | Yes      | None    |
| `params.releaseDeadStroke` | `number` | lift dead zone                                                  | Yes      | None    |
| `params.axis`              | `number` | Get index of the axis list                                      | Yes      | None    |
| `params.calibrate`         | `number` | Calibration mark                                                | Yes      | None    |

**Sample example:**

```js
{
    "row": 4,
    "col": 5,
    "mode": 0,
    "normalPress": 1.506,
    "normalRelease": 1.506,
    "rtFirstTouch": 0.5,
    "rtPress": 0.3,
    "rtRelease": 0.3,
    "pressDeadStroke": 0.2,
    "releaseDeadStroke": 0.2,
    "axis": 0,
    "calibrate": 0,
    }
```

---

### Return value

- **Overall Type:** `Promise<IPerformanceInfo>`
- **Description:** Returns a `Promise`, which resolves to an object containing the set key performance configuration information.
- **Resolve object structure (`IPerformanceInfo`):**

| Field Name          | Type     | Description                         | Sample Value |
| ------------------- | -------- | ----------------------------------- | ------------ |
| `mode`              | `number` | Trigger method                      | `0`          |
| `normalPress`       | `number` | Normal trigger press stroke         | `1.506`      |
| `normalRelease`     | `number` | Normal trigger release stroke       | `1.506`      |
| `rtFirstTouch`      | `number` | RT triggers first trip              | `0.5`        |
| `rtPress`           | `number` | RT triggers the first trip to press | `0.3`        |
| `rtRelease`         | `number` | RT first trigger release stroke     | `0.3`        |
| `pressDeadStroke`   | `number` | Press Dead Zone                     | `0.2`        |
| `releaseDeadStroke` | `number` | lift dead zone                      | `0.2`        |
| `axis`              | `number` | axis body                           | `0`          |
| `calibrate`         | `number` | Calibration mark                    | `0`          |

**Return value example:**

```js
{
  row: number;
  col: number;
  mode: number; // Trigger method
  normalPress: number; // Normal trigger press stroke
  normalRelease: number; // Normal trigger release stroke
  rtFirstTouch: number; // RT triggers the first trip
  rtPress: number; // RT triggers the first time to press the stroke
  rtRelease: number; // RT triggers the release stroke for the first time
  pressDeadStroke: number; // Press the dead zone
  releaseDeadStroke: number; // Lift the dead zone
  axis: number; // axis body
  calibrate: number; // Calibration mark
}
```

---

### Example of usage

```typescript
async function setKeyPerformance() {
  try {
    const params = {
      row: 4,
      col: 5,
      mode: 0,
      normalPress: 1.506,
      normalRelease: 1.506,
      rtFirstTouch: 0.5,
      rtPress: 0.3,
      rtRelease: 0.3,
      pressDeadStroke: 0.2,
      releaseDeadStroke: 0.2,
      axis: 0,
      calibrate: 0,
    };

    const result = await ServiceKeyboard.setPerformance(params);
    console.log('Set key performance configuration results:', result);
  } catch (error) {
    console.error('Set key performance configuration failed:', error);
  }
}

setKeyPerformance();
```

---

### Things to note

::: tip

- All parameters are required and complete configuration information is required.
- Parameter values ​​need to comply with the actual specifications and limitations of the keyboard.
- After the settings are completed, it is recommended to use the `getPerformance` interface to verify whether the settings are effective.
  :::

---

## Obtain ADC sampled data

ServiceKeyboard.getADCSample()

**Brief description:**
Gets the ADC sample data for the specified row, used to analyze the physical state of the key.

---

### parameter

| Parameter name | Type     | Description                                               | Required | Default |
| -------------- | -------- | --------------------------------------------------------- | -------- | ------- |
| `params`       | `object` | An object containing line number information.             | Yes      | None    |
| `params.row`   | `number` | The row number of the ADC sampled data is to be obtained. | Yes      | None    |

---

### Return value

- **Overall Type:** `Promise<IADCSampleInfo>`
- **Description:** Returns a `Promise`, which resolves to an object containing ADC sampled data.
- **Resolve object structure (`IADCSampleInfo`):**

| Field Name | Type       | Description                                                               | Sample Value        |
| ---------- | ---------- | ------------------------------------------------------------------------- | ------------------- |
| `adc`      | `number`   | ADC value                                                                 | `0`                 |
| `row`      | `number`   | line number                                                               | `3`                 |
| `data`     | `number[]` | ADC sampled data array containing sample values ​​for all keys in the row | `[2715, 2700, ...]` |

**Return value example:**

```js
{
    "adc": 0,
    "row": 3,
    "data": [
        2715,
        2700,
        2686,
        2693,
        2704,
        2772,
        2674,
        2688,
        2688,
        2684,
        2692,
        2680,
        0,
        2684,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]
}
```

---

### Example of usage

```typescript
async function getADCSampleData(row: number) {
  try {
    const result = await ServiceKeyboard.getADCSample({
      row: row,
    });
    console.log('ADC sampling data:', result);
    console.log('Line Number:', result.row);
    console.log('sampled data:', result.data);
  } catch (error) {
    console.error('Failed to obtain ADC sampled data:', error);
  }
}

// Example: Get the ADC sampled data on line 3
getADCSampleData(3);
```

---

### Things to note

::: tip

- The value of `row` needs to be determined based on the actual matrix layout of the keyboard.
- The value in the `data` array represents the ADC sample value for each key, and 0 indicates that there is no key press or invalid data at that position.
- ADC sample values ​​can be used to analyze the physical state and trigger conditions of the key.
  :::

---

## Get routing data

ServiceKeyboard.getRoute()

**Brief description:**
Gets the travel distance data of the key press of the specified row, which is used to analyze the trigger status of the key.

---

### parameter

| Parameter name | Type     | Description                                   | Required | Default |
| -------------- | -------- | --------------------------------------------- | -------- | ------- |
| `params`       | `object` | An object containing line number information. | Yes      | None    |
| `params.row`   | `number` | The line number to get the routing data.      | Yes      | None    |

---

### Return value

- **Overall Type:** `Promise<IRouteInfo>`
- **Description:** Returns a `Promise`, which resolves to an object containing the trip data of the key press.
- **Resolve object structure (`IRouteInfo`):**

| Field Name | Type       | Description                                                             | Sample Value     |
| ---------- | ---------- | ----------------------------------------------------------------------- | ---------------- |
| `route`    | `number`   | Routing value                                                           | `1`              |
| `row`      | `number`   | line number                                                             | `3`              |
| `data`     | `number[]` | Routing data array, containing the trip distance of all keys in the row | `[0, 0, 0, ...]` |

**Return value example:**

```js
{
    "route": 1,
    "row": 3,
    "data": [
        0,
        0,
        0,
        0,
        0,
        343,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]
}
```

---

### Example of usage

```typescript
async function getRouteData(row: number) {
  try {
    const result = await ServiceKeyboard.getRoute({
      row: row,
    });
    console.log('Routing data:', result);
    console.log('Line Number:', result.row);
    console.log('Route value:', result.route);
    console.log('data:', result.data);
  } catch (error) {
    console.error('Failed to get routing data:', error);
  }
}

// Example: Get the routing data on line 3
getRouteData(3);
```

---

### Things to note

::: tip

- The value of `row` needs to be determined based on the actual matrix layout of the keyboard.
- The value in the `data` array represents the route value for each key, and 0 indicates that there is no key press or invalid data at that location.
- The routing value can be used to analyze the trigger status and signal transmission of the key.
  :::

## Begin calibration

ServiceKeyboard.calibrationStart

**Brief description:**
Start the calibration process of the device.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall Type:** `Promise<Calibration>`
- **Description:** Returns a `Promise`, which resolves to a `Calibration` object containing the state or initial data of the calibration process.

---

### Example of usage

```js
async function beginCalibration() {
  try {
    // Make sure the device is initialized
    // await ServiceKeyboard.init(deviceId);
    const calibrationStatus = await ServiceKeyboard.calibrationStart();
    console.log('Calibration has started:', calibrationStatus);
    // Follow-up operations or UI updates according to calibrationStatus
  } catch (error) {
    console.error('Calibration failed:', error);
  }
}

// beginCalibration();
```

## End calibration

ServiceKeyboard.calibrationEnd

**Brief description:**
End the calibration process of the device.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall Type:** `Promise<Calibration>`
- **Description:** Returns a `Promise`, which resolves to a `Calibration` object containing the state or final data after calibration is completed.

---

### Example of usage

```js
async function finishCalibration() {
  try {
    // Make sure the device is initialized and calibration has started
    // await ServiceKeyboard.init(deviceId);
    // await ServiceKeyboard.calibrationStart();
    const calibrationResult = await ServiceKeyboard.calibrationEnd();
    console.log('Calibration ended:', calibrationResult);
    // Follow-up operations or UI updates according to calibrationResult
  } catch (error) {
    console.error('End calibration failed:', error);
  }
}

// finishCalibration();
```

## Get calibration status

ServiceKeyboard.getCalibrationStatus()

**Brief description:**
Gets the key calibration status information for the specified row.

---

### parameter

| Parameter name | Type     | Description                                   | Required | Default |
| -------------- | -------- | --------------------------------------------- | -------- | ------- |
| `params`       | `object` | An object containing line number information. | Yes      | None    |
| `params.row`   | `number` | Line number to get the calibration status.    | Yes      | None    |

---

### Return value

- **Overall Type:** `Promise<ICalibrationStatusInfo>`
- **Description:** Returns a `Promise`, which resolves to an object containing calibration status information.
- **Resolve object structure (`ICalibrationStatusInfo`):**

| Field Name  | Type       | Description                                                                    | Sample Value     |
| ----------- | ---------- | ------------------------------------------------------------------------------ | ---------------- |
| `calibrate` | `number`   | Calibration status value                                                       | `2`              |
| `row`       | `number`   | line number                                                                    | `3`              |
| `data`      | `number[]` | Calibration status array, containing calibration status of all keys in the row | `[0, 0, 0, ...]` |

**Return value example:**

```js
{
    "calibrate": 2,
    "row": 3,
    "data": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ]
}
```

---

### Example of usage

```typescript
async function getCalibrationStatusData(row: number) {
  try {
    const result = await ServiceKeyboard.getCalibrationStatus({
      row: row,
    });
    console.log('Calibration status:', result);
    console.log('Line Number:', result.row);
    console.log('Calibration status value:', result.calibrate);
    console.log('status data:', result.data);
  } catch (error) {
    console.error('Failed to obtain calibration status:', error);
  }
}

// Example: Get the calibration status of line 3
getCalibrationStatusData(3);
```

---

### Things to note

::: tip

- The value of `row` needs to be determined based on the actual matrix layout of the keyboard.
- The value in the `data` array indicates the calibration status of each key, and 0 indicates that there are no keys or are not calibrated at that position.
- The calibration status value can be used to determine whether the key needs calibration or whether the calibration is completed.
  :::

---

## Get the axis list

ServiceKeyboard.getAxisList()

**Brief description:**
Gets a list of all the axle types supported by the keyboard.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall Type:** `Promise<IAxisListInfo>`
- **Description:** Returns a `Promise`, which resolves to an object containing the information on the axis list.
- **Resolve object structure (`IAxisListInfo`):**

| Field Name | Type       | Description                                                           | Sample Value      |
| ---------- | ---------- | --------------------------------------------------------------------- | ----------------- |
| `total`    | `number`   | Total number of axle body types                                       | `4`               |
| `list`     | `number[]` | Array of Axis Body Type IDs, containing all supported Axis Body Types | `[54, 24, 1, 69]` |

**Return value example:**

```js
{
    "total": 4,
    "list": [
        54,
        24,
        1,
        69
    ]
}
```

---

### Example of usage

```typescript
async function getAxisListData() {
  try {
    const result = await ServiceKeyboard.getAxisList();
    console.log('Axis Body List:', result);
    console.log('Total number of axis bodies:', result.total);
    console.log('Axis Body Type List:', result.list);
  } catch (error) {
    console.error('Failed to get the axis list:', error);
  }
}

// Get the axis list
getAxisListData();
```

---

### Things to note

::: tip

- The returned axis body type ID can be used to set the axis body type of the key.
- Different shaft body type IDs represent different shaft body models or characteristics.
- When setting the axis body using the `setPerformance` interface, the valid ID in this list should be used.
  :::

---

## Global Functional Axis Library Query

**Brief description:**
Keyboard support shaft library

### Things to note

::: tip

- **For the specific interface of the axis body library, please contact us for it.**
- Before importing the axis library, make sure the data format is correct.
  :::
