new Vue({
    el: '#app',
    data: {
        value: 0,
        playerHealth: 100,
        monsterHealth:100,
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
            this.playerHealth -=  Math.floor(Math.random() * 10);
            this.monsterHealth -=  Math.floor(Math.random() * 10);
        }        
    },
    watch:{
        playerHealth:function(){

            setTimeout(()=>{this.value = 0;}, 5000)
        }
    }
});