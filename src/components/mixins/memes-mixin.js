import axios from '@/axios';

export default {
    data: function() {
        return { 
            memes: []
         }
    },
    methods: {
        async getAllMemes() {
            try {
                const res = await axios.get(`memes/`);
                const allMemesRes = res.data;
                for (const memeId in allMemesRes) {
                  this.memes.push({
                    memeId,
                    ...allMemesRes[memeId]
                  });
                }
            } catch(err) {
                console.log(err);
            }
        }
    }
}