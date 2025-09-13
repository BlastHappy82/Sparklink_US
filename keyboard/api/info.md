## Get device list

`ServiceKeyboard.getDevices()`

**Description:**
Return the list of connected devices.

### Parameters
None.

### Returns
* **Type:** `Promise<Device[]>`
* **Description:** Resolves to an array of `Device` objects.

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `data` | `object` | Raw device data | – |
| `data.id` | `string` | Device ID | `"b1545667-777b-4a8a-9640-1c000a56b5e7"` |
| `id` | `string` | Device identifier | `"b1545667-777b-4a8a-9640-1c000a56b5e7"` |
| `usage` | `number` | Usage value | `1` |
| `usagePage` | `number` | Usage page | `65440` |
| `vendorId` | `number` | Vendor ID | `7331` |
| `productId` | `number` | Product ID | `2049` |
| `productName` | `string` | Product name | `"ET65 HE"` |

### Example usage
```js
async function fetchDevices() {
  try {
    const devices = await ServiceKeyboard.getDevices();
    console.log('Found devices:', devices);
  } catch (error) {
    console.error('Failed to get devices:', error);
  }
}
```

## Initialize a device

`ServiceKeyboard.init()`

**Description:**
Initialize a device so it can be used.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `id` | `string` | Device identifier from `getDevices()` | Yes | – |

### Returns
* **Type:** `Promise<Device | null>`
* **Description:** Resolves to the `Device` object on success, or `null` if the device cannot be opened.

### Example usage
```js
async function initializeDevice(deviceId) {
  try {
    const device = await ServiceKeyboard.init(deviceId);
    console.log('Init result:', device);
  } catch (error) {
    console.error('Initialization failed:', error);
  }
}
```

## Get basic hardware and firmware info

`ServiceKeyboard.getBaseInfo()`

**Description:**
Return base information about the initialized device.

### Parameters
None.

### Returns
* **Type:** `Promise<BaseInfo>`
* **Description:** Resolves to a `BaseInfo` object.

| Field | Type | Description | Example |
|------|------|-------------|---------|
| `BoardID` | `number` | Board ID | `84084737` |
| `KeyboardLayout` | `number` | Layout ID | `5` |
| `KeyType` | `number` | Switch type | `3` |
| `CustomerID` | `number` | Customer ID | `0` |
| `ProductionId` | `number` | Product ID | `0` |
| `KeyboardRunMode` | `number` | Current run mode | `0` |
| `KeyboardSN` | `string` | Serial number | `'123456'` |
| `firewareSpaceSize` | `number` | Available firmware space | `262144` |
| `appVersion` | `string` | Firmware version | `'App V1.1.6'` |
| `appBuildDate` | `string` | Build date | `'Apr 22 5180'` |
| `versionString` | `string` | Full version string | `''` |

See [BaseInfo model](/keyboard/model#basic-info) for details.

### Example usage
```js
async function fetchBaseDeviceInfo() {
  const baseInfo = await ServiceKeyboard.getBaseInfo();
  console.log('Base info:', baseInfo);
}
```

## Get API information

`ServiceKeyboard.getApi()`

**Description:**
Send a raw API request to the device.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `params` | `object` | Request object | Yes | – |
| `params.type` | `string` | API type | Yes | – |
| `params.hArgs` | `number[]` | Optional additional arguments | No | – |
| `params.is8bit` | `boolean` | Optional flag for 8‑bit mode | No | – |

### Returns
* **Type:** `Promise<Api>`
* **Description:** Resolves to the requested API data. See [API type definitions](/keyboard/type#getApi).

### Example usage
```js
async function fetchApiData(apiType, customArgs, use8bit) {
  const params = { type: apiType };
  if (customArgs) params.hArgs = customArgs;
  if (typeof use8bit === 'boolean') params.is8bit = use8bit;
  const result = await ServiceKeyboard.getApi(params);
  console.log('API result:', result);
}
```

## Reconnect a device

`ServiceKeyboard.reconnection(device, deviceId)`

**Description:**
Attempt to reconnect to a device after it was disconnected.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `device` | `Device` | Device instance | Yes | – |
| `deviceId` | `string` | Device identifier | Yes | – |

### Returns
* **Type:** `Promise<void>`
* **Description:** Resolves when reconnection completes.

## Device plug/unplug events

`ServiceKeyboard.on('usbChange', callback)`

**Description:**
Listen for connect and disconnect events. The callback receives an object with fields:

| Field | Type | Description |
|-------|------|-------------|
| `type` | `string` | `'connect'`, `'disconnect'`, `'isUpgrading_connect'`, or `'isUpgrading_disconnect'` |
| `device` | `Device` | Device information |
| `updateFail` | `boolean` | Whether a firmware update failed | 
| `reconnect` | `boolean` | Indicates if the device reconnected after upgrading |

### Example usage
```js
ServiceKeyboard.on('usbChange', (data) => {
  console.log('USB change:', data);
});
```

## Set polling rate

`ServiceKeyboard.setRateOfReturn()`

**Description:**
Set the keyboard polling rate.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `value` | `number` | Desired polling rate | Yes | – |

### Returns
* **Type:** `Promise<void>`
* **Description:** Resolves when the polling rate is applied.

### Example usage
```js
async function configureRateOfReturn(rate) {
  await ServiceKeyboard.setRateOfReturn(rate);
}
```

## Enter Bootloader mode

`ServiceKeyboard.toBoot()`

**Description:**
Put the device into Bootloader mode, typically before a firmware update.

### Returns
* **Type:** `Promise<void>`
* **Description:** Resolves when the command is sent.

## Update firmware from a bin file

`ServiceKeyboard.updateBin(buffer, callback)`

**Description:**
Update firmware for a device in Bootloader mode.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `buffer` | `ArrayBuffer` | Firmware binary data | Yes | – |
| `callback` | `(data: { current: number; total: number; updateStatus: string }) => void` | Optional progress callback | No | – |

## Restore factory settings

`ServiceKeyboard.factoryDataReset()`

**Description:**
Reset the keyboard to factory defaults.

### Returns
* **Type:** `Promise<void>`
* **Description:** Resolves when the reset command completes.

### Example usage
```js
await ServiceKeyboard.factoryDataReset();
```

## Switch configuration slot

`ServiceKeyboard.switchConfig(index)`

**Description:**
Switch among up to four configuration profiles.

### Parameters
| Name | Type | Description | Required | Default |
|------|------|-------------|----------|---------|
| `index` | `number` | Profile index (1‑4) | Yes | – |

### Returns
* **Type:** `Promise<void>`
* **Description:** Resolves after switching configuration.

