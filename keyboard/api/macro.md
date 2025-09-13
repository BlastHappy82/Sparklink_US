# Macros

## Get macro settings

`ServiceKeyboard.getMacro()`

**Description:**
Retrieve the macro configuration for a key.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `key` | `number` | `keyValue` of the key, usually from `ServiceKeyboard.defKey()` | Yes | – |

### Returns
* **Type:** `Promise<IMacroMode>`
* **Description:** Resolves to an `IMacroMode` object describing the macro settings.
* See [IMacroMode model](/keyboard/model#macros) for details.

### Example usage
```js
async function getMacroSettings(keyValue) {
  try {
    const result = await ServiceKeyboard.getMacro(keyValue);
    console.log(`Key ${keyValue} macro settings:`, result);
    return result;
  } catch (error) {
    console.error('Failed to get macro settings:', error);
    throw error;
  }
}
```

### Notes
::: tip
`key` refers to the `keyValue` returned by `ServiceKeyboard.defKey()`.
:::

## Set macro

`ServiceKeyboard.setMacro()`

**Description:**
Assign a macro sequence to a key.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `param` | `IMacroMode` | Macro mode settings | Yes | – |
| `macros` | `MacroType[]` | Array of macro steps | Yes | – |

**IMacroMode structure**
| Field | Type | Description |
|-------|------|-------------|
| `index` | `number` | Macro index |
| `len` | `number` | Number of steps |
| `mode` | `number` | Execution mode:<br>`0` once<br>`1` repeat until pressed again<br>`2` repeat while held (stop immediately)<br>`3` repeat while held (complete current run after release) |
| `key` | `number` | Key `keyValue` |
| `num` | `number` | Repeat count |
| `delay` | `number` | Delay between repeats |

**MacroType structure**
| Field | Type | Description |
|-------|------|-------------|
| `keyCode` | `number` | Key code |
| `timeDifference` | `number` | Delay from previous step (ms) |
| `status` | `number` | `1` press, `0` release |

### Returns
* **Type:** `Promise<void>`
* **Description:** Resolves when the macro is stored.

### Example usage
```js
async function setMacroData(data, macros) {
  try {
    await ServiceKeyboard.setMacro(data, macros);
  } catch (error) {
    console.error('Failed to set macro:', error);
    throw error;
  }
}
```

### Notes
::: tip
* `param` must include the full `IMacroMode` structure.
* `macros` is an array of macro steps with `keyCode`, `timeDifference` and `status` fields.
* `mode` determines how the macro runs:
  * `0`: run once on key press
  * `1`: toggle repeat on each press
  * `2`: repeat while held, stop immediately on release
  * `3`: repeat while held, finish the current sequence after release
:::
