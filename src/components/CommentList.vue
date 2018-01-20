<script>
import CommentItem from "./comments.vue";
export default {
  name: "CommentList",
  components: {
    CommentItem
  },
  data() {
    return {
      
      timerange: [],
      params: {
        query: '',
        keyword: ''
      },
      queries: [
        { label: '评论', value: 2 },
        { label: '姓名', value: 3}
      ]
    };
  }
};
</script>
<template>
  <div class="comment-wrapper">
    <div class="comment-filter">
      <!-- <el-input placeholder="按名称" style="width: 200px;" @change='getList' v-model="params.keyword" icon="search" class="search"></el-input> -->
      <el-input placeholder="请输入名称" style="width: 360px;" @change='getList' v-model="params.keyword" icon="search" class="search">
        <el-select style="width:100px;" @change="getList" v-model="params.query" slot="prepend" placeholder="请选择">
          <el-option v-for="(query, index) in queries" :label="query.label" :value="query.value" :key="index">
          </el-option>
        </el-select>
      </el-input>
      <el-date-picker 
        style="width: 240px;" 
        v-model="timerange" 
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期" 
        range-separator=" - " 
        clearable >
      </el-date-picker>
    </div>
    <div class="comment-list">
      <!-- <div class="comment-item" v-for="i in 5">
        <comment-item />
      </div> -->
      <el-card v-for="i in 5" class="comment-card">
        <comment-item />
      </el-card>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.comment-wrapper
  width 100%
  // padding 20px
  .comment-filter 
    padding 25px
    background-color #fff
    margin-bottom 30px
    display flex 
    justify-content space-between
    // width 100
  .comment-list 
    background-color #fff 
    padding 25px
    .comment-card 
      margin-bottom 15px
</style>


