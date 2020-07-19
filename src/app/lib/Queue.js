import Queue from 'bull';
import redisConfig from '../../config/redis';
import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, {redis:  redisConfig}),
    name: job.key,
    handle: job.handle,
    options: job.options
}));

export default {
    queues,
    add(name, data){
        const queue = this.queues.find(queue => queue.name === name);
        // console.log("adicionando na fila");
        return  queue.bull.add(data,queue.options);
    },
    process(){
        return this.queues.forEach(queue => {
            // console.log("execuatndo processo");
            queue.bull.process(queue.handle);
            queue.bull.on('falied',(job,err)=>{
                console.log('Job falied', queue.key, job.data);
                console.log(err);
            });
        });
    }
}