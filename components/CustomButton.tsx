import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({desc,handlePress,customStyles,textStyles,isLoading}:{
    desc:string
    handlePress?:()=>void
    customStyles?:string
    textStyles?:string
    isLoading?:boolean
}) => {
  return (
    <TouchableOpacity onPress={handlePress} disabled={isLoading} activeOpacity={0.7}  className={`bg-secondary  py-3 min-h-[62px] items-center justify-center rounded-xl ${customStyles} ${isLoading?"opacity-50":""}`}>
        <Text className={`text-black text-[16px] text-center font-psemibold ${textStyles}`}>{desc}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton