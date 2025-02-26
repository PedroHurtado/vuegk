<script lang="ts" setup>
import { ref } from 'vue';
const dialog = ref<HTMLDialogElement | null>(null);

const open = () => {
    dialog.value?.showModal();
};
const close = (ev:Event)=>{
    ev.stopPropagation();
    dialog.value?.close();
}
defineExpose({ open });

</script>
<template>
    <dialog ref="dialog">
        <form method="dialog">
            <section>
                <slot></slot>
            </section>
            <menu>
                <button @click="close($event)">Cerrar</button>
                <button type="submit">Confirm</button>
            </menu>
        </form>
    </dialog>

</template>