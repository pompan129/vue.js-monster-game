new Vue({
  el: "#app",
  data: {
    value: 0,
    playerHealth: 100,
    monsterHealth: 100,
    started: false,
    actions: [

    ],
    monsterAttackMsg: "Monster hits player for",
    playerAttackMsg: "Player hits monster for",
    healMsg:'Player heals himself for',
  },
  computed: {
    playerHealthColor: function() {
      return this.playerHealth > 25
        ? "green"
        : this.playerHealth > 0
        ? "red"
        : "inherit";
    },
    monsterHealthColor: function() {
      return this.monsterHealth > 25
        ? "green"
        : this.monsterHealth > 0
        ? "red"
        : "inherit";
    }
  },
  methods: {
    attack: function() {
      const playerDamage = Math.floor(Math.random() * 10);
      const monsterDamage = Math.floor(Math.random() * 10);

      this.actions = [{ type: "playerAttack", hp: playerDamage },{ type: "monsterAttack", hp: monsterDamage }].concat(this.actions)

      this.playerHealth = Math.max(this.playerHealth - playerDamage, 0);
      this.monsterHealth = Math.max(this.monsterHealth - monsterDamage, 0);
      console.log(this.actions)
    },
    heal: function() {
        const playerHeal = Math.floor(Math.random() * 15);
      const monsterDamage = Math.floor(Math.random() * 10);

      this.playerHealth = Math.min(
        this.playerHealth + playerHeal,
        100
      );
      this.playerHealth = Math.max(0, this.playerHealth - monsterDamage);
      
      this.actions = [{ type: "heal", hp: playerHeal },{ type: "monsterAttack", hp: monsterDamage }].concat(this.actions)
    },
    start: function() {
      this.started = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    giveUp: function() {
      this.started = false;
    },
    styleActionItem: function(msg) {
      const backgroundColor =
        msg.type === "monsterAttack"
          ? "#F9EBEA"
          : msg.type === "playerAttack"
          ? "#EBF5FB"
          : "#EAFAF1";
      const color =
        msg.type === "monsterAttack"
          ? "#641E16"
          : msg.type === "playerAttack"
          ? "#154360"
          : "#0E6251";
      return {
        backgroundColor,
        color
      };
    },
    getMessage:function(msg){
        const message =
        msg.type === "monsterAttack"
          ? this.monsterAttackMsg
          : msg.type === "playerAttack"
          ? this.playerAttackMsg
          : this.healMsg;

          return `${message} ${msg.hp} hit points`
    }
  },
  watch: {
    playerHealth: function() {
      setTimeout(() => {
        this.value = 0;
      }, 5000);
    }
  }
});
