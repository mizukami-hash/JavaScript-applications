'use strict';

{
    const btn =document.querySelector('#btn');
    const result = document.querySelector('#result');

    btn.addEventListener('click',()=>{
        const results=['大吉','中吉','凶'];
        const n = Math.floor(Math.random()*results.length);

        result.textContent=results[n];

        // if (n === 1){
        //     result.textContent='大吉';
        // }else if(n === 2){
        //     result.textContent='中吉';
        // }else{
        //     result.textContent='小吉';
        // }

        // switch(results[n]){
        //     case 0:
        //     result.textContent='大吉';
        //     break;

        //     case 1:
        //     result.textContent='中吉';
        //     break;

        //     case 2:
        //     result.textContent='凶';
        //     break;
        // }
    

    });


}