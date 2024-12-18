import { View, Text } from 'react-native'
import React from 'react'
import { useVideoPlayer, VideoView } from 'expo-video'

const VideoPlayer = ({ videoSource, onVideoEnd, resizeMode }: {
    videoSource: string,
    onVideoEnd: () => void,
    resizeMode?: string
}) => {
    const player = useVideoPlayer(videoSource, player => {
        player.loop = false;
        player.play();
        player.addListener("playToEnd", onVideoEnd)

    });
    return (
        <VideoView
            className="w-full h-full rounded-[35px] "
            player={player}
            allowsFullscreen
            contentFit={resizeMode || "contain"}
            style={{ flex: 1 }}
        />
    )
}

export default VideoPlayer