import axios from '@/axios';

export default {
    methods: {
        async memeCreate(payload) {
            try {
                return await axios.post(
                    "memes/",
                      payload
                    
                  )
                  .then(() => {
          
                    this.$router.push('/');
                  })
            } catch(err) {
                console.log(err);
            }
        },
    }
}