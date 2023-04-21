const app = Vue.createApp({
    data() {
        return {
            friends: [
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
            ]
        }
    },
});

app.component('friend-contact', {
    template: `
    <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
          </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'sahil',
                name: 'Sahil',
                phone: '1234567890',
                email: 'sahil@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
})

app.mount('#app');