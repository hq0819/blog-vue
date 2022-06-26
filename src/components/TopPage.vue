<template>
    <div>

                <div class="top_bar">
                    <div class="comm">我的博客</div>
                    <div class="comm">我的日记</div>
                    <div class="comm">我的音乐</div>
                    <div class="comm">我的vlog</div>
                    <div id="ico"></div>

                </div>

    </div>

</template>

<style scoped>

.comm{
    height: 50px;
    width: 90px;
    color:bisque;
    align-content: center;
}

.comm{
    display: flex;
    align-items: center;
    font-size: 20px;
    align-content: center;
    line-height: 20px;
    align-content: center;
    border-radius: 12px;
}
.comm:hover{
    box-shadow: 0px 0px 10px #a4d6f1;
    cursor: pointer;
}

#ico{
     height: 42px;
     width: 42px;
    border-radius: 25px;
    border: 1px solid;
    margin-top: 3px;
}

.top_bar{
    height: 50px;
    display: flex;
    font-size: 1em;
    justify-content: space-evenly;
        box-shadow: 0 0 15px white;

}
</style>
