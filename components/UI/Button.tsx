import {GlobalStyles} from 'constant/styles';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export type ButtonProps = {
  children: React.ReactNode;
  mode?: 'flat';
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = props => {
  const {children, mode, onPress} = props;
  return (
    <View>
      <Pressable onPress={onPress}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 4,
    padding: 8,
    margin: 2,
    minWidth: 100,
  },
  buttonText: {
    color: GlobalStyles.colors.light,
    textAlign: 'center',
  },
  flat: {
    backgroundColor: GlobalStyles.colors.transparent,
    borderColor: GlobalStyles.colors.primary200,
    borderWidth: 1,
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
});
