import { Account, Client } from 'react-native-appwrite';


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

export const createUser = () => {
  // Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });  
}


