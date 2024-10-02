import { Keyboard, TouchableWithoutFeedback,View } from "react-native";

interface DismissKeyboardHOCProps {
    children: React.ReactNode;
  }
  
  const DismissKeyboardHOC = <P extends {}>(Comp: React.ComponentType<P>) => {
    return ({ children, ...props }: DismissKeyboardHOCProps & P) => (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Comp {...props as unknown as P}> 
          {children}
        </Comp>
      </TouchableWithoutFeedback>
    );
  };
  
  export const DismissKeyboardView = DismissKeyboardHOC(View);