# Layout/Remodel

## Get the key layout of the specified layer

ServiceKeyboard.getKeyLayout()

**Brief description:**
Gets the keyboard layout data for the specified layer and row.

---

### parameter

| Parameter name | Type     | Required | Description                                              |
| -------------- | -------- | -------- | -------------------------------------------------------- |
| `params`       | `object` |          | Object describing the number of keyboard layers and rows |
| `params.layer` | `number` | Yes      | Number of keyboard layers, starting from 0               |
| `params.row`   | `number` | Yes      | Line number, starting from 0                             |

---

### Return value

- **Overall Type:** `Promise<IGetKeyLayoutInfo>`
- **Description:** Returns a `Promise`, which resolves to an object containing the keyboard layout information for the specified layer and row.
- **Resolve object structure (`IGetKeyLayoutInfo`):**

| Field Name       | Type       | Description                   | Sample Value        |
| ---------------- | ---------- | ----------------------------- | ------------------- |
| `layer`          | `number`   | Keyboard layer number         | `0`                 |
| `row`            | `number`   | line number                   | `2`                 |
| `keyboardLayout` | `number[]` | Key value array for this line | `[43, 20, 26, ...]` |

**Return value example:**

```js
{
    "layer": 0,
    "row": 2,
    "keyboardLayout": [
        43,
        20,
        26,
        8,
        21,
        23,
        28,
        24,
        12,
        18,
        19,
        47,
        48,
        49,
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
async function getKeyboardLayout() {
  try {
    const layout = await ServiceKeyboard.getKeyLayout({
      layer: 0,
      row: 2,
    });
    console.log('Keyboard layout:', layout);
  } catch (error) {
    console.error('Failed to get keyboard layout:', error);
  }
}

getKeyboardLayout();
```

## Get key code

ServiceKeyboard.getKeyCode()

**Brief description:**
Gets the encoded value of the key press at the specified position.

---

### parameter

| Parameter name | Type     | Required | Description                                |
| -------------- | -------- | -------- | ------------------------------------------ |
| `params`       | `object` | Yes      | Object describing the key position         |
| `params.layer` | `number` | Yes      | Number of keyboard layers, starting from 0 |
| `params.row`   | `number` | Yes      | Line number, starting from 0               |
| `params.col`   | `number` | Yes      | Column number, starting from 0             |

---

### Return value

- **Overall Type:** `Promise<IGetKeyCodeInfo>`
- **Description:** Returns a `Promise`, which resolves to an object containing key encoding information.
- **Resolve object structure (`IGetKeyCodeInfo`):**

| Field Name | Type     | Description           | Sample Value |
| ---------- | -------- | --------------------- | ------------ |
| `layer`    | `number` | Keyboard layer number | `0`          |
| `row`      | `number` | line number           | `3`          |
| `col`      | `number` | column number         | `7`          |
| `keycode`  | `number` | Keycode value         | `13`         |

**Return value example:**

```js
{
    "layer": 0,
    "row": 3,
    "col": 7,
    "keycode": 13
}
```

---

### Example of usage

```typescript
async function getKeyCode() {
  try {
    const result = await ServiceKeyboard.getKeyCode({
      layer: 0,
      row: 3,
      col: 7,
    });
    console.log('get key encoding result:', result);
  } catch (error) {
    console.error('Failed to get key coding:', error);
  }
}

getKeyCode();
```

## Set key encoding

ServiceKeyboard.setKeyCode()

**Brief description:**
Sets the encoded value of the specified position key.

---

### parameter

| Parameter name   | Type     | Required | Description                                     |
| ---------------- | -------- | -------- | ----------------------------------------------- |
| `params`         | `object` | Yes      | Object describing the key position and encoding |
| `params.layer`   | `number` | Yes      | Number of keyboard layers, starting from 0      |
| `params.row`     | `number` | Yes      | Line number, starting from 0                    |
| `params.col`     | `number` | Yes      | Column number, starting from 0                  |
| `params.keycode` | `number` | Yes      | Keycode value to set                            |

---

### Return value

- **Overall Type:** `Promise<ISetKeyCodeInfo>`
- **Description:** Returns a `Promise`, which resolves to an object containing the settings result.
- **Resolve object structure (`ISetKeyCodeInfo`):**

| Field Name | Type     | Description           | Sample Value |
| ---------- | -------- | --------------------- | ------------ |
| `layer`    | `number` | Keyboard layer number | `0`          |
| `row`      | `number` | line number           | `3`          |
| `col`      | `number` | column number         | `3`          |
| `keycode`  | `number` | Set key code value    | `0`          |

**Return value example:**

```js
{
    "layer": 0,
    "row": 3,
    "col": 3,
    "keycode": 0
}
```

---

### Example of usage

```typescript
async function setKeyCode() {
  try {
    const result = await ServiceKeyboard.setKeyCode({
      layer: 0,
      row: 3,
      col: 3,
      keycode: 21,
    });
    console.log('Set key encoding result:', result);
  } catch (error) {
    console.error('Set key encoding failed:', error);
  }
}

setKeyCode();
```

## Get the default key layout

ServiceKeyboard.getDefaultKeyLayout()

**Brief description:**
Gets the default keyboard layout data for the specified row, functional layer, and system.

**Release requirements:**Support starting from version 1.0.6.0

---

### parameter

| Parameter name  | Type     | Required | Description                                                                    |
| --------------- | -------- | -------- | ------------------------------------------------------------------------------ |
| `params`        | `object` | Yes      | Objects describing the number of keyboard lines, functional layers, and system |
| `params.row`    | `number` | Yes      | Line number, starting from 0                                                   |
| `params.fn`     | `number` | Yes      | Functional layer, value range 0-3                                              |
| `params.system` | `number` | Yes      | System type, 0 for Windows, 1 for macOS                                        |

---

### Return value

- **Overall Type:** `Promise<IGetDefaultKeyLayoutInfo>`
- **Description:** Returns a `Promise`, which resolves to an object containing the specified row, functional layer, and the default keyboard layout information for the system.
- **Resolve object structure (`IGetDefaultKeyLayoutInfo`):**

| Field Name | Type       | Description                                    | Sample Value        |
| ---------- | ---------- | ---------------------------------------------- | ------------------- |
| `row`      | `number`   | line number                                    | `2`                 |
| `fn`       | `number`   | Functional layer                               | `1`                 |
| `system`   | `number`   | System type                                    | `0`                 |
| `keyCodes` | `number[]` | The default keycoded value array for this line | `[43, 20, 26, ...]` |

**Return value example:**

```js
{
    "system": 0,
    "fn": 0,
    "row": 2,
    "keyCodes": [
        43,
        20,
        26,
        8,
        21,
        23,
        28,
        24,
        12,
        18,
        19,
        47,
        48,
        49,
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
async function getDefaultKeyboardLayout() {
  try {
    const layout = await ServiceKeyboard.getDefaultKeyLayout({
      row: 2,
      fn: 1,
      system: 0, // 0 means Windows system
    });
    console.log('Default keyboard layout:', layout);
  } catch (error) {
    console.error('Failed to get the default keyboard layout:', error);
  }
}

getDefaultKeyboardLayout();
```

---

### Bulk fetch example

```typescript
async function getAllDefaultLayouts() {
  const systems = [0, 1]; // 0: Windows, 1: macOS
  const fnLayers = [0, 1, 2, 3]; // Functional layer 0-3
  const rowCount = 5; // Suppose there are 5 rows

  const allLayouts = [];

  for (const system of systems) {
    for (const fn of fnLayers) {
      for (let i = 0; i < rowCount; i++) {
        try {
          // eslint-disable-next-line no-await-in-loop
          const res = await ServiceKeyboard.getDefaultKeyLayout({
            row: i,
            fn,
            system,
          });

          allLayouts.push({
            system: system === 0 ? 'Windows' : 'macOS',
            fnLayer: `fn${fn}`,
            row: i,
            keyCodes: res.keyCodes,
          });

          console.log(`Getted ${system === 0 ? 'Windows' : 'macOS'} fn${fn} ${i} line layout`);
        } catch (error) {
          console.error(`Fetch failed: system=${system}, fn=${fn}, row=${i}`, error);
        }
      }
    }
  }

  return allLayouts;
}

getAllDefaultLayouts();
```

## Get the key status

ServiceKeyboard.getKeyStatus()

**Brief description:**
Gets the key status information of the specified row, including the key stroke and status data.

**Release requirements:**Support from version 1.1.0.0

---

### parameter

| Parameter name | Type     | Required | Description                                    |
| -------------- | -------- | -------- | ---------------------------------------------- |
| `params`       | `object` | Yes      | Object describing the number of keyboard lines |
| `params.row`   | `number` | Yes      | Line number, starting from 0                   |

---

### Return value

- **Overall Type:** `Promise<IGetKeyStatusInfo>`
- **Description:** Returns a `Promise`, which resolves to an object containing the key status information of the specified row.
- **Resolve object structure (`IGetKeyStatusInfo`):**

| Field Name | Type       | Description                               | Sample Value        |
| ---------- | ---------- | ----------------------------------------- | ------------------- |
| `data`     | `number[]` | Status data array of all keys in this row | `[0, 1, 0, 1, ...]` |

**Return value example:**

```js
{
    "data": [0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0]
}
```

---

### Example of usage

```typescript
async function getKeyStatusForRow() {
  try {
    const status = await ServiceKeyboard.getKeyStatus({
      row: 2,
    });
    console.log('Key Status:', status.data);

    // Process status data
    status.data.forEach((status, index) => {
      console.log(`${index} key status: ${status === 1 ? 'Pressed' : 'Not pressed'}`);
    });
  } catch (error) {
    console.error('Failed to get key state:', error);
  }
}

getKeyStatusForRow();
```

### Bulk fetch example

```typescript
async function getAllKeyStatus() {
  const keyboardStore = useKeyboardStore();
  const { keyboard } = storeToRefs(keyboardStore);

  const travels = [];
  const keyStatus = [];

  const rowCount = keyboard.value.length;

  // Get the routing and status data of all rows in parallel
  const tasks = Array.from({ length: rowCount }, (_, i) => {
    return Promise.all([ServiceKeyboard.getRoute({ row: i }), ServiceKeyboard.getKeyStatus({ row: i })]);
  });

  const results = await Promise.all(tasks);

  // Process return data
  for (let i = 0; i < rowCount; i++) {
    const [routeRes, statusRes] = results[i];
    travels.push(routeRes.data);
    keyStatus.push(statusRes.data);
  }

  // Update keyboard data
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < keyboard.value[row].length; col++) {
      const key = keyboard.value[row][col].performance;
      key.travels = travels[row][col];
      key.keyStatus = keyStatus[row][col];
    }
  }

  console.log('All key states have been updated');
  return { travels, keyStatus };
}

getAllKeyStatus();
```
