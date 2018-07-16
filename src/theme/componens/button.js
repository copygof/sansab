// theme button
import { Button } from '../variables'

const className = {}

const commonColorNormal = {
  button: {
    backgroundColor: Button.BG_COLOR,
    borderColor: Button.BORDER_COLOR,
  },
  text: {
    color: Button.Text.COLOR,
  }
}

const commonColorPress = {
  button: {
    backgroundColor: Button.PRESS.BG_COLOR,
    borderColor: Button.PRESS.BORDER_COLOR,
  },
  text: {
    color: Button.Text.PRESS.COLOR,
  }
}

const commonColorDisable = {
  button: {
    backgroundColor: Button.DISABLED.BG_COLOR,
    borderColor: Button.DISABLED.BORDER_COLOR,
  },
  text: {
    color: Button.Text.DISABLED.COLOR,
  }
}

// Base button style

className['btn'] = {
  justifyContent: 'center',
  alignItems: 'center',
  width: Button.WIDTH,
  height: Button.HEIGHT,
  borderWidth: Button.BORDER_WIDTH,
  ...commonColorNormal.button,
}

className['btn:press'] = {
  ...commonColorPress.button,
}

className['btn:disabled'] = {
  ...commonColorDisable.button,
}

className['btn-text'] = {
  fontSize: Button.Text.FONT_SIZE,
  // fontFamily: Button.Text.FONT_FAMILY,
  ...commonColorNormal.text,
}

className['btn-text:press'] = {
  ...commonColorPress.text,
}

className['btn-text:disabled'] = {
  ...commonColorDisable.text,
}
// -----------------------
className['btn-rounded'] = {
  borderRadius: Button.HEIGHT / 2
}
className['btn-rounded-sm'] = {
  borderRadius: Button.SM.HEIGHT / 2
}
className['btn-rounded-md'] = {
  borderRadius: Button.MD.HEIGHT / 2
}
className['btn-rounded-lg'] = {
  borderRadius: Button.LG.HEIGHT / 2
}
className['btn-sm'] = {
  width: Button.SM.WIDTH,
  height: Button.SM.HEIGHT,
}
className['btn-md'] = {
  width: Button.MD.WIDTH,
  height: Button.MD.HEIGHT,
}
className['btn-lg'] = {
  width: Button.LG.WIDTH,
  height: Button.LG.HEIGHT,
}
className['btn-text-sm'] = {
  fontSize: 15
}
className['btn-text-md'] = {
  fontSize: 16
}
className['btn-text-lg'] = {
  fontSize: 24
}
// -----------------------

// Theme primary
className['btn-primary'] = {
  backgroundColor: '#08b4c0',
  borderColor: '#08b4c0',
}

className['btn-primary:press'] = {
  backgroundColor: '#00a5b0',
  borderColor: '#00a5b0',
}
className['btn-primary:disabled'] = {
  ...commonColorDisable.button,
}
className['btn-primary-text'] = {
  ...commonColorNormal.text,
}

className['btn-primary-text:press'] = {
  ...commonColorPress.text,
}

className['btn-primary-text:disabled'] = {
  ...commonColorDisable.text,
}
// -----------------------
// Theme outline-primary
className['btn-outline-primary'] = {
  backgroundColor: '#FFFFFF',
  borderColor: '#00a5b0',
}
className['btn-outline-primary:press'] = {
  backgroundColor: '#00a5b0',
  borderColor: '#00a5b0',
}
className['btn-outline-primary:disabled'] = {
  ...commonColorDisable.button,
}

className['btn-outline-primary-text'] = {
  color: '#00a5b0'
}
className['btn-outline-primary-text:press'] = {
  ...commonColorPress.text,
}
className['btn-outline-primary-text:disabled'] = {
  ...commonColorDisable.text,
}
// -----------------------
// Theme flat-primary
className['btn-flat-primary'] = {
  backgroundColor: 'transparent',
  borderColor: 'transparent',
}
className['btn-flat-primary:press'] = {
  backgroundColor: '#fafafa',
  borderColor: '#fafafa',
}
className['btn-flat-primary:disabled'] = {
  backgroundColor: 'transparent',
  borderColor: 'transparent',
}

className['btn-flat-primary-text'] = {
  color: '#00a5b0'
}
className['btn-flat-primary-text:press'] = {
  color: '#00a5b0'
}
className['btn-flat-primary-text:disabled'] = {
  color: '#cccccc'
}
// -----------------------
// TODO padding

export default className
