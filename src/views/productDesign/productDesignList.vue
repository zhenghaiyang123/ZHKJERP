<template>
  <div id="productDesignList"
    v-getHash="{'categoryVal':categoryVal,'typesVal':typesVal,'styleVal':styleVal,'company':company,'searchVal':searchVal,'group':group,'pages':pages}"
    v-loading="loading">
    <div class="head">
      <h2>生产计划单列表</h2>
      <el-input placeholder="输入订单号精确搜索"
        suffix-icon="el-icon-search"
        v-model="searchVal"></el-input>
    </div>
    <div class="body">
      <div class="filterCtn">
        <div class="filterLine">
          <span class="label">筛选列表:</span>
          <el-tag closable
            v-show="orderTypeCmp"
            @close="clear('orderType')">{{orderTypeCmp}}</el-tag>
          <el-tag closable
            v-show="categoryValCmp"
            @close="clear('categoryVal')">{{categoryValCmp}}</el-tag>
          <el-tag closable
            v-show="typesValCmp"
            @close="clear('typesVal')">{{typesValCmp}}</el-tag>
          <el-tag closable
            v-show="styleValCmp"
            @close="clear('styleVal')">{{styleValCmp}}</el-tag>
          <el-tag closable
            v-show="companyCmp"
            @close="clear('company')">{{companyCmp}}</el-tag>
          <el-tag closable
            v-show="groupCmp"
            @close="clear('group')">{{groupCmp}}</el-tag>
        </div>
        <div class="selectLine">
          <span class="label">筛选条件:</span>
          <div class="leftFilter">
            <el-select v-model="orderType"
              placeholder="订单类型">
              <el-option v-for="item in orderTypeArr"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
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
            <el-select v-model="company"
              filterable
              placeholder="外贸公司">
              <el-option v-for="item in companyArr"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
            <el-select v-model="group"
              placeholder="负责小组">
              <el-option v-for="item in groupArr"
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
        v-scroll="{fun:getProductionList,pageSize:15}">
        <div class="mergeHeader">
          <div class="tableColumn">订单号</div>
          <div class="tableColumn">外贸公司</div>
          <div class="tableColumn"
            style="flex:2">产品信息</div>
          <div class="tableColumn"
            style="flex:0.5">产品图片</div>
          <div class="tableColumn"
            style="flex:0.5">订单数量</div>
          <!-- <div class="tableColumn"
            style="flex:0.5">库存调取</div>
          <div class="tableColumn"
            style="flex:0.5">计划生产</div>
          <div class="tableColumn"
            style="flex:0.5">合计生产</div> -->
          <div class="tableColumn"
            style="flex:0.5">负责小组</div>
          <div class="tableColumn">操作</div>
        </div>
        <div class="mergeBody"
          v-for="(item ,index) in list"
          :style="{'height':(item.lineNum*60)+'px'}"
          :key="index">
          <div class="tableColumn">{{item.order_code}}</div>
          <div class="tableColumn">{{item.client_name}}</div>
          <div class="tableColumn"
            style="flex:2">
            <div class="small"
              style="height:60px;justify-content: center;"
              v-for="(itemProduct,indexProduct) in item.productList"
              :key="indexProduct">
              <span style="margin:0 5px">{{itemProduct.productCode}}</span>
              <span style="margin:0 5px">{{itemProduct.productInfo.category_info.category_name}}/{{itemProduct.productInfo.category_info.type_name}}/{{itemProduct.productInfo.category_info.style_name}}/{{itemProduct.productInfo.category_info.flower_name}}</span>
            </div>
          </div>
          <div class="tableColumn"
            style="flex:0.5">
            <div class="small"
              style="height:60px;justify-content: center;"
              v-for="(itemProduct,indexProduct) in item.productList"
              :key="indexProduct">
              <div class="imgCtn">
                <img class="img"
                  :src="itemProduct.productInfo.category_info.images.length>0?itemProduct.productInfo.category_info.images[0].thumb:require('@/assets/image/index/noPic.jpg')"
                  :onerror="defaultImg" />
                <div class="toolTips"
                  v-if="itemProduct.productInfo.category_info.images.length>0"><span @click="showImg(itemProduct.productInfo.category_info.images)">点击查看大图</span></div>
                <div class="toolTips"
                  v-if="itemProduct.productInfo.category_info.images.length===0"><span>没有预览图</span></div>
              </div>
            </div>
          </div>
          <div class="tableColumn"
            style="flex:0.5">
            <div class="small"
              style="height:60px;justify-content: center;"
              v-for="(itemProduct,indexProduct) in item.productList"
              :key="indexProduct">
              <span style="margin:0 5px">{{itemProduct.sum}}{{itemProduct.productInfo.category_info.unit}}</span>
            </div>
          </div>
          <!-- <div class="tableColumn"
            style="flex:0.5">
            <div class="small"
              style="height:60px;justify-content: center;"
              v-for="(itemProduct,indexProduct) in item.productList"
              :key="indexProduct">
              <span style="margin:0 5px">{{itemProduct.stockSum}}{{itemProduct.productInfo.category_info.unit}}</span>
            </div>
          </div>
          <div class="tableColumn"
            style="flex:0.5">
            <div class="small"
              style="height:60px;justify-content: center;"
              v-for="(itemProduct,indexProduct) in item.productList"
              :key="indexProduct">
              <span style="margin:0 5px">{{itemProduct.total}}{{itemProduct.productInfo.category_info.unit}}</span>
            </div>
          </div>
          <div class="tableColumn"
            style="flex:0.5">
            <div class="small"
              style="height:60px;justify-content: center;"
              v-for="(itemProduct,indexProduct) in item.productList"
              :key="indexProduct">
              <span style="margin:0 5px">{{itemProduct.total + itemProduct.stockSum}}{{itemProduct.productInfo.category_info.unit}}</span>
            </div>
          </div> -->
          <div class="tableColumn"
            style="flex:0.5">{{item.group_name}}</div>
          <div class="tableColumn"
            style="flex-direction:row;">
            <div style="margin:auto">
              <span class="btns warning"
                @click="$router.push('/index/productDesignUpdate/'+item.id+'/'+item.plan_id)">修改</span>
              <span class="btns success"
                @click="$router.push('/index/productDesignDetail/'+item.id)">详情</span>
            </div>
          </div>
        </div>
        <div class="mergeBody"
          v-if="list.length===0">
          <div style="width:100%;text-align:center;line-height:59px;">暂无数据</div>
        </div>
      </div>
      <div class="pageCtn">
        <el-pagination background
          :page-size="15"
          layout="prev, pager, next"
          :total="total"
          :current-page.sync="pages"
          @current-change="getProductionList">
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
      first: true, // 判断是不是第一次进入页面
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
      category: [], // 大类
      categoryVal: '',
      types: [], // 二级分类
      typesVal: '',
      style: [], // 三级分类
      styleVal: '',
      companyArr: [],
      company: '',
      group: '',
      groupArr: [],
      orderType: null,
      orderTypeArr: [
        {
          id: null,
          name: '全部订单'
        },
        {
          id: 1,
          name: '产品订单'
        }, {
          id: 2,
          name: '样品订单'
        }
      ],
      timer: '',
      start_time: '',
      end_time: ''
    }
  },
  methods: {
    getProductionList () {
      this.loading = true
      productionList({
        'company_id': window.sessionStorage.getItem('company_id'),
        'limit': 15,
        'page': this.pages,
        'category_id': this.categoryVal,
        'type_id': this.typesVal,
        'style_id': this.styleVal,
        'client_id': this.company,
        'group_id': this.group,
        'order_code': this.searchVal,
        'start_time': this.start_time,
        'end_time': this.end_time,
        'order_type': this.orderType
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
      this.getProductionList()
    },
    // 删除条件
    clear (item) {
      if (item === 'categoryVal') {
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
      } else if (item === 'company') {
        this.company = ''
      } else if (item === 'group') {
        this.group = ''
      } else if (item === 'orderType') {
        this.orderType = null
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
        this.getProductionList()
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
        this.getProductionList()
      }
    },
    styleVal (newVal) {
      if (!this.first) {
        if (newVal) {
          this.pages = 1
        }
        this.getProductionList()
      }
    },
    searchVal (newVal) {
      if (!this.first) {
        if (newVal) {
          this.pages = 1
        }
        this.getProductionList()
      }
    },
    company (newVal) {
      if (!this.first) {
        if (newVal) {
          this.pages = 1
        }
        this.getProductionList()
      }
    },
    group (newVal) {
      if (!this.first) {
        if (newVal) {
          this.pages = 1
        }
        this.getProductionList()
      }
    },
    orderType (newVal) {
      // if (!this.first) {
      // if (newVal) {
      this.pages = 1
      // }
      this.getProductionList()
      // }
    }
  },
  computed: {
    orderTypeCmp () {
      // if (this.orderType) {
      return this.orderTypeArr.find(item => item.id === this.orderType).name
      // } else {
      //   return '所有分类'
      // }
    },
    categoryValCmp () {
      if (this.categoryVal) {
        return this.category.find((item) => item.id === this.categoryVal).name
      } else {
        return ''
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
    companyCmp () {
      if (this.company) {
        return this.companyArr.find((item) => item.id === this.company).name
      } else {
        return ''
      }
    },
    groupCmp () {
      if (this.group) {
        return this.groupArr.find((item) => item.id === this.group).name
      } else {
        return ''
      }
    }
  },
  created () {
    const hash = window.location.hash ? JSON.parse(decodeURIComponent(window.location.hash).slice(1)) : {}
    // 分页的特殊性单独处理
    this.pages = hash.pages
    Promise.all([productTppeList({
      company_id: window.sessionStorage.getItem('company_id')
    }), clientList({
      company_id: window.sessionStorage.getItem('company_id'),
      keyword: '',
      status: 1
    }), getGroup({
      company_id: window.sessionStorage.getItem('company_id')
    })]).then((res) => {
      this.category = res[0].data.data
      this.companyArr = res[1].data.data.filter((item) => (item.type.indexOf(1) !== -1))
      this.groupArr = res[2].data.data
      for (let key in hash) {
        this[key] = hash[key]
      }
      this.getProductionList()
    })
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/css/productDesignList.less";
</style>
<style lang="less">
#productDesignList {
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
  width: 100%;
  height: 100%;
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
