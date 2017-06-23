<template>
    <div class="ui-sidebar">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item">
                <router-link v-if='item.redirect==="noredirect"||index==levelList.length-1' to>{{item.name}}</router-link>
                <router-link v-else :to="item.path">{{item.name}}</router-link>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        created() {
            this.getBreadcrumb()
        },
        data() {
            return {
                levelList: null
            }
        },
        methods: {
            getBreadcrumb() {
                let matched = this.$route.matched.filter(item => item.name);
                const first = matched[0];
//                if (first && (first.name !== '首页' || first.path !== '')) {
//                    matched = [{ name: '首页', path: '/' }].concat(matched)
//                }
                this.levelList = matched;
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb();
            }
        }
    }
</script>

<style scoped>
    .ui-sidebar{
        position: relative;
        padding-bottom: 20px;
        z-index: 1;
    }
</style>