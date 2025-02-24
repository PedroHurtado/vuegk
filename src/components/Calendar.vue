<template>
    <div class="calendar" @click="handleClick($event)">
        <div v-bind:data-day="day" class="day" v-for="day in days" :key="day">{{ day }}</div>
    </div>
</template>
<script setup lang="ts">
const getDays = function* () {
    for (let i = 0; i <= 31; i++) {
        yield i + 1;
    }
}
const days = [...getDays()]
const handleClick = (ev:Event) => {
    const node = (ev.composedPath() as HTMLElement[]).find(
            node => node.dataset && 'day' in node.dataset
    );
    if(node){
        const {day} = node.dataset;
        console.log(day);
    }    
}
</script>
<style scoped lang="css">
.calendar {
    display: grid;
    grid-template-columns: repeat(7, 1.5rem);
    gap: 0.5rem
}

.day {
    display: grid;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
}

.day:hover {
    outline: 1px solid blue;
}
</style>