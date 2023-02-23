export namespace IUserCard{
    export interface UserInfo{
       id: string,
       login: string,
       avatar_url: string,
       created_at: Date,
       name: string,
       location: string,
       twitter_username: string,
       blog: string,
       public_repos: number,
       followers: number,
       following: number 
    }
}