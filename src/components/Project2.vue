<template>
    <div class="P2">
        <div class="progress">
            <div class="progress_line_container">
                <div class="progress_line"
                    :style="{width:100/progress_count*current+'%',backgroundColor:props.line_color}"
                ></div>
            </div>
            <div class="point" 
                :style="{borderColor:current>=index-1?props.line_color:'#E0E0E0'}"
              
                v-for="index in point_count" 
                :key="index" >
                {{ index }}
            </div>

        </div>
        <div class="btn_group">
            <button class="btn" :disabled="current===0" @click="current===0?0:current--">Prev</button>
            <button class="btn" :disabled="current===progress_count" @click="current===progress_count?current:current++">Next</button>
      </div>
    </div>
</template>

<script setup>
import { ref,defineProps  } from 'vue';
const props=defineProps({
    points:{
        type:Number,
        default:4
    },
    line_color:{
        type:String,
        default:'#3498DB'
    }
})

let point_count=ref(props.points>10?10:props.points)

let progress_count=ref(props.points-1)
let current=ref(0)


</script>

<style scoped>
.P2{
    position: relative;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
}


.progress {
    position: relative;
    width: 100%;
	display: flex;
    justify-content: space-between;
    align-items: center;
    
}

.progress_line_container {
    background-color: #E0E0E0;
    height: 4px;
    width: 100%;
	position: absolute;
    top: auto;	
}

.progress_line {
    position: relative;
    height: 100%;
    width: 0;
    background-color: #3498DB;
    transition: 0.4s ease;
}

.point {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
	height: 24px;
    width: 24px;
    background-color: #FFF;
    border-radius: 50% ;
    border: 3px solid #e0e0e0;
    transition: 0.4s ease;
}

.point_active{
    border-color: #3498DB;
}

.btn_group {
    margin: 10px 0;
	display: flex;
    justify-self: center;
}
.btn {
    box-sizing: border-box;
	cursor: pointer;
    margin: 0 10px;
    height: 35px;
    width: 90px;
    border-radius: 6px;
    border: 0;
    background-color: #3498DB;
    color: #FFF;
}
.btn:active{
    box-shadow: 1px 2px 5px rgba(0,0,0,0.2);
    transform: scale(0.98);
}

.btn:disabled{
    background-color: #E0E0E0;
    cursor:not-allowed;
}
.btn:click{
    transform: scale(0.95);
}
</style>