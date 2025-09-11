import conf from "../config/conf";
import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client();
    account;


    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)

    }

    //sign-up
    async createAccount({ email, password, name }) {
        try {

            const userAccount = await this.account.create({
                userId: ID.unique(),
                email,
                password,
                name
            })

            if (userAccount) {
                //login
                  await this.login({ email, password })
            }
           
            return userAccount;
            
        } catch (error) {
            console.log("appwrite service :: createAccount error :: ", error)
        }
    }

    //login
    async login({ email, password }) {
        try {
            return this.account.createEmailPasswordSession({
                email,
                password
            });
        } catch (error) {
            console.log("appwrite service :: login error :: ", error)
            
        }
        return null;
    }
    
    
    //check if logged in
    async getCurrentUser() {
        
        try {
            const user = await this.account.get();
            // Logged in
            return user;
        } catch (error) {
            // Not logged in
            console.log("appwrite service :: getCurrentUser error :: ", error)
        }
        return null;
    }
    
    //log-out
    async logout(){
        try {
            const result = await this.account.deleteSessions();
            
        } catch (error) {
            console.log("appwrite service :: logout error :: ", error)
            
        }
    }
}

const authService = new AuthService();

export default authService;