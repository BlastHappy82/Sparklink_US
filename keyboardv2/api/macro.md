# Macro

## Get macro mode

ServiceKeyboard.getMacroMode()

**Brief description:**
Gets the macro mode settings for the specified macro ID.

### parameter

| Parameter name   | Type     | Description                     | Required | Default |
| :--------------- | :------- | :------------------------------ | :------- | :------ |
| `params`         | `object` | Object containing the macro ID. | Yes      | None    |
| `params.macroId` | `number` | The macro ID to query.          | Yes      | None    |

### Return value

**Type:** `Promise<{ macroId: number, mode: number, valid: boolean, actNum: number, repNum: number }>`

**Description:** Returns a `Promise`, which resolves to an object, containing the pattern setting information of the macro.

**content:**
| Field Name | Type | Description | Sample Value |
| :------- | :------- | :--------------- | :----- |
| `macroId` | `number` | MacroID.| `1` |
| `mode` | `number` | Macro execution mode.| `0` |
| `valid` | `boolean` | Macro valid flag.| `true` |
| `actNum` | `number` | Number of macro actions.| `6` |
| `repNum` | `number` | Number of repetitions.| `1` |

### Example of usage

```js
async function getMacroModeSettings(macroId) {
  try {
    const result = await ServiceKeyboard.getMacroMode({ macroId });
    console.log(`macroID ${macroId} mode setting:`, result);
    return result;
  } catch (error) {
    console.error('Failed to get macro mode setting:', error);
    throw error;
  }
}

// Example: Get the macro mode setting with macro ID 1
// getMacroModeSettings(1);
```

### Things to note

::: tip

- `macroId`: The macro ID to query.
- `mode` represents the execution mode of the macro:
- 0: Click to execute, repeat n times, click again during execution is invalid
- 1: Click to execute, repeat n times, click again during execution, and execute again
- 2: Click to execute, repeat n times, click again during execution, and stop execution immediately
- 3: Click to execute, repeat n times, click again during execution, stop execution after completing this macro
- 4: Press and hold to execute, the number of repetitions is unlimited, and the execution is stopped immediately after release
- 5: Press and hold to execute, the number of repetitions is unlimited, and stop execution after releasing this macro.
- `valid`: Indicates whether the macro is valid.
- `actNum`: Indicates the number of actions contained in the macro.
- `repNum`: Indicates the number of repeated executions of the macro.
  :::

## Set macro mode

ServiceKeyboard.setMacroMode()

**Brief description:**
Sets the macro mode configuration for the specified macro ID.

### parameter

| Parameter name   | Type     | Description                                        | Required | Default |
| :--------------- | :------- | :------------------------------------------------- | :------- | :------ |
| `params`         | `object` | Object containing macro mode settings.             | Yes      | None    |
| `params.macroId` | `number` | The macro ID to set.                               | Yes      | None    |
| `params.mode`    | `number` | Macro execution mode.                              | Yes      | None    |
| `params.valid`   | `number` | Macro valid flag (1 means valid, 0 means invalid). | Yes      | None    |
| `params.actNum`  | `number` | Number of macro actions.                           | Yes      | None    |
| `params.repNum`  | `number` | Number of repetitions.                             | Yes      | None    |

### Return value

**Type:** `Promise<{ macroId: number, mode: number, valid: boolean, actNum: number, repNum: number }>`

**Description:** Returns a `Promise`, which resolves to an object, containing the set macro mode information.

**content:**
| Field Name | Type | Description | Sample Value |
| :------- | :------- | :--------------- | :----- |
| `macroId` | `number` | MacroID.| `0` |
| `mode` | `number` | Macro execution mode.| `0` |
| `valid` | `boolean` | Macro valid flag.| `true` |
| `actNum` | `number` | Number of macro actions.| `8` |
| `repNum` | `number` | Number of repetitions.| `0` |

### Example of usage

```js
async function setMacroModeSettings(macroId, mode, valid, actNum, repNum) {
  try {
    const params = {
      macroId,
      mode,
      valid,
      actNum,
      repNum,
    };

    const result = await ServiceKeyboard.setMacroMode(params);
    console.log(`macroID ${macroId} mode setting has been updated:`, result);
    return result;
  } catch (error) {
    console.error('Failed to set macro mode:', error);
    throw error;
  }
}

// Example: Set macro mode with macro ID 0
// setMacroModeSettings(0, 0, 1, 8, 0);
```

### Things to note

::: tip

- `macroId`: The macro ID to set.
- `mode` represents the execution mode of the macro:
- 0: Click to execute, repeat n times, click again during execution is invalid
- 1: Click to execute, repeat n times, click again during execution, and execute again
- 2: Click to execute, repeat n times, click again during execution, and stop execution immediately
- 3: Click to execute, repeat n times, click again during execution, stop execution after completing this macro
- 4: Press and hold to execute, the number of repetitions is unlimited, and the execution is stopped immediately after release
- 5: Press and hold to execute, the number of repetitions is unlimited, and stop execution after releasing this macro.
- `valid`: Use a number when input (1 means valid, 0 means invalid), and convert to a Boolean value when returned.
- `actNum`: Indicates the number of actions contained in the macro.
- `repNum`: indicates the number of repeated executions of the macro, 0 indicates no repetition.
  :::

## Get macro data

ServiceKeyboard.getMacroData()

**Brief description:**
Gets the macro action data of the specified macro ID.Since the macro action data may be large, the interface supports pagination acquisition.

### parameter

| Parameter name   | Type     | Description                                | Required | Default |
| :--------------- | :------- | :----------------------------------------- | :------- | :------ |
| `params`         | `object` | Object containing the macro ID and offset. | Yes      | None    |
| `params.macroId` | `number` | The macro ID to query.                     | Yes      | None    |
| `params.offset`  | `number` | Paging offset, used to calculate paging.   | Yes      | None    |

### Return value

**Type:** `Promise<{ macroId: number, offset: number, macros: Array<{ status: number, delay: number, keyCode: number }> }>`

**Description:** Returns a `Promise`, which is parsed into an object, containing the action data information of the macro.

**content:**
| Field Name | Type | Description | Sample Value |
| :------- | :------- | :--------------- | :----- |
| `macroId` | `number` | MacroID.| `0` |
| `offset` | `number` | Pagination offset.| `0` |
| `macros` | `Array` | Macro action array.| - |

**Object structure in macros array:**
| Field Name | Type | Description | Sample Value |
| :------- | :------- | :--------------- | :----- |
| `status` | `number` | Key status: 1=press, 0=bounce.| `1` |
| `delay` | `number` | The delay after the action is executed, the unit is ms.| `47` |
| `keyCode`| `number` | keycode.| `22` |

### Example of usage

```js
async function getMacroDataSettings(macroId, offset) {
  try {
    const params = {
      macroId,
      offset,
    };

    const result = await ServiceKeyboard.getMacroData(params);
    console.log(`action data of macro ID ${macroId}:`, result);
    return result;
  } catch (error) {
    console.error('Failed to obtain macro data:', error);
    throw error;
  }
}

// Example: Get the first page action data with macro ID 0
// getMacroDataSettings(0, 0);
```

### Things to note

::: tip

- `macroId`: The macro ID to query.
- `offset`: Paging offset, used to paging to obtain macro action data.
- Each object in the `macros` array represents a macro action:
- `status`: 1 means pressing, 0 means popping up.
- `delay`: indicates the delay time after the operation is executed, in ms.
- `keyCode`: Indicates the key code to be triggered.
- The returned `macros` array length is fixed to 15, and the unused action position will be filled with `{ status: 0, delay: 0, keyCode: 0 }`.
  :::

## Set macro data

ServiceKeyboard.setMacroData()

**Brief description:**
Sets the macro action data of the specified macro ID.Since the macro action data may be large, the interface supports pagination settings.

### parameter

| Parameter name   | Type     | Description                                               | Required | Default |
| :--------------- | :------- | :-------------------------------------------------------- | :------- | :------ |
| `params`         | `object` | Object containing the macro ID, offset, and action array. | Yes      | None    |
| `params.macroId` | `number` | The macro ID to set.                                      | Yes      | None    |
| `params.offset`  | `number` | Paging offset, used to calculate paging.                  | Yes      | None    |
| `params.actions` | `Array`  | Macro action array.                                       | Yes      | None    |

**actions Object structure in array:**
| Field Name | Type | Description | Sample Value |
| :------- | :------- | :--------------- | :----- |
| `status` | `number` | Key status: 1=press, 0=bounce.| `1` |
| `delay` | `number` | The delay after the action is executed, the unit is ms.| `119` |
| `keyCode`| `number` | keycode.| `7` |

### Return value

**Type:** `Promise<Array<{ macroId: number, offset: number, macros: Array<{ status: number, delay: number, keyCode: number }> }>>`

**Description:** Returns a `Promise`, which is parsed into an array, containing the set macro action data information.

**content:**
| Field Name | Type | Description | Sample Value |
| :------- | :------- | :--------------- | :----- |
| `macroId` | `number` | MacroID.| `0` |
| `offset` | `number` | Pagination offset.| `0` |
| `macros` | `Array` | Macro action array.| - |

**Object structure in macros array:**
| Field Name | Type | Description | Sample Value |
| :------- | :------- | :--------------- | :----- |
| `status` | `number` | Key status: 1=press, 0=bounce.| `1` |
| `delay` | `number` | The delay after the action is executed, the unit is ms.| `119` |
| `keyCode`| `number` | keycode.| `7` |

### Example of usage

```js
async function setMacroDataSettings(macroId, offset, actions) {
  try {
    const params = {
      macroId,
      offset,
      actions,
    };

    const result = await ServiceKeyboard.setMacroData(params);
    console.log(`action data of macro ID ${macroId} has been updated:`, result);
    return result;
  } catch (error) {
    console.error('Set macro data failed:', error);
    throw error;
  }
}

// Example: Set the first page action data with macro ID 0
const exampleActions = [
  {
    status: 1,
    delay: 119,
    keyCode: 7,
  },
  {
    status: 1,
    delay: 32,
    keyCode: 4,
  },
  // ... More actions
];

// setMacroDataSettings(0, 0, exampleActions);
```

### Things to note

::: tip

- `macroId`: The macro ID to set.
- `offset`: Paging offset, used to paginate macro action data.
- `actions` Each object in the array represents a macro action:
- `status`: 1 means pressing, 0 means popping up.
- `delay`: indicates the delay time after the operation is executed, in ms.
- `keyCode`: Indicates the key code to be triggered.
- The returned `macros` array length is fixed to 15, and the unused action position will be filled with `{ status: 0, delay: 0, keyCode: 0 }`.
- After the setting is successful, the returned data structure is consistent with the data structure returned by the `getMacroData` interface.
  :::
