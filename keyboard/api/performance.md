# Keyboard performance settings

## Get key performance and advanced mode

`ServiceKeyboard.getPerformanceMode()`

**Description:**
Retrieve the current performance mode of a key (single, RT or global) and the configured advanced key mode.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `key` | `number` | `keyValue` of the key, usually from `ServiceKeyboard.defKey()` | Yes | – |

### Returns
* **Type:** `Promise<{ touchMode: string; advancedKeyMode: number }>`
* **Description:** Resolves to an object containing the performance mode string and the advanced key mode ID.

**advancedKeyMode values**
| Value | Meaning | Description |
|-------|--------|-------------|
| 0 | none | no special function |
| 1 | DKS | dual key stroke |
| 2 | MPT | multi‑point trigger |
| 3 | MT | multi trigger |
| 4 | TGL | toggle mode |
| 5 | END | end mode |
| 6 | MCR | macro |
| 8 | SOCD | simultaneous opposite cardinal directions |
| 9 | RS | rapid switch |

### Example usage
```js
async function fetchKeyPerformanceMode(targetKeyValue) {
  try {
    const modeInfo = await ServiceKeyboard.getPerformanceMode(targetKeyValue);
    console.log(`Key ${targetKeyValue}: mode ${modeInfo.touchMode}, advanced ${modeInfo.advancedKeyMode}`);
  } catch (error) {
    console.error('Failed to get performance mode:', error);
  }
}
```

### Notes
::: tip
`key` refers to the `keyValue` returned by `ServiceKeyboard.defKey()`.
:::

## Set key performance and advanced mode

`ServiceKeyboard.setPerformanceMode()`

**Description:**
Set the performance mode (`single`, `rt` or `global`) and advanced key mode for a key.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `params` | `object` | Parameter object | Yes | – |
| `params.key` | `number` | `keyValue` of the key | Yes | – |
| `params.mode` | `string` | Performance mode: `"single"`, `"rt"`, or `"global"` | Yes | – |
| `params.advancedKeyMode` | `number` | Advanced key mode value | Yes | – |

### Returns
* **Type:** `Promise<{ touchMode: string; advancedKeyMode: number }>`
* **Description:** Resolves to the applied mode values.

### Example usage
```js
async function applyKeyPerformanceMode(keyValue, mode, advanced) {
  const params = { key: keyValue, mode, advancedKeyMode: advanced };
  await ServiceKeyboard.setPerformanceMode(params);
}
```

### Notes
::: tip
`params.key` refers to the `keyValue` from `ServiceKeyboard.defKey()`.
:::

## Get single key travel

`ServiceKeyboard.getSingleTravel()`

**Description:**
Read the first trigger travel distance for a key when not in RT mode.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `key` | `number` | `keyValue` of the key | Yes | – |
| `decimal` | `number` | Number of decimal places in the result | No | `2` |

### Returns
* **Type:** `Promise<number>`
* **Description:** Resolves to the current travel value.

### Example usage
```js
async function fetchKeySingleTravel(keyValue, precision) {
  const travel = await ServiceKeyboard.getSingleTravel(keyValue, precision);
  console.log(`Key ${keyValue} travel: ${travel}`);
}
```

### Notes
::: tip
`key` refers to the `keyValue` returned by `ServiceKeyboard.defKey()`.
:::

## Set single key travel

`ServiceKeyboard.setSingleTravel()`

**Description:**
Set the first trigger travel distance for a key when not in RT mode.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `key` | `number` | `keyValue` of the key | Yes | – |
| `value` | `number` | Travel distance to apply | Yes | – |
| `decimal` | `number` | Number of decimal places | No | `2` |

### Returns
* **Type:** `Promise<number>`
* **Description:** Resolves to the applied travel value.

### Example usage
```js
async function applyKeySingleTravel(keyValue, newTravel, precision) {
  await ServiceKeyboard.setSingleTravel(keyValue, newTravel, precision);
}
```

### Notes
::: tip
* `key` is the `keyValue` from `ServiceKeyboard.defKey()`.
* `value` is measured in millimeters.
:::

## Get RT travel

`ServiceKeyboard.getRtTravel()`

**Description:**
Get the press and release travel distances for a key in Rapid Trigger mode.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `key` | `number` | `keyValue` of the key | Yes | – |

### Returns
* **Type:** `Promise<{ pressTravel: number; releaseTravel: number }>`
* **Description:** Resolves to an object containing press and release travel distances.

### Example usage
```js
async function fetchKeyRtTravel(keyValue) {
  const rt = await ServiceKeyboard.getRtTravel(keyValue);
  console.log(`Key ${keyValue} RT press ${rt.pressTravel}, release ${rt.releaseTravel}`);
}
```

### Notes
::: tip
`key` refers to the `keyValue` returned by `ServiceKeyboard.defKey()`.
:::

## Set RT press travel

`ServiceKeyboard.setRtPressTravel()`

**Description:**
Set the press travel distance for a key in RT mode.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `params` | `object` | Parameter object | Yes | – |
| `params.key` | `number` | `keyValue` of the key | Yes | – |
| `params.value` | `number` | Press travel distance | Yes | – |

### Returns
* **Type:** `Promise<{ pressTravel: number }>`
* **Description:** Resolves to the applied press travel value.

### Example usage
```js
async function applyKeyRtPressTravel(keyValue, value) {
  await ServiceKeyboard.setRtPressTravel({ key: keyValue, value });
}
```

### Notes
::: tip
`params.key` refers to the `keyValue` from `ServiceKeyboard.defKey()`.
:::

## Set RT release travel

`ServiceKeyboard.setRtReleaseTravel()`

**Description:**
Set the release travel distance for a key in RT mode.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `params` | `object` | Parameter object | Yes | – |
| `params.key` | `number` | `keyValue` of the key | Yes | – |
| `params.value` | `number` | Release travel distance | Yes | – |

### Returns
* **Type:** `Promise<{ releaseTravel: number }>`
* **Description:** Resolves to the applied release travel value.

### Example usage
```js
async function applyKeyRtReleaseTravel(keyValue, value) {
  await ServiceKeyboard.setRtReleaseTravel({ key: keyValue, value });
}
```

### Notes
::: tip
`params.key` refers to the `keyValue` from `ServiceKeyboard.defKey()`.
:::

## Get key dead zones

`ServiceKeyboard.getDpDr()`

**Description:**
Retrieve the press dead zone (DP) and release dead zone (DR) for a key.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `key` | `number` | `keyValue` of the key | Yes | – |

### Returns
* **Type:** `Promise<{ pressDead: number; releaseDead: number }>`
* **Description:** Resolves to the DP and DR values.

### Example usage
```js
async function fetchKeyDeadZones(keyValue) {
  const dz = await ServiceKeyboard.getDpDr(keyValue);
  console.log(`Key ${keyValue} DP ${dz.pressDead}, DR ${dz.releaseDead}`);
}
```

### Notes
::: tip
`key` refers to the `keyValue` returned by `ServiceKeyboard.defKey()`.
:::

## Set press dead zone

`ServiceKeyboard.setDp()`

**Description:**
Set the press dead zone (DP) for a key.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `key` | `number` | `keyValue` of the key | Yes | – |
| `value` | `number` | Dead zone value | Yes | – |

### Returns
* **Type:** `Promise<{ pressDead: number }>`
* **Description:** Resolves when the dead zone is applied.

### Example usage
```js
async function applyKeyPressDeadZone(keyValue, value) {
  await ServiceKeyboard.setDp(keyValue, value);
}
```

### Notes
::: tip
`value` is the new press dead zone value.
:::

## Start calibration

`ServiceKeyboard.calibrationStart()`

**Description:**
Begin a device calibration process.

### Returns
* **Type:** `Promise<Calibration>`
* **Description:** Resolves to a `Calibration` object containing the initial state. See [Calibration model](/keyboard/model#device).

### Example usage
```js
async function beginCalibration() {
  const status = await ServiceKeyboard.calibrationStart();
  console.log('Calibration started:', status);
}
```

## End calibration

`ServiceKeyboard.calibrationEnd()`

**Description:**
Finish the calibration process.

### Returns
* **Type:** `Promise<Calibration>`
* **Description:** Resolves to a `Calibration` object with final data.

### Example usage
```js
async function finishCalibration() {
  const result = await ServiceKeyboard.calibrationEnd();
  console.log('Calibration finished:', result);
}
```

## Get RM6X21 calibration data

`ServiceKeyboard.getRm6X21Calibration()`

**Description:**
Retrieve calibration random values and travel values for devices using the RM6X21 solution. Requires `calibrationStart` and `calibrationEnd` around the call.

### Returns
* **Type:** `Promise<{ calibrations: number[]; travels: number[] }>`
* **Description:** Resolves to arrays of calibration numbers and their corresponding travel values.

### Example usage
```js
async function fetchCalibrationData() {
  const result = await ServiceKeyboard.getRm6X21Calibration();
  console.log('Calibration data:', result);
}
```
