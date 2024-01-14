# dcs-coordinates

Convert coordinates between DCS internal coordinates and Latitude / Longitude

Typings and ts-doc are included.\
This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

- [Installation](#installation)
- [Usage](#usage)
	- [LOtoLL](#lotoll)
	- [LLtoLO](#lltolo)
- [API](#api)
	- [LOtoLL](#lotoll-1)
	- [LLtoLO](#lltolo-1)
	- [decToDms](#dectodms)
	- [dmsToDec](#dmstodec)
- [How it works](#how-it-works)
	- [Method](#method)
	- [Accuracy](#accuracy)
	- [Supported Theatres](#supported-theatres)
- [License](#license)
- [Changelog](#changelog)

## Installation
`npm install @kilcekru/dcs-coordinates`

## Usage

### LOtoLL

```javascript
import { LOtoLL } from "@kilcekru/dcs-coordinates";

// convert coordinates of airport Senaki-Kolkhi
const point = LOtoLL({ theatre: "Caucasus", x: -281_782, z: 647_279 });

console.log(point);
// { lat: 42.24084, lng: 42.04801 }
```

### LLtoLO
```javascript
import { LLtoLO } from "@kilcekru/dcs-coordinates";

// convert coordinates of airport Senaki-Kolkhi
const point = LLtoLO({ theatre: "Caucasus", lat: 42.24084, lng: 42.04801 });

console.log(point);
// { x: -281_782, z: 647_279 }
```

## API

### LOtoLL
```typescript
LOtoLL({theatre: Theatre, x: number, z: number}): {lat: number, lng: number};
type Theatre = "Caucasus" | "Normandy" | "PersianGulf" | "Sinai" | "SouthAtlantic" | "Syria";
```

Converts a point from DCS coordinates to Latitude / Longitude (decimal).\
The result is not perfect, see [Accuracy](#accuracy)

### LLtoLO
```typescript
LLtoLO({theatre: Theatre, lat: number, lng: number}): {x: number, z: number};
type Theatre = "Caucasus" | "Normandy" | "PersianGulf" | "Sinai" | "SouthAtlantic" | "Syria";
```

Converts a point from Latitude / Longitude (decimal) to DCS coordinates.\
The result is not perfect, see [Accuracy](#accuracy)

### decToDms
```typescript
decToDms(dec: number): DMS;
interface DMS {
	deg: number;
	min: number;
	sec: number;
}
```

Converts Latitude or Longitude from a decimal value to degrees, minutes, seconds.

### dmsToDec
```typescript
dmsToDec(dms: DMS): number;
interface DMS {
	deg: number;
	min: number;
	sec: number;
}
```

Converts Latitude or Longitude from degrees, minutes, seconds to a decimal value.

## How it works

### Method

I do not know the exact way, Lat/Lng is mapped to internal coordinates in DCS.

Because of this, a grid of coordinate points is extracted from each DCS theatre.\
The grid does not cover the whole theatre, but all airports are included.\
Points outside the grid can not be converted, trying so will throw an Error.

To convert a point the correct grid cell is selected and the result is interpolated from the cell corners.\
This leads to inaccuracy, see next chapter.

### Accuracy

Because bilinear interpolation is used to convert points results will be not perfect.\
The deviation should be less than 10 meters for any given point.

Also LOtoLL and LLtoLO use different lookup grids.
If a point is converted from one coordinate system to the other and back it will not be exact.\
The deviation for this is less than 5 meters for all theatres.

### Supported Theatres

Currently 6 theatres are supported:
- Caucasus
- Normandy
- Persian Gulf
- Sinai
- South Atlantic
- Syria

More theatres might be covered in the future.

## License

Licensed under [MIT](https://github.com/Kilcekru/dcs-coordinates/blob/main/LICENSE).

## Changelog

- v2.0.0
	- renamed argument map to theatre
	- added export for types and schemas

- v1.0.0
	- added sinai
	- increased boundaries for all maps

- v0.1.0
	- Initial Release