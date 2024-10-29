import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';


export const appwriteConfig = {
    endpoint : "https://cloud.appwrite.io/v1",
    platform : "com.dessy.aora",
    projectId : "672035bd00183e9d4e5f",
    databaseId : "672039630024df8d771e",
    userCollectionId: "672039d4003b1425f158",
    videoCollectionId: "67203a93001329e1a33b",
    storageId: "67203e92003be130b171"
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform) 
;

const account = new Account(client);
const avatar = new Avatars(client)
const databases = new Databases(client);

export const createUser = async (username, email, password) => {
  // Register User
try{
  const newAccount = await account.register(
    ID.unique(),
    username,
    email,
    passowrd
  )

  if(!newAccount) throw Error

  const avatarUrl = avatar.getInitialsAvatar(username);

  await signIn(email,password)
  const newUser = databases.createDocument(
    appwriteConfig.userCollectionId,
    appwriteConfig.databaseId,
    ID.unique(),
    {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
    }

)
return newUser;

}catch(error){
    console.log("Error:",error);
    throw new Error("Failed to create user");
}
}

export const signIn = async(email,password) => {
    try{
      const session = await account.createEmailSession(email, password);
      return session;
    }catch(error){
        console.log("Error:",error);
        throw new Error("Failed to sign in");
    }
}


