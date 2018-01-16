<script>
import markdownEditor from "vue-simplemde/src/markdown-editor";
import Api from '@/api'
// import hljs from 'highlight.js';

// window.hljs = hljs;

export default {
  name: "New-Article",
  components: {
    markdownEditor
  },
  data() {
    return {
      content: '``` \nconsole.log("lalala") \n```',
      article: {
        title: '',
        path: '',
        tags: [],
        summary: '',
        cover: '',
        category: '',
        markdown: '',
      },
      categories: [],
      tags: [],
      configs: {
        status: false,
        toolbar: ["image"]
      },
      output: "",
      type: "markdown"
    };
  },
  computed: {
    simplemde() {
      return this.$refs.markdownEditor.simplemde;
    }
  },
  created() {
    this.getTags()
    this.getCategories()
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     this.$refs.markdownEditor.initialize();
  //   });
  // },
  methods: {
    async getTags() {
      try {
        const res = await Api.getTags()
        console.log(res);
        this.tags = res.data
      } catch (error) {
        this.$message.error(error.message)
      }
    },
    async getCategories() {
      try {
        const res = await Api.getCategories()
        this.categories = res.data
      } catch (error) {
        console.log(error);
      }
    },
    async post() {
      const type = this.$route.params.type
      this.article.tags = this.article.tags.join(',')
      try {
        if ( type === 'new' ) {
          const res = await Api.postArticles(this.article)
          this.$message.success('发布成功')    
        } else {
          const res = await Api.putArticles(type, this.article)
          this.$message.success('修改成功')    
        }
        
      } catch (error) {
        this.article.tags = this.article.tags.split(',')
        this.$message.error('error.message')
      }
    },
    handleInput(val) {
      this.output = val;
    },
    handleOutputHTML() {
      this.type = "html";
      this.output = this.simplemde.markdown(this.content);
    },
    handleOutputMARKDOWN() {
      this.type = "markdown";
      this.output = this.content;
    }
  }
};
</script>
<template>
  <div class="article-editor">
    <div class="article-info">
      <el-form :model="article" ref="article" label-width="80px" class="article-form">
        <el-form-item label="标题" prop="title" required>
          <el-input v-model="article.title" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="路径" prop="path" required>
          <el-input v-model="article.path" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="分类" required prop="category">
          <el-select style="width: 300px;" v-model="article.category" placeholder="请选择活动区域">
            <el-option v-for="category in categories" :label="category.name" :value="category._id"></el-option>
            <!-- <el-option label="区域二" value="beijing"></el-option> -->
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="article.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="article.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item> -->
        <el-form-item label="概要" prop="summary">
          <el-input type="textarea" :rows='6' v-model="article.summary" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="标签" prop="tags" style="width: 400px;">
          <el-checkbox-group v-model="article.tags">
            <el-checkbox v-for="tag in tags" :label="tag._id" style="margin-left: 30px;">{{ tag.name }}</el-checkbox>
            <!-- <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox> -->
          </el-checkbox-group>
        </el-form-item>
        <!-- <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="article.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item> -->
        <!-- <el-form-item>
          <el-button type="primary" @click="submitForm('article')">立即创建</el-button>
          <el-button @click="resetForm('article')">重置</el-button>
        </el-form-item> -->
        <el-button @click="post">发布文章</el-button>
      </el-form>
      <div class="editor-wrap">
        <div class="editor">
          <markdown-editor
            v-model="article.markdown"
            :highlight="true"
            preview-class="markdown-body">
          </markdown-editor>
        </div>
      </div>
    </div>
      <!-- <div class="editor">
        <h4 class="title">默认配置&禁用自动初始化</h4>
        <markdown-editor
          v-model="content"
          ref="markdownEditor"
          :autoinit="false"></markdown-editor>
      </div>
      <div class="editor theme">
        <h4 class="title">自定义代码高亮主题</h4>
        <markdown-editor
          v-model="content"
          :highlight="true"
          preview-class="markdown-body"></markdown-editor>
      </div> -->
      <!-- <div class="editor">
        <h4 class="title">隐藏底部统计栏&修改工具栏</h4>
        <markdown-editor
          v-model="content"
          :configs="configs"></markdown-editor>
      </div> -->
    <!-- <div class="button-wrap">
      <button type="button" @click="handleOutputMARKDOWN">输出MARKDOWN</button>
      <button type="button" @click="handleOutputHTML">输出HTML</button>
      <div v-text="output"></div>
      <div v-html="output" v-show="type === 'html'" class="markdown-body"></div>
    </div> -->
  </div>
</template>


<style>
@import "github-markdown-css";
@import "simplemde/dist/simplemde.min.css";
</style>
<style lang="stylus" scoped>
.article-editor
  padding 20px
  height 90%
  box-sizing border-box
  background-color #fff
  .article-info 
    display flex 
    flex-flow row nowrap
    justify-content center 
    .article-form
      flex 0 0 40%
    .editor-wrap
      flex 1 1 auto
      height 100%
  & >>> .article-info .editor-wrap .editor .markdown-editor .CodeMirror 
    height 400px
</style>

