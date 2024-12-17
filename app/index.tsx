
import {  Image, ScrollView, StatusBar, Text, View } from 'react-native'
import {images} from "../constants"
import CustomButton from '@/components/CustomButton'
import { Redirect, router, SplashScreen } from 'expo-router'
import SafeAreaContainer from '@/components/SafeAreaContainer'
import { useGlobalContext } from '@/context/authContext'

const RootLayout = () => {
  const{isLoading,isLoggedIn} = useGlobalContext();
  if(isLoading) return <Text>Loading...</Text> ;
  if(!isLoading&&isLoggedIn) return <Redirect href='/home'/>

  return (
    <SafeAreaContainer>
        <ScrollView contentContainerStyle={{height:"100%"}}>
          <View className='w-full  items-center min-h-[85vh] py-4 px-4 '>
            <Image source={images.logo} className='w-[130px] h-[85px]' resizeMode='contain'/>
            <Image source={images.cards} className='max-w-[380px] h-[300px] mt-5' resizeMode='contain'/>
            <View className='relative mt-5'>
              <Text className='font-psemibold text-[30px] text-center text-white'>
                Discover Endless Possibilities with <Text className='text-secondary-200'>Aora</Text>
              </Text>
              <Image source={images.path} className='w-[136px] h-[15px] absolute -right-8 bottom-0' resizeMode='contain' />
            </View>
              <Text className='text-gray-100 font-pregular text-[14px] mt-7 text-center'>Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
              <CustomButton desc='Continue With Email' customStyles='w-full mt-[30px]' handlePress={()=>router.push('/sign-in')}/>
          </View>
        </ScrollView>
        <StatusBar backgroundColor={"#161622"} barStyle={'light-content'} />
    </SafeAreaContainer>
  )
}

export default RootLayout
