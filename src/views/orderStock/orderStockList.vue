<template>
  <div id="rawMaterialOrderList"
    v-loading='loading'
    v-getHash="{'categoryVal':categoryVal,'typesVal':typesVal,'styleVal':styleVal,'clientVal':clientVal,'searchVal':searchVal,'groupVal':groupVal,'pages':pages}">
    <div class="head">
      <h2>产品出入库列表</h2>
      <el-input placeholder="输入文字精确搜索"
        suffix-icon="el-icon-search"
        v-model="searchVal"></el-input>
    </div>
    <div class="body">
      <div class="filterCtn">
        <div class="filterLine">
          <span class="label">筛选列表:</span>
          <el-tag closable
            v-show="categoryCmp"
            @close="clear('category')">{{categoryCmp}}</el-tag>
          <el-tag closable
            v-show="typesValCmp"
            @close="clear('typesVal')">{{typesValCmp}}</el-tag>
          <el-tag closable
            v-show="styleValCmp"
            @close="clear('styleVal')">{{styleValCmp}}</el-tag>
          <el-tag closable
            v-show="clientValCmp"
            @close="clear('clientVal')">{{clientValCmp}}</el-tag>
          <el-tag closable
            v-show="groupValCmp"
            @close="clear('groupVal')">{{groupValCmp}}</el-tag>
        </div>
        <div class="selectLine">
          <span class="label">筛选条件:</span>
          <div class="leftFilter">
            <el-select v-model="categoryVal"
              placeholder="筛选品类">
              <el-option v-for="item in category"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select v-model="typesVal"
              placeholder="筛选类型">
              <el-option v-for="item in types"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select v-model="styleVal"
              placeholder="筛选款型">
              <el-option v-for="item in style"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select v-model="clientVal"
              filterable
              placeholder="筛选公司">
              <el-option v-for="item in client"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select v-model="groupVal"
              placeholder="筛选小组">
              <el-option v-for="item in group"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </div>
          <div class="rightFilter">
            <el-date-picker v-model="date"
              type="daterange"
              align="right"
              unlink-panels
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
              @change="pickTime">
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="mergeTable"
        v-scroll="{fun:getOrderList,pageSize:15}">
        <div class="mergeHeader">
          <div class="tableColumn">订单号</div>
          <div class="tableColumn">外贸公司</div>
          <div class="tableColumn"
            style="flex-direction:row;flex:3.5">
            <span class='flex2'
              style="border-right:1px solid #DDD;">产品信息</span>
            <span class="flex06"
              style="border-right:1px solid #DDD;">下单数</span>
            <span class="flex06">图片</span>
          </div>
          <div class="tableColumn flex08">负责小组</div>
          <div class="tableColumn flex08">下单日期</div>
          <div class="tableColumn">交货日期</div>
          <div class="tableColumn flex08">操作</div>
        </div>
        <div class="mergeBody"
          v-for="(item,key) in list"
          :key="key">
          <div class="tableColumn">{{item.order_code}}</div>
          <div class="tableColumn">{{item.client_name}}</div>
          <div class="tableColumn"
            style="flex:3.5">
            <div class="once onces"
              v-for="(itemProduct,indexProduct) in item.productList"
              :key="indexProduct">
              <span class="flex2"
                style="border-right:1px solid #DDD;">
                <span>{{itemProduct.productCode}}</span>
                <!-- <span>{{itemProduct.productType}}</span> -->
                <span>{{itemProduct.productInfo.category_info.category_name}}/{{itemProduct.productInfo.category_info.type_name}}/{{itemProduct.productInfo.category_info.style_name}}/{{itemProduct.productInfo.category_info.flower_name}}</span>
              </span>
              <span class="flex06"
                style="border-right:1px solid #DDD;">{{itemProduct.sum + '条'}}</span>
              <span class="flex06"
                style="height:60px;">
                <div class="imgCtn">
                  <img class="img"
                    :src="itemProduct.productInfo.category_info.images.length>0?itemProduct.productInfo.category_info.images[0].thumb:require('@/assets/image/index/noPic.jpg')"
                    :onerror="defaultImg" />
                  <div class="toolTips"
                    v-if="itemProduct.productInfo.category_info.images.length>0"><span @click="showImg(itemProduct.productInfo.category_info.images)">点击查看大图</span></div>
                  <div class="toolTips"
                    v-if="itemProduct.productInfo.category_info.images.length===0"><span>没有预览图</span></div>
                </div>
              </span>
            </div>
          </div>
          <div class="tableColumn flex08">{{item.group_name}}</div>
          <div class="tableColumn flex08">{{item.order_time}}</div>
          <div class="tableColumn">
            <div class="once"
              v-for="(itemTime,indexTime) in item.delivery_time"
              :key="indexTime">
              <span>第 {{indexTime + 1}} 批：</span>
              <span>{{itemTime}}</span>
            </div>
          </div>
          <div class="tableColumn flex08"
            style="flex-direction:row;">
            <div>
              <span class="btns success"
                @click="$router.push('/index/orderStockDetail/'+item.id)">详情</span>
            </div>
          </div>
        </div>
      </div>
      <div class="pageCtn">
        <el-pagination background
          :page-size="15"
          layout="prev, pager, next"
          :total="total"
          :current-page.sync="pages"
          @current-change="getOrderList">
        </el-pagination>
      </div>
    </div>
    <div class="shade"
      v-show="showShade">
      <div class="main">
        <div class="closeBtn"
          @click="showShade=false">点此退出预览</div>
        <el-carousel indicator-position="outside"
          height="550px"
          arrow="always">
          <el-carousel-item v-for="item in imgList"
            :key="item.image_url">
            <img :src="item.image_url"
              class="imgList" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { productionList, productTppeList, clientList, getGroup } from '@/assets/js/api.js'
export default {
  data () {
    return {
      defaultImg: 'this.src="' + require('@/assets/image/index/noPic.jpg') + '"',
      showShade: false,
      imgList: [],
      first: true,
      loading: true,
      searchVal: '',
      date: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      total: 0,
      pages: 1,
      list: [],
      client: [], // 公司
      clientVal: '',
      category: [], // 分类
      categoryVal: '',
      types: [], // 二级分类
      typesVal: '',
      style: [], // 三级分类
      styleVal: '',
      group: [], // 小组
      groupVal: '',
      timer: '',
      start_time: '',
      end_time: ''
    }
  },
  methods: {
    getOrderList () {
      this.loading = true
      productionList({
        'company_id': window.sessionStorage.getItem('company_id'),
        'limit': 15,
        'page': this.pages,
        'client_id': this.clientVal,
        'category_id': this.categoryVal,
        'type_id': this.typesVal,
        'style_id': this.styleVal,
        'group_id': this.groupVal,
        'order_code': this.searchVal,
        'start_time': this.start_time,
        'end_time': this.end_time,
        'order_type': 1
      }).then((res) => {
        this.loading = false
        this.total = res.data.meta.total
        this.list = res.data.data.map((item) => {
          let productList = []
          let deliveryTime = []
          for (let prop in item.order_info.order_batch) {
            let itemOrder = item.order_info.order_batch[prop]
            for (let index in itemOrder) {
              let itemBatch = itemOrder[index]
              if (productList.find((itemFind) => itemFind.productCode === itemBatch.product_code)) {
                let mark = -1
                productList.forEach((itemFind, index) => {
                  if (itemFind.productCode === itemBatch.product_code) {
                    mark = index
                  }
                })
                productList[mark].sum = productList[mark].sum + itemBatch.numbers
              } else {
                productList.push({
                  productInfo: itemBatch,
                  productCode: itemBatch.product_code,
                  sum: itemBatch.numbers
                })
              }
              if (deliveryTime.indexOf(itemBatch.delivery_time) === -1) {
                deliveryTime.push(itemBatch.delivery_time)
              }
            }
          }
          // 统计产品库存调取数量
          productList = productList.map((itemProduct) => {
            return {
              productCode: itemProduct.productCode,
              productInfo: itemProduct.productInfo,
              sum: itemProduct.sum,
              stockSum: item.product_info.reduce((total, itemFind) => {
                if (itemFind.product_code === itemProduct.productCode) {
                  return parseInt(total) + parseInt(itemFind.stock_pick)
                } else {
                  return total
                }
              }, 0),
              total: item.product_info.reduce((total, itemFind) => {
                if (itemFind.product_code === itemProduct.productCode) {
                  return parseInt(total) + parseInt(itemFind.total_num)
                } else {
                  return total
                }
              }, 0)
            }
          })
          return {
            plan_id: item.id,
            id: item.order_info.id,
            total_price: item.order_info.total_price + item.order_info.account_unit,
            group_name: item.order_info.group_name,
            order_code: item.order_info.order_code,
            order_time: item.order_info.order_time,
            client_name: item.order_info.client_name,
            contacts: item.order_info.contacts,
            delivery_time: deliveryTime,
            productList: productList,
            lineNum: productList.length
          }
        })
        this.first = false
      })
    },
    pickTime (date) {
      if (date) {
        this.start_time = date[0]
        this.end_time = date[1]
      } else {
        this.start_time = ''
        this.end_time = ''
      }
      this.pages = 1
      this.getOrderList()
    },
    // 删除条件
    clear (item) {
      if (item === 'clientVal') {
        this.clientVal = ''
      } else if (item === 'category') {
        this.categoryVal = ''
        this.typesVal = ''
        this.types = []
        this.styleVal = ''
        this.style = []
      } else if (item === 'typesVal') {
        this.typesVal = ''
        this.styleVal = ''
        this.style = []
      } else if (item === 'styleVal') {
        this.styleVal = ''
      } else if (item === 'groupVal') {
        this.groupVal = ''
      }
    },
    showImg (imgList) {
      this.imgList = imgList
      this.showShade = true
    }
  },
  watch: {
    categoryVal (newVal) {
      if (this.first) {
        const finded = this.category.find((item) => item.id === newVal)
        this.types = finded ? finded.child : []
      } else {
        if (newVal) {
          this.types = this.category.find((item) => item.id === newVal).child
          this.typesVal = ''
          this.styleVal = ''
          this.style = []
          this.pages = 1
        }
        this.getOrderList()
      }
    },
    typesVal (newVal) {
      if (this.first) {
        const finded = this.types.find((item) => item.id === newVal)
        this.style = finded ? finded.child : []
      } else {
        if (newVal) {
          this.style = this.types.find((item) => item.id === newVal).child
          this.styleVal = ''
          this.pages = 1
        }
        this.getOrderList()
      }
    },
    styleVal (newVal) {
      if (!this.first) {
        if (newVal) {
          this.pages = 1
        }
        this.getOrderList()
      }
    },
    searchVal (newVal) {
      if (!this.first) {
        if (newVal) {
          this.pages = 1
        }
        this.getOrderList()
      }
    },
    clientVal (newVal) {
      if (!this.first) {
        if (newVal) {
          this.pages = 1
        }
        this.getOrderList()
      }
    },
    groupVal (newVal) {
      if (!this.first) {
        if (newVal) {
          this.pages = 1
        }
        this.getOrderList()
      }
    }
  },
  computed: {
    clientValCmp () {
      if (this.clientVal) {
        return this.client.find((item) => item.id === this.clientVal).name
      } else {
        return ''
      }
    },
    categoryCmp () {
      if (this.categoryVal) {
        return this.category.find((item) => item.id === this.categoryVal).name
      } else {
        return '所有分类'
      }
    },
    typesValCmp () {
      if (this.typesVal) {
        return this.types.find((item) => item.id === this.typesVal).name
      } else {
        return ''
      }
    },
    styleValCmp () {
      if (this.styleVal) {
        return this.style.find((item) => item.id === this.styleVal).name
      } else {
        return ''
      }
    },
    groupValCmp () {
      if (this.groupVal) {
        return this.group.find((item) => item.id === this.groupVal).name
      } else {
        return ''
      }
    }
  },
  created () {
    const hash = window.location.hash ? JSON.parse(decodeURIComponent(window.location.hash).slice(1)) : {}
    // 分页的特殊性单独处理
    this.pages = hash.pages
    Promise.all([clientList({
      company_id: window.sessionStorage.getItem('company_id')
    }), productTppeList({
      company_id: window.sessionStorage.getItem('company_id')
    }), getGroup({
      company_id: window.sessionStorage.getItem('company_id')
    })]).then((res) => {
      this.client = res[0].data.data.filter((item) => (item.type.indexOf(1) !== -1))
      this.category = res[1].data.data
      this.group = res[2].data.data
      for (let key in hash) {
        this[key] = hash[key]
      }
      this.getOrderList()
    })
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/css/rawMaterialOrderList.less";
</style>
<style lang="less">
#orderList {
  .el-carousel__arrow {
    color: #fff;
    background: #1a95ff;
    &:hover {
      background: #48aaff;
    }
  }
}
.imgCtn {
  position: relative;
  height: 60px;
  width: 100%;
  &:hover {
    .toolTips {
      display: block;
    }
  }
  .img {
    width: 48px;
    padding: 6px;
    height: 48px;
  }
  .toolTips {
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    text-align: center;
    line-height: 60px;
    cursor: pointer;
    span {
      color: #fff;
      &:hover {
        color: #1a95ff;
      }
    }
  }
}
</style>
