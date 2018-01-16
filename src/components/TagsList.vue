<template>
    <div class="region-list" style="padding: 15px; background:#fff;">
        <el-button icon="el-icon-plus" size='small' @click="dialogFormVisible = true" style="margin-bottom: 5px;"></el-button>
         <el-table :data="tags" stripe highlight-current-row >
            <el-table-column align='center' type='index' width='80' label="序号"></el-table-column>
            <el-table-column align='center' prop="name" width='300' label="标签名"></el-table-column>
            <el-table-column label='操作'>
                <template scope="scope">
                    <el-button type="plain" size='small' @click="editTag(scope.row._id)">更改</el-button>
                    <el-button type="danger" size='small' @click="deleteTag(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
         </el-table>
        <el-dialog title="添加标签" @close='id = null' :visible.sync="dialogFormVisible" style="text-align: center;">
            <el-input v-model="newTag" placeholder="请输入标签名" ></el-input>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </el-dialog>
    </div>
</template>

<script>
import Api from '@/api'

export default {
    data() {
        return {
            tags: [],
            newTag: '',
            id: null,
            dialogFormVisible: false,
        }
    },
    created() {
        this.getTags()
    },
    methods: {
        async getTags() {
          try {
            const res = await Api.getTags()
            this.tags = res.data
          } catch (e) {
            this.showError(e.message)
          }
        },
        editTag(id) {
          this.dialogFormVisible = true
          this.id = id
        },
        confirm() {
          if (!this.id) {
            Api.postTags(this.newTag).then(() => {
              this.getTags()
              this.$message.success('添加成功')
              this.dialogFormVisible = false
            }).catch(e => {
              this.showError(e.message)
            })
          } else {
            Api.putTags(this.id, this.newTag).then(() => {
              this.getTags() 
              this.show('更改成功')
              this.id = null
              this.dialogFormVisible = false
            }).catch(e => {
              this.id = null 
              this.showError(e.message)
            })
          }
        },
        deleteTag(id) {
        this.$confirm('确定删除该标签？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'message'
        }).then(() => {
            Api.deleteTags(id).then(res => {
                this.getTags()
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
            }).catch( err => this.$message.error(err))
        }).catch(() => {});
        }
    }
}
</script>