import React, {memo} from 'react';
import {Text} from 'react-native';

const GenericText = props => {
  const {size, style, letterSpacing, align, color, lineHeight, ...restProps} =
    props;
  return (
    <Text
      {...restProps}
      style={[
        {
          fontSize: size,
          lineHeight,
          letterSpacing,
          textAlign: align,
          color,
        },
        style,
      ]}
    />
  );
};

export default memo(GenericText);
