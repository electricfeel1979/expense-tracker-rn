import {Ionicons} from '@expo/vector-icons';
import {GlobalStyles} from 'constant/styles';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

export type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  size: number;
  color?: string;
  onPress: () => void;
};

const IconButton: React.FC<IconButtonProps> = props => {
  const {icon, size, color = GlobalStyles.colors.light, onPress} = props;

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  buttonContainer: {
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
    borderRadius: 24,
  },
});
