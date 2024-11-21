<script>
import PostCard from '../PostCard.vue';

import axios from 'axios';

export default {
    name: 'PostGallery',
    data() {
        return {
          // Variables
            postsEndPoint: 'http://127.0.0.1:8000/api/posts',
            posts: [], // Store initialized value for posts lists
        };
    },

    components: {
        PostCard,
    },

    methods: {
        getPostsResulsts(){
            // Make a request for a user with a given ID
            axios.get(this.postsEndPoint)
                .then((response)=>{
                    // handle success
                    console.log(response.data.results.data);
                    this.posts = response.data.results.data
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                    console.log('Getting Posts successfully completed')
                });
        }
    },

    mounted(){
        this.getPostsResulsts()
    }
};
</script>

<template>
    <div class="container py-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            <div class="col" v-for="post in posts" :key="post.id">
                <PostCard  :post = post />
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
</style>