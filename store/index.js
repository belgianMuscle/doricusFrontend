export const state = () => ({
    account: {}    
})

export const mutations = {
    set_account (state, account) {
        state.account = account;
    },
    clear_account (state) {
        state.account = { };
    }
}

export const actions = {
    async loadAccount({commit}) {
      let resp = await getData('/members', this.$axios)
      commit('set_account', resp.data.member)
    },
}

export const getData = async function(url, axios) {
    let response = await axios.get(url)
    return response
  }