import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";
import VideoPlayer from "./VideoPlayer";
const VideoCard = ({
    video: {
        title,
        prompt,
        thumbnail,
        video,
        creator: { username, avatar },
    },
}: {
    video: {
        title: string;
        prompt: string;
        thumbnail: string;
        video: string;
        creator: {
            username: string;
            avatar: string;
        };
    };
}) => {
    const [playing, setPlaying] = useState(false);
    return (
        <View className="gap-6 mb-10">
            <View className="flex-row items-center justify-between">
                <View className="flex-row gap-2 ">
                    <Image
                        source={{ uri: avatar }}
                        className="w-12 h-12 rounded-lg border border-secondary justify-center items-center"
                        resizeMode="contain"
                    />
                    <View className="">
                        <Text className="text-white text-[14px] font-psemibold">
                            {title}
                        </Text>
                        <Text className="text-gray-100 text-[12px] font-pregular">
                            {username}
                        </Text>
                    </View>
                </View>
                <View className="pt-2">
                    <Image source={icons.menu} className="w-6 h-6" resizeMode="contain" />
                </View>
            </View>
            {playing ? (
                <View className="w-full h-[200px] rounded-xl relative justify-center items-center bg-white/10">
                    <VideoPlayer
                        videoSource={video}
                        onVideoEnd={() => setPlaying(false)}
                        resizeMode="cover"
                    />
                </View>
            ) : (
                <TouchableOpacity
                    activeOpacity={0.7}
                    className="w-full h-[200px] rounded-xl relative justify-center items-center"
                    onPress={() => setPlaying(true)}
                >
                    <Image
                        source={{ uri: thumbnail }}
                        className="w-full h-full rounded-xl mt-3"
                        resizeMode="cover"
                    />
                    <Image
                        source={icons.play}
                        className="w-12 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default VideoCard;
