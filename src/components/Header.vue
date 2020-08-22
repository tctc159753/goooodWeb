<template>
    <div class="header">
        <div class="navbar-header">
            <a href="/" class="navbar-brand">设计</a>
            <img src="https://oss.gooood.cn/static/img/logo.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",

}
</script>

<style scoped>
.header{
    align-items: center;
    background-color: rgb(219, 26, 116);
    box-sizing: border-box;
    color: #777;
    /* display: flex; */
    font-size: 16px;
    height: 70px;
    line-height: 1;
    padding: 0 25px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
    
}
.navbar-header {
    width: 160px;
    height: 51px;
    /* display: inline-block; */
    /* background-size: cover; */
    /* margin-top: 10px;
    padding: 0;
    margin-left: 0;
    margin-right: 20px; */
    
}
.navbar-header a{
text-indent: -2000em;
}
.navbar-brand{
    float: left;
    padding: 15px;
    font-size: 18px;
    line-height: 20px;
    height: 50px;
}
</style>