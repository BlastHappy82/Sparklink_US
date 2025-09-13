# Basic equipment information

## Get the device list

ServiceKeyboard.getDevices()

**Brief description:**
Get a list of devices connected to the system.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall Type:** `Promise<Device[]>`
- **Description:** Returns a `Promise`, which resolves to an array of `Device` objects.Each `Device` object represents a connected keyboard device.
- **Resolve object structure (`Device`):**

| Field Name    | Type     | Description              | Sample Value                             |
| ------------- | -------- | ------------------------ | ---------------------------------------- |
| `data`        | `object` | Device data object       | -                                        |
| `data.id`     | `string` | Device ID                | `"b1545667-777b-4a8a-9640-1c000a56b5e7"` |
| `id`          | `string` | Device Unique Identifier | `"b1545667-777b-4a8a-9640-1c000a56b5e7"` |
| `usage`       | `number` | Equipment usage value    | `1`                                      |
| `usagePage`   | `number` | Device usage page value  | `65440`                                  |
| `vendorId`    | `number` | vendor ID                | `7331`                                   |
| `productId`   | `number` | Product ID               | `2049`                                   |
| `productName` | `string` | Product Name             | `"ET65 HE"`                              |

---

### Example of usage

```js
async function fetchDevices() {
  try {
    const devices = await ServiceKeyboard.getDevices();
    console.log('Discovered devices:', devices);
    if (devices.length > 0) {
      // Operate on the device list, such as selecting the first device for initialization
      // const firstDevice = devices[0];
      // await ServiceKeyboard.init(firstDevice.id);
    } else {
      console.log('No device detected.');
    }
  } catch (error) {
    console.error('Failed to get the device list:', error);
  }
}

fetchDevices();
```

## Initialize the specified keyboard device

ServiceKeyboard.init()

**Brief description:**
Initializes the specified keyboard device for subsequent interaction.

---

### parameter

| Parameter name | Type     | Description                                                                                     | Required | Default |
| -------------- | -------- | ----------------------------------------------------------------------------------------------- | -------- | ------- |
| `id`           | `string` | Unique identifier of the device to be initialized.Available from `ServiceKeyboard.getDevices()` | Yes      | None    |

---

### Return value

- **Overall Type:** `Promise<Device | null>`
- **Description:** Returns a `Promise`.
- **Promise resolution (Resolves):** `Device` - When the device is initialized successfully, it resolves to the `Device` object of the device.
- **Promise resolution (Resolves):** `null` - Resolves to `null` when device initialization fails or the specified device is not found.
- **Resolve object structure (`Device`):**
- For the detailed structure of the `Device` object, please [View Device Type] (/keyboard/model# device).

---

### Example of usage

```js
async function initializeDevice(deviceId: string) {
  try {
    const device = await ServiceKeyboard.init(deviceId);
    if (device) {
console.log('device initialization successfully:', device);
// You can now use the device object to interact with the device
      // const deviceInfo = await ServiceKeyboard.getDevicesInfo();
    } else {
console.log('Default in device initialization or device not found.');
    }
  } catch (error) {
console.error('An error occurred while initializing the device:', error);
  }
}

// deviceId is obtained from getDevices()
// const exampleDeviceId = "some_device_id_string";
// initializeDevice(exampleDeviceId);
```

## Obtain basic hardware and firmware information of the device

ServiceKeyboard.getDevicesInfo()

**Brief description:**
Gets the basic hardware and firmware information of the currently initialized device.

---

### parameter

This method requires no parameters (usually after a successful call to `ServiceKeyboard.init()`).

---

### Return value

- **Overall Type:** `Promise<BaseInfo>`
- **Description:** Returns a `Promise`, which resolves to a `BaseInfo` object containing the basic information of the device.
- **Resolve object structure (`BaseInfo`):**

| Field Name       | Type     | Description                                 | Sample Value                |
| ---------------- | -------- | ------------------------------------------- | --------------------------- |
| `type`           | `number` | Device type.                                | `1`                         |
| `subType`        | `number` | Device subtype.                             | `0`                         |
| `boardId`        | `number` | Board ID.                                   | `3145729`                   |
| `appVersion`     | `string` | Application version number of the firmware. | `'1.0.1.0'`                 |
| `pcbVersion`     | `string` | PCB version number.                         | `'1-0-0-0'`                 |
| `runModeVersion` | `number` | Run Mode Version.                           | `0`                         |
| `sn`             | `string` | The serial number of the keyboard.          | `'54817806657765148212547'` |
| `timestamp`      | `string` | timestamp.                                  | `'2025052215:4'`            |

---

### Example of usage

```js
async function fetchBaseDeviceInfo() {
  try {
    // Make sure the device is initialized
    // await ServiceKeyboard.init(deviceId);
    const baseInfo = await ServiceKeyboard.getDevicesInfo();
    console.log('Basic information of the device:', baseInfo);
    // console.log('Firmware version:', baseInfo.appVersion);
  } catch (error) {
    console.error('Failed to obtain the basic information of the device:', error);
  }
}

// fetchBaseDeviceInfo(); // Need to be called after device initialization
```

## Get the protocol version

ServiceKeyboard.getProtocolVersion()

**Brief description:**
Get the protocol version information of the keyboard device.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall Type:** `Promise<ProtocolVersion>`
- **Description:** Returns a `Promise`, which resolves to an object containing protocol version information.
- **Resolve object structure (`ProtocolVersion`):**

| Field Name        | Type     | Description              | Sample Value |
| ----------------- | -------- | ------------------------ | ------------ |
| `mainVersion`     | `number` | Major version number.    | `1`          |
| `subVersion`      | `number` | subversion number.       | `0`          |
| `hardwareVersion` | `number` | hardware version number. | `1`          |
| `softwareVersion` | `number` | software version number. | `0`          |

---

### Example of usage

```js
async function fetchProtocolVersion() {
  try {
    const versionInfo = await ServiceKeyboard.getProtocolVersion();
    console.log('Protocol version information:', versionInfo);
  } catch (error) {
    console.error('Failed to obtain protocol version information:', error);
  }
}

// fetchProtocolVersion();
```

## Get the configuration list

ServiceKeyboard.getConfigList()

**Brief description:**
Get information about the configuration list available on the keyboard.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall Type:** `Promise<ConfigList>`
- **Description:** Returns a `Promise`, which resolves to an object containing configuration list information.
- **Resolve object structure (`ConfigList`):**

| Field Name | Type       | Description                     | Sample Value                                   |
| ---------- | ---------- | ------------------------------- | ---------------------------------------------- |
| `total`    | `number`   | Total number of configurations. | `4`                                            |
| `list`     | `string[]` | Configure name list.            | `['Config1', 'Config2', 'Config3', 'Config4']` |

---

### Example of usage

```js
async function fetchConfigList() {
  try {
    const configList = await ServiceKeyboard.getConfigList();
    console.log('Configuration List:', configList);
    console.log('Total number of configurations:', configList.total);
    console.log('Configuration name list:', configList.list);
  } catch (error) {
    console.error('Failed to get configuration list:', error);
  }
}

// fetchConfigList();
```

## Get the current configuration

ServiceKeyboard.getConfig()

**Brief description:**
Gets the configuration information currently used by the keyboard.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall Type:** `Promise<Config>`
- **Description:** Returns a `Promise`, which resolves to an object containing the current configuration information.
- **Resolve object structure (`Config`):**

| Field Name | Type     | Description                            | Sample Value |
| ---------- | -------- | -------------------------------------- | ------------ |
| `key`      | `string` | The name of the current configuration. | `'Config2'`  |
| `value`    | `number` | The index value currently configured.  | `1`          |

---

### Example of usage

```js
async function fetchCurrentConfig() {
  try {
    const config = await ServiceKeyboard.getConfig();
    console.log('Current configuration name:', config.key);
    console.log('Current configuration index:', config.value);
  } catch (error) {
    console.error('Failed to get the current configuration:', error);
  }
}

// fetchCurrentConfig();
```

## Set the current configuration

ServiceKeyboard.setConfig()

**Brief description:**
Sets the configuration currently used by the keyboard.

---

### parameter

| Parameter name | Type     | Description                       | Required | Default |
| -------------- | -------- | --------------------------------- | -------- | ------- |
| `config`       | `string` | The configuration name to be set. | Yes      | None    |

---

### Return value

- **Overall Type:** `Promise<void>`
- **Description:** Returns a `Promise`.When the operation is successfully completed, `Promise` is parsed and there is no specific return value.If the setting fails, `Promise` will reject and return an error.

---

### Example of usage

```js
async function setCurrentConfig(configName) {
  try {
    await ServiceKeyboard.setConfig(configName);
    console.log(`Switched to configuration: ${configName}`);
  } catch (error) {
    console.error('Setting configuration failed:', error);
  }
}

// Example: Switch to Config1
// setCurrentConfig('Config1');
```

### Things to note

::: tip

- `index`: The configuration index value must be between 1 and 4.
- After switching configuration, it is recommended to listen to the `getCmd` event to get the result of the configuration switching.
- After receiving a notification that the configuration switch is successful, the following data is usually required:
- Keyboard configuration information
- Lighting settings
- Key Mapping
- Other related settings
- It is recommended to display load status during configuration switching to provide a better user experience.
  :::

## Get the configuration name

ServiceKeyboard.getConfigName(index)

**Brief description:**
Get the configuration name according to the configuration index.

---

### parameter

| Parameter name | Type     | Description                | Required | Default |
| -------------- | -------- | -------------------------- | -------- | ------- |
| `index`        | `number` | Configuration index (1-4). | Yes      | None    |

---

### Return value

- **Overall Type:** `Promise<string>`
- **Description:** Returns the configuration name corresponding to this index.

---

### Example of usage

```js
async function fetchConfigName(index) {
  //Requires protocol version >= v1.0.3.0 (can pass ServiceKeyboard.getProtocolVersion verification)
  const name = await ServiceKeyboard.getConfigName(index);
  console.log('Configuration name:', name);
  return name;
}
```

---

### Things to note

:::: tip

- The device protocol version is required to be at least `v1.0.3.0`.
- The protocol version can be obtained through `ServiceKeyboard.getProtocolVersion()`.
- `index` is recommended to pass in a valid range (usually 1-4).
  ::::

## Set the configuration name

ServiceKeyboard.setConfigName(index, name)

**Brief description:**
Sets the configuration name for the specified configuration index.

---

### parameter

| Parameter name | Type     | Description                       | Required | Default |
| -------------- | -------- | --------------------------------- | -------- | ------- |
| `index`        | `number` | Configuration index (1-4).        | Yes      | None    |
| `name`         | `string` | The configuration name to be set. | Yes      | None    |

---

### Return value

- **Overall Type:** `Promise<void>`
- **Description:** Setting successfully resolves to `void`, and an error is thrown when it fails.

---

### Example of usage

```js
async function updateConfigName(index, name) {
  //Requires protocol version >= v1.0.3.0 (can pass ServiceKeyboard.getProtocolVersion verification)
  await ServiceKeyboard.setConfigName(index, name);
  console.log(`The name of the configuration ${index} is set is: ${name}`);
}
```

---

### Things to note

:::: tip

- The device protocol version is required to be at least `v1.0.3.0`.
- It is recommended to check the length and character set for `name` to avoid failure of writing on the device side.
- After setting, you can call `ServiceKeyboard.getConfigName(index)` to read the verification.
  ::::

## Return rate list query

ServiceKeyboard.getRateOfReturnList()

**Brief description:**
Get a list of the rate of return supported by the device.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall Type:** `Promise<{ list: string[] }>`
- **Description:** Returns a list of strings containing the rate of return, such as `['R8','R16', ...]`.

---

### Example of usage

```js
async function fetchRateOfReturnList() {
  // Requires protocol version >= v1.0.7.0
  const { list } = await ServiceKeyboard.getRateOfReturnList();
  // If you need to pull down, you can convert it to {label,value,key}
  return list.map((rate, index) => ({ label: rate.replace('R', ''), value: index, key: rate }));
}
```

---

### Things to note

:::: tip

- The device protocol version is required to be at least `v1.0.7.0`.
- List items are usually returned as `R` acceleration rate numbers, such as `R8KHz`.
  ::::

## Get the current rate of return

ServiceKeyboard.getRateOfReturn()

**Brief description:**
Gets the current return index of the device.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall type:** `Promise<{ value: number }>`
- **Description:** Returns the index corresponding to the current rate of return.

---

### Example of usage

```js
async function fetchCurrentRateOfReturn() {
  // Requires protocol version >= v1.0.7.0
  const { value } = await ServiceKeyboard.getRateOfReturn();
  return value;
}
```

---

### Things to note

:::: tip

- The device protocol version is required to be at least `v1.0.7.0`.
- Intended to map the index to the actual display name in conjunction with `getRateOfReturnList()`.
  ::::

## Set the rate of return

ServiceKeyboard.setRateOfReturn(value)

**Brief description:**
Set the device return rate.

---

### parameter

| Parameter name | Type     | Description                                      | Required | Default |
| -------------- | -------- | ------------------------------------------------ | -------- | ------- |
| `value`        | `number` | Target return index (value field from the list). | Yes      | None    |

---

### Return value

- **Overall Type:** `Promise<void>`
- **Description:** Setting successfully resolves to `void`, and an error is thrown when it fails.

---

### Example of usage

```js
async function updateRateOfReturn(value) {
  // Requires protocol version >= v1.0.7.0
  await ServiceKeyboard.setRateOfReturn(value);
}
```

---

### Things to note

:::: tip

- The device protocol version is required to be at least `v1.0.7.0`.
- It is recommended to call `getRateOfReturn()` again after setting, or refresh the UI as needed.
  ::::

## Get RT accuracy

ServiceKeyboard.getRtPrecision()

**Brief description:**
Gets the minimum RT accuracy (minimum step) supported by the device.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall type:** `Promise<{ min: number }>`
- **Description:** Returns the minimum step accuracy, the unit is consistent with the device definition (for example, milliseconds).

**Return value example:**

```js
{
  "min": 0.001
}
```

---

### Example of usage

```js
async function fetchRtPrecision() {
  const { min } = await ServiceKeyboard.getRtPrecision();
  console.log('RT precision minimum step:', min);
  return min;
}
```

## Get system sleep time (minutes)

ServiceKeyboard.getLightingSleepTime()

**Brief description:**
Get the keyboard system sleep time (unit: minutes).0 means never sleeping, 1 means 1 minute, 2 means 2 minutes, and so on.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall Type:** `Promise<number>`
- **Description:** Returns the system sleep time (minutes).

**Return value example:**

```js
3; // means 3 minutes
```

---

### Example of usage

```js
async function fetchLightingSleepTime() {
  // Requires protocol version >= v1.0.4.0
  const minutes = await ServiceKeyboard.getLightingSleepTime();
  console.log('System sleep time (minutes):', minutes);
  return minutes;
}
```

---

### Things to note

:::: tip

- The device protocol version is required to be at least `v1.0.4.0`.
- 0 means never sleeping; positive integer means minutes.
  ::::

## Set system sleep time (minutes)

ServiceKeyboard.setLightingSleepTime(time)

**Brief description:**
Set the sleep time of the keyboard system (unit: minutes).0 means never sleeping, 1 means 1 minute, 2 means 2 minutes, and so on.

---

### parameter

| Parameter name | Type     | Description           | Required | Default |
| -------------- | -------- | --------------------- | -------- | ------- |
| `time`         | `number` | Sleep time (minutes). | Yes      | None    |

---

### Return value

- **Overall Type:** `Promise<void>`
- **Description:** Setting successfully resolves to `void`, and an error is thrown when it fails.

---

### Example of usage

```js
async function updateLightingSleepTime(time) {
  // Requires protocol version >= v1.0.4.0
  await ServiceKeyboard.setLightingSleepTime(time);
  console.log('System sleep time (minutes):', time);
}
```

---

### Things to note

:::: tip

- The device protocol version is required to be at least `v1.0.4.0`.
- 0 means never sleeping; it is recommended to limit the reasonable number of minutes according to the needs.
  ::::

## Reconnect the device

ServiceKeyboard.reconnection()

**Brief description:**
Try to reconnect to the specified device.

---

### parameter

| Parameter name | Type     | Description                                            | Required | Default |
| -------------- | -------- | ------------------------------------------------------ | -------- | ------- |
| `device`       | `Device` | The instance of the `Device` object to be reconnected. | Yes      | None    |
| `deviceId`     | `string` | Unique identifier of the device to be reconnected.     | Yes      | None    |

---

### Return value

- **Overall Type:** `Promise<void>`
- **Description:** Returns a `Promise`.When the operation is successfully completed, `Promise` is parsed and there is no specific return value.If the reconnect fails, `Promise` will reject and return an error.

---

### Example of usage

```js
const listener = async ({ device, type }) => {
  if (type === 'disconnect') {
    // The device is disconnected
    if (device?.collections?.length) {
      try {
        const targetCollection = device.collections.find(
          (collection) => collection.usage === 1 && collection.usagePage === 0xffb0,
        );
        if (targetCollection) {
          // Handle the logic after the device is disconnected
        }
      } catch (error) {
        console.error('device disconnection failed:', error);
      }
    }
  }

  if (type === 'connect') {
    if (device?.collections?.length) {
      try {
        const targetCollection = device.collections.find(
          (collection) => collection.usage === 1 && collection.usagePage === 0xffb0,
        );
        if (targetCollection) {
          // Process the logic after the device is connected
        }
      } catch (error) {
        console.error('device connection processing failed:', error);
      }
    }
  }
};

ServiceKeyboard.on('usbChange', listener);

// Remove the monitor
ServiceKeyboard.off('usbChange', listener);

// Reconnection is required after plug-in and unplug incident, factory reset, upgrade
```

## Device plug-in and unplug events

ServiceKeyboard.on('usbChange', callback)

**Brief description:**
Listen to the plug-in and unplugging events of the device, including normal connection/disconnection, connection/disconnection during upgrade, etc.

---

### parameter

| Parameter name | Type       | Description                                                         | Required | Default |
| -------------- | ---------- | ------------------------------------------------------------------- | -------- | ------- |
| `eventName`    | `string`   | Event name, fixed to 'usbChange'                                    | Yes      | None    |
| `callback`     | `function` | Event callback function, receiving device status change information | Yes      | None    |

---

### Callback function parameters

| Parameter name    | Type      | Description                                                                                                                                                                                                                                 |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`            | `object`  | Object containing device status change information                                                                                                                                                                                          |
| `data.type`       | `string`  | Event type, possible values ​​include: <br>- 'connect': Device connection<br>- 'disconnect': Device disconnect<br>- 'isUpgrading_connect': Device connection during upgrade<br>- 'isUpgrading_disconnect': Device disconnect during upgrade |
| `data.device`     | `Device`  | Device object, containing device information                                                                                                                                                                                                |
| `data.updateFail` | `boolean` | Whether the update failed during update writing data, such as unplugging the keyboard during update                                                                                                                                         |
| `data.reconnect`  | `boolean` | Whether the reconnect has been successfully                                                                                                                                                                                                 |

---

### Example of usage

```js
ServiceKeyboard.on('usbChange', (data) => {
  console.log('USB device changes:', data);
  const { device } = data;

  if (data.updateFail) {
    // Handle update failure
  }

  if (data.type === 'disconnect' || data.type === 'isUpgrading_disconnect') {
    // The device is disconnected
    if (device?.collections?.length) {
      try {
        const targetCollection = device.collections.find(
          (collection) => collection.usage === 1 && collection.usagePage === 0xffb0,
        );
        if (targetCollection) {
          // Handle the logic after the device is disconnected
        }
      } catch (error) {
        console.error('device disconnection failed:', error);
      }
    }
  }

  if (data.type === 'connect' || (data.type === 'isUpgrading_connect' && data.reconnect)) {
    if (device?.collections?.length) {
      try {
        const targetCollection = device.collections.find(
          (collection) => collection.usage === 1 && collection.usagePage === 0xffb0,
        );
        if (targetCollection) {
          // Process the logic after the device is connected
        }
      } catch (error) {
        console.error('device connection processing failed:', error);
      }
    }
  }
});
```

---

### Things to note

::: tip

- After factory settings, firmware upgrades, etc., the device plug-in and unplug events will be triggered many times.
- It is recommended to re-acquire device information, configuration information and other data after the device is connected.
- Equipment disconnection and reconnection during the upgrade process require special treatment to ensure the integrity of the upgrade process.
- You can use `data.updateFail` to determine whether the update failed in writing data and perform corresponding error processing.
- The automatic reconnection of the device has been handled during the plug-in and unplugging event, and there is no need to call the reconnection port anymore.
  :::

## Enter Bootloader mode

ServiceKeyboard.appToBoot()

**Brief description:**
Put the device into Bootloader mode, usually used to erase or prepare to update the firmware.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall Type:** `Promise<void>`
- **Description:** Returns a `Promise`.When the operation is successfully completed, `Promise` is parsed and there is no specific return value.If the operation fails, `Promise` will reject and return an error.

---

### Example of usage

```js
async function enterBootloaderMode() {
  try {
    // Make sure the device is initialized
    // await ServiceKeyboard.init(deviceId);
    console.log('Trying to get the device into Bootloader mode...');
    await ServiceKeyboard.appToBoot();
    console.log('The device has successfully entered Bootloader mode or the relevant command has been sent.');
    // The device may be disconnected at this time, and you need to rescan or wait for the device to appear in Bootloader mode
  } catch (error) {
    console.error('Failed to make the device enter Bootloader mode:', error);
  }
}

// enterBootloaderMode();
```

---

### Things to note

::: tip

- After doing this, the device will usually be disconnected and reenumerated in Bootloader mode (if supported).You may need to rescan the device or use a specific Bootloader tool for subsequent operations (such as firmware updates).
- tip: After erasing, you need to reconnect the device and call the reconnection port `ServiceKeyboard.reconnection`.
  :::

## Return to application mode from Bootloader mode

ServiceKeyboard.bootToApp()

**Brief description:**
Returns the device to the application mode from Bootloader mode.

---

### parameter

This method requires no parameters.

---

### Return value

- **Overall Type:** `Promise<void>`
- **Description:** Returns a `Promise`.When the operation is successfully completed, `Promise` is parsed and there is no specific return value.If the operation fails, `Promise` will reject and return an error.

---

### Example of usage

```js
async function returnToAppMode() {
  try {
    console.log('Trying to return the device from Bootloader mode to application mode...');
    await ServiceKeyboard.bootToApp();
    console.log('The device has successfully returned to application mode.');
    // The device may be disconnected at this time, and you need to rescan or wait for the device to appear in application mode
  } catch (error) {
    console.error('Failed to return the device to application mode:', error);
  }
}

// returnToAppMode();
```

---

### Things to note

::: tip

- After doing this, the device will usually be disconnected and reenumerated in Applied mode.You need to rescan the device or wait for the device to reconnect.
- It is recommended to reconnect the device after the operation is completed and call the reconnection port `ServiceKeyboard.reconnection`.
  :::

## Bin file update firmware

ServiceKeyboard.upgrade()

**Brief description:**
Update firmware to devices in Bootloader mode.

---

### parameter

| Parameter name        | Type                                                                     | Description                                                                                                                                                                                                           | Required | Default |
| --------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| `buffer`              | `ArrayBuffer`                                                            | `ArrayBuffer` containing new firmware binary data.                                                                                                                                                                    | Yes      | None    |
| `callback`            | `(data: {current: number, total: number, updateStatus: string}) => void` | A callback function that reports the progress of firmware updates.`data.current` is the number of bytes transmitted, `data.total` is the total number of bytes, and `data.updateStatus` is the current update status. | No       | No      |
| `options`             | `object`                                                                 | Configuration options during the update process.(Can be debugged according to the actual equipment situation)                                                                                                         | No       | Yes     |
| `options.toBootDelay` | `number`                                                                 | Delay time (milliseconds) after entering Bootloader mode.                                                                                                                                                             | No       | 4000    |
| `options.writeDelay`  | `number`                                                                 | Delay time (milliseconds) when writing data.                                                                                                                                                                          | No       | 30      |
| `options.toAppDelay`  | `number`                                                                 | Returns the delay time (milliseconds) when applying mode.                                                                                                                                                             | No       | 4000    |

---

### Return value

- **Overall Type:** `Promise<{ success: boolean }>`
- **Description:** Returns a `Promise`, which resolves to an object, indicating whether the firmware update is successful.
- **Resolve object structure: **

| Field Name | Type      | Description                                 | Sample Value |
| ---------- | --------- | ------------------------------------------- | ------------ |
| `success`  | `boolean` | Indicates whether the update is successful. | `true`       |

---

### Example of usage

```js
async function performFirmwareUpdate(firmwareBuffer: ArrayBuffer) {
  try {
// Make sure the device is in Bootloader mode
    // await ServiceKeyboard.toBoot();
// Wait for the device to reconnect in Bootloader mode and get its new deviceId/handle

console.log('Start firmware update...');
    const update = () => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(fileList.value[0].raw);
      reader.onload = async () => {
        loading.value = true;
        try {
          const res = await ServiceKeyboard.upgrade(
            reader.result,
            ({ current, total, updateStatus: status }) => {
              progress.current = current;
              progress.total = total;
              updateStatus.value = status;
            },
            {
              toBootDelay: 4000,
              writeDelay: 30,
              toAppDelay: 4000,
            }
          );
          afterUpdate();
        } catch (error) {
          console.log('error: ', error);
          visible.value = false;
          step.value = 1;
          progress.current = 0;
        }
        loading.value = false;
      };
    };
// The device will usually restart after update
  } catch (error) {
console.error('An error occurred during firmware update:', error);
  }
}
// const myFirmwareArrayBuffer: ArrayBuffer = ...;
// performFirmwareUpdate(myFirmwareArrayBuffer);
```

---

### Things to note

::: tip

- The `updateStatus` parameter in the `callback` function can be used to display the specific status of the current update.
- Each delay time during the update process can be adjusted through the `options` parameter to meet different device needs.
  :::

## Factory reset

ServiceKeyboard.GFSRestore()

**Brief description:**
Restore the keyboard to factory default settings.This operation clears all user-defined configurations, including lighting settings, key mapping, macro settings, etc.

### parameter

This method requires no parameters.

### Return value

**Type:** `Promise<void>`

**Description:** Return to one `
