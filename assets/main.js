// Tramite l'API https://flynn.boolean.careers/exercises/api/random/mail
//  Generare una lista di 10 indirizzi email e stamparle in pagina con vue.

// Dopo aver recuperato correttamente 10 indirizzi email e averli stampati in pagina in modo "grezzo",  date sfogo alla vostra creatività per rendere più accattivante la grafica della pagina

var app = new Vue({
    el: '#root',
    data:{
        mail_array: [],        
    },

    mounted(){
        const self = this;

        for (var i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(new_mail) {
                self.mail_array.push(new_mail.data.response);
            });
        };
        console.log(self.mail_array);
    }

});
