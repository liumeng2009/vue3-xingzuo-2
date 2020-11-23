<template>
    <div class="container">
        <ConsCard 
            :name="todayData.name"
            :allIndex="todayData.all"    
        />
    </div>
</template>

<script>
import getData from '@/services';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'Today',
    setup() {
        const store = useStore(),
              state = store.state;
        console.log(state.today);
        onMounted(() => {
            getData(store);
        });

        return {
            todayData: computed(() => state.today)
        }
    }
}
</script>

<style lang='scss' scoped>
    .container{
        position: absolute;
        top: .82rem;
        left: 0;
    }
</style>