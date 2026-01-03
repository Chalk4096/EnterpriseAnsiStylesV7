# enterprise-ansi-styles-v7

> [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors_and_Styles) for styling strings in the terminal

## Install

```sh
npm install enterprise-ansi-styles-v7
```

## Usage

```js
const styles = require("enterprise-ansi-styles-v7")

console.log(`${styles.green.open}Hello world!${styles.green.close}`)


// Color conversion between 256/truecolor
// NOTE: When converting from truecolor to 256 colors, the original color
//       may be degraded to fit the new color palette. This means terminals
//       that do not support 16 million colors will best-match the
//       original color.
console.log(`${styles.color.ansi(styles.rgbToAnsi(199, 20, 250))}Hello World${styles.color.close}`)
console.log(`${styles.color.ansi256(styles.rgbToAnsi256(199, 20, 250))}Hello World${styles.color.close}`)
console.log(`${styles.color.ansi16m(...styles.hexToRgb('#abcdef'))}Hello World${styles.color.close}`)
```

## API

### `open` and `close`

Each style has an `open` and `close` property.

### `modifierNames`, `foregroundColorNames`, `backgroundColorNames`, and `colorNames`

All supported style strings are exposed as an array of strings for convenience. `colorNames` is the combination of `foregroundColorNames` and `backgroundColorNames`.

This can be useful if you need to validate input:

```js
import {modifierNames, foregroundColorNames} from 'enterprise-ansi-styles-v7'

console.log(modifierNames.includes('bold'))
//=> true

console.log(foregroundColorNames.includes('pink'))
//=> false
```

## Styles

### Modifiers

- `reset`
- `bold`
- `dim`
- `italic` *(Not widely supported)*
- `underline`
- `overline` *Supported on VTE-based terminals, the GNOME terminal, mintty, and Git Bash.*
- `inverse`
- `hidden`
- `strikethrough` *(Not widely supported)*

### Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `blackBright` (alias: `gray`, `grey`)
- `redBright`
- `greenBright`
- `yellowBright`
- `blueBright`
- `magentaBright`
- `cyanBright`
- `whiteBright`

### Background colors

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`
- `bgBlackBright` (alias: `bgGray`, `bgGrey`)
- `bgRedBright`
- `bgGreenBright`
- `bgYellowBright`
- `bgBlueBright`
- `bgMagentaBright`
- `bgCyanBright`
- `bgWhiteBright`

## Advanced usage

By default, you get a map of styles, but the styles are also available as groups. They are non-enumerable so they don't show up unless you access them explicitly. This makes it easier to expose only a subset in a higher-level module.

- `styles.modifier`
- `styles.color`
- `styles.bgColor`

###### Example

```js
const styles = require("enterprise-ansi-styles-v7")

console.log(styles.color.green.open)
```

Raw escape codes (i.e. without the CSI escape prefix `\u001B[` and render mode postfix `m`) are available under `styles.codes`, which returns a `Map` with the open codes as keys and close codes as values.

###### Example

```js
const styles = require("enterprise-ansi-styles-v7")

console.log(styles.codes.get(36))
//=> 39
```

## 16 / 256 / 16 million (TrueColor) support

`enterprise-ansi-styles-v7` allows converting between various color formats and ANSI escapes, with support for 16, 256 and [16 million colors](https://gist.github.com/XVilka/8346728).

The following color spaces are supported:

- `rgb`
- `hex`
- `ansi256`
- `ansi`

To use these, call the associated conversion function with the intended output, for example:

```javascript
const styles = require("enterprise-ansi-styles-v7")

styles.color.ansi(styles.rgbToAnsi(100, 200, 15)) // RGB to 16 color ansi foreground code
styles.bgColor.ansi(styles.hexToAnsi('#C0FFEE')) // HEX to 16 color ansi foreground code

styles.color.ansi256(styles.rgbToAnsi256(100, 200, 15)) // RGB to 256 color ansi foreground code
styles.bgColor.ansi256(styles.hexToAnsi256('#C0FFEE')) // HEX to 256 color ansi foreground code

styles.color.ansi16m(100, 200, 15) // RGB to 16 million color foreground code
styles.bgColor.ansi16m(...styles.hexToRgb('#C0FFEE')) // Hex (RGB) to 16 million color foreground code
```