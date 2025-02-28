<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
const dialog = ref<HTMLDialogElement | null>(null);
const emit = defineEmits(["confirm"]);

const open = () => {
    dialog.value?.showModal();
};
const close = (ev: Event) => {
    ev.stopPropagation();
    dialog.value?.close();
};
const confirm = (ev: Event) => {
    ev.preventDefault();
    emit("confirm");
    dialog.value?.close();
};

defineExpose({ open });
</script>

<template>
    <dialog ref="dialog" class="custom-dialog">
        <form method="dialog" class="dialog-content" @submit="confirm">
            <section class="dialog-body">
                <slot></slot>
            </section>
            <menu class="dialog-footer">
                <button @click="close($event)" class="button close">Cerrar</button>
                <button type="submit" class="button accept">Aceptar</button>
            </menu>
        </form>
    </dialog>
</template>

<style scoped>
.custom-dialog {
    border: none;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    padding: 20px;
    background: white;
    max-width: 400px;
    width: 100%;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.custom-dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
}

.dialog-content {
    display: flex;
    flex-direction: column;
}

.dialog-body {
    padding-bottom: 15px;
}

.dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding-top: 10px;
}

.button {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
}

.button.close {
    background: #f44336;
    color: white;
}

.button.accept {
    background: #4caf50;
    color: white;
}

.button:hover {
    opacity: 0.8;
}
</style>
