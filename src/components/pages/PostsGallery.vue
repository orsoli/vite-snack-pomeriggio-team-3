<script>
import axios from 'axios';

export default {
    name: 'posts.gallery',
    data() {
        return {
          // Variables
            postsEndPoint: 'http://127.0.0.1:8000/api/posts',
            posts: [], // Store initialized value for posts lists
        };
    },

    components: {

    },

    methods: {
        getPostsResulsts(){
            // Make a request for a user with a given ID
            axios.get(this.postsEndPoint)
                .then(function (response) {
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
</template>

<style lang='scss' scoped>
</style>