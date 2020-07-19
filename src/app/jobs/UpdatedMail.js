import Mail from '../lib/Mail';

export default {
    key : 'UpdatedMail',
    options: {
        delay:5000,
        priority:2
    },
    async handle({ data }){
        console.log("Enviando email update");
        const {user} = data;
        Mail.sendMail({
            from:"Me <emailDeALguem@gmail.com>",
            to: `${user.name} <${user.email}>`,
            subject:'updated account',
            html:` Ola <i>${user.name}</i> seus dados foram atualizados com sucesso`
        })

    }
}

