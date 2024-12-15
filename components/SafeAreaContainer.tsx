import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SafeAreaContainer = ({children} : {children:ReactNode}) => {
  return (
    <SafeAreaView className=' bg-primary h-full'>
        {children}
    </SafeAreaView>
  )
}

export default SafeAreaContainer