<template>
  <div class="sub-index" >
    <v-head ref="headerm"></v-head>
    <div class="bottom">
      <v-sidebar class="left"></v-sidebar>
      <div class="right" :style="{'padding': '15px','box-sizing':'border-box','margin-left':offsetLeft+'px', 'width':width, 'margin-bottom': mbt}">
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
      menus: [],
      subMenus: {},
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
    offsetLeft() {
      // if (this.hasSidebar()) {
      //   return 180;
      // }
      return 180;
    },
    hiddenSidebar() {
      let sidebar = this.hasSidebar();
      if (sidebar) {
        this.subMenus = sidebar;
        return false;
      }
      return true;
    },
    width() {
      if (this.hasSidebar()) {
        return "calc(100% - 180px)";
      }
      return "calc(100%)";
    },
    mbt() {
      // let rt = this.$route.path.split("/");
      // if (
      //   rt[rt.length - 1] === "users" ||
      //   rt[rt.length - 2] === "projects" ||
      //   rt[rt.length - 1] === "index" ||
      //   rt[rt.length - 1] === "scenes"
      // ) {
      //   return "52px";
      // }
      // return "0px";
      return '52px'
    }
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
  font-weight: 100;
}

.bottom {
  display: flex;
}

.bottom .left {
  width: 180px;
  margin-bottom: 52px;
}

.bottom .right {
  margin-top: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #f0f2f5;
  /* margin-left: 180px; */
  margin-bottom: 52px;
  overflow-y: auto;
  flex: 1;
  margin-right: auto;
  color: #606060;
}

div.fix-pagination {
  position: fixed;
  padding: 0 10px;
  box-sizing: border-box;
  width: calc(100% - 180px);
  bottom: 10px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}
div.el-table div.cell img.image {
  width: 60px;
  height: 60px;
  border-radius: 5px;
  padding: 10px 0;
  display: inline-block;
  margin-right: 5px;
}

 .el-menu-item.is-active{
  color: #f87b04;
}
</style>
