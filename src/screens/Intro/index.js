import React from 'react'
import { View,Text,StyleSheet,Image,useColorScheme,Appearance,AppState } from 'react-native'
import images from '../../assets/images'


export default function  Intro(){

    const [colorScheme,setColorScheme] = React.useState(useColorScheme())

    React.useEffect(()=>{
        Appearance.addChangeListener(onThemeChange)

        return ()=>Appearance.removeChangeListener(onThemeChange)
    },[])

    

    const onThemeChange = ({colorScheme}) => {
        alert(colorScheme)
        setColorScheme(colorScheme)
        // We need to dispatch an action to set the theme in the store
      }
    

    return(
        <View style={[styles.container,{ backgroundColor:colorScheme==='light'?'#fff':'#000'}]}>
            <Image source={images.logoIntro} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
       
    },
    introText:{
        color:'#FFC900',
        fontSize:45
    }
})