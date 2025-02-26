<script setup lang="ts">
import { ref } from 'vue';
import Panel1 from './Panel1.vue'
import Panel2 from './Panel2.vue'
const currentTab = ref('panel1')
const changeTab = (tabId: string) => {
    currentTab.value = tabId
}
const tabs = [
    {
        id: 'panel1', text: "Panel 1", component: Panel1
    },
    {
        id: 'panel2', text: "Panel 2", component: Panel2
    }
]

const getComponent = () => {
    const tab = tabs.find(tab => tab.id === currentTab.value)
    if (tab) {
        return tab.component;
    }

}
</script>

<template>
    <div>
        <button v-for="tab in tabs" :key="tab.id" @click="changeTab(tab.id)">{{ tab.text }}</button>
    </div>
    <div>
        <KeepAlive>
            <component :is="getComponent()" />
        </KeepAlive>
    </div>
</template>