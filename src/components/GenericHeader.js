import React, {memo} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import images from '../assest/images/images';
import GenericText from './GenericText';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: 'center',
  },
  backButton: {
    width: 16,
    height: 16,
    marginRight: 12,
    marginTop: 15
  },
});

const GenericHeader = props => {
  const {
    title = '',
    onBack = () => {
      alert('pressing back');
    },
    style = {},
    renderRightView = () => {},
    containerStyle = {},
    titleColor = 'white',
    backButtonIcon = images.backIcon,
    backButtonStyle = styles.backButton,
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity activeOpacity={1} onPress={onBack}>
        <Image
          source={backButtonIcon}
          style={backButtonStyle}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={[{marginRight: 42, flex: 1}, style]}>
        <GenericText
          size={16}
          lineHeight={20}
          numberOfLines={2}
          color={titleColor}>
          {title}
        </GenericText>
      </View>
      {renderRightView()}
    </View>
  );
};

export default memo(GenericHeader);
