# Keyboard lights

## Get basic lighting configuration

ServiceKeyboard.getLightingBase()

**Brief description:**
Gets the basic lighting configuration information for the specified area.

---

### parameter

| Parameter name  | Type     | Required | Description                                                            |
| --------------- | -------- | -------- | ---------------------------------------------------------------------- |
| `params`        | `object` | Yes      | Object describing query area and configuration type                    |
| `params.area`   | `string` | Yes      | Lighting area, such as `Keyboard`,`Decorate1`                          |
| `params.config` | `string` | Yes      | Configuration type, such as `Base`, `Palette`, `ColorCorrection`       |
| `lamp`          | `string` | No       | Describe the type of light, such as "`SingleLighting`,`DoubleLighting` |

---

::: tip

- See the document below for special lighting area api
- See the document below for single and double lamp positions

:::

### Return value

- **Overall Type:** `Promise<DoubleLighting>`
- **Description:** Returns a `Promise`, which resolves to an object containing the basic configuration information of the lighting.
- **Resolve object structure (`DoubleLighting`):**

| Field Name          | Type     | Description                                | Sample Value |
| ------------------- | -------- | ------------------------------------------ | ------------ |
| `area`              | `string` | Lighting area                              | `"Keyboard"` |
| `open`              | `string` | Light switch status                        | `"Open"`     |
| `mode`              | `number` | Lighting mode                              | `1`          |
| `luminance`         | `number` | Light brightness                           | `80`         |
| `speed`             | `number` | Lighting speed                             | `80`         |
| `direction`         | `string` | lighting direction `Forward` or `Backward` | `Forward`    |
| `selectStaticColor` | `number` | Static color selection                     | `0`          |

**Return value example:**

```js
{
    "area": "Keyboard",
    "open": "Open",
    "mode": 1,
    "luminance": 80,
    "speed": 80,
    "direction": "Forward",
    "selectStaticColor": 0
}
```

---

### Example of usage

```typescript
async function getLightingBase() {
  try {
    const result = await ServiceKeyboard.getLightingBase(
      {
        area: 'Keyboard',
        config: 'Base',
      },
      'DoubleLighting',
    );
    console.log('Light basic configuration:', result);
  } catch (error) {
    console.error('Failed to obtain the lighting basic configuration:', error);
  }
}

getLightingBase();
```

---

## Set up the lighting basic configuration

ServiceKeyboard.setLightingBase()

**Brief description:**
Sets the lighting basic configuration information for the specified area.

---

### parameter

| Parameter name                  | Type     | Required | Description                                                            |
| ------------------------------- | -------- | -------- | ---------------------------------------------------------------------- |
| `params`                        | `object` | Yes      | Object describing the setting area and configuration                   |
| `params.area`                   | `string` | Yes      | Lighting area, such as `Keyboard`,`Decorate1`                          |
| `params.config`                 | `string` | Yes      | Configuration type, such as `Base`, `Palette`, `ColorCorrection`       |
| `params.data`                   | `object` | Yes      | Light configuration data to be set                                     |
| `params.data.open`              | `string` | Yes      | Light switch status, e.g. `"Open"`                                     |
| `params.data.mode`              | `number` | Yes      | Lighting Mode                                                          |
| `params.data.luminance`         | `number` | Yes      | Light Brightness                                                       |
| `params.data.speed`             | `number` | Yes      | Lighting Speed ​​                                                      |
| `params.data.direction`         | `string` | Yes      | Lighting direction `Forward` or `Backward`                             |
| `params.data.selectStaticColor` | `number` | Yes      | Static color selection                                                 |
| `lamp`                          | `string` | No       | Describe the type of light, such as `SingleLighting`, `DoubleLighting` |

---

### Return value

- **Overall Type:** `Promise<DoubleLighting>`
- **Description:** Returns a `Promise`, which resolves to an object containing the set lighting basic configuration information.
- **Resolve object structure (`DoubleLighting`):**

| Field Name          | Type     | Description                                | Sample Value |
| ------------------- | -------- | ------------------------------------------ | ------------ |
| `area`              | `string` | Lighting area                              | `"Keyboard"` |
| `open`              | `string` | Light switch status                        | `"Open"`     |
| `mode`              | `number` | Lighting mode                              | `0`          |
| `luminance`         | `number` | Light brightness                           | `80`         |
| `speed`             | `number` | Lighting speed                             | `80`         |
| `direction`         | `string` | Lighting direction `Forward` or `Backward` | `"Forward"`  |
| `selectStaticColor` | `number` | Static color selection                     | `0`          |

**Return value example:**

```js
{
    "area": "Keyboard",
    "open": "Open",
    "mode": 0,
    "luminance": 80,
    "speed": 80,
    "direction": "Forward",
    "selectStaticColor": 0
}
```

---

### Example of usage

```typescript
async function setLightingBase() {
  try {
    const result = await ServiceKeyboard.setLightingBase(
      {
        area: 'Keyboard',
        config: 'Base',
        data: {
          open: 'Open',
          mode: 0,
          luminance: 80,
          speed: 80,
          direction: 'Forward',
          selectStaticColor: 0,
        },
      },
      'SingleLighting',
    );
    console.log('Set the lighting basic configuration result:', result);
  } catch (error) {
    console.error('Setting the lighting basic configuration failed:', error);
  }
}

setLightingBase();
```

---

## Get the lighting palette configuration

ServiceKeyboard.getLightingPalette()

**Brief description:**
Gets the lighting palette configuration information for the specified area.

---

### parameter

| Parameter name  | Type     | Required | Description                                                      |
| --------------- | -------- | -------- | ---------------------------------------------------------------- |
| `params`        | `object` | Yes      | Object describing query area and configuration type              |
| `params.area`   | `string` | Yes      | Lighting area, such as `Keyboard`,`Decorate1`                    |
| `params.config` | `string` | Yes      | Configuration type, such as `Base`, `Palette`, `ColorCorrection` |

---

### Return value

- **Overall Type:** `Promise<ILightingPalette>`
- **Description:** Returns a `Promise`, which resolves to an object containing the configuration information of the lighting palette.
- **Resolve object structure (`ILightingPalette`):**

| Field Name     | Type                | Description        | Sample Value |
| -------------- | ------------------- | ------------------ | ------------ |
| `staticColors` | `Array<IColorInfo>` | Static Color Array | -            |

**ColorInfo Structure (`IColorInfo`):**

| Field Name | Type     | Description                   | Sample Value |
| ---------- | -------- | ----------------------------- | ------------ |
| `R`        | `number` | Red component value (0-255)   | `255`        |
| `G`        | `number` | Green component value (0-255) | `0`          |
| `B`        | `number` | Blue component value (0-255)  | `0`          |
| `H`        | `number` | Brightness value (0-255)      | `255`        |

**Return value example:**

```js
{
    "staticColors": [
        {
            "R": 0,
            "G": 0,
            "B": 0,
            "H": 255
        },
        {
            "R": 255,
            "G": 0,
            "B": 0,
            "H": 255
        },
        {
            "R": 0,
            "G": 255,
            "B": 0,
            "H": 255
        },
        {
            "R": 255,
            "G": 255,
            "B": 0,
            "H": 255
        },
        {
            "R": 0,
            "G": 0,
            "B": 255,
            "H": 255
        },
        {
            "R": 255,
            "G": 0,
            "B": 255,
            "H": 255
        },
        {
            "R": 0,
            "G": 255,
            "B": 255,
            "H": 255
        },
        {
            "R": 255,
            "G": 255,
            "B": 255,
            "H": 255
        }
    ]
}
```

---

### Example of usage

```typescript
async function getLightingPalette() {
  try {
    const result = await ServiceKeyboard.getLightingPalette({
      area: 'Keyboard',
      config: 'Palette',
    });
    console.log('Light palette configuration:', result);
  } catch (error) {
    console.error('Failed to get the lighting palette configuration:', error);
  }
}

getLightingPalette();
```

---

## Set up lighting palette configuration

ServiceKeyboard.setLightingPalette()

**Brief description:**
Sets the lighting palette configuration information for the specified area.

---

### parameter

| Parameter name             | Type                 | Required | Description                                                      |
| -------------------------- | -------------------- | -------- | ---------------------------------------------------------------- |
| `params`                   | `object`             | Yes      | Object describing the setting area and configuration             |
| `params.area`              | `string`             | Yes      | Lighting area, such as `Keyboard`,`Decorate1`                    |
| `params.config`            | `string`             | Yes      | Configuration type, such as `Base`, `Palette`, `ColorCorrection` |
| `params.data`              | `object`             | Yes      | Palette configuration data to set                                |
| `params.data.staticColors` | `Array<IColorInput>` | Yes      | Static Color Array                                               |

**Color Input Structure (`IColorInput`):**

| Field Name | Type     | Description                   | Sample Value |
| ---------- | -------- | ----------------------------- | ------------ |
| `R`        | `number` | Red component value (0-255)   | `255`        |
| `G`        | `number` | Green component value (0-255) | `0`          |
| `B`        | `number` | Blue component value (0-255)  | `0`          |

---

### Return value

- **Overall Type:** `Promise<ILightingPalette>`
- **Description:** Returns a `Promise`, which resolves to an object containing the set lighting palette configuration information.
- **Resolve object structure (`ILightingPalette`):**

| Field Name     | Type                | Description        | Sample Value |
| -------------- | ------------------- | ------------------ | ------------ |
| `staticColors` | `Array<IColorInfo>` | Static Color Array | -            |

**ColorInfo Structure (`IColorInfo`):**

| Field Name | Type     | Description                   | Sample Value |
| ---------- | -------- | ----------------------------- | ------------ |
| `R`        | `number` | Red component value (0-255)   | `255`        |
| `G`        | `number` | Green component value (0-255) | `0`          |
| `B`        | `number` | Blue component value (0-255)  | `0`          |
| `H`        | `number` | Brightness value (0-255)      | `0`          |

**Return value example:**

```js
{
    "staticColors": [
        {
            "R": 0,
            "G": 0,
            "B": 0,
            "H": 0
        },
        {
            "R": 255,
            "G": 0,
            "B": 0,
            "H": 0
        },
        {
            "R": 0,
            "G": 219,
            "B": 255,
            "H": 0
        },
        {
            "R": 255,
            "G": 255,
            "B": 0,
            "H": 0
        },
        {
            "R": 0,
            "G": 0,
            "B": 255,
            "H": 0
        },
        {
            "R": 255,
            "G": 0,
            "B": 255,
            "H": 0
        },
        {
            "R": 0,
            "G": 255,
            "B": 255,
            "H": 0
        },
        {
            "R": 255,
            "G": 255,
            "B": 255,
            "H": 0
        }
    ]
}
```

---

### Example of usage

```typescript
async function setLightingPalette() {
  try {
    const result = await ServiceKeyboard.setLightingPalette({
      area: 'Keyboard',
      config: 'Palette',
      data: {
        staticColors: [
          {
            R: 0,
            G: 0,
            B: 0,
          },
          {
            R: 255,
            G: 0,
            B: 0,
          },
          {
            R: 0,
            G: 219,
            B: 255,
          },
          {
            R: 255,
            G: 255,
            B: 0,
          },
          {
            R: 0,
            G: 0,
            B: 255,
          },
          {
            R: 255,
            G: 0,
            B: 255,
          },
          {
            R: 0,
            G: 255,
            B: 255,
          },
          {
            R: 255,
            G: 255,
            B: 255,
          },
        ],
      },
    });
    console.log('Set the lighting palette configuration result:', result);
  } catch (error) {
    console.error('Setting the lighting palette configuration failed:', error);
  }
}

setLightingPalette();
```

## Get custom lighting configuration

ServiceKeyboard.getLightingCustom()

**Brief description:**
Gets the keyboard's custom lighting configuration information and returns a two-dimensional array representing the RGB color value and custom status of each key on the keyboard.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall Type:** `Promise<Array<Array<ICustomLightingInfo>>>`
- **Description:** Returns a `Promise`, which is parsed into a two-dimensional array, with each element representing the key light information at the corresponding position on the keyboard.
- **Resolve object structure (`ICustomLightingInfo`):**

| Field Name | Type      | Description                   | Sample Value |
| ---------- | --------- | ----------------------------- | ------------ |
| `R`        | `number`  | Red component value (0-255)   | `0`          |
| `G`        | `number`  | Green component value (0-255) | `207`        |
| `B`        | `number`  | Blue component value (0-255)  | `244`        |
| `isCustom` | `boolean` | Whether it is a custom color  | `false`      |

**Return value example:**

```js
[
  [
    {
      R: 0,
      G: 207,
      B: 244,
      isCustom: false,
    },
    // ... More buttons
  ],
  // ... More
];
```

---

### Example of usage

```typescript
async function getLightingCustom() {
  try {
    const result = await ServiceKeyboard.getLightingCustom();
    console.log('custom lighting configuration:', result);
    // You can traverse the results to get the color information of each key
    result.forEach((row, rowIndex) => {
      row.forEach((key, colIndex) => {
        console.log(
          `Color of key[${rowIndex}][${colIndex}]: R=${key.R}, G=${key.G}, B=${key.B}, whether to customize=${key.isCustom}`,
        );
      });
    });
  } catch (error) {
    console.error('Failed to get custom lighting configuration:', error);
  }
}

getLightingCustom();
```

## Setting up custom lighting configurations

ServiceKeyboard.setLightingCustom()

**Brief description:**
Set the keyboard's custom lighting configuration, and you can set independent RGB color values ​​and custom status for each key.

---

### parameter

| Parameter name    | Type                                | Required | Description                                                                  |
| ----------------- | ----------------------------------- | -------- | ---------------------------------------------------------------------------- |
| `params`          | `object`                            | Yes      | Object describing the setting area and configuration                         |
| `params.area`     | `string`                            | Yes      | Lighting area, such as `Keyboard`                                            |
| `params.protocol` | `string`                            | Yes      | Protocol type, fixed to `Custom`                                             |
| `params.data`     | `Array<Array<ICustomLightingInfo>>` | Yes      | 2D array representing the lighting configuration of each key on the keyboard |

**Key light information structure (`ICustomLightingInfo`):**

| Field Name | Type      | Description                   | Sample Value |
| ---------- | --------- | ----------------------------- | ------------ |
| `R`        | `number`  | Red component value (0-255)   | `0`          |
| `G`        | `number`  | Green component value (0-255) | `8`          |
| `B`        | `number`  | Blue component value (0-255)  | `10`         |
| `isCustom` | `boolean` | Whether it is a custom color  | `false`      |

**Sample example:**

```js
{
    "area": "Keyboard",
    "protocol": "Custom",
    "data": [
        [
            {
                "R": 0,
                "G": 8,
                "B": 10,
                "isCustom": false
            },
// ... More buttons
        ],
// ... More
    ]
}
```

---

### Return value

This method has no return value.

---

### Example of usage

```typescript
async function setLightingCustom() {
  try {
    const customLightingConfig = {
      area: 'Keyboard',
      protocol: 'Custom',
      data: [
        [
          {
            R: 0,
            G: 8,
            B: 10,
            isCustom: false,
          },
          // ... More key configuration
        ],
        // ... More line configuration
      ],
    };

    await ServiceKeyboard.setLightingCustom(customLightingConfig);
    console.log('Custom lighting configuration set');
  } catch (error) {
    console.error('Setting custom lighting configuration failed:', error);
  }
}

setLightingCustom();
```

## Get Decorative Light 1 Custom Light Configuration

ServiceKeyboard.getDecorate1Custom()

**Brief description:**
Get the custom lighting configuration information of decorative light 1 and return a two-dimensional array representing the RGB color value and custom status of each LED on the decorative light.

---

### parameter

| Parameter name | Type     | Required | Description                                     |
| -------------- | -------- | -------- | ----------------------------------------------- | ---------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| `params`       | `object` | Yes      | Object describing the size of a decorative lamp |
| `params.rows`  | `number` | Yes      | Number of rows of decorative lamps              |
| `params.cols`  | `number` | Yes      | Number of columns for decorative lamps          |
| `params.area`  | `string` | Yes      | Area                                            | "Keyboard" | "Decorate1" | "Decorate2" | "Decorate3" | "Decorate4" | "Decorate5" |

---

### Return value

- **Overall Type:** `Promise<Array<Array<ICustomLightingInfo>>>`
- **Description:** Returns a `Promise`, which is parsed into a two-dimensional array, and each element represents the LED light information at the corresponding position on the decorative light.
- **Resolve object structure (`ICustomLightingInfo`):**

| Field Name | Type      | Description                   | Sample Value |
| ---------- | --------- | ----------------------------- | ------------ |
| `R`        | `number`  | Red component value (0-255)   | `128`        |
| `G`        | `number`  | Green component value (0-255) | `41`         |
| `B`        | `number`  | Blue component value (0-255)  | `49`         |
| `isCustom` | `boolean` | Whether it is a custom color  | `true`       |

**Return value example:**

```js
[
  [
    {
      R: 128,
      G: 41,
      B: 49,
      isCustom: true,
    },
    // ... More LEDs
  ],
];
```

---

### Example of usage

```typescript
async function getDecorate1Custom() {
  try {
    const result = await ServiceKeyboard.getDecorate1Custom({
      rows: 1,
      cols: 22
      area:"Keyboard" | "Decorate1" | "Decorate2" | "Decorate3" | "Decorate4" | "Decorate5"
    });
console.log('Decorative Light 1 Custom lighting configuration:', result);
// You can traverse the results to get color information for each LED
    result.forEach((row, rowIndex) => {
      row.forEach((led, colIndex) => {
console.log(`LED[${rowIndex}][${colIndex}]] color: R=${led.R}, G=${led.G}, B=${led.B}, whether to customize=${led.isCustom}`);
      });
    });
  } catch (error) {
console.error('Get decorative light 1 custom light configuration failed:', error);
  }
}

getDecorate1Custom();
```

## Set Decorative Light 1 Custom Light Configuration

ServiceKeyboard.setDecorate1Custom()

**Brief description:**
Set the custom lighting configuration of decorative light 1, and you can set independent RGB color values ​​and custom status for each LED.

---

### parameter

| Parameter name    | Type                                | Required | Description                                                                          |
| ----------------- | ----------------------------------- | -------- | ------------------------------------------------------------------------------------ |
| `params`          | `object`                            | Yes      | Object describing the setting area and configuration                                 |
| `params.area`     | `string`                            | Yes      | Lighting area, fixed to `Decorate1`                                                  |
| `params.protocol` | `string`                            | Yes      | Protocol type, fixed to `Custom`                                                     |
| `params.data`     | `Array<Array<ICustomLightingInfo>>` | Yes      | 2D array representing the lighting configuration of each LED on the decorative light |

**LED lighting information structure (`ICustomLightingInfo`):**

| Field Name | Type      | Description                   | Sample Value |
| ---------- | --------- | ----------------------------- | ------------ |
| `R`        | `number`  | Red component value (0-255)   | `128`        |
| `G`        | `number`  | Green component value (0-255) | `41`         |
| `B`        | `number`  | Blue component value (0-255)  | `49`         |
| `isCustom` | `boolean` | Whether it is a custom color  | `true`       |

**Sample example:**

```js
{
    "area": "Decorate1",
    "protocol": "Custom",
    "data": [
        [
            {
                "R": 128,
                "G": 41,
                "B": 49,
                "isCustom": true
            },
// ... More LEDs
        ]
    ]
}
```

---

### Return value

This method has no return value.

---

### Example of usage

```typescript
async function setDecorate1Custom() {
  try {
    const customLightingConfig = {
      area: 'Decorate1',
      protocol: 'Custom',
      data: [
        [
          {
            R: 128,
            G: 41,
            B: 49,
            isCustom: true,
          },
          // ... More LED configurations
        ],
      ],
    };

    await ServiceKeyboard.setDecorate1Custom(customLightingConfig);
    console.log('Decorative Light 1 Custom Light Configuration Set');
  } catch (error) {
    console.error('Set decorative light 1 custom light configuration failed:', error);
  }
}

setDecorate1Custom();
```

## Get light area information

ServiceKeyboard.getLightingArea()

**Brief description:**
Get information about all lighting areas on the keyboard, including the number of main keyboard lights and decorative lights, rows and queues, and other configuration information.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall Type:** `Promise<ILightingAreaInfo>`
- **Description:** Returns a `Promise`, which resolves to an object containing all lighting area information.
- **Resolve object structure (`ILightingAreaInfo`):**

| Field Name | Type               | Description                  | Sample Value |
| ---------- | ------------------ | ---------------------------- | ------------ |
| `total`    | `number`           | Lighting area                | `2`          |
| `areas`    | `Array<IAreaInfo>` | Light area information array | -            |

**AreaInfo Structure (`IAreaInfo`):**

| Field Name | Type     | Description            | Sample Value |
| ---------- | -------- | ---------------------- | ------------ |
| `index`    | `number` | Lighting area index    | `0`          |
| `count`    | `number` | Number of lamp effects | `20`         |
| `rows`     | `number` | `route number          | `6`          |
| `cols`     | `number` | Number of columns      | `15`         |

**Return value example:**

```js
{
    "total": 2,
    "areas": [
        {
            "index": 0,
            "count": 20,
            "rows": 6,
            "cols": 15
        },
        {
            "index": 1,
            "count": 5,
            "rows": 1,
            "cols": 22
        }
    ]
}
```

### Area Description

- `total` value description:
- `1`: Main keyboard light
- `2`: Decorative light 1
- `3`: Decorative light 2

---

### Example of usage

```typescript
async function getLightingArea() {
  try {
    const result = await ServiceKeyboard.getLightingArea();
    console.log('Light area information:', result);

    // traverse all light areas
    result.areas.forEach((area) => {
      console.log(`area index ${area.index}:`);
      console.log(`- Lamp effect quantity: ${area.count}`);
      console.log(`- Number of rows: ${area.rows}`);
      console.log(`- Number of columns: ${area.cols}`);
    });
  } catch (error) {
    console.error('Failed to obtain light area information:', error);
  }
}

getLightingArea();
```

## Get the dual lighting effect status

ServiceKeyboard.getDoubleLighting()

**Brief description:**
Get the dual lighting status configuration information of the keyboard.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall Type:** `Promise<IDoubleLightingInfo>`
- **Description:** Returns a `Promise`, which resolves to an object containing double-lighting status information.
- **Resolve object structure (`IDoubleLightingInfo`):**

| Field Name       | Type     | Description               | Sample Value |
| ---------------- | -------- | ------------------------- | ------------ |
| `doubleLighting` | `number` | Double lamp effect status | `1`          |

**Return value example:**

```js
{
    "doubleLighting": 1
}
```

---

### Example of usage

```typescript
async function getDoubleLighting() {
  try {
    const result = await ServiceKeyboard.getDoubleLighting();
    console.log('Double lamp effect status:', result.doubleLighting);
  } catch (error) {
    console.error('Failed to obtain dual lighting effect status:', error);
  }
}

getDoubleLighting();
```

:::tip

Mainly used to control single and double lamp positions

:::

## Get special light positions (space lights)

ServiceKeyboard.getSpecialLighting()

**Brief description:**
Gets the number of special lamp positions (space bars) beads used to control the space bar positions individually.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall type:** `Promise<{ specialLighting: number }>`
- **Description:** Returns the number of beads at the space bar position.

**Return value example:**

```js
{
    "specialLighting": 1
}
```

---

### Example of usage

```typescript
async function getSpecialLighting() {
  try {
    const result = await ServiceKeyboard.getSpecialLighting();
    console.log('Space bar light bead quantity specialLighting:', result.specialLighting);
  } catch (error) {
    console.error('Failed to get the number of space bar beads:', error);
  }
}

getSpecialLighting();
```

::::tip

Mainly used to read the space bar position controllable number of lamp beads.

::::
