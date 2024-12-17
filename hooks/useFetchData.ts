import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useFetchData = (fn: () => Promise<any>) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fn();
      setData(res);
    } catch (error: any) {
      Alert.alert("Error", error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = async () => fetchData();

  return { data, isLoading, refetch };
};

export default useFetchData;
