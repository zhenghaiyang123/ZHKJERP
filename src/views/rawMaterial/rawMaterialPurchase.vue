<template>
  <div id="rawMaterialPurchase"
    v-loading="loading">
    <div class="head">
      <h2>原料预订购
        <i class="el-icon-message-solid"
          :class="{'active':msgFlag}"
          @click="showMsg = true"></i>
      </h2>
    </div>
    <div class="body">
      <div class="lineCtn">
        <div class="inputCtn oneLine">
          <span class="label">订购单位:</span>
          <span class="content">
            <el-select v-model="company"
              placeholder="请选择订购单位">
              <el-option v-for="item in companyList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </span>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">原料信息:</span>
          <span class="content">
            <div class="material"
              v-for="(item,key) in material_info"
              :key="key">
              <h4>第{{change(key+1)}}种原料</h4>
              <div class="inputBox">
                <el-select v-model="item.material_name"
                  filterable
                  placeholder="请选择原料">
                  <el-option v-for="value in materialList.material"
                    :key="value.value"
                    :value="value.name">
                  </el-option>
                </el-select>
                <el-select v-model="item.color_code"
                  filterable
                  placeholder="请选择颜色">
                  <el-option v-for="value in colorList"
                    :key="value.name + value.id"
                    :value="value.name">
                  </el-option>
                </el-select>
                <el-select v-model="item.attribute"
                  multiple
                  placeholder="请选择包装">
                  <el-option v-for="value in materialList.attr"
                    :key="value.value"
                    :value="value.name">
                  </el-option>
                </el-select>
                <el-input placeholder="请输入预定价格"
                  v-model="item.price">
                  <span class="small"
                    slot="append">元/千克</span>
                </el-input>
              </div>
              <span class="delet el-icon-close"
                @click="delet(key)"></span>
            </div>
          </span>
        </div>
        <div class="inputCtn">
          <div class="addBtn"
            @click="addMaterial">
            <span>添加原料</span>
            <span>+</span>
          </div>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">原料总重:</span>
          <span class="content">
            <el-input placeholder="请输入所有原料总重量"
              v-model="total_weight">
              <span slot="append">千克</span>
            </el-input>
          </span>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">预付款:</span>
          <span class="content">
            <el-input placeholder="请输入预付款"
              v-model="total_price">
              <span slot="append">元</span>
            </el-input>
          </span>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">订购日期:</span>
          <span class="content">
            <el-date-picker v-model="order_time"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="请选择订购日期">
            </el-date-picker>
          </span>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">备注:</span>
          <span class="content">
            <el-input type="textarea"
              :rows="4"
              v-model="remark">
            </el-input>
          </span>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="content btn">
            <span class="clean"
              @click="$router.go(-1)">返回</span>
            <span class="save"
              @click="save">保存</span>
          </span>
        </div>
      </div>
    </div>
    <my-message :visible.sync="showMsg"
      :url="localName"
      :afterSave="afterSave"></my-message>
  </div>
</template>

<script>
import { rawMaterialPurchase, YarnColorList, clientList, YarnList, notifySave } from '@/assets/js/api.js'
export default {
  data () {
    return {
      localName: 'rawMaterialPurchase',
      showMsg: false,
      msgFlag: window.localStorage.getItem('rawMaterialPurchase') ? JSON.parse(window.localStorage.getItem('rawMaterialPurchase')).msgFlag : false,
      msgUrl: '',
      content: '',
      loading: true,
      colorList: [], // 颜色列表
      companyList: [], // 公司列表
      materialList: {
        material: [{ name: '36支上光晴纶' }, { name: '48支单股涤纶' }],
        attr: [{ name: '筒纱' }, { name: '绞纱' }, { name: '足斤' }, { name: '98' }]
      },
      company: '',
      remark: '',
      total_weight: '',
      total_price: '',
      order_time: '',
      material_info: [
        {
          material_name: '',
          color_code: '白胚',
          attribute: [],
          price: '',
          vat_code: 'vat-null'
        }
      ]
    }
  },
  methods: {
    afterSave (data) {
      this.msgFlag = data.msgFlag
    },
    sendMsg () {
      let data = JSON.parse(window.localStorage.getItem(this.localName))
      let formData = {
        title: data.title,
        type: data.type,
        tag: '工序',
        content: this.content,
        router_url: this.msgUrl,
        receive_user: data.receive_user
      }
      notifySave(formData).then((res) => {
        if (res.data.status) {
          this.$message.success('预定购成功')
          this.$router.push(this.msgUrl)
        }
      })
    },
    addMaterial () {
      this.material_info.push({
        material_name: '',
        color_code: '白胚',
        attribute: [],
        price: '',
        vat_code: 'vat-null'
      })
    },
    change (number) {
      if (number === 1) {
        return '一'
      } else if (number === 2) {
        return '二'
      } else if (number === 3) {
        return '三'
      } else if (number === 4) {
        return '四'
      } else if (number === 5) {
        return '五'
      } else if (number === 6) {
        return '六'
      } else if (number === 7) {
        return '七'
      } else if (number === 8) {
        return '八'
      } else if (number === 9) {
        return '九'
      }
    },
    delet (key) {
      this.material_info.splice(key, 1)
    },
    save () {
      if (!this.company) {
        this.$message({
          showClose: true,
          message: '请选择订购单位',
          type: 'error'
        })
        return
      }
      let IFREPEAT = false
      const keyArr = this.material_info
      for (let i = 0; i < keyArr.length - 1; i++) {
        for (let j = 1; j < keyArr.length; j++) {
          if (keyArr[i].material_name === keyArr[j].material_name && keyArr[i].color_code === keyArr[j].color_code && keyArr[i].vat_code === keyArr[j].vat_code) {
            IFREPEAT = true
          }
        }
      }
      if (IFREPEAT) {
        this.$message.error({
          message: '请不要选择重复的纱线'
        })
        return
      }
      for (let prop in this.material_info) {
        let item = this.material_info[prop]
        item.price = Number(item.price)
        if (!item.material_name) {
          this.$message({
            showClose: true,
            message: '请选择订购原料',
            type: 'error'
          })
          return
        }
        if (!item.color_code) {
          this.$message({
            showClose: true,
            message: '请选择原料颜色',
            type: 'error'
          })
          return
        }
        if (!item.attribute) {
          this.$message({
            showClose: true,
            message: '请选择原料属性',
            type: 'error'
          })
          return
        }
        if (item.price === 0) {
        } else if (item.price === '') {
          this.$message({
            showClose: true,
            message: '请输入预定价格',
            type: 'error'
          })
          return
        } else if (!Number(item.price)) {
          this.$message({
            showClose: true,
            message: '请检查价格格式是否正确',
            type: 'error'
          })
          return
        }
      }
      if (this.total_weight === '0') {
        this.$message({
          showClose: true,
          message: '原料总重不可为0',
          type: 'error'
        })
        return
      } else if (this.total_weight === '') {
        this.$message({
          showClose: true,
          message: '请输入原料总重',
          type: 'error'
        })
        return
      } else if (!Number(this.total_weight)) {
        this.$message({
          showClose: true,
          message: '请检查原料总重格式是否正确',
          type: 'error'
        })
        return
      }
      if (this.total_price === '0') {
      } else if (this.total_price === '') {
        this.$message({
          showClose: true,
          message: '请输入总价',
          type: 'error'
        })
        return
      } else if (!Number(this.total_price)) {
        this.$message({
          showClose: true,
          message: '请检查总价格式是否正确',
          type: 'error'
        })
        return
      }
      if (!this.order_time) {
        this.$message({
          showClose: true,
          message: '请选择订购日期',
          type: 'error'
        })
        return
      }
      this.loading = true
      let materialInfo = JSON.parse(JSON.stringify(this.material_info))
      materialInfo.forEach(item => {
        item.attribute = item.attribute.join('/')
      })
      rawMaterialPurchase({
        user_id: sessionStorage.user_id,
        company_id: sessionStorage.company_id,
        client_id: this.company,
        material_info: [...materialInfo],
        total_weight: Number(this.total_weight),
        total_price: Number(this.total_price),
        order_time: this.order_time,
        desc: this.remark
      }).then((res) => {
        if (res.data.code === 200) {
          if (this.msgFlag) {
            this.msgUrl = '/index/rawMaterialPurchaseDetail/' + res.data.data.id
            this.content = '向' + res.data.data.client_name + '<span style="color:#1A95FF">预定购</span>原料<span style="color:#1A95FF">' + res.data.data.total_weight + '</span>千克'
            this.sendMsg()
          } else {
            this.$message.success('预定购成功')
            this.$router.push('/index/rawMaterialPurchaseDetail/' + res.data.data.id)
          }
        } else {
          this.$message({
            showClose: true,
            message: res.data.message,
            type: 'error'
          })
        }
        this.loading = false
      })
    }
  },
  created () {
    Promise.all([
      YarnColorList({
        company_id: sessionStorage.company_id
      }),
      // pantongList({
      //   company_id: sessionStorage.company_id
      // }),
      clientList({
        company_id: sessionStorage.company_id
      }),
      YarnList({
        keyword: ''
      })
    ]).then(res => {
      this.loading = false
      this.colorList = [{
        color_code: '',
        name: '白胚'
      },
      ...res[0].data.data]
      this.companyList = res[1].data.data.filter((item) => (item.type.indexOf(2) !== -1))
      this.materialList.material = res[2].data.data
    })
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/css/rawMaterialPurchase.less";
</style>
