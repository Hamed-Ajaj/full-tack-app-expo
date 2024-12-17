import { View, Text, ScrollView, Image, FlatList, RefreshControl, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import SafeAreaContainer from "@/components/SafeAreaContainer";
import { useGlobalContext } from "@/context/authContext";
import { images } from "../../constants"
import { StatusBar } from "expo-status-bar";
import SearchInput from "@/components/SearchInput";
import TrendingSection from "@/components/TrendingSection";
import EmptyState from "@/components/EmptyState";
import { getPosts } from "@/lib/appwrite";
import useFetchData from "@/hooks/useFetchData";
import VideoCard from "@/components/VideoCard";

const HomeScreen = () => {
  const { user } = useGlobalContext();
  const { data: posts, isLoading, refetch } = useFetchData(getPosts);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  console.log("posts", posts);

  const onRefresh = async () => {
    setRefreshing(true);

    await refetch();

    setRefreshing(false)
  };
  return (
    <SafeAreaContainer >
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingInline: 4 }}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View className="w-full  py-8  space-y-6">
            <View className="w-full flex-row items-center justify-between gap-2">
              <View className="gap-1">
                <Text className="text-[14px] font-pmedium text-gray-100">
                  Welcom Back
                </Text>
                <Text className="text-[24px] font-psemibold text-white">
                  {user.username.toUpperCase()}
                </Text>
              </View>
              <View>
                <Image source={images.logoSmall} className="w-[35px]  h-[35px]" resizeMode="contain" />
              </View>
            </View>
            <SearchInput placeholder="Search for a video topic" value={search} handleChangeText={(e) => setSearch(e)} />

            <View className="w-full flex-1 pt-12 pb-8 ">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>
              <TrendingSection />
            </View>
          </View>
        )}
        ListEmptyComponent={() => <EmptyState title="No Videos Found" subtitle="Be The First To upload a video" />}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#7B7B8B"]}
          />
        }
      />
      <StatusBar backgroundColor={"#161622"} style={'light'} />
    </SafeAreaContainer>
  );
};

export default HomeScreen;
