import axios from '@/axios';

export default {
    methods: {
        async userLogin(payload) {
            try {
                return await axios.post(
                    'user/login',
                    payload,
                  )
                  .then(res => {
                    const { email, _id } = res.data;
          
                    sessionStorage.setItem("user", email);
                    sessionStorage.setItem("userId", _id);
                    
                    this.$router.push("/");
                    
                  })
            } catch(err) {
              console.error(err.response.data);
            }
        },

    }
}