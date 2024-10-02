import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { extendTheme, Icon, NativeBaseProvider, useColorMode } from "native-base";
import  AntDesign  from "@expo/vector-icons/AntDesign";
const config = {
    dependencies: {
        'linear-gradient': LinearGradient
    }
};
 export const ThemeProvider=({children}:any)=>{
   const {colorMode}=useColorMode()
    const theme = extendTheme({
     colors: {
         primary: {
         
             // box: `rgba(${colors.darkbox},0.3)`,
             boxbutton: "#D72E34",
             // boxsolid: `rgba(${[...colors.background]},1)`,
             // bordersecondary: `${type2}`,
             // boxsolidtext: `${colors.darkboxtext}`,
             // backgroundtext: `${type3}`,
             // hovercolor: `${type}`,
             // darkbox: `rgba(0,0,0,0.2)`,
             // toastbg:`rgba(0,0,0,0.7)`,
             // primarycolor : `rgba(${[...rgb]},1)`,
             // boxTransparent: `rgba(${colors.box},0.5)`,
             text:"#1C244B",
             textRed:"#D72E34",
             bordercolor:"#DEE3ED",
             bg:"#F3F5F8",
             bg_2:"#F2F5F8",
             placeholderColor:"#B4B6BE",
             ratingColor:"#F7D348",
             blulish:"#324A6D"
             // popupbordercolor: `rgba(${[..._border]},0.4)`,
             // secondary: event?.settings?.secondary_color,
             // bdColor: 'rgba(148,160,183,0.64)',
             // bdBox: `rgba(${colors.darkbox},1)`,
         },
         secondary: {
             // 50: event?.settings?.secondary_color,
             // 100: event?.settings?.secondary_color,
             // 200: event?.settings?.secondary_color,
             // 300: event?.settings?.secondary_color,
             // 400: event?.settings?.secondary_color,
             // 500: event?.settings?.secondary_color, 
             // 600: event?.settings?.secondary_color ,
             // 700: event?.settings?.secondary_color ,
             // 800: event?.settings?.secondary_color ,
             // 900: event?.settings?.secondary_color ,
             text:"#E8EAED",
         },
         amber: {
             400: '#d97706',
         },
     },
   
     fontConfig: {
         Poppins: {
           100: {
             normal: 'Poppins-Thin',
             italic: 'Poppins-Thin', // Italic fallback, adjust if an actual italic font is added
           },
           200: {
             normal: 'Poppins-ExtraLight',
             italic: 'Poppins-ExtraLight', // Italic fallback
           },
           300: {
             normal: 'Poppins-Light',
             italic: 'Poppins-Light', // Italic fallback
           },
           400: {
             normal: 'Poppins-Regular',
             italic: 'Poppins-Regular', // Italic fallback
           },
           500: {
             normal: 'Poppins-Medium',
             // No italic available; use default or provide a fallback if needed
           },
           600: {
             normal: 'Poppins-SemiBold',
             italic: 'Poppins-SemiBoldItalic', // Italic fallback
           },
           700: {
             normal: 'Poppins-Bold',
             // No italic available; use default or provide a fallback if needed
           },
           800: {
             normal: 'Poppins-ExtraBold',
             italic: 'Poppins-ExtraBold', // Italic fallback
           },
           900: {
             normal: 'Poppins-Black',
             italic: 'Poppins-Black', // Italic fallback
           },
         }
       },
     
       // Make sure values below matches any of the keys in `fontConfig`
       fonts: {
         heading:'Poppins',
         body: 'Poppins',
         mono: 'Poppins',
       },
     components: {
         Heading: {
             defaultProps: { fontSize: '2xl', fontWeight: '600', color: 'primary.text' },
         },
         Text: {
             defaultProps: { fontSize: 'md', fontWeight: 'normal', color: 'primary.text',
             },
             
         },
         TextArea:{
           defaultProps:{
             fontSize: 'md',
             fontfamily:"body",
             rounded:"lg",
             placeholderTextColor:"primary.placeholderColor",
           },
         },
         Button: {
             defaultProps: {
                 size: 'lg', bg: 'primary.boxbutton',
                 // _hover: { bg: event?.settings?.primary_color,_text:{color:'primary.hovercolor'} },
                 _text: { color: 'white',fontweight:"semibold",fontsize:"2xl" },
                 // _pressed: { bg: `${colors.secondary}`, color: '#fff',_text:{color:'primary.text'} }
             },
             baseStyle: () => ({
               bg: colorMode === 'dark' ? 'background.dark' : 'primary.boxbutton', 
               text:colorMode === 'dark' ? 'black' : 'primary.boxbutton', 
             }),
         },
         Checkbox: {
             defaultProps: {
                 colorScheme: 'secondary',
                 bg: 'white',
                 color: 'white',
                 _checked: {
                     _icon: {color: 'white'}
                 }
               
             },
         },
         Select: {
             defaultProps: {
                 dropdownIcon: <Icon as={AntDesign} name='caretdown' mr={3} />
             }
         },
         Tooltip: {
             defaultProps: {
                 colorScheme: 'secondary',
                 bg: 'primary.boxsolid',
                 color:"primary.text",
                 px:5,
                 maxWidth:"230px",
                 w:"100%",
                 rounded:'10px',
                 openDelay:300
                 
             }
         },
 
         Radio: {
             defaultProps: {
                 colorScheme: 'secondary',
                 bg: 'white'
             }
         },
       
         Input: {
             
             defaultProps: {
                 fontSize: 'md',
                 bg: 'primary.darkbox',
                 borderColor: 'primary.darkbox',
                 placeholderTextColor:"primary.placeholderColor",
                 _focus: {
                     // borderColor: `rgb(${colors.darkbox})`,
                 },
             },
             baseStyle: {
                 _light: {
                     placeholderTextColor: 'rgba(0,0,0,.5)'
                 },
                 _dark: {
                     placeholderTextColor: 'rgba(255,255,255,.5)'
                 },
             },
         }
     },
     config: {
       config: {
         initialColorMode: 'dark',
         useSystemColorMode: true, // Enables automatic switching based on system preference
       },
     },
     });
  return(
    <>
    <NativeBaseProvider theme={theme}>
     {children} 
    </NativeBaseProvider>
    </>
  )
 }

  