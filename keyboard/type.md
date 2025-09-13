# Type Reference

## getApi

```ts
// Supported types
ORDER_TYPE_PROTOCOL_VERSION = 0x01, // Get protocol version
ORDER_TYPE_SAVING_PARAMETER = 0x02, // Save parameters manually
ORDER_TYPE_RELOAD_PARAMETERS = 0x03, // Reload parameters
ORDER_TYPE_CLEAR_CALIBRATION_DATA = 0x04, // Clear calibration data
ORDER_TYPE_OPEN_DKS = 0x05, // Enable DKS
ORDER_TYPE_CLOSE_DKS = 0x06, // Disable DKS
ORDER_TYPE_REVERSE = 0x07, // Reverse
ORDER_TYPE_TURN_ON_REMAPPING = 0x08, // Enable remapping
ORDER_TYPE_TURN_OFF_REMAPPING = 0x09, // Disable remapping
ORDER_TYPE_ENABLE_RELATIVE_TRIGGER = 0x0a, // Enable relative trigger
ORDER_TYPE_TURN_OFF_RELATIVE_TRIGGER = 0x0b, // Disable relative trigger
ORDER_TYPE_START_CALIBRATION = 0x0c, // Start calibration; reserved. s_arg is the max/min Hall voltage change (mV)
ORDER_TYPE_CLOSE_CALIBRATION = 0x0d, // Stop calibration; reserved. s_arg=0 means exit
ORDER_TYPE_START_DEMONSTRATION = 0x0e, // Enable demo mode
ORDER_TYPE_CLOSE_DEMONSTRATION = 0x0f, // Disable demo mode
ORDER_TYPE_ERASE_MACROSTORAGE = 0x10, // Erase macro storage area before saving macro parameters
ORDER_TYPE_RESTORE_FACTORY_SETTINGS = 0x11, // Restore factory settings; wait >200ms for response
// query commands: s_arg = 1 means true, other values mean false
ORDER_TYPE_LOCK_WIN_KEY = 0x20, // query lock WIN key
ORDER_TYPE_QUERY_WIN_MODEL = 0x21, // query whether in Win mode
ORDER_TYPE_QUERY_MAC_MODEL = 0x22, // query whether in Mac mode
ORDER_TYPE_QUERY_STANDARD_MODEL = 0x23, // query whether in Standard mode
ORDER_TYPE_QUERY_ADJUSTABLE_SPEEDMODEL = 0x24, // query whether in Adjustable Travel mode
ORDER_TYPE_PRECISION_STROKE = 0x25, // 8-bit precision + 16-bit min travel + 16-bit max travel in um; range 0~4000um
ORDER_TYPE_KEYBOARD_NAME = 0x26, // read keyboard name
ORDER_TYPE_SET_WIN_MODEL = 0x30, // switch to Win mode; s_arg=1 indicates success
ORDER_TYPE_SET_MAC_MODEL = 0x31, // switch to Mac mode; s_arg=1 indicates success
ORDER_TYPE_SET_STANDARD_MODEL = 0x32, // switch to Standard mode
ORDER_TYPE_SET_ADJUSTABLE_SPEEDMODEL = 0x33, // switch to Adjustable Travel mode
ORDER_TYPE_TOP_DEAD_SWITCH = 0x34, // Top dead zone
ORDER_TYPE_RGB1 = 0x40, // Write RGB grayscale 1; h_arg = 0xFF invalid, s_arg returns grayscale
ORDER_TYPE_RGB2 = 0x41, // Write RGB grayscale 2
ORDER_TYPE_RGB3 = 0x42, // Write RGB grayscale 3
ORDER_TYPE_RGB4 = 0x43, // Write RGB grayscale 4
ORDER_TYPE_ROES = 0x50, // Set report rate: h_arg / s_arg = 0[8KHz], 1[4KHz], 2[2KHz], 3[1KHz], 4[500Hz], 5[250Hz], 6[125Hz]; invalid otherwise; read only
ORDER_TYPE_WEB = 0x60, // One-click website open; h_arg[n] = URL char ASCII, max 50 bytes
ORDER_TYPE_SOCD = 0x61, // Quickly enable/disable SOCD; h_arg=0x00 disable, h_arg=0x01 enable
ORDER_TYPE_CONFIG = 0x70, // Switch profile; h_arg / s_arg = 0[Profile1],1[Profile2],2[Profile3],3[Profile4]; other params query profile
ORDER_TYPE_AXOSOME = 0x75, // Query supported switch IDs
ORDER_TYPE_CURRENT_AXOSOME = 0x76, // Current switch ID, s_arg = [uint16,uint]
```
