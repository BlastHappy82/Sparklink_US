# Keyboard lighting

## Turn off keyboard lighting

ServiceKeyboard.closedLighting()

**Description:**
Turn off all lighting effects on the keyboard.

---

### Parameters

None.

---

### Returns

* **Type:** `Promise<boolean>`
* **Description:** Resolves to `true` if the lighting was disabled successfully; otherwise `false` or the Promise is rejected.

---

### Example usage

```js
async function turnOffKeyboardLights() {
  try {
    const success = await ServiceKeyboard.closedLighting();
    if (success) {
      console.log('Keyboard lighting turned off.');
    } else {
      console.log('Failed to turn off keyboard lighting.');
    }
  } catch (error) {
    console.error('Error turning off keyboard lighting:', error);
  }
}

turnOffKeyboardLights();
```

## Get keyboard lighting configuration

ServiceKeyboard.getLighting()

**Description:**
Retrieve the current lighting configuration for the keyboard.

---

### Parameters

None.

---

### Returns

* **Type:** `Promise<LightMode>`
* **Description:** Resolves to a `LightMode` object describing the current lighting settings.
* **Structure (`LightMode`):**

| Field           | Type            | Description                                                         | Example      |
|----------------|-----------------|---------------------------------------------------------------------|--------------|
| `open`         | `boolean`       | Whether lighting is enabled.                                        | `true`       |
| `direction`    | `boolean`       | Direction of animations. `true` for forward, `false` for reverse.   | `true`       |
| `superResponse`| `boolean`       | Enable rapid response mode for key-triggered effects.               | `false`      |
| `speed`        | `number`        | Animation speed.                                                    | `3`          |
| `colors`       | `string[]`      | Array of colors such as `["#FF0000", "#00FF00"]`.                   | `["#FFFFFF"]`|
| `mode`         | `number`        | Lighting mode: `0` off, `1‑20` preset effects, `21` custom.         | `1`          |
| `luminance`    | `number`        | Brightness level.                                                   | `100`        |
| `sleepDelay`   | `number`        | Time before lights sleep.                                           | `600`        |
| `staticColor`  | `number`        | Color index used in static mode.                                    | `0`          |
| `type`         | `LightModeType` | Category of mode.                                                   | (see model)  |

For details about `LightMode`, see [the LightMode model](/keyboard/model#lighting).

---

### Example usage

```js
async function fetchKeyboardLightingConfig() {
  try {
    const lightingConfig = await ServiceKeyboard.getLighting();
    console.log('Current keyboard lighting:', lightingConfig);
  } catch (error) {
    console.error('Failed to get lighting configuration:', error);
  }
}

fetchKeyboardLightingConfig();
```

## Set keyboard lighting configuration

ServiceKeyboard.setLighting()

**Description:**
Apply a new lighting configuration to the keyboard.

---

### Parameters

| Name        | Type       | Description                              | Required | Default |
|-------------|------------|------------------------------------------|----------|---------|
| `lightMode` | `LightMode`| Lighting configuration to apply.         | Yes      | None    |

See [the LightMode model](/keyboard/model#lighting) for details.

---

### Returns

* **Type:** same as input.

---

### Example usage

```js
async function applyKeyboardLightingConfig(newConfig) {
  try {
    await ServiceKeyboard.setLighting(newConfig);
    console.log('Keyboard lighting updated.');
  } catch (error) {
    console.error('Failed to set keyboard lighting:', error);
  }
}

// applyKeyboardLightingConfig(myCustomLightMode);
```

## Get logo lighting configuration

ServiceKeyboard.getLogoLighting()

**Description:**
Retrieve the lighting configuration for the decorative/logo lights.

---

### Parameters

None.

---

### Returns

* **Type:** `Promise<LightMode>`
* **Description:** Resolves to a `LightMode` object describing the logo lighting.
* **Structure (`LightMode`):**

| Field           | Type            | Description                                         | Example       |
|----------------|-----------------|-----------------------------------------------------|---------------|
| `open`         | `boolean`       | Whether the logo light is on.                       | `true`        |
| `direction`    | `boolean`       | Animation direction.                                | `true`        |
| `superResponse`| `boolean`       | Enable rapid response mode.                         | `false`       |
| `speed`        | `number`        | Animation speed.                                    | `3`           |
| `colors`       | `string[]`      | Array of colors.                                    | `["#0000FF"]` |
| `mode`         | `number`        | Logo lighting mode (e.g. `1‑4`).                    | `1`           |
| `luminance`    | `number`        | Brightness.                                         | `100`         |
| `sleepDelay`   | `number`        | Time before lights sleep.                           | `600`         |
| `staticColor`  | `number`        | Static color index.                                 | `0`           |
| `type`         | `LightModeType` | Category of mode.                                   | (see model)   |

For details about `LightMode`, see [the LightMode model](/keyboard/model#lighting).

---

### Example usage

```js
async function fetchLogoLightingConfig() {
  try {
    const logoConfig = await ServiceKeyboard.getLogoLighting();
    console.log('Current logo lighting:', logoConfig);
  } catch (error) {
    console.error('Failed to get logo lighting configuration:', error);
  }
}

fetchLogoLightingConfig();
```

## Set logo lighting configuration

ServiceKeyboard.setLogoLighting()

**Description:**
Apply a new lighting configuration to the decorative/logo lights.

---

### Parameters

| Name        | Type       | Description                                   | Required | Default |
|-------------|------------|-----------------------------------------------|----------|---------|
| `lightMode` | `LightMode`| Lighting configuration for the logo lights.   | Yes      | None    |

See [the LightMode model](/keyboard/model#lighting) for details.

---

### Returns

* **Type:** same as input.

---

### Example usage

```js
async function applyLogoLightingConfig(newLogoConfig) {
  try {
    await ServiceKeyboard.setLogoLighting(newLogoConfig);
    console.log('Logo lighting updated.');
  } catch (error) {
    console.error('Failed to set logo lighting:', error);
  }
}

// applyLogoLightingConfig(myCustomLogoLightMode);
```

### Notes

::: tip
`type`: logo lighting supports only `static` and `dynamic` modes. Any other value resets to `static`.
:::

## Get custom key lighting

ServiceKeyboard.getCustomLighting()

**Description:**
Return the RGB color set for a single key.

---

### Parameters

| Name | Type    | Description                                                                | Required | Default |
|------|---------|----------------------------------------------------------------------------|----------|---------|
| `key`| `number`| `keyValue` of the key, typically from `ServiceKeyboard.defKey()`.           | Yes      | None    |

---

### Returns

* **Type:** `Promise<{ key: number; R: number; G: number; B: number }>`
* **Description:** Resolves to an object containing the key's `keyValue` and RGB color.

| Field | Type    | Description                | Example |
|-------|---------|----------------------------|---------|
| `key` | `number`| Queried `keyValue`.        | `80`    |
| `R`   | `number`| Red component (0‑255).     | `255`   |
| `G`   | `number`| Green component (0‑255).   | `0`     |
| `B`   | `number`| Blue component (0‑255).    | `0`     |

---

### Example usage

```js
async function fetchCustomKeyColor(targetKeyValue) {
  try {
    const colorInfo = await ServiceKeyboard.getCustomLighting(targetKeyValue);
    console.log(`Key ${colorInfo.key} color: R=${colorInfo.R}, G=${colorInfo.G}, B=${colorInfo.B}`);
  } catch (error) {
    console.error(`Failed to get custom color for key ${targetKeyValue}:`, error);
  }
}

// fetchCustomKeyColor(80);
```

## Set custom key lighting

ServiceKeyboard.customSetLighting()

**Description:**
Set an RGB color for a single key. Usually used when the keyboard is in custom lighting mode.

---

### Parameters

| Name      | Type     | Description                                                              | Required | Default |
|-----------|----------|--------------------------------------------------------------------------|----------|---------|
| `data`    | `object` | Object describing the key and its RGB values.                            | Yes      | None    |
| `data.key`| `number` | `keyValue` of the key.                                                   | Yes      | None    |
| `data.R`  | `number` | Red component (0‑255).                                                   | Yes      | None    |
| `data.G`  | `number` | Green component (0‑255).                                                 | Yes      | None    |
| `data.B`  | `number` | Blue component (0‑255).                                                  | Yes      | None    |

---

### Returns

* **Type:** same as input.

---

### Example usage

```js
async function setCustomKeyColor(config) {
  try {
    // Ensure custom mode before setting individual colors.
    await ServiceKeyboard.setLighting({ type: 'custom' });
    await ServiceKeyboard.customSetLighting(config);
    console.log(`Set key ${config.key} to R=${config.R}, G=${config.G}, B=${config.B}`);
  } catch (error) {
    console.error('Failed to set custom key color:', error);
  }
}

// setCustomKeyColor({ key: 80, R: 255, G: 0, B: 255 });
```

### Notes

::: tip
* `data.key` refers to the `keyValue` from `ServiceKeyboard.defKey()`.
* The main lighting mode must be set to a `custom` type before colors take effect.
* After sending all custom colors, call `saveCustomLighting` once to store them; no need to save after each key.
:::

## Save custom lighting

ServiceKeyboard.saveCustomLighting()

**Description:**
Save previously sent custom lighting settings to the keyboard.

---

### Parameters

None.

---

### Returns

`null`

---

### Example usage

```js
async function saveCustomLighting() {
  try {
    await ServiceKeyboard.saveCustomLighting();
    console.log('Custom lighting saved.');
  } catch (error) {
    console.error('Failed to save custom lighting:', error);
  }
}
```

### Notes

::: tip
Invoke this after sending all custom colors, for example when changing pages or finishing a configuration step.
:::

