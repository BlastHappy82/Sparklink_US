```ts
interface HIDCollectionInfo {
  usagePage: number;
  usage: number;
  inputReports: ReadonlyArray<HIDReportInfo>;
  outputReports: ReadonlyArray<HIDReportInfo>;
  featureReports: ReadonlyArray<HIDReportInfo>;
  children: ReadonlyArray<HIDCollectionInfo>;
}

interface HIDDevice extends EventTarget {
  id: string;
  collections: ReadonlyArray<HIDCollectionInfo>;
  readonly opened: boolean;
  readonly vendorId: number;
  readonly productId: number;
  readonly productName: string;
  oninputreport: (event: Event) => void | null;
  open(): Promise<void>;
  close(): Promise<void>;
  forget(): Promise<void>;
  sendReport(reportId: number, data: BufferSource): Promise<void>;
  sendFeatureReport(reportId: number, data: BufferSource): Promise<void>;
  receiveFeatureReport(reportId: number): Promise<DataView>;
}

type Device = {
   data: HIDDevice, // device information
   id: string, // device ID
   usage: number, // usage
   usagePage: number, // usagePage
   vendorId: number, // vendorId
   productId: number, // productId
   productName: string, // productName
}

interface BaseInfo {
  BoardID: number;
  KeyboardLayout: number;
  KeyType: number;
  CustomerID: number;
  ProductionId: number;
  KeyboardRunMode: number;
  KeyboardSN: string;
  firewareSpaceSize: number;
  appVersion: string;
  appBuildDate: string;
  versionString: string;
}

enum RateOfReturn {
  '8KHz' = 0,
  '4KHz' = 1,
  '2KHz' = 2,
  '1KHz' = 3,
  '500Hz' = 4,
  '250Hz' = 5,
  '125Hz' = 6,
}

interface Calibration {
  calibrations: number[][], // maximum travel values for all keys
  travels: number[][], // travel values when all keys are pressed
}

```

## Layout model

```ts
[
  IDefKeyInfo[],
  IDefKeyInfo[],
  IDefKeyInfo[],
  IDefKeyInfo[],
  IDefKeyInfo[],
  IDefKeyInfo[],

]
```

## Single-key layout model

```ts
type IDefKeyInfo = {
  keyValue: number; // key value
  location: {
    row: number; // row
    col: number; // column
  };
}
```

## Lighting

```ts

// Lighting model
type LightMode = {
  open: boolean; // whether lighting is on
  direction: boolean; // direction true: forward, false: reverse
  superResponse: boolean; // super response
  speed: number; // lighting speed
  colors: string[]; // color set
  mode: number; // 0 off, 1-20 effects, 21 custom
  luminance: number; // brightness
  sleepDelay: number; // lighting sleep time
  staticColor: number; // static lighting color mode
  type: LightModeType;
  // LightModeType = 'static' | 'custom' | 'dynamic';
  // type: custom = custom mode, static = static mode, dynamic = dynamic mode.
  // When setting the logo light, only static and dynamic modes are available.
};

// Lighting type
type LightModeType = 'custom' | 'static' | 'dynamic';

```

## Advanced keys

```ts
type TrpsLayoutType = 'Layout_TRPS1' | 'Layout_TRPS2' | 'Layout_TRPS3' | 'Layout_TRPS4';
interface IDKSMode {
  key: number;
  dks: number[];
  trps: number[];
  dbs: number[];
}
interface ISOCDMode {
  key?: number;
  dks1?: number;
  mode1?: number;
  mode2?: number;
}
interface ISOCDModeV2 {
  pos1: number;
  pos2: number;
  key1: number;
  key2: number;
  type: number;
  mode: number;
}
interface ISOCDModeV3 {
  pos1: number; // original key value
  pos2: number; // original key value
  key1: number; // key value to send
  key2: number; // key value to send
  type: number; // key value type 0=send by position, 1=send by key value, default:0
  mode: number; // key sending mode: 0=override later, 1=A priority, 2=B priority, 3=neutral (no key when both pressed), default:0
  delay: number; // key sending delay
}
interface IEndMode {
  key: number;
  dks?: number;
  delay?: number;
}
```

## Macro

```ts

interface IMacroMode {
  key: number;
  index: number;
  len: number;
  mode: number;
  num: number;
  delay: number;
}

type MacroType = { keyCode: number; timeDifference: number; status: number };

```
