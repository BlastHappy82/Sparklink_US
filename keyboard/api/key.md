# Layout / remapping

## Initialize layout

ServiceKeyboard.defKey()

**Description:**
Retrieve the keyboard's initial layout as a two‑dimensional array.

---

### Parameters

None.

---

### Returns

* **Type:** `Promise<IDefKeyInfo[][]>`
* **Description:** Resolves to a 2D array where each `IDefKeyInfo` describes a key's location.
* **Structure (`IDefKeyInfo`):**

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `keyValue` | `number` | Numeric value of the key. | `41` |
| `location` | `object` | Position on the keyboard. | – |
| `location.row` | `number` | Row index (0‑based). | `0` |
| `location.col` | `number` | Column index (0‑based). | `0` |

**Example return:**

```js
[
  [ // row 0
    {
      keyValue: 41,
      location: { row: 1, col: 0 }
    },
    // ... more keys
  ],
  [ // row 1
    {
      keyValue: 43,
      location: { row: 2, col: 0 }
    },
    // ... more keys
  ],
  // ... more rows
]
```

---

### Example usage

```ts
async function fetchInitialLayout() {
  try {
    const layoutGrid = await ServiceKeyboard.defKey();
    console.log('Initial keyboard layout:', layoutGrid);
    // layoutGrid is a 2D array like:
    // [
    //   [IDefKeyInfo, IDefKeyInfo, ...], // first row
    //   [IDefKeyInfo, IDefKeyInfo, ...], // second row
    //   ...
    // ]
  } catch (error) {
    console.error('Failed to get initial layout:', error);
  }
}

fetchInitialLayout();
```

## Get layout

ServiceKeyboard.getLayoutKeyInfo()

**Description:**
Retrieve layout information for a given `keyValue` and layer.

---

### Parameters

| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `object[]` | `Array` | Array of request objects. | Yes | None |
| `object.key` | `number` | `keyValue` to query, typically from `ServiceKeyboard.defKey()`. | Yes | None |
| `object.layout` | `number` | Layout layer: `0` Fn1, `1` Fn2, `2` Fn3, `3` Fn4. | Yes | None |

---

### Returns

* **Type:** `Promise<IDefKeyInfo[][]>`
* **Description:** Resolves to a 2D array describing the layout for the specified layer.
* For `IDefKeyInfo` structure see [the single-key layout model](/keyboard/model#single-key-layout-model).

---

### Example usage

```ts
async function fetchLayerLayout(targetKeyValue, layerIndex) {
  try {
    const layoutParams = [{ key: targetKeyValue, layout: layerIndex }];
    const layerLayoutGrid = await ServiceKeyboard.getLayoutKeyInfo(layoutParams);
    console.log(`Key ${targetKeyValue} on layer ${layerIndex}:`, layerLayoutGrid);
  } catch (error) {
    console.error(`Failed to get layout for layer ${layerIndex}:`, error);
  }
}

// fetchLayerLayout(80, 0);
```

### Notes

::: tip
* `params.key` refers to the `keyValue` from `ServiceKeyboard.defKey()`.
* `params.layout` denotes the Fn layer.
:::

## Remap keys

ServiceKeyboard.setKey()

**Description:**
Change the key value of one or more keys on a specific layer.

---

### Parameters

| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `keyConfigs` | `Array<object>` | Array of key configuration objects. | Yes | None |
| `keyConfigs[].key` | `number` | `keyValue` of the key to change. | Yes | None |
| `keyConfigs[].layout` | `number` | Target layout layer (`0`‑`3`). | Yes | None |
| `keyConfigs[].value` | `number` | New key code to assign. | Yes | None |

---

### Returns

* **Type:** `Promise<IDefKeyInfo[]>`
* **Description:** Resolves to an array of updated `IDefKeyInfo` values representing the new layout.
* For `IDefKeyInfo` structure see [the single-key layout model](/keyboard/model#single-key-layout-model).
* **Note:** A single remap returns `[ { key, layout, value } ]`; batch remaps return multiple entries.

---

### Example usage

```ts
async function remapMultipleKeys(configs) {
  try {
    const updatedLayoutGrid = await ServiceKeyboard.setKey(configs);
    console.log('Remapping succeeded, new layout:', updatedLayoutGrid);
  } catch (error) {
    console.error('Remap failed:', error);
  }
}

// const configs = [
//   { key: 80, layout: 0, value: 100 },
//   { key: 81, layout: 0, value: 101 },
// ];
// remapMultipleKeys(configs);
```

### Notes

::: tip
* `keyConfigs[].key` refers to the `keyValue` from `ServiceKeyboard.defKey()`.
* `keyConfigs[].layout` denotes the Fn layer.
* `keyConfigs[].value` is the new key or function code to assign.
:::

## Get axis

ServiceKeyboard.getAxis()

**Description:**
Get the axis setting for a key.

### Parameters

| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `keyValue` | `number` | `keyValue` of the key, from `ServiceKeyboard.defKey()`. | Yes | None |

### Returns

**Type:** `Promise<{ axis: number }>`

**Description:** Resolves to an object containing the axis ID.

**Example return:**

```js
{ "axis": 1 }
```

### Example usage

```js
async function getKeyAxis(keyValue) {
  try {
    const result = await ServiceKeyboard.getAxis(keyValue);
    console.log(`Axis for key ${keyValue}:`, result);
  } catch (error) {
    console.error(`Failed to get axis for key ${keyValue}:`, error);
  }
}

// getKeyAxis(80);
```

### Notes

::: tip
`keyValue` refers to the value from `ServiceKeyboard.defKey()`.
:::

## Set axis

ServiceKeyboard.setAxis()

**Description:**
Set the axis type for a key.

### Parameters

| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `keyValue` | `number` | `keyValue` of the key. | Yes | None |
| `axis`     | `number` | Axis ID to assign.     | Yes | None |

### Returns

**Type:** `Promise<void>`

**Description:** Resolves when the operation succeeds.

### Example usage

```js
async function setKeyAxis(keyValue, axis) {
  try {
    await ServiceKeyboard.setAxis(keyValue, axis);
    console.log(`Set axis for key ${keyValue} to ${axis}`);
  } catch (error) {
    console.error('Failed to set axis:', error);
    throw error;
  }
}

// setKeyAxis(27, 1);
```

### Notes

* `keyValue` comes from `ServiceKeyboard.defKey()`.
* `axis` is the desired axis ID.

## Get axis list

ServiceKeyboard.getAxisList()

**Description:**
Retrieve the list of axis IDs supported by the keyboard.

### Parameters

None.

### Returns

**Type:** `Promise<{ hasAxisSetting: boolean; axisList: number[] }>`

**Description:** Resolves to an object containing whether axis settings are supported and the list of axis IDs.

**Example return:**

```js
{
  "hasAxisSetting": true,
  "axisList": [7, 32, 0, 0, 0, 0, 0, 0]
}
```

### Example usage

```js
async function fetchAxisList() {
  try {
    const result = await ServiceKeyboard.getAxisList();
    console.log('Axis list:', result);
    return result;
  } catch (error) {
    console.error('Failed to get axis list:', error);
    throw error;
  }
}

// fetchAxisList();
```

### Notes

::: tip
* `hasAxisSetting` indicates whether the keyboard supports axis configuration.
* Each number in `axisList` represents an axis ID; `0` indicates no axis.
:::

## Global axis library query

**Description:**
The keyboard supports an axis library.

### Notes

::: tip
* Contact us for the specific axis library API.
* Ensure imported data is in the correct format.
:::

