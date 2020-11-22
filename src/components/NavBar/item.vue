<template>
  <div class="nav-item" @click="handlerClick(index)" :data-index="index">
      {{ item }}
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
    name: 'NavItem',
    props: {
        item: String,
        currentIndex: Number,
        index: Number
    },
    setup(props, ctx) {
        const instance = getCurrentInstance();
        const index = instance.vnode.key;

        const handlerClick = (index) => {
            ctx.emit('itemClick', index);
        }

        return {
            index,
            handlerClick
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav-item {
        width: .8rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .14rem;

        &.current {
            color: #DB7093
        }
    }
</style>