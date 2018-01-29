<script>
import Api from '@/api'
export default {
  name: "CommentItem",
  props: {
    meta: {
      type: Object,
      required: true
    }
  },
  inject: ['getList'],
  data() {
    return {
      showBtn: false
    }
  },
  methods: {
    deleteComment(id) {
      this.$confirm('该操作将会删除该评论以及其所有回复').then(async () => {
        try {
          const res = await Api.deleteComment(id)
          this.show(res.message)
          // this.$emit('refresh')
          this.getList()
        } catch (error) {
          this.showError(error.message)
        }
      }).catch(e => {})
    }
  }
}
</script>
<template>
  <div class="article-comment" @mouseenter='showBtn = true' @mouseleave='showBtn = false'>
    <div class="article-comment-meta">
      <div class="article-comment-meta-avatar">
        <!-- <img src="../assets/avatar.png" alt=""> -->
        <img :src="meta.avatar ? meta.avatar : require('../assets/avatar.png')" alt="">
      </div>
      <div class="article-comment-meta-detail">
        <h4 class="article-comment-meta-title">
          <span><a href="">{{ meta.name }}</a> 回复 
          <a href="">{{ meta.reply_to.name }}</a>
          <!-- <a v-else href="">{{ meta.article.title }}</a> -->
          </span>
          <span class="post-time">1天前</span>
        </h4>
        <!-- <div class="article-comment-meta-meta">
          Mark 真好用。那是一种内在的东西，他们到达不了，也无法触及的。那是一种内在的东西，他们到达不了，也无法触及的。那是一种内在的东西，他们到达不了，也无法触及的。那是一种内在的东西，他们到达不了，也无法触及的。那是一种内在的东西，他们到达不了，也无法触及的。
        </div> -->
        <div class="article-comment-meta-meta" v-html="meta.content"></div>
        <el-button @click="deleteComment(meta.id)" v-show='showBtn' class="article-comment-btn" type="text" icon="el-icon-delete"></el-button>
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
      // flex 0 0 width 32px
      img 
        width 32px 
        height 32px
        border-radius 50%
    .article-comment-meta-detail
      position relative
      color rgba(0,0,0,.65)
      flex 1 1 auto
      .article-comment-meta-title 
        display flex 
        justify-meta space-between
        span 
          line-height 1.5
        .post-time 
          color rgba(0,0,0,.4)
          margin-left 10px
      .article-comment-meta-meta 
        line-height 1.2
        padding-top 10px
        margin-right 20px
      .article-comment-btn
        position absolute
        right 0
        top 0
        color #000
        padding 5px
    
</style>


