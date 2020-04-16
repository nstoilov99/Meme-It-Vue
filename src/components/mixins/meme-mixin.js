import axios from '@/axios';

export default {
    data: function() {
        return { 
            meme: {},
            comments:{}
         }
    },
    methods: {
        async getMeme(id) {
            try {
                const res = await axios.get(`memes/`+id);
                this.meme = res.data[0];
                this.comments = this.meme.comments
                
                
                
            } catch(err) {
                console.log(err);
            }
        }
    }
}