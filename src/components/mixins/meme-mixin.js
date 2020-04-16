import axios from '@/axios';

export default {
    data: function() {
        return { 
            meme: {}
         }
    },
    methods: {
        async getMeme(id) {
            try {
                const res = await axios.get(`memes/`+id);
                this.meme = res.data[0];
                
            } catch(err) {
                console.log(err);
            }
        }
    }
}