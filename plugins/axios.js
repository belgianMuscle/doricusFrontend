export default function ({ $axios, redirect, process }) {
    $axios.onError(error => {
        if (error.response.status === 500) {
            redirect('/')
        }
    })

    // Change URL only for client
    if (process.client) {
        this.$axios.setBaseURL('http://localhost:5000')
    }
    
    // Change URL only for server
    if (process.server) {
        this.$axios.setBaseURL('https://doricus-backend.herokuapp.com')
    }

}