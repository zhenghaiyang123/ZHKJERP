<template>
  <div id="productDesignWeavingTable"
    @click.right="goTop"
    v-loading='loading'>
    <!-- <h2>{{company_name + '产品报价单'}}</h2>
    <div class="processCodeTime">
      <span>报价单编号：{{price_code}}</span>
      <span>创建时间：{{create_time}}</span>
    </div> -->
    <div class="head">
      <div class="left">
        <p class="company">{{company_name + '产品报价单'}}</p>
        <span>报价单编号：{{price_code}}</span>
        <!-- <span><span class="label">创建人:</span>{{create_user}}</span> -->
        <!-- <span><span class="label">联系人电话:</span>{{linkman_tel}}</span> -->
        <span><span class="label">创建日期:</span>{{create_time}}</span>
      </div>
      <div class="right">
        <img :src="qrCodeUrl"
          alt=""
          ref="qrcodeCanvas"
          class="qrcode">
        <div class="messages">
          <span>扫一扫</span>
          <span>查看电子文稿</span>
        </div>
      </div>
    </div>
    <div class="tableBox">
      <div>
        <span>
          <span>创建人</span>
          <span>{{create_user}}</span>
          <span>共计报价</span>
          <span>{{total_price}}</span>
        </span>
        <span>
          <span>外贸公司</span>
          <span>{{client_name}}</span>
          <span>联系人</span>
          <span>{{linkMan}}</span>
        </span>
      </div>
      <div>
        <span>
          <span>结算单位</span>
          <span>{{unit}}</span>
          <span>汇率</span>
          <span>{{exchange_rate}}</span>
        </span>
      </div>
      <div>
        <span>
          <span>产品信息</span>
          <span class="col">
            <span v-for="(item,key) in product_info"
              :key="key">
              <span class="blue">{{item.product_info.product_code}}</span>
              <span>{{item.product_info|filterType}}</span>
            </span>
          </span>
          <span>产品需求</span>
          <span>{{product_need}}</span>
        </span>
      </div>
      <!-- <div>
        <span>
          <span>生产单位</span>
          <span>{{client_name === 'null' ? '仓库' : client_name}}</span>
          <span>总价</span>
          <span>{{total_price|fixedFilter}}{{'元'}}</span>
        </span>
      </div> -->
      <div>
        <ul class="tables"
          style="width:inherit">
          <li class="title">
            <span>名称</span>
            <span>克重/数量</span>
            <span>单价</span>
            <span>损耗</span>
            <span>其他</span>
            <span>总价</span>
          </li>
          <li v-for="(item,key) in info"
            :key="key"
            class="content">
            <span class="tableRow">{{item.name}}</span>
            <span class="tableRow">{{item.number ? item.number : '-'}}{{(item.unit && item.number ? item.unit : '')}}</span>
            <span class="tableRow">{{item.price ? item.price : '-'}}{{(item.unit&&item.price) ? '元/' + item.unit : ''}}</span>
            <span class="tableRow">{{item.sunhao ? item.sunhao + '%' : '-'}}</span>
            <span class="tableRow">{{item.other ? item.other + (item.name === '针织织造' ? '针' : '梭') : '-'}}</span>
            <span class="tableRow">{{item.totalPrice ? item.totalPrice : 0}}元</span>
          </li>
        </ul>
      </div>
      <div style="margin-top:60px">
        <ul class="tables">
          <li class="content">
            <span class="tableRow">基本佣金</span>
            <span class="tableRow">-</span>
            <span class="tableRow">-</span>
            <span class="tableRow">-</span>
            <span class="tableRow">{{yongjin.prop ? yongjin.prop : 0}}%</span>
            <span class="tableRow">{{yongjin.price ? yongjin.price : 0}}元</span>
          </li>
          <li class="content">
            <span class="tableRow">基本税费</span>
            <span class="tableRow">-</span>
            <span class="tableRow">-</span>
            <span class="tableRow">-</span>
            <span class="tableRow">{{shuifei.prop ? shuifei.prop : 0}}%</span>
            <span class="tableRow">{{shuifei.price ? shuifei.price : 0}}元</span>
          </li>
          <li class="content">
            <span class="tableRow">基本利润</span>
            <span class="tableRow">-</span>
            <span class="tableRow">-</span>
            <span class="tableRow">-</span>
            <span class="tableRow">{{lirun.prop ? lirun.prop : 0}}%</span>
            <span class="tableRow">{{lirun.price ? lirun.price : 0}}元</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { priceListDetail, companyInfoDetail } from '@/assets/js/api.js'
export default {
  data () {
    return {
      loading: true,
      company_name: '',
      price_code: '',
      create_time: '',
      create_user: '',
      total_price: '',
      client_name: '',
      linkMan: '',
      qrCodeUrl: '',
      unit: '',
      product_need: '',
      exchange_rate: '',
      product_info: [],
      info: [],
      yongjin: {
        prop: '',
        price: ''
      },
      shuifei: {
        prop: '',
        price: ''
      },
      lirun: {
        prop: '',
        price: ''
      }
    }
  },
  filters: {
    fixedFilter (item) {
      return Number(item).toFixed(2)
    },
    filterType (item) {
      return item.category_name + '/' + item.type_name + '/' + item.style_name
    }
  },
  methods: {
    goTop () {
      document.body.scrollTop = 0
    }
  },
  created () {
    this.loading = false
    let date = new Date()
    this.create_time = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate())
    priceListDetail({
      id: this.$route.params.id
    }).then(res => {
      let data = res.data.data
      this.price_code = data.quotation_code
      this.create_user = data.user_name
      this.client_name = data.client_name
      this.total_price = Number(data.total_price).toFixed(2)
      this.linkMan = data.contact_name
      this.unit = data.account_unit
      this.exchange_rate = data.exchange_rate
      this.product_need = data.product_need
      this.product_info = data.product_info
      this.yongjin = JSON.parse(data.commission)
      this.shuifei = JSON.parse(data.tax)
      this.lirun = JSON.parse(data.profit)
      this.info.push(
        ...JSON.parse(data.material_info).map(item => {
          return {
            name: item.key ? item.key : '原料',
            number: item.weight / 1000,
            price: item.price,
            sunhao: item.sunhao,
            totalPrice: item.total_price,
            unit: 'kg'
          }
        }),
        ...JSON.parse(data.assist_info).map(item => {
          return {
            name: item.key ? item.key : '辅料',
            number: item.weight,
            price: item.price,
            sunhao: item.sunhao,
            totalPrice: item.total_price,
            unit: item.unit
          }
        }),
        ...JSON.parse(data.weave_info).map(item => {
          return {
            name: item.key ? item.key : '织造',
            other: item.number,
            totalPrice: item.price
          }
        }),
        ...JSON.parse(data.semi_product_info).map(item => {
          return {
            name: item.key && item.key.length !== 0 ? item.key.join('/') : '半成品加工',
            totalPrice: item.price
          }
        }),
        ...JSON.parse(data.production_info).map(item => {
          return {
            name: item.key && item.key.length !== 0 ? item.key.join('/') : '成品加工',
            totalPrice: item.price
          }
        }),
        ...JSON.parse(data.pack_material_info).map(item => {
          return {
            name: item.key ? item.key : '包装',
            totalPrice: item.price
          }
        }),
        // ...JSON.parse(data.user_info).map(item => {
        //   return {
        //     name: item.key ? item.key : '非生产费用',
        //     totalPrice: item.price
        //   }
        // }),
        ...JSON.parse(data.desc_info).map(item => {
          return {
            name: item.key ? item.key : '其他',
            totalPrice: item.price
          }
        }),
        { name: '非生产费用', totalPrice: data.no_product_cost },
        { name: '运输', totalPrice: data.transport_cost }
      )
    })
    companyInfoDetail({
      id: window.sessionStorage.getItem('company_id')
    }).then(res => {
      this.company_name = res.data.data.company_name
    })
  },
  mounted () {
    const QRCode = require('qrcode')
    this.urlVal = window.location.origin + '/index/priceListDetail/' + this.$route.params.id
    // 画二维码里的logo[注意添加logo图片的时候需要使用服务器]
    QRCode.toDataURL(this.urlVal, { errorCorrectionLevel: 'H' }, (err, url) => {
      console.log(err)
      this.qrCodeUrl = url
    })
  }
}
</script>

<style scoped lang="less">
@import "~@/assets/css/productDesignWeavingTable.less";
</style>
<style lang="less">
html,
body {
  overflow: visible !important;
}
</style>
