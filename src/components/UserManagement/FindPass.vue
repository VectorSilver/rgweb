<template>
    <div>

        <my-header></my-header>

        <div>
            <h2>找回密码</h2>
            <hr>
            <p>请输入用户名：</p>
            <input type="text" placeholder="请输入用户名">
            <button>下一步</button>
            <router-link to="/userLogin">返回登陆>></router-link>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    
</style>
