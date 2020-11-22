<template>
    <div class="container">
        Today
        <input ref="input1" id="input1" >
        <button @click="handleClick">展示</button>
    </div>
</template>

<script>
import getData from '@/services';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Today',
    setup() {
        const store = useStore();
        const input1 = ref(null);
        const handleClick = () => {
            console.log(document.getElementById('input1').value);
            console.log(input1);
        }
        onMounted(() => {
            // getData(store);
            console.log(document.getElementById('input1'));
            console.log(input1);
        })

        return {
            handleClick,
            input1
        }
    }
}
</script>

<style lang='scss' scoped>

</style>