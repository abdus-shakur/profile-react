import axios from 'axios'
class ProfileAdapter{

    getProfile(queryParams){
        return axios.request({url:`http://localhost:8080/profile-details${queryParams}`,method:'get'});
    }

}

export default new ProfileAdapter();