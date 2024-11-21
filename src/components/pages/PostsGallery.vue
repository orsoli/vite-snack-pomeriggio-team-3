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
            links: [], // Store initialized value for Links pages
            startPage: 1, // Post list initial Page number
        };
    },

    components: {
        PostCard,
    },

    methods: {
        getPostsResulsts(currentPage){
            // Make a request for a user with a given ID
            axios.get(this.postsEndPoint, {
                params: {
                    page: currentPage,
                }
            })
                .then((response)=>{
                    // handle success
                    console.log(response.data.results);
                    this.posts = response.data.results.data
                    this.links = response.data.results.links
                    console.log(this.links)
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
        this.getPostsResulsts(1)
    }
};
</script>

<template>
    <div class="container py-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-3">
            <div class="col flex-grow-1" v-for="post in posts" :key="post.id">
                <PostCard  :post = post />
            </div>
        </div>
        <!-- Pagination -->
        <nav>
            <ul class="pagination">
                <li class="page-item" v-for="(link,i) in links" :key="i">
                    <button class="page-link" v-if="!isNaN(link.label)" @click="getPostsResulsts(link.label)">
                        <span aria-hidden="true">{{ link.label }}</span>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang='scss' scoped>
</style>