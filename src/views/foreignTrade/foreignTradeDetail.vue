<template>
  <div id="foreignTradeDetail">
    <div class="head">
      <h2>客户详情</h2>
    </div>
    <div class="body">
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">客户名称：</span>
          <span class="content">{{companyInfo.name}}</span>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">客户简称：</span>
          <span class="content">{{companyInfo.abbreviation}}</span>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">公司类型：</span>
          <span class="content"><template v-for="(val,ind) in companyInfo.type">{{( ind !== 0 ? ',' : '' ) + val}}</template></span>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">合作状态：</span>
          <span class="content">{{companyInfo.status===1?'合作中':'暂停合作'}}</span>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">公司人员：</span>
          <div class="specialTable">
            <div class="tableHead">
              <div class="once">姓名</div>
              <div class="once">职务</div>
              <div class="once">联系号码</div>
              <div class="once">状态</div>
            </div>
            <div class="tableBody">
              <div class="line"
                v-for="item in companyInfo.contacts"
                :key="item.id">
                <div class="once">{{item.name}}</div>
                <div class="once">{{item.station}}</div>
                <div class="once">{{item.phone}}</div>
                <div class="once">{{item.status===1?'在职':'离职'}}</div>
              </div>
              <div class="line"
                v-if="companyInfo.contacts.length === 0"
                style="justify-content:center;color:#CCC">暂无人员信息</div>
            </div>
          </div>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">联系电话：</span>
          <span class="content">{{companyInfo.phone}}</span>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">公司地址：</span>
          <span class="content">{{companyInfo.address}}</span>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">创建时间：</span>
          <span class="content">{{companyInfo.create_time}}</span>
        </div>
      </div>
      <div class="lineCtn">
        <div class="inputCtn">
          <span class="label">更新时间：</span>
          <span class="content">{{companyInfo.update_time}}</span>
        </div>
      </div>
      <div class="btnCtn">
        <div class="cancleBtn"
          @click="$router.go(-1)">返回</div>
        <div class="okBtn"
          @click="$router.push('/index/foreignTradeUpdate/' + $route.params.id)">修改</div>
      </div>
    </div>
  </div>
</template>

<script>
import { companyType } from '@/assets/js/dictionary.js'
import { clientDetail } from '@/assets/js/api.js'
export default {
  data () {
    return {
      companyInfo: {
        name: '',
        abbreviation: '',
        address: '',
        contacts: [],
        status: 1,
        phone: '',
        create_time: '',
        update_time: '',
        type: []
      }
    }
  },
  methods: {
    clearAll () {

    },
    saveAll () {

    }
  },
  mounted () {
    clientDetail({
      id: this.$route.params.id
    }).then((res) => {
      if (res.data.status) {
        this.companyInfo = res.data.data
        let arr = []
        this.companyInfo.type.map(res => {
          arr.push(companyType.find((item) => item.value === res).name)
        })
        this.companyInfo.type = arr
      }
    })
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/css/foreignTradeDetail.less";
</style>
