import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import className from '../../theme/componens/button'

class Button extends Component {
  state = {
    isPressing: false,
  }

  render() {
    const { disabled, rounded, styleName, size } = this.props
    const { isPressing } = this.state
    return (
      <View>
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={1}
          onPress={() => {}}
          onPressIn={() => this.setState({ isPressing: true })}
          onPressOut={() => this.setState({ isPressing: false })}
          style={[
            className['btn'],
            className[`btn-${size || ''}`],
            className[`btn${rounded && `-rounded${size ? `-${size}` : ''}`}`],
            className[`${styleName || 'btn'}`],
            className[`${styleName || 'btn'}:${isPressing && 'press'}`],
            className[`${styleName || 'btn'}:${disabled && 'disabled'}`],
          ]}
        >
          <Text
            style={[
              className['btn-text'],
              className[`btn-text-${size || ''}`],
              className[`${styleName || 'btn'}-text`],
              className[`${styleName || 'btn'}-text:${isPressing && 'press'}`],
              className[`${styleName || 'btn'}-text:${disabled && 'disabled'}`],
            ]}>
            Button
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}


export default () => (
  <View>
    <Button />
    <Button rounded />
    <Button styleName="btn-primary" />
    <Button styleName="btn-primary" size="sm" />
    <Button styleName="btn-primary" size="md" />
    <Button styleName="btn-primary" size="lg" />
    <Button styleName="btn-outline-primary" />
    <Button styleName="btn-outline-primary" rounded />
    <Button styleName="btn-outline-primary" rounded disabled />
    <Button styleName="btn-flat-primary" />
    <Button styleName="btn-flat-primary" rounded />
    <Button styleName="btn-flat-primary" rounded disabled />
  </View>
)