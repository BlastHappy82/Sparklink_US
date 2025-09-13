# Advanced key features

## Get all DKS settings

`ServiceKeyboard.getDksAll()`

**Description:**
Fetch the key codes configured for all DKS layers (DKS1–DKS4) of a key.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `key` | `number` | `keyValue` of the key, usually from `ServiceKeyboard.defKey()` | Yes | – |

### Returns
* **Type:** `Promise<{ dks1: number; dks2: number; dks3: number; dks4: number }>`
* **Description:** Resolves to an object containing the key codes for each DKS layer.

### Example usage
```js
async function fetchAllDksValues(targetKeyValue) {
  try {
    const dksSettings = await ServiceKeyboard.getDksAll(targetKeyValue);
    console.log(`Key ${targetKeyValue} DKS settings:`, dksSettings);
  } catch (error) {
    console.error('Failed to get DKS settings:', error);
  }
}
```

### Notes
::: tip
* `key` refers to the `keyValue` returned by `ServiceKeyboard.defKey()`.
* A complete DKS workflow usually includes reading travel values, DKS key codes and trigger travel points.
:::

## Get DKS travel value

`ServiceKeyboard.getDksTravel()`

**Description:**
Retrieve the travel distance for the specified DKS layout.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `key` | `number` | `keyValue` of the key | Yes | – |
| `type` | `string` | DKS layout name such as `'Layout_DB1'` or `'Layout_DB3'` | Yes | – |

### Returns
* **Type:** `Promise<number>`
* **Description:** Resolves to a travel value in millimeters (e.g. `1.4` for 1.4 mm).

### Example usage
```js
async function fetchDksTravelValue(targetKeyValue, dbType) {
  try {
    const dbValue = await ServiceKeyboard.getDksTravel(targetKeyValue, dbType);
    console.log(`Key ${targetKeyValue} ${dbType} travel: ${dbValue}`);
  } catch (error) {
    console.error('Failed to get DKS travel:', error);
  }
}
```

### Notes
::: tip
* `type` currently supports `Layout_DB1` and `Layout_DB3`.
* Values are measured in millimeters.
:::

## Get DKS trigger travel (TRPS)

`ServiceKeyboard.getTrps()`

**Description:**
Retrieve the travel parameter for the specified DKS trigger point.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `key` | `number` | `keyValue` of the key | Yes | – |
| `type` | `TrpsLayoutType` | Trigger point layout; see [TrpsLayoutType](/keyboard/model#advanced-key) | Yes | – |

### Returns
* **Type:** `Promise<{ trps: number }>`
* **Description:** Resolves to the travel parameter for the given trigger point.

### Example usage
```js
async function fetchTrpsValue(targetKeyValue, trpsType) {
  try {
    const result = await ServiceKeyboard.getTrps(targetKeyValue, trpsType);
    console.log(`Key ${targetKeyValue} TRPS ${trpsType}: ${result.trps}`);
  } catch (error) {
    console.error('Failed to get TRPS value:', error);
  }
}
```

### Notes
::: tip
`key` refers to the `keyValue` from `ServiceKeyboard.defKey()`.
:::

## Get all DKS trigger travel values

`ServiceKeyboard.getTrpsAll()`

**Description:**
Return travel parameters for all DKS trigger points (TRPS1–TRPS4) of a key.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `key` | `number` | `keyValue` of the key | Yes | – |

### Returns
* **Type:** `Promise<{ trps1: number; trps2: number; trps3: number; trps4: number }>`
* **Description:** Resolves to an object with travel parameters for each trigger point.

### Example usage
```js
async function fetchAllTrpsValues(targetKeyValue) {
  try {
    const trpsSettings = await ServiceKeyboard.getTrpsAll(targetKeyValue);
    console.log(`Key ${targetKeyValue} TRPS values:`, trpsSettings);
  } catch (error) {
    console.error('Failed to get all TRPS values:', error);
  }
}
```

### Notes
::: tip
`key` refers to the `keyValue` returned by `ServiceKeyboard.defKey()`.
:::

## Set DKS data

`ServiceKeyboard.setDKS()`

**Description:**
Configure DKS key codes, trigger travel points and dead zones for a key.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `params` | `object` | Configuration object | Yes | – |
| `params.key` | `number` | `keyValue` of the key | Yes | – |
| `params.dks` | `number[]` | Array of DKS key codes `[dks1,dks2,dks3,dks4]` | Yes | – |
| `params.trps` | `number[]` | Array of trigger travel values `[trps1,trps2,trps3,trps4]` | Yes | – |
| `params.dbs` | `number[]` | Dead‑zone values `[db, db2]` multiplied by 1000 | Yes | – |

### Returns
* **Type:** `Promise<{ dks: number }>`
* **Description:** Resolves when the settings are applied.

### Example usage
```js
async function applyDksSettings(keyValue, dksValues, trpsValues, dbValues) {
  const params = { key: keyValue, dks: dksValues, trps: trpsValues, dbs: dbValues };
  await ServiceKeyboard.setDKS(params);
  console.log(`DKS data applied for key ${keyValue}`);
}
```

### Notes
::: tip
* `params.dks` and `params.trps` correspond to DKS1–DKS4.
* `params.dbs` contains travel values for dead zones.
:::

## Get MPT settings

`ServiceKeyboard.getMpt()`

**Description:**
Retrieve Multi‑Point Trigger (MPT) configuration for a key. A key can trigger up to three different key codes at different depths.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `key` | `number` | `keyValue` of the key | Yes | – |

### Returns
* **Type:** `Promise<{ dks: [number, number, number]; dbs: [number, number, number] }>`
* **Description:** Resolves to an object with three DKS codes and their corresponding trigger depths (mm).

### Example usage
```js
async function fetchMptSettings(targetKeyValue) {
  try {
    const mptSettings = await ServiceKeyboard.getMpt(targetKeyValue);
    console.log(`Key ${targetKeyValue} MPT settings:`, mptSettings);
  } catch (error) {
    console.error('Failed to get MPT settings:', error);
  }
}
```

### Notes
::: tip
`dks` holds key codes for each depth; `dbs` lists trigger depths in millimeters.
:::
