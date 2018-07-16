// variable

const Font = {}
Font.BASE_FONT_SIZE = 16
Font.BASE_FONT_FAMILY = 'OpenSans'

const Colors = {}

Colors.BLUE = 'blue'
Colors.WHITE = '#ffffff'
Colors.WHITE_1 = '#f1f1f1'
Colors.GREY = '#cccccc'

const Button = {}

// Base size
Button.WIDTH  = 120
Button.HEIGHT = 44
Button.BORDER_WIDTH = 2
// Base color
Button.BG_COLOR = Colors.BLUE
Button.BORDER_COLOR = Colors.BLUE

// Button size
Button.SM = {}
Button.MD = {}
Button.LG = {}

Button.SM.WIDTH  = 81
Button.SM.HEIGHT = 36

Button.MD.WIDTH  = Button.WIDTH
Button.MD.HEIGHT = Button.HEIGHT

Button.LG.WIDTH  = 150
Button.LG.HEIGHT = 46

// Base Button Text
Button.Text = {}
// Base Button Text size
Button.Text.FONT_SIZE   = Font.BASE_FONT_SIZE
Button.Text.FONT_FAMILY = Font.BASE_FONT_FAMILY
// Base Button Text color
Button.Text.COLOR = Colors.WHITE


// Button state
Button.PRESS = {}
Button.DISABLED = {}
Button.Text.PRESS = {}
Button.Text.DISABLED = {}

Button.PRESS.BG_COLOR    = Colors.WHITE_1
Button.DISABLED.BG_COLOR = Colors.GREY
Button.DISABLED.BORDER_COLOR = Colors.GREY

Button.Text.PRESS.COLOR    = Colors.WHITE
Button.Text.DISABLED.COLOR = Colors.WHITE

export {
  Button,
}
