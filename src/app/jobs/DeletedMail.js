import Mail from '../lib/Mail';

export default {
    key : 'DeletedMail',
    options: {
        delay:5000,
        priority:1
    },
    async handle({ data }){
        console.log("Enviando email delete")
        const {user} = data;
        Mail.sendMail({
            from:"Me <emailDeALguem@gmail.com>",
            to: `${user.name} <${user.email}>`,
            subject:'deleted account',
            html:` Sua conta foi deletada`
        })

    }
}

