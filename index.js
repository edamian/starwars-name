new Vue({
    el: '#app',
    data: {
        firstName: '',
        lastName: '',
        momName: '',
        city: '',
        generatedName: ''
    },
    methods: {
        generateName: function(){
            if(this.firstName.length < 0 || this.lastName.length < 0 || this.momName.length < 0 ||
            this.city.length < 0) {
                alert('Must fill all fields!');
            } else {
                var firstName = this.firstName.substring(0,3) + this.lastName.substring(0,2);
                var lastName = this.momName.substring(0,2) + this.city.substring(0,3);
                return this.generatedName = firstName + " "+ lastName;
            }
        },
        cleanControls: function(){
            this.firstName = '';
            this.lastName = '';
            this.generatedName = '';
            this.momName = '';
            this.city = '';
        }
    }
});