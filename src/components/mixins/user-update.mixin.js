import axios from '@/axios';

export default {
    methods: {
        async userUpdate(userId, payload) {
            try {
                return await axios.put("user/" + userId, payload)
                .then(() => {
        
                  this.$cookie.delete('x-auth-token', {domain: 'localhost'});
                  this.$router.push('/login')
                })
            } catch(err) {
              console.error(err.response.data);
            }
        },

    }
}