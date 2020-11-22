<template>
    <div class="nav-bar" v-nav-current="{
        className: 'nav-item',
        activeClass: 'current',
        currentIndex
    }"
    @click="navClick($event)"
    >
        <div class="scroll-wrapper">
            <div class="nav-wrapper" :style="{width: navWidth + 'rem'}">
                <nav-item 
                    v-for="(item, index) of navData"
                    :key="index"
                    :item="item"
                    :index="index"
                >

                </nav-item>
        </div>
    </div>
</div>

</template>

<script>
import NavItem from './item'
import { computed, ref } from 'vue'
import navData from '@/data/nav'

export default {
    name: 'NavBar',
    components: {
        NavItem
    },
    setup() {
        const currentIndex = ref(0);

        const navWidth = computed({
            get() {
                return navData.length * .8
            }
        })


        const navClick = (e) => {
            currentIndex.value = e.target.dataset.index
        }

        return {
            currentIndex,
            navData,
            navWidth,
            navClick
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav-bar {
        position: fixed;
        top: .44rem;
        height: .38rem;
        width: 100%;
        background-color: #fff;
        border-bottom: #ccc 1px solid;
        z-index: 1;
        overflow: hidden;

        .scroll-wrapper{
            height: .46rem;
            overflow-x: auto;

            .nav-wrapper {
                display: flex;
                height: .42rem;
            }
        }
    }
</style>