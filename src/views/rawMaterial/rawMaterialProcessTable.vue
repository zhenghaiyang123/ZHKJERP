<template>
  <div id="rawMaterialProcessTable"
    @click.right="goTop"
    v-loading='loading'>
    <div class="head">
      <div class="left">
        <p class="company">{{company_name + ($route.params.materialType === '0' ? '原料' : '辅料') + type + '单'}}</p>
        <span><span class="label">联系人:</span>{{linkman}}</span>
        <span><span class="label">联系人电话:</span>{{linkman_tel}}</span>
        <span><span class="label">创建日期:</span>{{create_time}}</span>
      </div>
      <div class="right">
        <img :src="qrCodeUrl"
          alt=""
          ref="qrcodeCanvas"
          class="qrcode">
        <div class="messages">
          <span>扫一扫</span>
          <span>{{$route.params.materialType === '0' ? '纱线原料' : '装饰辅料'}}入库</span>
        </div>
      </div>
    </div>
    <div class="tableBox">
      <div>
        <span>
          <span>订单号</span>
          <span>{{order_code}}</span>
          <span>下单日期</span>
          <span>{{order_time}}</span>
        </span>
        <span>
          <span>订单公司</span>
          <span>{{order_company}}</span>
          <span>负责小组</span>
          <span>{{group_name}}</span>
        </span>
      </div>
      <div>
        <span>
          <span>{{type}}单位</span>
          <span>{{client_name === 'null' ? '仓库' : client_name}}</span>
          <span>总价</span>
          <span>{{total_price|fixedFilter}}{{'元'}}</span>
        </span>
      </div>
      <div>
        <ul v-for="(item,key) in process_info"
          :key="key">
          <li>
            <span>原料名称</span>
            <span>{{item.material}}</span>
            <span>合计</span>
            <span>{{item.total_weight|fixedFilter}}{{item.unit}}</span>
          </li>
          <li v-for="(val,ind) in item.color_info"
            :key="ind">
            <span>颜色重量</span>
            <span>
              {{val.name}}
              <span>{{val.value|fixedFilter}}{{item.unit}}</span>
            </span>
          </li>
        </ul>
      </div>
      <div class="remark">
        <span>
          <span>备注</span>
          <span></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { rawMaterialProcessList, rawMaterialOrderList, orderDetail, authList, companyInfoDetail } from '@/assets/js/api.js'
export default {
  data () {
    return {
      loading: true,
      company_name: '',
      process_code: '',
      create_time: '',
      order_code: '',
      order_time: '',
      order_company: '',
      group_name: '',
      client_name: '',
      linkman_tel: '',
      linkman: '',
      total_price: 0,
      qrCodeUrl: '',
      process_info: []
    }
  },
  filters: {
    fixedFilter (item) {
      return Number(item).toFixed(2)
    }
  },
  methods: {
    goTop () {
      document.body.scrollTop = 0
    }
  },
  created () {
    let date = new Date()
    this.create_time = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate())
    // 获取类型
    this.type = this.$route.params.type === 'undefined' ? '订购' : this.$route.params.type.split('-').join('/')
    // 获取公司
    this.client_name = this.$route.params.companyName
    // 获取数据
    if (this.type !== '订购') {
      rawMaterialProcessList({
        company_id: sessionStorage.company_id,
        order_id: this.$route.params.id
      }).then(res => {
        res.data.data.forEach(item => {
          this.order_code = item.order_code
          if (item.process_type === this.type && String(item.client_name) === this.client_name) {
            item.material_info = JSON.parse(item.material_info)
            item.material_info.forEach(value => {
              this.total_price += Number(value.value) * Number(item.price)
              let flag = this.process_info.find(val => val.material === item.material_name)
              if (!flag) {
                this.process_info.push({
                  material: item.material_name,
                  total_weight: value.value,
                  price: item.price,
                  unit: item.unit ? item.unit : 'kg',
                  color_info: [{
                    name: value.color,
                    value: value.value
                  }]
                })
              } else {
                flag.total_weight = Number(flag.total_weight) + Number(value.value)
                let flag2 = flag.color_info.find(val => val.name === value.color)
                if (!flag2) {
                  flag.color_info.push({
                    name: value.color,
                    value: value.value
                  })
                } else {
                  flag2.value = Number(flag2.value) + Number(value.value)
                }
              }
            })
          }
        })
        this.loading = false
      })
    } else {
      rawMaterialOrderList({
        company_id: sessionStorage.company_id,
        order_id: this.$route.params.id
      }).then(res => {
        res.data.forEach(item => {
          if (String(item.client_name) === this.client_name) {
            this.total_price += Number(item.price * item.weight)
            let flag = this.process_info.find(val => val.material === item.material_name)
            if (!flag) {
              this.process_info.push({
                material: item.material_name,
                total_weight: item.weight,
                unit: item.unit ? item.unit : 'kg',
                color_info: [{
                  name: item.color_code,
                  value: item.weight
                }]
              })
            } else {
              flag.total_weight = Number(flag.total_weight) + Number(item.weight)
              let flag2 = flag.color_info.find(val => val.name === item.color_code)
              if (!flag2) {
                flag.color_info.push({
                  name: item.color_code,
                  value: item.weight
                })
              } else {
                flag2.value = Number(flag2.value) + Number(item.weight)
              }
            }
          }
        })
        this.loading = false
      })
    }
    // 初始化工厂名称
    companyInfoDetail({
      company_id: window.sessionStorage.getItem('company_id')
    }).then(res => {
      this.company_name = res.data.data.company_name
    })
    // 初始化订单信息
    orderDetail({
      id: this.$route.params.id
    }).then(res => {
      this.order_code = res.data.data.order_code
      this.group_name = res.data.data.group_name
      this.order_company = res.data.data.client_name
      this.order_time = res.data.data.order_time
    })
    // 初始化联系人信息
    authList({
      company_id: window.sessionStorage.getItem('company_id')
    }).then(res => {
      let linkman = res.data.data.find(val => val.id === window.sessionStorage.getItem('user_id'))
      this.linkman = linkman.name
      this.linkman_tel = linkman.mobile
    })
  },
  mounted () {
    const QRCode = require('qrcode')
    this.urlVal = window.location.origin + '/index/rawMaterialStockDetail/' + this.$route.params.id + '/' + this.$route.params.materialType
    // 画二维码里的logo[注意添加logo图片的时候需要使用服务器]
    QRCode.toDataURL(this.urlVal, { errorCorrectionLevel: 'H' }, (err, url) => {
      console.log(err)
      this.qrCodeUrl = url
    })
  }
}
</script>

<style scoped lang="less">
@import "~@/assets/css/rawMaterialProcessTable.less";
</style>
<style lang="less">
html {
  overflow: visible;
}
body {
  overflow: visible;
}
</style>
