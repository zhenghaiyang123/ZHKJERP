<template>
  <div id="packagMaterialSetting">
    <div class="head">
      <h2>{{this.id ? '修改' : '添加'}}包装辅料</h2>
    </div>
    <div class="body">
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label must">辅料类型:</span>
          <el-radio-group v-model="type"
            style="margin-left: 15px;">
            <el-radio :label="1">主要辅料</el-radio>
            <el-radio :label="2">次要辅料</el-radio>
          </el-radio-group>
          <el-tooltip class="item"
            effect="dark"
            content="包装辅料订购详情页面区分开主要包装统计与次要包装统计"
            placement="top-start">
            <span class="el-icon-question"
              style="margin-left:80px;"></span>
          </el-tooltip>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label must">辅料名称:</span>
          <el-input class="elInput"
            v-model="pack_name"
            :disabled="id ? true : false"
            placeholder="请输入辅料名称"></el-input>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">辅料重量:</span>
          <el-input class="elInput"
            v-model="pack_weight"
            placeholder="请输入辅料净重"></el-input>
        </div>
      </div>
      <div class="lineCtn"
        v-for="(item,key) in pack_attrs"
        :key="key">
        <div class="inputCtn">
          <span class="label"
            v-if="key === 0">辅料属性:</span>
          <span class="label"
            v-else></span>
          <el-input class="elInput"
            v-model="item.pack_attr"
            placeholder="请输入辅料属性"></el-input>
          <span class="el-icon-plus icon"
            v-if="key === 0"
            @click="addPackAttr()"></span>
          <span class="el-icon-minus icon"
            v-else
            @click="deletePackAttr(key)"></span>
        </div>
      </div>
      <div class="lineCtn bigLine">
        <div class="inputCtn">
          <span class="label">备注:</span>
          <el-input class="elInput"
            v-model="remark"
            :autosize="{minRows:2,maxRows:5}"
            type="textarea"
            placeholder="请输入备注信息"></el-input>
        </div>
      </div>
      <div class="btnCtn">
        <div class="cancleBtn"
          @click="$router.push('/index/packagMaterialList')">返回</div>
        <div class="okBtn"
          @click="saveAll()">{{this.id ? '修改' : '添加'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { packagMaterialAdd, packagMaterialdetail } from '@/assets/js/api.js'
export default {
  data () {
    return {
      pack_name: '',
      pack_size: '',
      pack_weight: '',
      pack_attrs: [{ pack_attr: '' }],
      remark: '',
      id: '',
      type: 1, // 1为主要辅料 2为次要辅料
      timer: true
    }
  },
  created () {
    let str = window.location.href
    if (str.indexOf('?') !== -1) {
      this.id = str.split('?')[1].split('=')[1]
    }
    if (this.id !== '') {
      packagMaterialdetail({
        id: this.id
      }).then(res => {
        let info = res.data.data
        this.pack_name = info.name
        this.pack_size = info.size
        this.pack_weight = info.weight
        this.pack_attrs = JSON.parse(info.attribute)
        this.remark = info.desc
      })
    }
  },
  methods: {
    addPackAttr () {
      this.pack_attrs.push({
        pack_attr: ''
      })
    },
    deletePackAttr (key) {
      this.pack_attrs.splice(key, 1)
    },
    saveAll () {
      if (!this.pack_name) {
        this.$message({
          type: 'error',
          message: `请输入辅料名称`
        })
        return
      }
      if (!this.type) {
        this.$message({
          type: 'error',
          message: `请选择辅料类型`
        })
        return
      }
      if (this.timer) {
        this.timer = false
        packagMaterialAdd({
          id: this.id ? this.id : null,
          company_id: window.sessionStorage.getItem('company_id'),
          name: this.pack_name,
          // size: this.pack_size,
          attribute: JSON.stringify(this.pack_attrs),
          weight: this.pack_weight,
          desc: this.remark,
          type: this.type
        }).then(res => {
          let str = this.id ? '修改' : '添加'
          this.$message({
            type: 'success',
            message: str + `成功` + (this.id ? '，即将跳转至列表页！' : '')
          })
          if (this.id) {
            setTimeout(() => { this.$router.push('/index/packagMaterialList') }, 800)
          } else {
            this.pack_name = ''
            this.pack_size = ''
            this.pack_weight = ''
            this.pack_attrs = [{ pack_attr: '' }]
            this.remark = ''
            this.id = ''
            this.timer = true
          }
        })
        setTimeout(() => {
          this.timer = true
        }, 2000)
      } else {
        this.$message.error('请勿频繁点击！')
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/css/packagMaterialSetting.less";
</style>
