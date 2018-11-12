new Vue({
    el: '#app',
    data: {
        value: 0,
        playerHealth: 100,
        monsterHealth:100,
        started:false,
        actions:[],
        monsterAttackMsg:'Monster hits player for ',
        playerAttackMsg: 'Player hits monster for '
    },
    computed:{
        playerHealthColor:function(){
            return this.playerHealth > 25?'green':
            this.playerHealth > 0?'red': 'inherit';
        },
        monsterHealthColor:function(){
            return this.monsterHealth > 25?'green':
            this.monsterHealth > 0?'red': 'inherit';
        }
            
    },
    methods:{
        attack:function(){
            const playerDamage =  Math.floor(Math.random() * 10);
            const monsterDamage =  Math.floor(Math.random() * 10);

            this.playerHealth = Math.max(this.playerHealth - playerDamage, 0);
            this.monsterHealth = Math.max(this.monsterHealth - monsterDamage,0);
        },
        heal:function(){
            this.playerHealth=Math.min(this.playerHealth + Math.floor(Math.random() * 15), 100) 
            this.playerHealth -=  Math.floor(Math.random() * 10);
        },
        start:function(){
            this.started = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        giveUp:function(){
            this.started = false;
        }    
    },
    watch:{
        playerHealth:function(){

            setTimeout(()=>{this.value = 0;}, 5000)
        }
    }
});