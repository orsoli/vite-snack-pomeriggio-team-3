<script>
import axios from 'axios';

export default {
    name: 'Home',
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
                    console.log(response.data.results);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }

    },

    mounted(){
        this.getPostsResulsts()
    }
};
</script>

<template>
    <h1>This is home page</h1>
</template>

<style lang='scss'></style>