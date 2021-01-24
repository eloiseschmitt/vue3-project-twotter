export const UserModule = {
    namespaced: true,

    state: {
        user: null
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },

    action: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        }
    }
}