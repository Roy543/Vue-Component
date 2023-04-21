const app = Vue.createApp({
    data(){
        return{
            friends:[
                {
                    id: 'sahil',
                    name: 'Sahil',
                    phone: '1234567890',
                    email: 'sahil@localhost.com'
                },
                {
                    id: 'vivek',
                    name: 'Vivek',
                    phone: '0987654321',
                    email: 'vivek@localhost.com'
                }
            ],
            detailsAreVisible: false,
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');