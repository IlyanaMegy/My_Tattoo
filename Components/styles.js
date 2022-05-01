// import styled from 'styled-components'
import {View, Text, Image} from 'react-native'
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight;


export const Colors = {
    primary: "#ffffff",
    secondary: '#212435',
    tertiary: '#1d262a',

}
const {primary, secondary, tertiary} = Colors;

export const StyleContainer = styled.View`
    flex:1;
    padding: 25px;
    padding-top: ${StatusBarHeight +10}px;
    background-color: ${primary};
`

export const InnerContainer = styled.View`
    flex:1;
    width: 100%;
    align-items : center;
`

export const PageLogin = styled.image`
    width: 250px;
    height: 200px;
`

export const PageTitle = styled.Text`
    font-size: 36px;
    text-align:center;
    font-weight: bold;
    color: ${tertiary};
    padding: 10px;
`