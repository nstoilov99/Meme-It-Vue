import axios from '@/axios';

export default {
    methods: {
        async createComment(payload) {
            try {
                return await axios.put(
                    '/memes/detail/'+this.$route.params.id,
                    payload
                  )
                  .then(res => {
                      console.log(res);
                      
                  })
            } catch(err) {
                console.log(err);
            }
        },
    }
}