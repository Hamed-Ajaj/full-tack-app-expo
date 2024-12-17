import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import useFetchData from '@/hooks/useFetchData';
import { getLatestPosts } from '@/lib/appwrite';
import * as Animatable from 'react-native-animatable';


const TrendingSection = () => {
    const { data: latestPosts } = useFetchData(getLatestPosts);
    const [activeItem, setActiveItem] = useState(null);


    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={latestPosts}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
                <TrendingItem activeItem={activeItem} item={item} />
            )}
        />
    )
}
const TrendingItem = ({ activeItem, item }) => {
    return (
        <Animatable.View animation="fadeInRight" duration={500} delay={100}>
            <Text className="text-white text-3xl">{item.id}</Text>
        </Animatable.View>
    )
}
export default TrendingSection