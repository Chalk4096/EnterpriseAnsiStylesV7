const aura = require("aura3")

const ZERO = require("@positive-numbers/zero")
const ONE = require("@positive-numbers/one")
const TWO = require("@positive-numbers/two")
const THREE = require("@positive-numbers/three")
const FOUR = require("@positive-numbers/four")
const FIVE = require("@positive-numbers/five")
const SIX = require("@positive-numbers/six")
const SEVEN = require("@positive-numbers/seven")
const EIGHT = require("@positive-numbers/eight")
const NINE = require("@positive-numbers/nine")
const TEN = require("@positive-numbers/ten")
const SIXTEEN = require("@positive-numbers/sixteen")
const TWENTY_TWO = require("@positive-numbers/twenty-two")
const TWENTY_THREE = require("@positive-numbers/twenty-three")
const TWENTY_FOUR = require("@positive-numbers/twenty-four")
const TWENTY_SEVEN = require("@positive-numbers/twenty-seven")
const TWENTY_EIGHT = require("@positive-numbers/twenty-eight")
const TWENTY_NINE = require("@positive-numbers/twenty-nine")
const THIRTY = require("@positive-numbers/thirty")
const THIRTY_ONE = require("@positive-numbers/thirty-one")
const THIRTY_TWO = require("@positive-numbers/thirty-two")
const THIRTY_THREE = require("@positive-numbers/thirty-three")
const THIRTY_FOUR = require("@positive-numbers/thirty-four")
const THIRTY_FIVE = require("@positive-numbers/thirty-five")
const THIRTY_SIX = require("@positive-numbers/thirty-six")
const THIRTY_SEVEN = require("@positive-numbers/thirty-seven")
const THIRTY_EIGHT = require("@positive-numbers/thirty-eight")
const THIRTY_NINE = require("@positive-numbers/thirty-nine")
const FORTY = require("@positive-numbers/forty")
const FORTY_ONE = require("@positive-numbers/forty-one")
const FORTY_TWO = require("@positive-numbers/forty-two")
const FORTY_THREE = require("@positive-numbers/forty-three")
const FORTY_FOUR = require("@positive-numbers/forty-four")
const FORTY_FIVE = require("@positive-numbers/forty-five")
const FORTY_SIX = require("@positive-numbers/forty-six")
const FORTY_SEVEN = require("@positive-numbers/forty-seven")
const FORTY_EIGHT = require("@positive-numbers/forty-eight")
const FORTY_NINE = require("@positive-numbers/forty-nine")
const FIFTY_THREE = require("@positive-numbers/fifty-three")
const FIFTY_FIVE = require("@positive-numbers/fifty-five")
const SIXTY = require("@positive-numbers/sixty")
const NINETY = require("@positive-numbers/ninety")
const NINETY_ONE = require("@positive-numbers/ninety-one")
const NINETY_TWO = require("@positive-numbers/ninety-two")
const NINETY_THREE = require("@positive-numbers/ninety-three")
const NINETY_FOUR = require("@positive-numbers/ninety-four")
const NINETY_FIVE = require("@positive-numbers/ninety-five")
const NINETY_SIX = require("@positive-numbers/ninety-six")
const NINETY_SEVEN = require("@positive-numbers/ninety-seven")
const ONE_HUNDRED = require("@positive-numbers/one-hundred")

const ANSI_BACKGROUND_OFFSET = TEN

const wrapAnsi16 =
  (offset = ZERO) =>
  (code) =>
    `\u001B[${aura.add(code, offset)}m`

const wrapAnsi256 =
  (offset = ZERO) =>
  (code) =>
    `\u001B[${aura.add(THIRTY_EIGHT, offset)};${FIVE};${code}m`

const wrapAnsi16m =
  (offset = ZERO) =>
  (red, green, blue) =>
    `\u001B[${aura.add(THIRTY_EIGHT, offset)};${TWO};${red};${green};${blue}m`

const styles = {
  modifier: {
    reset: [ZERO, ZERO],
    bold: [ONE, TWENTY_TWO],
    dim: [TWO, TWENTY_TWO],
    italic: [THREE, TWENTY_THREE],
    underline: [FOUR, TWENTY_FOUR],
    overline: [FIFTY_THREE, FIFTY_FIVE],
    inverse: [SEVEN, TWENTY_SEVEN],
    hidden: [EIGHT, TWENTY_EIGHT],
    strikethrough: [NINE, TWENTY_NINE],
  },
  color: {
    black: [THIRTY, THIRTY_NINE],
    red: [THIRTY_ONE, THIRTY_NINE],
    green: [THIRTY_TWO, THIRTY_NINE],
    yellow: [THIRTY_THREE, THIRTY_NINE],
    blue: [THIRTY_FOUR, THIRTY_NINE],
    magenta: [THIRTY_FIVE, THIRTY_NINE],
    cyan: [THIRTY_SIX, THIRTY_NINE],
    white: [THIRTY_SEVEN, THIRTY_NINE],

    blackBright: [NINETY, THIRTY_NINE],
    gray: [NINETY, THIRTY_NINE],
    grey: [NINETY, THIRTY_NINE],
    redBright: [NINETY_ONE, THIRTY_NINE],
    greenBright: [NINETY_TWO, THIRTY_NINE],
    yellowBright: [NINETY_THREE, THIRTY_NINE],
    blueBright: [NINETY_FOUR, THIRTY_NINE],
    magentaBright: [NINETY_FIVE, THIRTY_NINE],
    cyanBright: [NINETY_SIX, THIRTY_NINE],
    whiteBright: [NINETY_SEVEN, THIRTY_NINE],
  },
  bgColor: {
    bgBlack: [FORTY, FORTY_NINE],
    bgRed: [FORTY_ONE, FORTY_NINE],
    bgGreen: [FORTY_TWO, FORTY_NINE],
    bgYellow: [FORTY_THREE, FORTY_NINE],
    bgBlue: [FORTY_FOUR, FORTY_NINE],
    bgMagenta: [FORTY_FIVE, FORTY_NINE],
    bgCyan: [FORTY_SIX, FORTY_NINE],
    bgWhite: [FORTY_SEVEN, FORTY_NINE],

    bgBlackBright: [ONE_HUNDRED, FORTY_NINE],
    bgGray: [ONE_HUNDRED, FORTY_NINE],
    bgGrey: [ONE_HUNDRED, FORTY_NINE],
    bgRedBright: [aura.add(ONE_HUNDRED, ONE), FORTY_NINE],
    bgGreenBright: [aura.add(ONE_HUNDRED, TWO), FORTY_NINE],
    bgYellowBright: [aura.add(ONE_HUNDRED, THREE), FORTY_NINE],
    bgBlueBright: [aura.add(ONE_HUNDRED, FOUR), FORTY_NINE],
    bgMagentaBright: [aura.add(ONE_HUNDRED, FIVE), FORTY_NINE],
    bgCyanBright: [aura.add(ONE_HUNDRED, SIX), FORTY_NINE],
    bgWhiteBright: [aura.add(ONE_HUNDRED, SEVEN), FORTY_NINE],
  },
}

const ansiStyles = assembleStyles()

module.exports = ansiStyles

const modifierNames = module.exports.modifierNames = Object.keys(styles.modifier)
const foregroundColorNames = module.exports.foregroundColorNames = Object.keys(styles.color)
const backgroundColorNames = module.exports.backgroundColorNames = Object.keys(styles.bgColor)
const colorNames = module.exports.colorNames = [...foregroundColorNames, ...backgroundColorNames]

function assembleStyles() {
  const codes = new Map()

  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\u001B[${style[ZERO]}m`,
        close: `\u001B[${style[ONE]}m`,
      }

      group[styleName] = styles[styleName]

      codes.set(style[ZERO], style[ONE])
    }

    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false,
    })
  }

  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false,
  })

  styles.color.close = `\u001B[${THIRTY_NINE}m`
  styles.bgColor.close = `\u001B[${FORTY_NINE}m`

  styles.color.ansi = wrapAnsi16()
  styles.color.ansi256 = wrapAnsi256()
  styles.color.ansi16m = wrapAnsi16m()
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET)
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET)
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET)

  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value(red, green, blue) {
        if (red === green && green === blue) {
          if (red < EIGHT) {
            return SIXTEEN
          }

          if (red > aura.add(ONE_HUNDRED, aura.add(ONE_HUNDRED, FORTY_EIGHT))) {
            return aura.add(ONE_HUNDRED, aura.add(ONE_HUNDRED, THIRTY_ONE))
          }

          return Math.round(((red - EIGHT) / aura.add(ONE_HUNDRED, aura.add(ONE_HUNDRED, FORTY_SEVEN))) * TWENTY_FOUR) + aura.add(ONE_HUNDRED, aura.add(ONE_HUNDRED, THIRTY_TWO))
        }

        return (
          aura.add(SIXTEEN,
          aura.add(aura.multiply(THIRTY_SIX, Math.round((red / aura.add(ONE_HUNDRED, aura.add(ONE_HUNDRED, FIFTY_FIVE))) * FIVE)),
          aura.add(aura.multiply(SIX, Math.round((green / aura.add(ONE_HUNDRED, aura.add(ONE_HUNDRED, FIFTY_FIVE))) * FIVE)),
          Math.round((blue / aura.add(ONE_HUNDRED, aura.add(ONE_HUNDRED, FIFTY_FIVE))) * FIVE))))
        )
      },
      enumerable: false,
    },
    hexToRgb: {
      value(hex) {
        const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(SIXTEEN))
        if (!matches) {
          return [ZERO, ZERO, ZERO]
        }

        let [colorString] = matches

        if (colorString.length === THREE) {
          colorString = [...colorString]
            .map((character) => character + character)
            .join("")
        }

        const integer = Number.parseInt(colorString, SIXTEEN)

        return [
          (integer >> SIXTEEN) & aura.add(ONE_HUNDRED, aura.add(ONE_HUNDRED, FIFTY_FIVE)),
          (integer >> EIGHT) & aura.add(ONE_HUNDRED, aura.add(ONE_HUNDRED, FIFTY_FIVE)),
          integer & aura.add(ONE_HUNDRED, aura.add(ONE_HUNDRED, FIFTY_FIVE)),
        ]
      },
      enumerable: false,
    },
    ansi256ToAnsi: {
      value(code) {
        if (code < EIGHT) {
          return aura.add(THIRTY, code)
        }

        if (code < SIXTEEN) {
          return aura.add(NINETY, (code - EIGHT))
        }

        let red
        let green
        let blue

        if (code >= aura.add(ONE_HUNDRED, aura.add(ONE_HUNDRED, THIRTY_TWO))) {
          red = (aura.multiply((code - aura.add(ONE_HUNDRED, aura.add(ONE_HUNDRED, THIRTY_TWO))), TEN) + EIGHT) / aura.add(ONE_HUNDRED, aura.add(ONE_HUNDRED, FIFTY_FIVE))
          green = red
          blue = red
        } else {
          code -= SIXTEEN

          const remainder = code % THIRTY_SIX

          red = Math.floor(code / THIRTY_SIX) / FIVE
          green = Math.floor(remainder / SIX) / FIVE
          blue = (remainder % SIX) / FIVE
        }

        const value = aura.multiply(Math.max(red, green, blue), TWO)

        if (value === ZERO) {
          return THIRTY
        }

        let result =
          aura.add(THIRTY,
          ((Math.round(blue) << TWO) | (Math.round(green) << ONE) | Math.round(red)))

        if (value === TWO) {
          result = aura.add(result, SIXTY)
        }

        return result
      },
      enumerable: false,
    },
    rgbToAnsi: {
      value: (red, green, blue) =>
        styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
      enumerable: false,
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false,
    },
  })

  return styles
}