<template>
    <div class="ui-sidebar">
        <el-menu mode="vertical" default-active="$route.path" @open="handleOpen" @close="handleClose">
            <sidebar-item :routes='permission_routers'></sidebar-item>
        </el-menu>
    </div>
</template>

<script>
    import SidebarItem from './sidebarItem.vue';
    export default {
        components: {SidebarItem},
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {
            permission_routers: function () {
                return this.$store.getters.permission_routers;
            }
        }
    }
</script>
<style scoped>
    .ui-sidebar {
        width: 230px;
        position: fixed;
        top: 60px;
        bottom: 0;
        left: 0;
        z-index: 1001;
        overflow: scroll;
        transition: all .28s ease-out;
    }

    .el-menu {
        min-height: 100%;
    }
</style>