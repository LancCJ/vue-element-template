<template>
    <div>
        <div class="ui-header">
            <div class="ui-logo">后台管理系统</div>
            <div class="ui-user">
                <el-dropdown @command="handleCommand">
                    <div>
                        <img class="ui-user-avatar" :src="avatar"/>
                        <span class="ui-user-nickname">{{nickname}}</span>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="changepwd">修改密码</el-dropdown-item>
                        <el-dropdown-item command="quit" divided>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>

        <el-dialog title="修改密码" :visible.sync="dialogPwdVisible">
            <el-form :model="form" :rules="rules" ref="form" label-position="right">
                <el-form-item label="旧密码" prop="oldPwd" label-width="100px">
                    <el-input v-model="form.oldPwd" placeholder="请输入旧密码"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newPwd" label-width="100px">
                    <el-input v-model="form.newPwd" placeholder="请输入新密码"></el-input>
                </el-form-item>
                <el-form-item label="重复新密码" prop="repeatNewPwd" label-width="100px">
                    <el-input v-model="form.repeatNewPwd" placeholder="请重复输入新密码"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogPwdVisible = false">取 消</el-button>
                <el-button type="primary" @click="changePwd('form')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
    import {changePwd} from '../../api/login';

    export default {
        data(){

            var checkRepeatPwd = (rule, value, callback) => {
                if (this.form.newPwd != value) {
                    callback(new Error('两次密码不一致'));
                }
                else{
                    callback();
                }
            };

            return {
                dialogPwdVisible: false,
                form: {
                    oldPwd: '',
                    newPwd: '',
                    repeatNewPwd: ''
                },
                rules: {
                    oldPwd: [
                        {required: true, message: '请输入旧密码', trigger: 'blur'}
                    ],
                    newPwd: [
                        {required: true, message: '请输入新密码', trigger: 'blur'}
                    ],
                    repeatNewPwd: [
                        {required: true, message: '请重复输入新密码', trigger: 'blur'},
                        {validator: checkRepeatPwd, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleCommand(command) {
                switch (command) {
                    case 'changepwd':
                        this.dialogPwdVisible = true;
                        break;
                    case 'quit':
                        this.$message('退出回调');
                        this.loginOut();
                        break;
                }
            },
            changePwd(form){

                this.$refs[form].validate((valid) => {
                    if (valid) {
                        changePwd(this.form.oldPwd, this.form.newPwd).then(response => {
                            this.$message({
                                message:'密码修改成功',
                                type:'success'
                            });
                            this.dialogPwdVisible = false;
                        }).catch(error=> {
                        });
                    }
                    else {
                        console.log('validate fail , error submit!!');
                        return false;
                    }
                });

            },
            loginOut(){
                this.$store.dispatch('LoginOut').then(response => {

                    //暂未找到更优的方法
                    //手动清空浏览器缓存数据
                    location.reload();

                    //不生效
                    //this.$router.options.routes = [];
                    //this.$router.addRoutes(constantRouterMap);
                    //this.$router.push({ path: '/' });

                })
            }
        },
        computed: {
            nickname: function () {
                return this.$store.state.app.nickname;
            },
            avatar: function () {
                return this.$store.state.app.avatar;
            }
        }
    }
</script>

<style scoped>
    .ui-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        color: #fff;
        background-color: rgb(103, 153, 248);
        z-index: 2;
    }

    .ui-header .ui-logo {
        float: left;
        width: 180px;
        line-height: 60px;
        color: #FFF;
        text-align: center;
    }

    .ui-header .ui-user {
        float: right;
        color: #FFF;
        margin-right: 30px;
        line-height: 60px;
        text-align: center;
        cursor: pointer;
    }

    .ui-user .ui-user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 999px;
        margin-right: 5px;
        vertical-align: middle;
    }

    .ui-user .ui-user-nickname {
        color: #FFF;
    }
</style>