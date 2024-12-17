import { Alert } from "react-native";
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.hamed.aora",
  projectId: "675feb5200101b871749",
  databaseId: "675fec710039977def19",
  userCollectionId: "675fecfb00296d77caef",
  videoCollectionId: "675fed2c00334aca66ed",
  bucketId: "675ff163001265a58a80",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);
// instances
const account = new Account(client);
const avatar = new Avatars(client);
const db = new Databases(client);

export const createUser = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const newAcc = await account.create(ID.unique(), email, password, username);
    if (!newAcc) throw new Error("Failed to create user");
    const avatarUrl = avatar.getInitials(username);

    await loginUser(email, password);
    const newUser = await db.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAcc.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (err: any) {
    Alert.alert("Error", err.message);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error: any) {
    Alert.alert("Error", error.message);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw new Error("user not found");

    const currentUser = await db.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );
    if (!currentUser) throw new Error("user not found");

    return currentUser.documents[0];
  } catch (error: any) {
    Alert.alert("Error", error.message);
  }
};

export const getPosts = async () => {
  try {
    const posts = await db.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.videoCollectionId
    );
    return posts.documents;
  } catch (error: any) {
    Alert.alert("Error", error.message);
  }
};
export const getLatestPosts = async () => {
  try {
    const posts = await db.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.videoCollectionId,
      [Query.orderDesc("$createdAt"), Query.limit(7)]
    );
    return posts.documents;
  } catch (error: any) {
    Alert.alert("Error", error.message);
  }
};
