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

    //sign-up : without otp only password basedx
    // async createAccount({ email, password, name }) {
    //     try {

    //         const userAccount = await this.account.create({
    //             userId: ID.unique(),
    //             email,
    //             password,
    //             name
    //         })

    //         if (userAccount) {
    //             //login
    //               await this.login({ email, password })
    //         }

    //         return userAccount;

    //     } catch (error) {
    //         console.log("appwrite service :: createAccount error :: ", error)
    //     }
    // }

    //sign-up otp based 
    //generate OTP
    async requestOTP(email) {
        try {
            return await this.account.createEmailToken(
                ID.unique(),
                email
            )
        }
        catch (error) {
            console.log("appwrite service :: requestOTP error :: ", error)

        }
        return null;
    }
    //verify OTP
    async verifyOTP(userId, otp) {
        try {
            return await this.account.createSession(userId,otp);
        }
        catch (error) {
            console.log("appwrite service :: verifyOTP error :: ", error)
            
        }
        return null;
    }
    //setName
    async setName(name){
        try {
            return await this.account.updateName(name);
        } catch (error) {
            console.log("appwrite service :: setName error :: ", error)
            
        }
    }
    //set password (requires active session)
    async setPassword(password){
        try {
            const updatedUser =  await this.account.updatePassword(password);
            return updatedUser;
        } catch (error) {
        console.log("appwrite service :: setPassword error :: ", error)
        
    }
    return null;

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
    async logout() {
        try {
            const result = await this.account.deleteSessions();

        } catch (error) {
            console.log("appwrite service :: logout error :: ", error)

        }
    }
}

const authService = new AuthService();

export default authService;