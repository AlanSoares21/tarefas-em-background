import Mail from '../lib/Mail';

export default {
    key : 'RegistrationMail',
    options: {
        delay:5000,
        priority:3
    },
    async handle({ data }){
        const {user} = data;
        Mail.sendMail({
            from:"Me <emailDeALguem@gmail.com>",
            to: `${user.name} <${user.email}>`,
            subject:'Create account',
            html:` Ola <i>${user.name}</i> bem vindo`
        })

    }
}

