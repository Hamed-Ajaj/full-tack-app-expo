import { View, Text, Image } from 'react-native'
import { images } from "../constants"
import { EmptyState as EmptyStateTypes } from '../types/types'
import CustomButton from './CustomButton'
import { router } from 'expo-router'

const EmptyState = ({ title, subtitle }: EmptyStateTypes) => {
    return (
        <View className='justify-center items-center gap-3 px-4'>
            <Image source={images.empty} resizeMode='contain' className='w-[270px] h-[215px]' />
            <Text className='text-white text-[20px] font-psemibold text-center'>{title}</Text>
            <Text className='text-gray-100 font-pmedium text-center'>{subtitle}</Text>
            <CustomButton desc='Create Video' handlePress={() => router.push('/create')} customStyles='my-5 w-full' />
        </View>
    )
}

export default EmptyState