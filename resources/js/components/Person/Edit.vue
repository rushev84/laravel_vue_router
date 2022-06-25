<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" v-model="name" placeholder="name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="age" placeholder="age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="job" placeholder="job" class="form-control">
        </div>
        <div class="mb-3">
            <input @click.prevent="update" type="submit" value="Update" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Edit",

        data() {
            return {
                name: '',
                age: null,
                job: ''
            }
        },

        mounted() {
            this.getPerson()
        },

        methods: {
            getPerson() {
                axios.get(`/api/people/${this.$route.params.id}`)
                    .then(res => {
                        this.name = res.data.data.name
                        this.age = res.data.data.age
                        this.job = res.data.data.job
                    })
            },

            update() {
                axios.patch(`/api/people/${this.$route.params.id}`, {name: this.name, age: this.age, job: this.job})
                    .then(res => {
                        this.$router.push({ name: 'person.show', params: {id: this.$route.params.id} })
                    })
            }

        }
    }
</script>

<style scoped>

</style>
