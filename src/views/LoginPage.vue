<template>
    <div >
        <div class="super">
            <div  class="parent">
                <div class="left">
                    <img src="@/assets/img/login.jpeg" alt="" class="limg">
                </div>
                <div class="right">
                    <h1>个人空间</h1>
                    <h3>用户名</h3>
                    <input type="text" class="mode" v-model="username">
                    <h3>密码</h3>
                    <input type="password" class="mode" v-model="passwd">
                    <input type="button" value="登录" @click="login">
                </div>
            </div>

            <div class="foot_super">
                 <footDiv class="foot_div"></footDiv>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import foot from '@/components/FootPage'
Vue.component('footDiv', foot)
export default ({
  data () {
    return {
      username: '',
      passwd: ''
    }
  },
  methods: {
    login () {
      this.$router.push('/home')
    }

  }
})

</script>

<style>
     .super{
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(to right top, #f2fafe, #e2f2fc, #d4e9fb, #c9dffa, #c0d5f8, #b6d4fb, #abd4fd, #9fd4ff, #88dfff, #71e9ff, #5ff3ff, #5ffbf1);
        }

    .parent{

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1em;
        margin-bottom: 100px;
        margin-top: 180px;

        }

    .left{
        height: 500px;
        width: 350px;
        border-radius: 1em;

    }
      .limg{
        max-width: 500px;
        max-height: 500px;
        border-radius: 1em;

        }
    .right{
        box-shadow:0px 0px 10px #52ABDB;
        height: 500px;
        width: 400px;
         border-radius: 1em;
         display: flex;
         flex-direction: column;
    }
    .right input:last-child{
        margin-top: 30px;
        text-align: center;
    }

    .right input{
        border: none;
        height: 35px;
        width: 250px;
        margin-top: 5px;
        background-color:#f2fafe;
        border-radius: 1em;
        font-size: 1em;
        font: oblique;
        box-shadow: 0px 0px 10px #52ABDB;
        outline: none;
        align-self: center;

    }
    .mode{
        text-indent: 25px;
    }

    .right :last-child:hover{
        background-color: #52ABDB;
        cursor:pointer
    }

    h1{
        font-size: 26px;
        margin-top: 20px;
        color:#48ACCE;
        margin-bottom: 60px;
        font-weight: 400;
        align-self: center;
    }
    h3{
        font-size: 12px;
        margin-top: 10px;
        color:#48ACCE;
        font-weight: 400;
        align-self: center;

    }

    .foot_super{
           align-items: flex-start;

    }

</style>
