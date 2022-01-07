const app = Vue.createApp({
   data() {
       return {
           friends: [
               { id: 'sakthi', 
               name: 'sakthi vel', 
               phone: '7339195364', 
               email: 'velsakthis5301@gmail.com'},
               { id: 'vetri', 
               name: 'vetri mass', 
               phone: '7094744066', 
               email: 'vetrivd007@gmail.com'}
           ]
       };
   }
});

app.component('friend-contact', {
    template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
    `,
    data() {
        return { detailsAreVisible: false,
        friend: {
             id: 'sakthi', 
            name: 'sakthi vel', 
            phone: '7339195364', 
            email: 'velsakthis5301@gmail.com',
        },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
           }
    }
});

app.mount('#app');