<template>
    <div>

        <div class="home_super">
                  <div class="menu">

                    <div class="menu_container" >

                        <div class="mu" v-for="item in titles" :key="item.id">{{item.title}}</div>

                    </div>

                  </div>

            <div class="body_super">
                  <topBar></topBar>

                <div class="content"></div>

            </div>

        </div>

    </div>

</template>

<script>
import Vue from 'vue'
import TopPage from '@/components/TopPage'
Vue.component('topBar', TopPage)
export default ({

  data () {
    return {
      titles: [{
        id: 1,
        title: 'go入门第1张'
      },
      {
        id: 1,
        title: 'go入门第2张'
      },
      {
        id: 1,
        title: 'go入门第3张'
      },
      {
        id: 1,
        title: 'go入门第4张'
      },
      {
        id: 1,
        title: 'go入门第5张'
      },
      {
        id: 1,
        title: 'go入门第6张'
      }

      ]

    }
  }

})

</script>

<style scoped>

.home_super{
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(to right top, #91a2a3, #829a9f, #74929d, #69899c, #61809a, #5b7e9a, #547d9b, #4c7b9b, #3f819b, #368799, #358c93, #3d918b);

}

.body_super{
    height: 100vh;
    width: 84vw;

}

.menu{
    height: 100vh;
    width: 16vw;
    box-shadow: 0 0 15px white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu_container{
    width: 12vw;
    height: 80vh;
    max-height: 80vh;
}

.menu_container div{
     width: 12vw;
     height: 5vh;
     border-radius: 4px;
     display: flex;
     justify-content: center;
     align-items: center;
     color:darkgray
}
.menu_container div:hover{
    background-color: #91a2a3;
    cursor: pointer;
}
</style>
