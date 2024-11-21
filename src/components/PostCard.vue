<script>
export default {
    name: 'PostCard',
    data() {
        return {
          
        };
    },

    props: {
        post:{
            required: true,
            type: Object,
        }
    },

    components: {

    },

    methods: {

    }
};
</script>

<template>
    <div class="card">
        <img :src="post.thumb" class="card-img-top" :alt="post.title">
        <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">Author: {{ post.author }}</p>
            <p class="card-text">Dt: {{ post.date }}</p>
            <p class="card-text">{{ post.description }}</p>
        </div>
    </div>
</template>

<style lang='scss' scoped>
</style>