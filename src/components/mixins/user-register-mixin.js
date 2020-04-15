import axios from '@/axios';

export default {
    methods: {
        async userRegister(payload) {
            try {
                return await axios.post(
                    "user/register",
                      payload
                  )
                  .then(res => {
                    const { idToken, localId } = res.data;
          
                    localStorage.setItem('x-auth-token', idToken);
                    localStorage.setItem('userId', localId);
                    
                    this.$router.push('/login');
                  })
            } catch(err) {
                if(err.response.data.indexOf("11000") != -1){
                    console.error("Email is already in use")
                }
            }
        },

    }
}