import conf from "../config/conf";
import { Client, Databases, TablesDB, Storage, Query, ID } from "appwrite"

export class Service {
    client = new Client();
    databases;
    tablesDB;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
        // this.tablesDB = new TablesDB(this.client);
    }


    //Blog Services

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,   //unique ID
                //data
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.log("appwrite service :: createPost error :: ", error)

        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }

            )

        } catch (error) {
            console.log("appwrite service :: updatePost error :: ", error)

        }
    }

    async deletePost(slug) {

        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        }

        catch (error) {
            console.log("appwrite service :: deletePost error :: ", error)
            return false;

        }
    }

    async getPost(slug) {
        console.log("getpost slug", slug);
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );

        }

        catch (error) {
            console.log("appwrite service :: getPost error :: ", error)
            return false;

        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {

        try {

            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );

        }

        catch (error) {
            console.log("appwrite service :: getPosts error :: ", error)
            return false;

        }
    }


    //Image/File Services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("appwrite service :: uploadFile error :: ", error)
            return false;
        }
    }
    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("appwrite service :: deleteFile error :: ", error)
            return false;
        }
    }
    getFilePreview(fileId) {

        const result = this.bucket.getFileView({
            bucketId:conf.appwriteBucketId,
            fileId
        });
        console.log(result);
        return result;
    }
}

const service = new Service();

export default service;