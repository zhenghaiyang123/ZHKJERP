<template>
  <div id="rawMaterialOutStock"
    v-loading="loading">
    <div class="head">
      <h2>{{type === '0' ? '原' : '辅'}}料出库
        <i class="el-icon-message-solid"
          :class="{'active':msgFlag}"
          @click="showMsg = true"></i>
      </h2>
      <div class="goStock"
        @click="addAllOutStockInfo">一键添加出库</div>
    </div>
    <div class="body">
      <div class="stepCtn">
        <div class="stepTitle">订单信息</div>
        <div class="borderCtn">
          <div class="cicle"></div>
          <div class="border"></div>
        </div>
        <div class="lineCtn">
          <div class="inputCtn">
            <span class="label">订单号:</span>
            <span class="content important"
              @click="$router.push('/index/orderDetail/' + $route.params.id)">{{order_code}}</span>
          </div>
          <div class="inputCtn">
            <span class="label">外贸公司:</span>
            <span class="content">{{client_name}}</span>
          </div>
        </div>
        <div class="lineCtn">
          <div class="inputCtn">
            <span class="label">下单日期:</span>
            <span class="content">{{order_time}}</span>
          </div>
          <div class="inputCtn">
            <span class="label">负责小组:</span>
            <span class="content">{{group_name}}</span>
          </div>
        </div>
      </div>
      <div class="stepCtn">
        <div class="stepTitle">{{type === '0' ? '原' : '辅'}}料信息</div>
        <div class="borderCtn">
          <div class="cicle"></div>
          <div class="border"></div>
        </div>
        <div class="lineCtn">
          <div class="inputCtn noPadding">
            <div class="content">
              <ul class="tablesCtn">
                <li class="title">
                  <span>计划{{type === '0' ? '原' : '辅'}}料</span>
                  <span class="flex17">
                    <span>{{type === '0' ? '颜色' : '属性'}}</span>
                    <span>数量</span>
                  </span>
                  <span>已计划</span>
                  <span>已入库</span>
                  <span>已出库</span>
                </li>
                <li class="content"
                  v-for="(item,key) in materialList"
                  :key="key">
                  <span class="tableRow">{{item.material}}</span>
                  <span class="tableRow flex17 col">
                    <span v-for="(val,ind) in item.need"
                      :key="ind"
                      class="tableColumn">
                      <span class="tableRow">{{val.name}}</span>
                      <span class="tableRow">{{val.value|fixedFilter}}{{item.unit}}</span>
                    </span>
                  </span>
                  <span class="tableRow">{{(item.plan_number ? item.plan_number : 0)|fixedFilter}}{{item.unit}}</span>
                  <span class="tableRow">{{(item.goStock_number ? item.goStock_number : 0)|fixedFilter}}{{item.unit}}</span>
                  <span class="tableRow">{{(item.outStock_number ? item.outStock_number : 0)|fixedFilter}}{{item.unit}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="stepCtn">
        <div class="stepTitle">生产信息</div>
        <div class="borderCtn">
          <div class="cicle"></div>
          <div class="border"></div>
        </div>
        <div class="lineCtn">
          <div class="inputCtn noPadding">
            <div class="content">
              <ul class="tablesCtn">
                <li class="title">
                  <span>生产单位</span>
                  <span class="flex22">
                    <span class="flex17">产品信息</span>
                    <span class="flex12">
                      <span>尺码/配色</span>
                      <span>数量</span>
                    </span>
                  </span>
                  <span class="flex20">
                    <span>所需{{type === '0' ? '原' : '辅'}}料</span>
                    <span>
                      <span>{{type === '0' ? '颜色' : '属性'}}</span>
                      <span>数量</span>
                    </span>
                  </span>
                </li>
                <li v-if="productionList.length === 0">
                  <span @click="$router.push('/index/productDesignWeavingCreate/' + $route.params.id)">暂无生产信息(添加)</span>
                </li>
                <li class="content"
                  v-for="(item,key) in productionList"
                  :key="key">
                  <span class="tableRow">{{item.name}}</span>
                  <span class="tableRow flex22 col">
                    <span v-for="(value,index) in item.production"
                      :key="index"
                      class="tableColumn">
                      <span class="tableRow flex17"><span class="flex06">{{value.product_code}}</span><span>{{value.product_class}}</span></span>
                      <span class="tableRow flex12 col">
                        <span v-for="(ite,ka) in value.product_detail"
                          :key="ka"
                          class="tableColumn">
                          <span class="tableRow">{{ite.size + '/' + ite.color }}</span>
                          <span class="tableRow">{{ite.number + '条'}}</span>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span class="tableRow flex20 col">
                    <span v-for="(value,index) in item.materials"
                      :key="index"
                      class="tableColumn">
                      <span class="tableRow">{{value.material}}</span>
                      <span class="tableRow col">
                        <span v-for="(ite,ka) in value.colors"
                          :key="ka"
                          class="tableColumn">
                          <span class="tableRow">{{ite.color }}</span>
                          <span class="tableRow">{{ite.number|fixedFilter}}{{ite.unit}}</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="stepCtn">
        <div class="stepTitle">{{type === '0' ? '原' : '辅'}}料出库</div>
        <div class="borderCtn">
          <div class="cicle"></div>
        </div>
        <div class="lineCtn col"
          v-for="(item,key) in list"
          :key="key">
          <div class="tablePlan">
            <div class="tableTitle">
              <span>{{type === '0' ? '原' : '辅'}}料名称</span>
              <span>合计数量</span>
              <span>已出库数量</span>
              <span>待出库数量</span>
            </div>
            <div class="tableInfo">
              <span>{{item.material}}</span>
              <span>{{(item.total_number ? item.total_number : 0)|fixedFilter}}{{item.unit}}</span>
              <span>{{((item.stock_number ? item.stock_number : 0) + (item.stocks_number ? item.stocks_number : 0))|fixedFilter}}{{item.unit}}</span>
              <span>{{(item.total_number - (item.stock_number ? item.stock_number : 0) - (item.stocks_number ? item.stocks_number : 0))|fixedFilter}}{{item.unit}}</span>
            </div>
          </div>
          <div class="buyInfo">
            <ul class="buyFrom"
              v-for="(iten,kay) in item.stockInfo"
              :key="kay">
              <li>
                <span>出库单位</span>:
                <el-select v-model="iten.outStockClient"
                  placeholder="请选择出库单位"
                  size="small">
                  <el-option v-for="(value,index) in item.client_name"
                    :key="index"
                    :label="value.name"
                    :value="value.id">
                  </el-option>
                </el-select>
              </li>
              <li>
                <span>{{type === '0' ? '原料颜色' : '辅料属性'}}</span>:
                <el-select v-model="iten.materialColor"
                  :placeholder="type === '0' ? '请选择颜色' : '请选择属性'"
                  size="small">
                  <el-option v-for="value in update(item,iten.outStockClient)"
                    :key="value.value"
                    :value="value">
                  </el-option>
                </el-select>
              </li>
              <li v-for="(value,index) in iten.stockWeightInfo"
                :key="index"
                class="col">
                <div>
                  <span>批号/缸号</span>:
                  <el-select v-model="value.dyelot_number"
                    placeholder="请选择批/缸号"
                    size="small">
                    <el-option v-for="value in item.vatList[iten.materialColor] ? item.vatList[iten.materialColor] : []"
                      :key="value.value"
                      :value="value">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  <span>件数/数量</span>:
                  <el-input size="small"
                    placeholder="件数"
                    v-model="value.number">
                    <template slot="append">件</template>
                  </el-input>
                  <el-input size="small"
                    placeholder="数量"
                    v-model="value.weight">
                    <template slot="append">{{item.unit}}</template>
                  </el-input>
                </div>
                <em v-if="index === 0"
                  class="el-icon-plus"
                  @click="appendStockWeightInfo(key,kay)"></em>
                <em v-else
                  class="el-icon-delete"
                  @click="deleteStockWeightInfo(key,kay,index)"></em>
              </li>
              <li>
                <span>出库时间</span>:
                <el-date-picker v-model="iten.stock_time"
                  align="right"
                  type="date"
                  placeholder="选择出库时间"
                  size="small"
                  value-format="yyyy-MM-dd"
                  style="width:243px"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </li>
              <li>
                <span>备注</span>:
                <el-input type="textarea"
                  placeholder="请输入内容"
                  style="width:243px;margin: 0 0 0 15px;height:45px;"
                  v-model="iten.remark">
                </el-input>
              </li>
              <span class="el-icon-close"
                @click="deleteStockInfo(key,kay)"></span>
            </ul>
          </div>
          <div class="addBtn"
            @click="addStockInfo(key)">
            <span>+</span>
            <span>添加出库</span>
          </div>
        </div>
      </div>
      <div class="btnCtn">
        <div class="cancleBtn"
          @click="$router.go(-1)">返回</div>
        <div class="okBtn"
          @click="saveAll">保存</div>
      </div>
    </div>
    <my-message :visible.sync="showMsg"
      :url="localName"
      :afterSave="afterSave"></my-message>
  </div>
</template>

<script>
import { orderDetail, rawMaterialOrderInit, weaveDetail, productionDetail, rawMaterialOutStock, rawMaterialGoStockDetail, rawMaterialOutStockDetail, notifySave } from '@/assets/js/api.js'
export default {
  data () {
    return {
      localName: 'rawMaterialOutStock',
      showMsg: false,
      msgFlag: window.localStorage.getItem('rawMaterialOutStock') ? JSON.parse(window.localStorage.getItem('rawMaterialOutStock')).msgFlag : false,
      msgUrl: '',
      content: '',
      loading: true,
      order_code: '',
      client_name: '',
      order_time: '',
      group_name: '',
      now_time: '',
      type: '',
      materialList: [],
      list: [],
      productionList: [],
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      outStockInfo: []
    }
  },
  filters: {
    fixedFilter (item) {
      return Number(item).toFixed(2)
    }
  },
  watch: {
    list: {
      deep: true,
      handler: function () {
        this.list.forEach(item => {
          let num = 0
          item.stockInfo.forEach(value => {
            value.stockWeightInfo.forEach(val => {
              num += Number(val.weight)
            })
          })
          item.stock_number = num
        })
      }
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
          this.$message.success('出库成功')
          this.$router.push(this.msgUrl)
        }
      })
    },
    addAllOutStockInfo () {
      let info = JSON.parse(JSON.stringify(this.productionList))
      this.outStockInfo.forEach(item => {
        let client = info.find(key => key.name === item.client_name)
        if (client) {
          let material = client.materials.find(key => key.material === item.material_name)
          if (material) {
            let color = material.colors.find(key => key.color === item.color_code)
            if (color) {
              color.number -= item.weight
            }
          }
        }
      })
      let keys = true
      info.forEach(item => {
        item.materials.forEach(valMater => {
          valMater.colors.forEach(valColor => {
            if (valColor.number > 0) {
              keys = false
              let flag = this.list.find(key => key.material === valMater.material)
              if (flag) {
                flag.stockInfo.push({
                  materialColor: valColor.color,
                  remark: '',
                  outStockClient: item.client_id,
                  stock_time: this.now_time,
                  stockWeightInfo: [
                    {
                      dyelot_number: '',
                      number: 1,
                      weight: valColor.number
                    }
                  ]
                })
              }
            }
          })
        })
      })
      if (keys) {
        this.$message.warning('已出库完成，无法继续添加出库')
      }
    },
    update (item, key) {
      if (!key) {
        return []
      }
      let arr = item.client_name.find(val => val.id === key)
      if (arr) {
        return item.colors[arr.name]
      } else {
        return []
      }
    },
    appendStockWeightInfo (key, kay) {
      this.list[key].stockInfo[kay].stockWeightInfo.push({
        dyelot_number: '',
        number: '',
        weight: ''
      })
    },
    deleteStockWeightInfo (key, kay, index) {
      this.list[key].stockInfo[kay].stockWeightInfo.splice(index, 1)
    },
    addStockInfo (key) {
      this.list[key].stockInfo.push({
        materialColor: '',
        remark: '',
        outStockClient: '',
        stock_time: this.now_time,
        stockWeightInfo: [
          {
            dyelot_number: '',
            number: '',
            weight: ''
          }
        ]
      })
    },
    deleteStockInfo (key, kay) {
      this.list[key].stockInfo.splice(kay, 1)
    },
    saveAll () {
      let arr = []
      let flag = true
      let nums = 0
      this.list.forEach(item => {
        if ((Number(item.stocks_number ? item.stocks_number : 0) + Number(item.stock_number ? item.stock_number : 0)) > Number(item.total_number)) {
          this.$message({
            message: '出库数量超出合计数量，不被允许的操作，请重新输入',
            type: 'error'
          })
          flag = false
          return
        }
        nums += item.stockInfo.length
        item.stockInfo.forEach(value => {
          value.stockWeightInfo.forEach(val => {
            if (!value.materialColor) {
              this.$message({
                message: '请选择颜色',
                type: 'error'
              })
              flag = false
              return
            }
            if (!val.number) {
              this.$message({
                message: '请输入总件数',
                type: 'error'
              })
              flag = false
              return
            }
            if (!val.weight) {
              this.$message({
                message: '请输入数量',
                type: 'error'
              })
              flag = false
              return
            }
            if (!value.outStockClient) {
              this.$message({
                message: '请选择出库单位',
                type: 'error'
              })
              flag = false
              return
            }
            if (!value.stock_time) {
              this.$message({
                message: '请选择出库时间',
                type: 'error'
              })
              flag = false
              return
            }
            arr.push({
              company_id: window.sessionStorage.getItem('company_id'),
              order_id: this.$route.params.id,
              material_name: item.material,
              user_id: window.sessionStorage.getItem('user_id'),
              vat_code: ((val.dyelot_number !== '默认' && val.dyelot_number) ? val.dyelot_number : 'vat_null'),
              color_code: value.materialColor,
              number: val.number,
              client_id: value.outStockClient,
              weight: val.weight,
              complete_time: value.stock_time,
              desc: value.remark,
              stock_id: 0,
              type: (this.type === '0' ? 1 : 2)
            })
          })
        })
      })
      if (flag) {
        if (nums === 0) {
          this.$message({
            message: '无可提交的信息',
            type: 'error'
          })
        } else {
          rawMaterialOutStock({
            data: arr
          }).then(res => {
            if (res.data.code === 200) {
              if (this.msgFlag) {
                this.msgUrl = '/index/rawMaterialStockDetail/' + this.$route.params.id + '/' + this.$route.params.type
                this.content = '订单' + this.order_code + '<span style="color:#1A95FF">物料出库</span>'
                this.sendMsg()
              } else {
                this.$message.success('出库成功')
                this.$router.push('/index/rawMaterialStockDetail/' + this.$route.params.id + '/' + this.$route.params.type)
              }
            } else if (res.data.code === 500) {
              this.$message({
                message: res.data.message,
                type: 'error'
              })
            }
          })
        }
      }
    }
  },
  created () {
    this.type = this.$route.params.type
    let nowDate = new Date()
    this.now_time = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1 < 10 ? '0' + (nowDate.getMonth() + 1) : (nowDate.getMonth() + 1)) + '-' + (nowDate.getDate() < 10 ? '0' + nowDate.getDate() : nowDate.getDate())
    Promise.all([
      orderDetail({
        id: this.$route.params.id
      }),
      rawMaterialOrderInit({
        order_id: this.$route.params.id
      }),
      weaveDetail({
        order_id: this.$route.params.id
      }),
      productionDetail({
        order_id: this.$route.params.id
      }),
      rawMaterialGoStockDetail({
        order_id: this.$route.params.id
      }),
      rawMaterialOutStockDetail({
        order_id: this.$route.params.id
      })
    ]).then(res => {
      this.order_code = res[0].data.data.order_code
      this.client_name = res[0].data.data.client_name
      this.order_time = res[0].data.data.order_time
      this.group_name = res[0].data.data.group_name
      this.loading = false
      let materialInfo = res[1].data.data
      for (let prop in materialInfo.material_info) {
        let item = materialInfo.material_info
        for (let value in item[prop]) {
          if (value !== 'total_number' && value !== 'type' && value !== 'unit') {
            if (item[prop].type === Number(this.type)) {
              let flag = this.materialList.find(val => val.material === prop)
              if (!flag) {
                this.materialList.push({
                  material: prop,
                  plan_number: (item[prop].unit === '克' || item[prop].unit === 'g') ? Math.ceil(item[prop][value]) / 1000 : item[prop][value],
                  unit: (item[prop].unit === '克' || item[prop].unit === 'g') ? 'kg' : item[prop].unit === '千克' ? 'kg' : item[prop].unit,
                  need: [{
                    name: value,
                    value: (item[prop].unit === '克' || item[prop].unit === 'g') ? Math.ceil(item[prop][value]) / 1000 : item[prop][value]
                  }]
                })
              } else {
                flag.plan_number = Number(flag.plan_number) + Number((item[prop].unit === '克' || item[prop].unit === 'g') ? Math.ceil(item[prop][value]) / 1000 : item[prop][value])
                let arr = flag.need.find(val => val.name === value)
                if (!arr) {
                  flag.need.push({
                    name: value,
                    value: (item[prop].unit === '克' || item[prop].unit === 'g') ? Math.ceil(item[prop][value]) / 1000 : item[prop][value]
                  })
                } else {
                  arr.value = Number(arr.value) + Number((item[prop].unit === '克' || item[prop].unit === 'g') ? Math.ceil(item[prop][value]) / 1000 : item[prop][value])
                }
              }
            }
          }
        }
      }
      // 生产信息初始化
      let productionInfo = res[2].data.data
      let productsInfo = res[3].data.data
      // 分配信息初始化
      productionInfo.forEach(item => {
        let types = item.product_info.category_name + '/' + item.product_info.type_name + '/' + item.product_info.style_name + (item.product_info.flower_name ? ('/' + item.product_info.flower_name) : '')
        let flag = this.productionList.find(val => val.name === item.client_name)
        if (!flag) {
          this.productionList.push({
            name: item.client_name,
            client_id: item.client_id,
            production: [{
              product_code: item.product_info.product_code,
              product_class: types,
              product_detail: [{
                color: item.color,
                number: item.number,
                size: item.size
              }]
            }]
          })
        } else {
          let flag1 = flag.production.find(val => val.product_code === item.product_info.product_code)
          if (!flag1) {
            flag.production.push({
              product_code: item.product_info.product_code,
              product_class: types,
              product_detail: [{
                color: item.color,
                number: item.number,
                size: item.size
              }]
            })
          } else {
            let flag2 = flag1.product_detail.find(val => ((val.size === item.size) && (val.color === item.color)))
            if (!flag2) {
              flag1.product_detail.push({
                color: item.color,
                number: item.number,
                size: item.size
              })
            } else {
              flag2.number = Number(flag2.number) + Number(item.number)
            }
          }
        }
      })
      // 分配信息插入总计划生产数量与订单数量
      this.productionList.forEach(item => {
        item.production.forEach(val => {
          val.product_detail.forEach(valPro => {
            let flag = productsInfo.production_detail.product_info.find(key => (key.product_code === val.product_code && key.color === valPro.color && key.size === valPro.size))
            if (flag) {
              valPro.plan_number = flag.total_num
              valPro.order_number = flag.order_num
            }
          })
        })
      })
      // 所需原料初始化
      let materials = []
      for (let prop in productsInfo.product_plan) {
        materials.push(...productsInfo.product_plan[prop])
      }
      this.productionList.forEach(item => {
        item.production.forEach(value => {
          value.product_detail.forEach(val => {
            materials.forEach(vals => {
              if (vals.type === Number(this.type) && vals.product_code === value.product_code && vals.size === val.size && vals.color_match_name === val.color) {
                let fleg = productsInfo.production_detail.product_info.find(key => key.product_code === value.product_code)
                if (fleg) {
                  value.product_sunhao = fleg.production_sunhao
                }
                if (!item.materials) {
                  item.materials = []
                }
                let flag = item.materials.find(key => key.material === vals.material_name)
                if (!flag) {
                  item.materials.push({
                    material: vals.material_name,
                    colors: [{
                      color: vals.color_name,
                      number: (vals.unit === '克' || vals.unit === 'g') ? ((vals.number * val.order_number * (val.number / val.plan_number) * (1 + Number(value.product_sunhao) / 100)) / 1000) : (vals.number * val.order_number * (val.number / val.plan_number) * (1 + Number(value.product_sunhao) / 100)),
                      unit: (vals.unit === '克' || vals.unit === 'g') ? 'kg' : vals.unit
                    }]
                  })
                } else {
                  let flag1 = flag.colors.find(key => key.color === vals.color_name)
                  if (!flag1) {
                    flag.colors.push({
                      color: vals.color_name,
                      number: (vals.unit === '克' || vals.unit === 'g') ? ((vals.number * val.order_number * (val.number / val.plan_number) * (1 + Number(value.product_sunhao) / 100)) / 1000) : (vals.number * val.order_number * (val.number / val.plan_number) * (1 + Number(value.product_sunhao) / 100)),
                      unit: (vals.unit === '克' || vals.unit === 'g') ? 'kg' : vals.unit
                    })
                  } else {
                    flag1.number += (vals.unit === '克' || vals.unit === 'g') ? ((vals.number * val.order_number * (val.number / val.plan_number) * (1 + Number(value.product_sunhao) / 100)) / 1000) : (vals.number * val.order_number * (val.number / val.plan_number) * (1 + Number(value.product_sunhao) / 100))
                  }
                }
              }
            })
          })
        })
      })
      // 初始化出库信息
      this.productionList.forEach(item => {
        item.materials.forEach(value => {
          value.colors.forEach(val => {
            let flag = this.list.find(key => key.material === value.material)
            if (!flag) {
              this.list.push({
                material: value.material,
                client_name: [{
                  name: item.name,
                  id: item.client_id
                }],
                colors: {
                  [item.name]: ['白胚', val.color]
                },
                total_number: val.number,
                unit: val.unit,
                stock_number: 0,
                stockInfo: [],
                vatList: {}
              })
            } else {
              flag.total_number = Number(flag.total_number) + Number(val.number)
              if (!flag.colors[item.name]) {
                flag.colors[item.name] = [val.color]
              } else {
                let color = flag.colors[item.name].find(key => key === val.color)
                if (!color) {
                  flag.colors[item.name].push(val.color)
                }
              }
              let client = flag.client_name.find(key => key.name === item.name)
              if (!client) {
                flag.client_name.push({
                  name: item.name,
                  id: item.client_id
                })
              }
            }
          })
        })
      })
      // 初始化原料缸号信息
      let vatInfo = res[4].data.data
      vatInfo.forEach(item => {
        let flag = this.list.find(val => val.material === item.material_name)
        if (flag) {
          if (!flag.vatList) {
            flag.vatList = {}
          }
          if (!flag.vatList[item.color_code]) {
            flag.vatList[item.color_code] = [(item.vat_code === 'vat_null' ? '默认' : item.vat_code)]
          } else {
            let flag1 = flag.vatList[item.color_code].find(val => (val === item.vat_code || (val === '默认' && item.vat_code === 'vat_null')))
            if (!flag1) {
              flag.vatList[item.color_code].push(item.vat_code === 'vat_null' ? '默认' : item.vat_code)
            }
          }
        }
        let fleg = this.materialList.find(val => val.material === item.material_name)
        if (fleg) {
          fleg.goStock_number = Number(fleg.goStock_number ? fleg.goStock_number : 0) + Number(item.total_weight)
        }
      })
      // 初始化原料出库数量
      this.outStockInfo = res[5].data.data
      this.outStockInfo.forEach(item => {
        let flag = this.list.find(val => val.material === item.material_name)
        if (flag) {
          flag.stocks_number = Number(flag.stocks_number ? flag.stocks_number : 0) + Number(item.weight)
        }
        let fleg = this.materialList.find(val => val.material === item.material_name)
        if (fleg) {
          fleg.outStock_number = Number(fleg.outStock_number ? fleg.outStock_number : 0) + Number(item.weight)
        }
      })
    })
  }
}
</script>

<style scoped lang='less'>
@import "~@/assets/css/rawMaterialOutStock.less";
</style>
<style lang="less" scoped>
#rawMaterialOutStock {
  position: relative;
  .goStock {
    position: absolute;
    top: 30px;
    right: 30px;
    width: 7em;
    height: 40px;
    line-height: 40px;
    background: #1a95ff;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    cursor: pointer;
  }
}
</style>
