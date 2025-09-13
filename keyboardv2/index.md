# Keyboard SDK Documentation

Because of browser security restrictions, the SDK communicates using the HID protocol. You must grant permission before calling the SDK.

## Getting Started

### Install

```bash
pnpm add @sparklinkplayjoy/sdk-keyboard-test-v2
```

## Project Setup

### Integrate into your project

1. Import

```js
import Keyboard from '@sparklinkplayjoy/sdk-keyboard-test-v2'
const vendorId = 00 // your VID
const productId = 00 // your PID
const ServiceKeyboard = new Keyboard({
  configs: [{ vendorId, productId, usagePage: 0xffb0, usage: 0x01 }],
  usage: 0x01,
  usagePage: 0xffb0,
});
```

2. Request authorization

```js
// Retrieve the list of connected devices
const devices = await ServiceKeyboard.getDevices()
```

3. Initialize a device

```js
// Select one device from the list
const { id } = devices[0]
const result = await ServiceKeyboard.init(id)
```

4. Listen for HID plug/unplug events

```js
services.on('usbChange', (data) => {
  const { device } = data;

  if (data.type === 'disconnect' || data.type === 'isUpgrading_disconnect') {
  }
  if (data.type === 'connect' || (data.type === 'isUpgrading_connect' && data.reconnect)) {
    if (device?.collections?.length) {
      try {
        const targetCollection = device.collections.find(
          (collection) => collection.usage === 1 && collection.usagePage === 0xffb0,
        );

        if (targetCollection) {

        }
      } catch (error) {

      }
    }
  }
});

services.off('usbChange', listener) // remove listener
```
