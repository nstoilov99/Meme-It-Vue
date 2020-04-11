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
                const userId = sessionStorage.getItem("userId")
                const res = await axios.get(`user/`+userId );
                
                const allMemesRes = res.data[0].memes;
console.log(allMemesRes);

                
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