# Advanced button function

## Get advanced key types

ServiceKeyboard.getHigherKey()

**Brief description:**
Gets the advanced key type for the specified key position.

### parameter

| Parameter name | Type     | Description                                          | Required | Default |
| :------------- | :------- | :--------------------------------------------------- | :------- | :------ |
| `params`       | `object` | Object containing key position information.          | Yes      | None    |
| `params.row`   | `number` | The row number of the key in the keyboard matrix.    | Yes      | None    |
| `params.col`   | `number` | The column number of the key in the keyboard matrix. | Yes      | None    |

### Return value

**Type:** `Promise<{ row: number, col: number, mode: number }>`

**Description:** Returns a `Promise`, which resolves to an object, containing key position and advanced key type information.

**content:**
| Field Name | Type | Description | Sample Value |
| :------- | :------- | :--------------- | :----- |
| `row` | `number` | Line number of the key.| `5` |
| `col` | `number` | The column number of the key.| `2` |
| `mode` | `number` | Advanced key type.| `1` |

**mode value description:**

- `0`: No advanced key
- `1`: DKS (dynamic keying)
- `2`: MPT (multi-triggered)
- `3`: MT (Mode Switch/Trigger Delay)
- `4`: TGL (trigger delay)
- `5`: END (end trigger)
- `6`: SOCD (press conflict resolution at the same time)
- `7`: RS (reserved)

### Example of usage

```js
async function getHigherKeyType(row, col) {
  try {
    const result = await ServiceKeyboard.getHigherKey({ row, col });
    console.log(`Key position (${row}, ${col}) advanced key type:`, result);

    //Judge advanced key types based on mode value
    const modeMap = {
      0: 'No advanced key',
      1: 'DKS',
      2: 'MPT',
      3: 'MT',
      4: 'TGL',
      5: 'END',
      6: 'SOCD',
      7: 'RS',
    };

    console.log(`Advanced key type: ${modeMap[result.mode]}`);
  } catch (error) {
    console.error('Failed to get advanced key type:', error);
  }
}

// Example: Get advanced key type for keys with position (5, 0)
// getHigherKeyType(5, 0);
```

### Things to note

::: tip

- `row` and `col` indicate the position of the keys in the keyboard matrix.
- The `mode` value represents the advanced key type configured by this key, and can be used to determine which advanced key related interface needs to be called in the future.
  :::

## Delete Advanced Key

ServiceKeyboard.setHigherKeyNONE()

**Brief description:**
Delete advanced key settings for the specified key position.

### parameter

| Parameter name     | Type     | Description                                          | Required | Default |
| :----------------- | :------- | :--------------------------------------------------- | :------- | :------ |
| `params`           | `object` | Object containing key position and delete settings.  | Yes      | None    |
| `params.row`       | `number` | The row number of the key in the keyboard matrix.    | Yes      | None    |
| `params.col`       | `number` | The column number of the key in the keyboard matrix. | Yes      | None    |
| `params.mode`      | `string` | Set to 'NONE' to delete the advanced key.            | Yes      | None    |
| `params.data`      | `object` | Data object containing the delete settings.          | Yes      | None    |
| `params.data.mode` | `number` | Set to 0 to delete the advanced key.                 | Yes      | None    |

### Return value

**Type:** `Promise<void>`

**Description:** Returns a `Promise`, which resolves to `void` when the operation is successful.

### Example of usage

```js
async function deleteHigherKey(row, col) {
  try {
    const params = {
      row,
      col,
      mode: 'NONE',
      data: {
        mode: 0,
      },
    };

    await ServiceKeyboard.setHigherKeyNONE(params);
    console.log(`The advanced key settings for key position (${row}, ${col}) have been deleted`);
  } catch (error) {
    console.error('Delete advanced key setting failed:', error);
  }
}

// Example: Delete advanced key settings for keys with position (5, 0)
// deleteHigherKey(5, 0);
```

### Things to note

::: tip

- `row` and `col` indicate the key position to delete the advanced key settings.
- `mode` must be set to 'NONE'.
- `data.mode` must be set to 0.
- This action deletes all advanced key settings for this key.
  :::

## Set DKS Advanced Key

ServiceKeyboard.setHigherKeyDKS()

**Brief description:**
Sets DKS (Dynamic Key Path) Advanced Key Configuration for the specified key position.

### parameter

| Parameter name     | Type       | Description                                                 | Required | Default |
| :----------------- | :--------- | :---------------------------------------------------------- | :------- | :------ |
| `params`           | `object`   | Object containing key position and DKS settings.            | Yes      | None    |
| `params.row`       | `number`   | The row number of the key in the keyboard matrix.           | Yes      | None    |
| `params.col`       | `number`   | The column number of the key in the keyboard matrix.        | Yes      | None    |
| `params.data`      | `object`   | Data object containing DKS configuration.                   | Yes      | None    |
| `params.data.kcs`  | `number[]` | A key value array at each level of DKS, with a length of 4. | Yes      | None    |
| `params.data.trps` | `number[]` | DKS trigger point stroke parameter array, length 4.         | Yes      | None    |
| `params.data.dbs`  | `number[]` | DKS dead zone settings array, length is 2, unit is mm.      | Yes      | None    |

### Return value

**Type:** `Promise<{ row: number, col: number, mode: number, data: { kcs: number[], trps: number[], dbs: number[] } }>`

**Description:** Returns a `Promise`, which resolves to an object, containing the set DKS configuration information.

**content:**
| Field Name | Type | Description | Sample Value |
| :------- | :------- | :--------------- | :----- |
| `row` | `number` | Line number of the key.| `4` |
| `col` | `number` | The column number of the key.| `6` |
| `mode` | `number` | Advanced key type, fixed to 1 (DKS).| `1` |
| `data` | `object` | DKS configuration data.| - |
| `data.kcs` | `number[]` | A key value array at each level of DKS.| `[20, 26, 8, 9]` |
| `data.trps` | `number[]` | Array of trigger point travel parameters at each level of DKS.| `[127, 120, 120, 120]` |
| `data.dbs` | `number[]` | DKS's itinerary settings array.The 0th position is the minimum itinerary, and the 1st position is the maximum itinerary | `[1.5, 3]` |

### Example of usage

```js
async function setDksHigherKey(row, col, kcs, trps, dbs) {
  try {
    const params = {
      row,
      col,
      data: {
        kcs,
        trps,
        dbs
      }
    };

    const result = await ServiceKeyboard.setHigherKeyDKS(params);
The DKS setting of console.log(`key position (${row}, ${col}) has been updated:`, result);
  } catch (error) {
console.error('Setting DKS advanced key failed:', error);
  }
}

// Example: Set the DKS configuration of the key with position (4, 6)
// const exampleKcs = [20, 26, 8, 9];
// const exampleTrps = [127, 120, 120, 120];
// const exampleDbs = [1.5, 3];
// setDksHigherKey(4, 6, exampleKcs, exampleTrps, exampleDbs);
```

### Things to note

::: tip

- `row` and `col` indicate the key position to set the DKS.
- `kcs` array must contain 4 key values, corresponding to 4 levels of DKS.
- `trps` array must contain 4 trigger point travel parameters, corresponding to the 4 levels of DKS, and must be converted into binary.
- `dbs` array must contain 2 stroke values, the 0th bit is the minimum stroke, and the 1st bit is the maximum stroke, and the unit is mm.
- The returned `mode` value is fixed to 1, indicating the DKS type.
  :::

## Setting MPT Advanced Key

ServiceKeyboard.setHigherKeyMPT()

**Brief description:**
Sets the MPT (Multi-Trigger) Advanced Key Configuration for the specified key position.

### parameter

| Parameter name    | Type       | Description                                            | Required | Default |
| :---------------- | :--------- | :----------------------------------------------------- | :------- | :------ |
| `params`          | `object`   | Object containing key position and MPT settings.       | Yes      | None    |
| `params.row`      | `number`   | The row number of the key in the keyboard matrix.      | Yes      | None    |
| `params.col`      | `number`   | The column number of the key in the keyboard matrix.   | Yes      | None    |
| `params.data`     | `object`   | Data object containing MPT configuration.              | Yes      | None    |
| `params.data.kcs` | `number[]` | MPT key value array at each level, with a length of 3. | Yes      | None    |
| `params.data.dbs` | `number[]` | MPT stroke settings array, length is 3, unit is mm.    | Yes      | None    |

### Return value

**Type:** `Promise<{ row: number, col: number, mode: number, data: { kcs: number[], dbs: number[] } }>`

**Description:** Returns a `Promise`, which resolves to an object, containing the set MPT configuration information.

**content:**
| Field Name | Type | Description | Sample Value |
| :------- | :------- | :--------------- | :----- |
| `row` | `number` | Line number of the key.| `3` |
| `col` | `number` | The column number of the key.| `7` |
| `mode` | `number` | Advanced key type, fixed to 2 (MPT).| `2` |
| `data` | `object` | MPT configuration data.| - |
| `data.kcs` | `number[]` | MPT key value array at each level.| `[13, 4, 9]` |
| `data.dbs` | `number[]` | MPT stroke settings array at each level, unit is 0.001mm.| `[500, 1000, 1500]` |

### Example of usage

```js
async function setMptHigherKey(row, col, kcs, dbs) {
  try {
    const params = {
      row,
      col,
      data: {
        kcs,
        dbs
      }
    };

    const result = await ServiceKeyboard.setHigherKeyMPT(params);
The MPT setting of console.log(`key position (${row}, ${col}) has been updated:`, result);
  } catch (error) {
console.error('Setting MPT advanced key failed:', error);
  }
}

// Example: Set the MPT configuration of the button with position (3, 7)
// const exampleKcs = [13, 4, 9];
// const exampleDbs = [0.5, 1, 1.5]; // Unit is mm
// setMptHigherKey(3, 7, exampleKcs, exampleDbs);
```

### Things to note

::: tip

- `row` and `col` indicate the key position to set the MPT.
- `kcs` array must contain 3 key values, corresponding to the 3 levels of MPT respectively.
- The `dbs` array must contain 3 stroke values, corresponding to the 3 levels of MPT, and the unit is mm.
- The returned `mode` value is fixed to 2, indicating the MPT type.
- The returned value unit in the `dbs` array is 0.001mm, for example, 500 means 0.5mm.
  :::

## Setting MT Advanced Key

ServiceKeyboard.setHigherKeyMT()

**Brief description:**
Sets MT (Mode Switch/Trigger Delay) Advanced Key Configuration for the specified key position.

### parameter

| Parameter name     | Type       | Description                                          | Required | Default |
| :----------------- | :--------- | :--------------------------------------------------- | :------- | :------ |
| `params`           | `object`   | Object containing key position and MT settings.      | Yes      | None    |
| `params.row`       | `number`   | The row number of the key in the keyboard matrix.    | Yes      | None    |
| `params.col`       | `number`   | The column number of the key in the keyboard matrix. | Yes      | None    |
| `params.mode`      | `string`   | Set to 'MT' means setting the MT Advanced Key.       | Yes      | None    |
| `params.data`      | `object`   | Data object containing MT configuration.             | Yes      | None    |
| `params.data.time` | `number`   | Delay time in ms.                                    | Yes      | None    |
| `params.data.kcs`  | `number[]` | MT's key value array, length 2.                      | Yes      | None    |

### Return value

**Type:** `Promise<{ row: number, col: number, mode: number, data: { kcs: number[], time: number } }>`

**Description:** Returns a `Promise`, which resolves to an object, containing the set MT configuration information.

**content:**
| Field Name | Type | Description | Sample Value |
| :------- | :------- | :--------------- | :----- |
| `row` | `number` | Line number of the key.| `3` |
| `col` | `number` | The column number of the key.| `5` |
| `mode` | `number` | Advanced key type, fixed to 3 (MT).| `3` |
| `data` | `object` | MT configuration data.| - |
| `data.kcs` | `number[]` | Key value array of MT.| `[16, 18]` |
| `data.time` | `number` | Delay time in ms.| `200` |

### Example of usage

```js
async function setMtHigherKey(row, col, time, kcs) {
  try {
    const params = {
      row,
      col,
      mode: 'MT',
      data: {
        time,
        kcs,
      },
    };

    const result = await ServiceKeyboard.setHigherKeyMT(params);
    console.log(`MT settings for key position (${row}, ${col}) have been updated:`, result);
  } catch (error) {
    console.error('Setting MT advanced key failed:', error);
  }
}

// Example: Set the MT configuration of the key with position (3, 5)
// const exampleTime = 200;  // 200ms
// const exampleKcs = [16, 18];
// setMtHigherKey(3, 5, exampleTime, exampleKcs);
```

### Things to note

::: tip

- `row` and `col` indicate the key position to set the MT.
- `mode` must be set to 'MT'.
- `time` represents the delay time, in ms.
- `kcs` array must contain 2 key values.
- The returned `mode` value is fixed to 3, indicating the MT type.
  :::

## Setting TGL Advanced Key

ServiceKeyboard.setHigherKeyTGL()

**Brief description:**
Sets TGL (trigger delay) advanced key configuration for specified key positions.

### parameter

| Parameter name      | Type     | Description                                          | Required | Default |
| :------------------ | :------- | :--------------------------------------------------- | :------- | :------ |
| `params`            | `object` | Object containing key position and TGL settings.     | Yes      | None    |
| `params.row`        | `number` | The row number of the key in the keyboard matrix.    | Yes      | None    |
| `params.col`        | `number` | The column number of the key in the keyboard matrix. | Yes      | None    |
| `params.mode`       | `string` | Set to 'TGL' means setting the TGL advanced key.     | Yes      | None    |
| `params.data`       | `object` | Data object containing TGL configuration.            | Yes      | None    |
| `params.data.kcs`   | `number` | TGL's key value.                                     | Yes      | None    |
| `params.data.delay` | `number` | Delay time in ms.                                    | Yes      | None    |

### Return value

**Type:** `Promise<{ row: number, col: number, mode: number, data: { kcs: number, time: number } }>`

**Description:** Returns a `Promise`, which resolves to an object, containing the set TGL configuration information.

**content:**
| Field Name | Type | Description | Sample Value |
| :------- | :------- | :--------------- | :----- |
| `row` | `number` | Line number of the key.| `4` |
| `col` | `number` | The column number of the key.| `4` |
| `mode` | `number` | Advanced key type, fixed to 4 (TGL).| `4` |
| `data` | `object` | TGL configuration data.| - |
| `data.kcs` | `number` | TGL's key value.| `29` |
| `data.time` | `number` | Delay time in ms.| `0` |

### Example of usage

```js
async function setTglHigherKey(row, col, kcs, delay) {
  try {
    const params = {
      row,
      col,
      mode: 'TGL',
      data: {
        kcs,
        delay
      }
    };

    const result = await ServiceKeyboard.setHigherKeyTGL(params);
The TGL setting of console.log(`key position (${row}, ${col}) has been updated:`, result);
  } catch (error) {
console.error('Setting TGL advanced key failed:', error);
  }
}

// Example: Setting the TGL configuration for keys with position (4, 4)
// const exampleKcs = 29;
// const exampleDelay = 200;  // 200ms
// setTglHigherKey(4, 4, exampleKcs, exampleDelay);
```

### Things to note

::: tip

- `row` and `col` indicate the key position to set the TGL.
- `mode` must be set to 'TGL'.
- `kcs` is a single key value, not an array.
- `delay` represents the delay time, in ms.
- The returned `mode` value is fixed to 4, indicating the TGL type.
- The returned `time` field value is fixed to 0.
  :::

## Set the END Advanced Key

ServiceKeyboard.setHigherKeyEND()

**Brief description:**
Sets the END (end trigger) advanced key configuration for the specified key position.

### parameter

| Parameter name      | Type       | Description                                          | Required | Default |
| :------------------ | :--------- | :--------------------------------------------------- | :------- | :------ |
| `params`            | `object`   | Object containing key position and END settings.     | Yes      | None    |
| `params.row`        | `number`   | The row number of the key in the keyboard matrix.    | Yes      | None    |
| `params.col`        | `number`   | The column number of the key in the keyboard matrix. | Yes      | None    |
| `params.mode`       | `string`   | Set to 'END' means setting the END advanced key.     | Yes      | None    |
| `params.data`       | `object`   | Data object containing the END configuration.        | Yes      | None    |
| `params.data.kcs`   | `number[]` | END's key value array, length 2.                     | Yes      | None    |
| `params.data.delay` | `number`   | Delay time in ms.                                    | Yes      | None    |

### Return value

**Type:** `Promise<{ row: number, col: number, mode: number, data: { kcs: number[], delay: number } }>`

**Description:** Returns a `Promise`, which resolves to an object, containing the set END configuration information.

**content:**
| Field Name | Type | Description | Sample Value |
| :------- | :------- | :--------------- | :----- |
| `row` | `number` | Line number of the key.| `4` |
| `col` | `number` | The column number of the key.| `4` |
| `mode` | `number` | Advanced key type, fixed to 5 (END).| `5` |
| `data` | `object` | END configuration data.| - |
| `data.kcs` | `number[]` | END's key-value array.| `[21, 22]` |
| `data.delay` | `number` | Delay time in ms.| `200` |

### Example of usage

```js
async function setEndHigherKey(row, col, kcs, delay) {
  try {
    const params = {
      row,
      col,
      mode: 'END',
      data: {
        kcs,
        delay,
      },
    };

    const result = await ServiceKeyboard.setHigherKeyEND(params);
    console.log(`END setting of key position (${row}, ${col}) has been updated:`, result);
  } catch (error) {
    console.error('Setting END advanced key failed:', error);
  }
}

// Example: Set the END configuration of the button with position (4, 4)
// const exampleKcs = [21, 22];
// const exampleDelay = 200;  // 200ms
// setEndHigherKey(4, 4, exampleKcs, exampleDelay);
```

### Things to note

::: tip

- `row` and `col` indicate the key position to set END.
- `mode` must be set to 'END'.
- `kcs` array must contain 2 key values.
- `delay` represents the delay time, in ms.
- The returned `mode` value is fixed to 5, indicating the END type.
  :::

## Set SOCD Advanced Key

ServiceKeyboard.setHigherKeySOCD()

**Brief description:**
Set SOCD (press conflict resolution simultaneously) advanced key configuration for the specified key position.The SOCD function is to bind two keys. The button pressed later will force the previous key to release, and only one key will be triggered at the same time.

### parameter

| Parameter name    | Type       | Description                                                                                                    | Required | Default |
| :---------------- | :--------- | :------------------------------------------------------------------------------------------------------------- | :------- | :------ |
| `params`          | `object`   | Object containing key position and SOCD settings.                                                              | Yes      | None    |
| `params.row`      | `number`   | The row number of the first key in the keyboard matrix.                                                        | Yes      | None    |
| `params.col`      | `number`   | column number of the first key in the keyboard matrix.                                                         | Yes      | None    |
| `params.row2`     | `number`   | The row number of the second key in the keyboard matrix.                                                       | Yes      | None    |
| `params.col2`     | `number`   | The column number of the second key in the keyboard matrix.                                                    | Yes      | None    |
| `params.mode`     | `string`   | Set to 'SOCD' means setting the SOCD advanced key.                                                             | Yes      | None    |
| `params.socdMode` | `number`   | SOCD mode: 0=back overwrite, 1=front priority, 2=back priority, 3=neutral (both pressed does not take effect). | Yes      | None    |
| `params.delay`    | `number`   | Delay time in ms.                                                                                              | Yes      | None    |
| `params.kcs`      | `number[]` | SOCD's key value array, length 2.                                                                              | Yes      | None    |

### Return value

**Type:** `Promise<Array<{ row: number, col: number, mode: number, data: { row2: number, col2: number, kcs: number[], delay: number, socdMode: number } }>>`

**Description:** Returns a `Promise`, which is parsed into an array containing the SOCD configuration information of two objects.

**content:**
| Field Name | Type | Description | Sample Value |
| :------- | :------- | :--------------- | :----- |
| `row` | `number` | Line number of the key.| `3` |
| `col` | `number` | The column number of the key.| `6` |
| `mode` | `number` | Advanced key type, fixed to 6 (SOCD).| `6` |
| `data` | `object` | SOCD configuration data.| - |
| `data.row2` | `number` | Line number of paired keys.| `3` |
| `data.col2` | `number` | The column number of the paired key.| `7` |
| `data.kcs` | `number[]` | SOCD's key value array.| `[16, 18]` |
| `data.delay` | `number` | Delay time in ms.| `0` |
| `data.socdMode` | `number` | SOCD mode.| `0` |

### Example of usage

```js
async function setSocdHigherKey(row, col, row2, col2, socdMode, delay, kcs) {
  try {
    const params = {
      row,
      col,
      row2,
      col2,
      mode: 'SOCD',
      socdMode,
      delay,
      kcs
    };

    const result = await ServiceKeyboard.setHigherKeySOCD(params);
The SOCD settings of console.log(`Key position (${row}, ${col}) and (${row2}, ${col2}) have been updated:`, result);
  } catch (error) {
console.error('Setting SOCD advanced key failed:', error);
  }
}

// Example: Set the SOCD configuration of keys with positions (3, 6) and (3, 7)
// const exampleKcs = [16, 18];
// const exampleDelay = 0;  // 0ms
// const exampleSocdMode = 0; // Post-overwrite mode
// setSocdHigherKey(3, 6, 3, 7, exampleSocdMode, exampleDelay, exampleKcs);
```

### Things to note

::: tip

- `row` and `col` represent the position of the first key, and `row2` and `col2` represent the position of the second key.
- `mode` must be set to 'SOCD'.
- `kcs` array must contain 2 key values.
- `delay` represents the delay time, in ms.
- `socdMode` represents the working mode of SOCD:
- 0: Back overwrite - The button pressed afterward will overwrite the first button pressed
- 1: First priority - the first key pressed is preferred
- 2: Post-Priority - Post-Priority button
- 3: Neutral - No effect is taken when both buttons are pressed
- The returned `mode` value is fixed to 6, indicating the SOCD type.
- The return value is an array containing the configuration information of two objects, corresponding to the settings of the two keys.
  :::
