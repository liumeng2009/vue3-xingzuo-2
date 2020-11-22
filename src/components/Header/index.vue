<template>
    <header class="header">
        <img class="img" src="../../assets/img/logo.png">
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: 'MyHeader'
}
</script>

<style lang="scss" scoped>
    .header{
        position: fixed;
        top: 0px;
        left: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        width: 100%;
        height: .44rem;
        color: #fff;
        background-color: #DB7093;
        font-size: .18rem;

        .img {
            width: .23rem;
            height: .23rem;
        }
    }
</style>