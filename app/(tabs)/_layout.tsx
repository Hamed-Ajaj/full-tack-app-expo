import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from "../../constants"

const TabIcon = ({ color, icon, focused, name }: {
  color: string,
  icon: any,
  focused: boolean,
  name: string
}) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image source={icon} resizeMode='contain' tintColor={color} className='w-6 h-6' />
      <Text className={`${focused ? 'font-psemibold' : "font-pregular"} text-sx`} style={{
        color: color
      }}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffa001",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            height: 80,
            backgroundColor: '#161622',
            borderTopColor: 'transparent',
            borderTopWidth: 1,
            position: 'absolute',
            padding: 10,
          },
        }}
      >
        <Tabs.Screen name='home' options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon color={color} icon={icons.home} focused={focused} name='Home' />
        }} />
        <Tabs.Screen name='bookmark' options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon color={color} icon={icons.bookmark} focused={focused} name='Bookmark' />
        }} />
        <Tabs.Screen name='create' options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon color={color} icon={icons.plus} focused={focused} name='Create' />
        }} />
        <Tabs.Screen name='profile' options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => <TabIcon color={color} icon={icons.profile} focused={focused} name='Profile' />
        }} />
      </Tabs>
    </>
  )
}

export default TabsLayout