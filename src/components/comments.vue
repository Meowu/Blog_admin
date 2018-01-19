<script>
export default {
  name: "CommentItem",
  data() {
    return {}
  }
}
</script>
<template>
  <div class="article-comment">
    <div class="article-comment-meta">
      <div class="article-comment-meta-avatar">
        <img src="../assets/ic_avatar.png" alt="">
      </div>
      <div class="article-comment-meta-detail">
        <h4 class="article-comment-meta-title">
          <span><a href="">Meowu</a> 回复在 <a href="">Markdown 语法学习笔记</a></span>
          <span class="post-time">1天前</span>
        </h4>
        <div class="article-comment-meta-content">
          Mark 真好用。
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
$link = #1890ff
.article-comment 
  width 100%
  a
    color $link 
    text-decoration none
  .article-comment-meta 
    display flex
    align-items flex-start
    .article-comment-meta-avatar 
      height 32px
      width 32px
      margin-right 16px
      img 
        width 100%
        height 100%
        border-radius 50%
    .article-comment-meta-detail
       color rgba(0,0,0,.65)
      flex 1 1 auto
      .article-comment-meta-title 
        display flex 
        justify-content space-between
        span 
          line-height 1.5
        .post-time 
          color rgba(0,0,0,.4)
      .article-comment-meta-content 
        line-height 1.2
    
</style>


