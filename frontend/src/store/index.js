import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Mutations = {
    TOGGLEMODAL: 'TOGGLEMODAL',
}

export default new Vuex.Store({
    state: {
        showModal: false,
        user: null,
    },
    mutations: {
        [Mutations.TOGGLEMODAL](state) {
            state.showModal = !state.showModal
        },
    },
    actions: {
        toggleModal({ commit }) {
            commit.apply(Mutations.TOGGLEMODAL)
        },
    },

    modules: {},
})
