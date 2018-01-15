<script>
export default {
  name: "Sidebar",
  data() {
    return {
      isCollapse: false,
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
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="/index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">首页</span>
        </template>
          <el-menu-item index="1-3">数据统计</el-menu-item>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
      <el-submenu index="/articles">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">文章管理</span>
        </template>
          <el-menu-item index="/articles">文章列表</el-menu-item>
          <el-menu-item index="1-4-1"></el-menu-item>
      </el-submenu>
      <el-menu-item index="/articles">
        <i class="el-icon-menu"></i>
        <span slot="title">标签管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">分类管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">全局设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
