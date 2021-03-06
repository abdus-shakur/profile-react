import axios from 'axios'
class ProfileAdapter{

    constructor(){
        this.profileDetailUrl = "http://localhost:8080";
        this.profileDetailEndpoint = "/profile-details";
    }

    getProfile(queryParams){
        var profileUrl = String(this.profileDetailUrl)+this.profileDetailEndpoint+queryParams;
        return axios.request({url:profileUrl,method:'get'});
    }

}

export default new ProfileAdapter();