import React from 'react';
import {TouchableOpacity, Image} from "react-native";
import settingsIcon from '../../assets/settings_icon.png';
import sizeHelper from "../../helper/SizeHelper";

const iconStyle =  { height : sizeHelper.layoutPtToPx(27) , width : sizeHelper.layoutPtToPx(28) }

const onSettingsIconClick = (props) =>{
    props.navigation.push("SettingScreen");
}

export default (props) => (
    <TouchableOpacity onPress={()=> {onSettingsIconClick(props)}}  style={{paddingRight: sizeHelper.layoutPtToPx(10)}}>
        <Image source={settingsIcon} style={iconStyle} />
    </TouchableOpacity>
);
