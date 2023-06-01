import axios from "axios";


export class LocalData {


    //  getData=()=>{
    //     return axios.get('assets/data/data.json').then(result=>result.data)
    // } baraye nemunehe estefadeh az data

     getAvatars=()=>{
        return axios.get('assets/data/get_avatars.json').then(result=>result.data)
    }
    getInitData=()=>{
         return axios.get('assets/data/get_init_data.json').then(result=>result.data)
    }
    getTodolistData=()=>{
         return axios.get('assets/data/todo_data.json').then(result=>result.data)
    }

    getAccountantsData=()=>{
         return axios.get('assets/data/accountants_data.json').then(result=>result.data)
    }

}


