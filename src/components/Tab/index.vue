<template>
  <div class="tab">
      <div class="tab-item"
        v-for="(item, index) of tabData"
        :key="index"
      >
          <my-icon :iconText="item.iconText" :path="item.path">{{ item.tabText }}</my-icon>
      </div>
  </div>
</template>

<script>
import MyIcon from './Icon'
import tabData from '@/data/tab'
import { reactive, toRefs } from 'vue'
export default {
    name: 'MyTab',
    components: {
        MyIcon
    },
    setup() {
        const state = reactive({
            tabData
        });

        return {
            ...toRefs(state)
        }
    }
}
</script>

<style lang="scss" scoped>
    .tab{
        position: fixed;
        display: flex;
        flex-direction: row;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        height: .44rem;
        border-top: 1px solid #ddd;
        background-color: #fff;

        .tab-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25%;
            height: 100%;
        }
    }
</style>