<script>
import CommentItem from "./comments.vue";
import Api from "@/api"
export default {
  name: "CommentList",
  components: {
    CommentItem
  },
  data() {
    return {
      list: [],
      timerange: [],
      params: {
        query: '',
        keyword: '',
        start_date: '',
        end_date: '',
        page: 1,
        page_size: 10
      },
      queries: [
        { label: '姓名', value: 1 },
        { label: '评论', value: 2 },
      ]
    };
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
      try {
        const result = await Api.getComments(this.params)
        this.list = result.data
      } catch (error) {
        
      }
    },
    selectDate(pick) {
      if (pick) {
        this.params.start_date = +new Date(pick[0])
        this.params.end_date = +new Date(pick[1])
      } else {
        this.params.start_date = '',
        this.params.end_date = ''
      }
      this.getList()
    }

  }
};
</script>
<template>
  <div class="comment-wrapper">
    <div class="comment-filter">
      <!-- <el-input placeholder="按名称" style="width: 200px;" @change='getList' v-model="params.keyword" icon="search" class="search"></el-input> -->
      <el-input placeholder="请输入名称" style="width: 360px;" @change='getList' v-model="params.keyword" icon="search" class="search">
        <el-select style="width:100px;" @change="params.keyword = ''" v-model="params.query" slot="prepend" clearable placeholder="请选择">
          <el-option v-for="(query, index) in queries" :label="query.label" :value="query.value" :key="index">
          </el-option>
        </el-select>
      </el-input>
      <el-date-picker 
        style="width: 240px;" 
        v-model="timerange" 
        type="daterange"
        @change="selectDate"
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
      <el-card v-for="(comment, i) in list" :key="i" class="comment-card">
        <comment-item :meta="comment" @refresh='getList' />
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


