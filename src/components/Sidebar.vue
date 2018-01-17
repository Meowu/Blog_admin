<script>
export default {
  name: "Sidebar",
  props: {
  isCollapse: {
    type: Boolean,
    default: false,
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleOpen() {},
    handleClose() {},
  }
}
</script>

<template>
  <div>
    <el-menu :router='true' default-active='/articles' background-color='#001529' class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <div style="width:100%;text-align:center;background:#fff;height: 50px;">
        <!-- <a href="."><img src="../assets/icon.png" width="58" height="50" alt="Logo" ></a> -->
      </div>
      <el-submenu index="/index">
        <template slot="title">
          <i class="el-icon-success"></i>
          <span slot="title">首页统计</span>
        </template>
          <el-menu-item index="/index">数据统计</el-menu-item>
          <el-menu-item index="/charts">图表查看</el-menu-item>
      </el-submenu>
      <el-submenu index="/articles">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">文章管理</span>
        </template>
          <el-menu-item index="/articles">文章列表</el-menu-item>
          <el-menu-item index="/comments">评论列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="/tags">
        <i class="el-icon-service"></i>
        <span slot="title">标签管理</span>
      </el-menu-item>
      <el-menu-item index="/categories">
        <i class="el-icon-date"></i>
        <span slot="title">分类管理</span>
      </el-menu-item>
      <el-menu-item index="/settings">
        <i class="el-icon-setting"></i>
        <span slot="title">全局设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
