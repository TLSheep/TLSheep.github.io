<template>
  <div class="container">
    <div class="small_container left" >
        <img class="pic" src="/src/assets/imgs/1.png">
        <div class="items">
            <div class="title">Left</div>
            <div class="btn">S G</div>
        </div>
    </div>
    <div class="small_container right" >
        <img class="pic" src="/src/assets/imgs/2.png">
        <div class="items">
            <div class="title">Right</div>
            <div class="btn">M M</div>
        </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped>
*{
    box-sizing: border-box;
}
.container{
    display: flex;
    min-height: 100vh;
    min-width: 100vw;
}

.small_container{
    flex: 1;
	display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    overflow: hidden;
    transition: ease-in-out 1s;
}
.small_container:hover{
    flex: 3;
}

.left{
    background-color: #7A78E2;
}

.right{
    background-color: #555555;
}

.pic{
    position: absolute;
    max-height: 120vh;
    max-width: 120vw;
    min-height: 100vh;
    min-width: 100vw;
    z-index: 1;
    opacity: 0.5;
}
.left .pic{
    top:-15%;
}
.right .pic{
    top:-10%;
}
.title{
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 4rem;
    color: #fff;
    white-space: nowrap;
}
.items {
	display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    transform: translateY(-20%);
    z-index: 100;
}

.btn{
   	display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    border: #fff solid 0.2rem;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    width: 200px;
    padding: 25px;
    margin-top: 50px;
    border-radius: 25px;
    transition: 0.3;
    border-radius: 20px;
    cursor: pointer;
    transition:  0.15s;
}

.left div[class*="btn"]:hover{
    background-color: #5754EC;
    border-color: #5754EC;
}

.right .btn:hover{
    background-color: #1C7A1C;
    border-color: #1C7A1C;
}
</style>
