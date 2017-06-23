<template>
    <div>
        <el-form :model="form" :rules="rules" ref="form" label-width="100px" label-position="right">
            <el-form-item label="账号" prop="username">
                <el-input type="password" v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%;" :loading="loading" @click="handleLogin('form')">登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script type="text/ecmascript-6">
    import {login} from '../../api/login';

    export default{
        data(){

            return {
                loading: false,
                form: {
                    username: '123',
                    password: '123'
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleLogin(form) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        this.loading = true;
                        this.$store.dispatch('Login', this.form.username, this.form.password).then(response => {

                            //重定向到主页
                            this.$router.push({ path: '/' });

                        }).catch(error => {
                            this.loading = false;
//                            this.$message({
//                                message:'登陆失败',
//                                type:'warning'
//                            });
                        });
                    }
                    else {

                    }
                });
            }
        }
    }

</script>
