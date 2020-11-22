<template>
  <router-link
    :to="path"
    class="tab-icon"
  >
    <i class="icon">{{ iconText }}</i>
    <p class="text">
        <slot></slot>
    </p>
  </router-link>
</template>

<script>
export default {
    name: 'MyIcon',
    props: {
        path: String,
        iconText: String
    }
}
</script>

<style lang="scss" scoped>
.tab-icon {
    height: 100%;
    padding: .04rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;

    .icon {
        display: block;
        width: .24rem;
        height: .24rem;
        border-radius: 50%;
        background-color: #ccc;
        color: #666;
        line-height: .24rem;
        font-size: .16rem;
        text-align: center;
        font-family: 'Microsoft Yahei';
        font-style: normal;
    }

    .text {
        font-size: .12rem;
        color: #666;
        text-align: center;
    }

    &.router-link-active{
        .icon {
            background-color: #DB7093;
            color: #fff;
        }

        .text {
            color: #DB7093;
        }
    }
}

</style>