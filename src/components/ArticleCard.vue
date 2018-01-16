<script>
export default {
  name: "ArticleCard",
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>
<template>
  <div class="article-card">
    <el-card class="box-card">
      <div slot="header" class="header">
        <h3>{{ article.title }}</h3>
        <div class="article-tags">
          <el-tag v-for='(tag, index) in article.tags' :key='"tag"+index'>{{ tag.name }}</el-tag>
          <!-- <el-tag type="success">工匠精神</el-tag>
          <el-tag type="info">用户体验</el-tag>
          <el-tag type="warning">交互设计</el-tag>
          <el-tag type="danger">优质服务</el-tag> -->
        </div>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div class="main">
        <!-- <div>
          <img :src="article.images[0]" alt="cover">
        </div> -->
        <div class="content">{{ article.summary }}</div>
        <div style="color:rgba(0,0,0,.4)"><a class="author" href="https://www.joi.im">Meowu</a> 发布于 <a class="link" :href="article.link">{{  article.category.name }}</a><span>{{ article.post_date }}</span></div>
      </div>
      <div class="count">
        <span><i class="fa fa-eye" aria-hidden="true"></i>{{ article.page_views }}</span>
        <span><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>{{ article.likes }}</span>
        <span><i class="fa fa-commenting-o" aria-hidden="true"></i>{{ article.comments_count}}</span>
      </div>
    </el-card>
  </div>
</template>
<style lang="stylus" scoped>
.article-card
  width 100%
  margin-bottom 8px 
  box-sizing border-box
  .box-card 
    width 100%
    .header 
      h3 
        font-size 20px
        font-weight 500
        margin 0
        padding 10px 0
      .article-tags .el-tag + .el-tag 
        margin-left 10px
    .main
      // padding 20px 0
      max-width 75%
      img 
        width 100%
        // padding 10px 0 
      .content 
        line-height 2
        letter-spacing 2px
        color rgba(0,0,0,.85)
      a 
        color #1199c4
        margin-right 8px
        text-decoration none
        cursor pointer
        line-height 2
        & + a 
          margin-left 8px
    .count
      margin-top 15px 
      span
        display inline-block
        color rgba(0,0,0,.45)
        i 
          margin-right 8px
        &:first-of-type 
          padding-right 16px
        & + span 
          padding 0 16px
          border-left 1px solid #e8e8e8

</style>


