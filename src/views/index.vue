<template>
    <div class="index">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "index",
    data(){
        return{
            tabbarData: [
                { title: "首页", icon: "home", path: "/home"},
                { title: "专辑", icon: "series ", path: "/series"},
                { title: "分类", icon: "type", path: "/type"},
                { title: "复合检索", icon: "tagSearch", path: "/tagSearch"},
                { title: "关于与投稿", icon: "aboutSubmissions ", path: "/aboutSubmissions"},
                { title: "工作", icon: "jobs", path: "/jobs"},
                { title: "找设计师/项目", icon: "home", path: "/home"},
            ]
        }
    }
}
</script>

<style scoped>
.index {
  width: 100%;
  height: calc(100% - 70px);
}
</style>