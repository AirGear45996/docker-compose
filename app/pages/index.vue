<template>
    <div class="container">


            <b>test:</b>
            <pre>{{test}}</pre>

            <b>test2:</b>
            <pre>{{test2}}</pre>
    </div>
</template>

<script>
    export default {
        data: () => ({
            test2: '',
        }),
        async asyncData({store,$axios}) {
            const test = await $axios.$get('/api')
                .catch(error => {
                    console.log('error: ', error);
                });
            return {test};
        },
        async mounted() {
            this.test2 = await this.getData();
        },
        methods: {
            async getData() {
                return await this.$axios.$get('/api')
                    .catch(error => {
                        console.log('error: ', error);
                    });
            }
        }
    }
</script>

<style>

</style>
