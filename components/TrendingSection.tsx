import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    Image,
} from "react-native";
import React, { useRef, useState } from "react";
// import { Video, ResizeMode } from 'expo-av';
import { useVideoPlayer, VideoView } from 'expo-video';


import * as Animatable from "react-native-animatable";
import { icons } from "@/constants";
import EmptyState from "./EmptyState";
import VideoPlayer from "./VideoPlayer";

const TrendingSection = ({ latestPosts }: { latestPosts: any }) => {
    const [activeItem, setActiveItem] = useState(latestPosts[0]?.$id);
    console.log(latestPosts[2]?.video);
    const viewabkeItemsChanged = ({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setActiveItem(viewableItems[0].key);
        }
    };
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={latestPosts}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => (
                <TrendingItem activeItem={activeItem} item={item} />
            )}
            onViewableItemsChanged={viewabkeItemsChanged}
            viewabilityConfig={{
                itemVisiblePercentThreshold: 70,
            }}
            contentOffset={{ x: 170, y: 0 }}
            ListEmptyComponent={() => (
                <EmptyState
                    title="No videos found"
                    subtitle="Create a video to get started"
                />
            )}
        />
    );
};
const TrendingItem = ({ activeItem, item }: any) => {
    const [playing, setPlaying] = useState(false);
    const videoSource = item.video;
    const zoomIn = {
        0: {
            scale: 0.9,
        },
        1: {
            scale: 1,
        },
    };

    const zoomOut = {
        0: {
            scale: 1,
        },
        1: {
            scale: 0.9,
        },
    };


    return (
        <Animatable.View
            className="mr-5"
            animation={activeItem === item.$id ? zoomIn : zoomOut}
            duration={500}
        >
            {playing ? (
                <View className="w-52 h-72 rounded-[35px] mt-3 shadow-lg shadow-black/40 overflow-hidden bg-white/10">
                    <VideoPlayer videoSource={videoSource} onVideoEnd={() => setPlaying(false)} />
                </View>
            ) : (
                <TouchableOpacity
                    activeOpacity={0.7}
                    className="relative justify-center items-center"
                    onPress={() => setPlaying(true)}
                >
                    <ImageBackground
                        source={{ uri: item.thumbnail }}
                        className="w-52 h-72 rounded-[35px] my-5 shadow-lg shadow-black/40 overflow-hidden"
                        resizeMode="cover"
                    />
                    <Image
                        source={icons.play}
                        className="w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
        </Animatable.View>
    );
};
export default TrendingSection;
