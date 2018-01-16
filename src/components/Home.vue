<template>
  <div class="home" >
    <v-sidebar class="left" :isCollapse.sync='collapse'></v-sidebar>
    <div class="right">
      <v-head ref="headerm" :isCollapse.sync='collapse'></v-head>
      <div class="bottom">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import vHead from "./Header.vue";
import vSidebar from "./Sidebar.vue";
import Api from "@/api";

export default {
  data() {
    return {
      collapse: false,
      currentTopIndex: 0,
      last_time: 0,
      source: "",
      alt: ""
    };
  },
  components: {
    vHead,
    vSidebar,
  },
  created() {
  },
  mounted() {
    // this.showPhoto()
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  methods: {
    getMenus() {
      this.menus = menus;
      this.$store.commit(types.GET_MENU, menus)
      this.menus.forEach((item, idx) => {
        if (item.url.split("/")[1] == this.$route.path.split("/")[1]) {
          return (this.currentTopIndex = idx);
        }
      });
      // Menu.getMenu().then(res => {
      //   this.$store.commit(types.GET_MENU, res.data)
      //   this.menus = res.data
      //   res.data.forEach((item, idx) => {
      //     if ((item.url).split('/')[1] == (this.$route.path).split('/')[1]) {
      //       return this.currentTopIndex = idx
      //     }
      //   })
      // }).catch(err => this.$message(err))
    },
    getCurrentTopMenu() {
      let currentTopIndex = this.currentTopIndex;
      return this.menus[currentTopIndex];
    },
    hasSidebar() {
      let currentTopIndex = this.currentTopIndex;
      let currentTopMenu = this.menus[currentTopIndex];
      if (currentTopMenu !== undefined && currentTopMenu.child !== undefined) {
        return currentTopMenu.child;
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

.home {
  display: flex;
  height: 100%;
  width: 100%;
  flex-flow: row nowrap;
}

.home .left {
  z-index: 999;
  height: 100%;
}
.el-menu {
  width: 152px;
  height: 100%;
  overflow: hidden;
  color: hsla(0,0%,100%,.65);
}
.el-menu ul li:hover {
  color: #409EFF;
}
.el-menu-item, .el-submenu__title {
  /* max-width: 150px; */
  color: hsla(0,0%,100%,.65);
}
#app > div > div.left > ul > li.el-submenu.is-opened > ul > li {
  background-color: #000c17;
}
.el-submenu .el-menu-item {
  box-sizing: border-box;
  /* max-width: 152px; */
  /* min-width: 150px; */
}
.el-menu--collapse {
  width: 64px;
}

.home .right {
  /* margin-top: 50px;
  position: absolute;
  top: 0;
  bottom: 0; */
  width: 100%;
  height: 100%;
  flex: auto;
  background-color: #f0f2f5;
  /* margin-left: 180px; */
  /* margin-bottom: 52px; */
  /* overflow-y: auto; */
  overflow: hidden;
  /* margin-right: auto; */
  color: #606060;
}
.home .bottom {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px;
}
div.el-table div.cell img.image {
  width: 60px;
  height: 60px;
  border-radius: 5px;
  padding: 10px 0;
  display: inline-block;
  margin-right: 5px;
}

 /* .el-menu-item.is-active{
  color: #f87b04;
} */
</style>
