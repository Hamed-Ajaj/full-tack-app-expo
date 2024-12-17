import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SafeAreaContainer = ({ children, customStyles }: { children: ReactNode, customStyles?: string }) => {
  return (
    <SafeAreaView className={`bg-primary h-full px-4 ${customStyles}`}>
      {children}
    </SafeAreaView>
  )
}

export default SafeAreaContainer