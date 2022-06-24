<template>
    <div>

        <table class="table">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Edit</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <tr>
                    <th scope="row">{{ person.name }}</th>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td>
                        <router-link :to="{ name: 'person.edit', params: { id: person.id } }">Edit</router-link>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        name: "Index",

        data() {
            return {
                people: null
            }
        },

        mounted() {
            this.getPeople()
        },

        methods: {
            getPeople() {
                axios.get('/api/people/')
                    .then(res => this.people = res.data)
            }
        }
    }
</script>

<style scoped>

</style>
