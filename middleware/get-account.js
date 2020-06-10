export default async function ({ store, route, redirect }) {
    if (store.state.auth.loggedIn){ 
        console.log(route.fullPath)
        if ( store.state.account.id == null || store.state.account.id == '' ) {
            await store.dispatch('loadAccount')
            console.log('loading account')
        }
        
        if ( store.state.account.type == null || store.state.account.type == '' ){
            console.log('has no type')
            if(route.fullPath != '/account'){
                console.log('redirecting to account')
                redirect('/account')
            }
        }
        console.log('should have account')
    }else{
        store.commit('clear_account')
        console.log('clearing account')
    }
}