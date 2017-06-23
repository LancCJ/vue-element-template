<template>
    <div class="ui-wrapper">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <div class="ui-content">
            <Levelbar></Levelbar>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import Navbar from './navbar.vue';
    import Sidebar from './sidebar.vue';
    import Levelbar from './levelbar.vue';
    export default {
        components: {
            Navbar, Sidebar, Levelbar
        }
    }
</script>
<style scoped>
    .ui-content{
        position: absolute;
        top:60px;
        left:230px;
        padding: 20px;
        box-sizing: border-box;
        overflow-y: scroll;
    }
</style>