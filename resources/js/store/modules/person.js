const state = {
    person: null
}

const getters = {
    person: state => {
        return state.person
    }
}

const mutations = {
    setPerson(state, person) {
        state.person = person
    }
}

const actions = {
    getPerson({state, commit, dispatch}, id) {
        axios.get(`/api/people/${id}`)
            .then(res => {
                commit('setPerson', res.data.data)
            })
    }
}

export default {
    state, mutations, getters, actions
}
