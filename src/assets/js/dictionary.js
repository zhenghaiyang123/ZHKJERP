// 字典文件，存储常用json数据
// 公司类型
const companyType = [{
  value: 1,
  name: '外贸公司'
}, {
  value: 2,
  name: '纱线订购单位'
}, {
  value: 3,
  name: '染色单位'
}, {
  value: 4,
  name: '倒纱单位'
}, {
  value: 5,
  name: '裁剪单位'
}]

// 字母映射
const letterArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z']
// 货币
const moneyArr = [{
  name: '元',
  short: '人民币',
  id: 1
}, {
  name: '美元',
  short: 'USD',
  id: 2
}, {
  name: '欧元',
  short: 'EUR',
  id: 3
}, {
  name: '英镑',
  short: 'GBP',
  id: 4
}, {
  name: '日元',
  short: 'JPY',
  id: 5
}, {
  name: '港币',
  short: 'HKD',
  id: 6
}, {
  name: '韩元',
  short: 'KRW',
  id: 7
}, {
  name: '泰铢',
  short: 'THP',
  id: 8
}, {
  name: '缅元',
  short: 'BUK',
  id: 9
}, {
  name: '卢比',
  short: 'INR',
  id: 10
}, {
  name: '卢布',
  short: 'SUR',
  id: 11
}, {
  name: '新西兰元',
  short: 'NZD',
  id: 12
}, {
  name: '加拿大元',
  short: 'CAD',
  id: 13
}, {
  name: '澳大利亚元',
  short: 'AUD',
  id: 14
}
]

// 菜单栏在做中的页面
const menu = [{
  name: '产品管理',
  children: [{
    name: '添加新产品',
    url: '/index/productCreate'
  }, {
    name: '产品列表',
    url: '/index/productList'
  }, {
    name: '产品设置',
    url: '/index/productSetting'
  } ]
}, {
  name: '工艺单管理',
  children: [{
    name: '添加工艺单',
    url: '/index/designFormAdd'
  }, {
    name: '工艺单列表',
    url: '/index/designFormList'
  }, {
    name: '工艺单设置',
    url: '/index/designFormSetting'
  }]
}, {
  name: '配料单管理',
  children: [{
    name: '添加配料单',
    url: '/index/productPlanAdd'
  }, {
    name: '配料单列表',
    url: '/index/productPlanList'
  }]
}, {
  name: '订单管理',
  children: [{
    name: '添加新订单',
    url: '/index/orderCreate'
  }, {
    name: '订单列表',
    url: '/index/orderList'
  }, {
    name: '订单发货列表',
    url: '/index/orderStat'
  }
  // {
  //   name: '添加样品订单(未完成)',
  //   url: '/index/sampleCreate'
  // }, {
  //   name: '样单列表(未完成)',
  //   url: '/index/sampleList'
  // }
  ]
}, {
  name: '库存管理',
  children: [{
    name: '添加产品库存',
    url: '/index/stockProductList'
  }, {
    name: '产品库存列表',
    url: '/index/productStockList'
  }
  // {
  //   name: '添加原料库存',
  //   url: '/index/mainMaterialStockCreate'
  // }, {
  //   name: '原料库存列表',
  //   url: '/index/mainMaterialStockList'
  // },
  // {
  //   name: '添加辅料库存',
  //   url: '/index/otherMaterialStockCreate'
  // }, {
  //   name: '辅料库存列表',
  //   url: '/index/otherMaterialStockList'
  // }
  ]
},
//  {
//   name: '原料管理',
//   children: [{
//     name: '原料预订购',
//     url: '/index/rawMaterialPurchase'
//   }]
// },
{
  name: '生产管理',
  children: [{
    name: '新建生产计划单',
    url: '/index/productDesignCreateList'
  }, {
    name: '生产计划单列表',
    url: '/index/productDesignList'
  }]
}, {
  name: '合作公司管理',
  children: [{
    name: '添加合作公司',
    url: '/index/foreignTradeCreate'
  }, {
    name: '合作公司列表',
    url: '/index/foreignTradeList'
  }]
}]
// 左侧栏菜单 副本
const menu2 = [{
  name: '产品管理',
  children: [{
    name: '添加新产品',
    url: '/index/productCreate'
  }, {
    name: '产品列表',
    url: '/index/productList'
  }, {
    name: '产品设置',
    url: '/index/productSetting'
  } ]
}, {
  name: '工艺单管理',
  children: [{
    name: '添加工艺单',
    url: '/index/designFormAdd'
  }, {
    name: '工艺单列表',
    url: '/index/designFormList'
  }, {
    name: '计划单列表',
    url: '/index/productPlanList'
  }, {
    name: '工艺单设置',
    url: '/index/designFormSetting'
  }]
}, {
  name: '订单管理',
  children: [{
    name: '添加样品订单',
    url: '/index/sampleCreate'
  }, {
    name: '样单列表',
    url: '/index/sampleList'
  }, {
    name: '添加新订单',
    url: '/index/orderCreate'
  }, {
    name: '订单列表',
    url: '/index/orderList'
  }, {
    name: '订单统计列表',
    url: '/index/orderStat'
  }, {
    name: '订单统计',
    url: '/index/null'
  }]
}, {
  name: '库存管理',
  children: [{
    name: '添加产品库存',
    url: '/index/stockProductList'
  }, {
    name: '产品库存列表',
    url: '/index/productStockList'
  }, {
    name: '添加原料库存',
    url: '/index/mainMaterialStockCreate'
  }, {
    name: '原料库存列表',
    url: '/index/mainMaterialStockList'
  }, {
    name: '添加辅料库存',
    url: '/index/otherMaterialStockCreate'
  }, {
    name: '辅料库存列表',
    url: '/index/otherMaterialStockList'
  }]
}, {
  name: '原料管理',
  children: [{
    name: '原料订购',
    url: '/index/null'
  }, {
    name: '原料订购列表',
    url: '/index/null'
  }, {
    name: '原料库存列表',
    url: '/index/null'
  }, {
    name: '原料库存添加',
    url: '/index/null'
  }, {
    name: '原料价格表',
    url: '/index/null'
  }, {
    name: '新建原料计划单',
    url: '/index/null'
  }, {
    name: '新建染色计划单',
    url: '/index/null'
  }, {
    name: '新建倒纱计划单',
    url: '/index/null'
  }, {
    name: '原料计划列表',
    url: '/index/null'
  }, {
    name: '染色计划列表',
    url: '/index/null'
  }, {
    name: '倒纱计划列表',
    url: '/index/null'
  }, {
    name: '原料出库列表',
    url: '/index/null'
  }, {
    name: '原料统计',
    url: '/index/null'
  }]
}, {
  name: '辅料管理',
  children: [{
    name: '辅料订购',
    url: '/index/null'
  }, {
    name: '辅料订购列表',
    url: '/index/null'
  }, {
    name: '辅料库存列表',
    url: '/index/null'
  }, {
    name: '辅料库存添加',
    url: '/index/null'
  }, {
    name: '新建辅料计划单',
    url: '/index/null'
  }, {
    name: '辅料计划单列表',
    url: '/index/null'
  }, {
    name: '辅料统计',
    url: '/index/null'
  } ]
}, {
  name: '生产管理',
  children: [{
    name: '新建生产计划单',
    url: '/index/productDesignCreateList'
  }, {
    name: '生产计划列表',
    url: '/index/productDesignList'
  }, {
    name: '生产补纱',
    url: '/index/null'
  }, {
    name: '生产统计',
    url: '/index/null'
  }]
}, {
  name: '半成品管理',
  children: [{
    name: '半成品入库',
    url: '/index/null'
  }, {
    name: '半成品入库列表',
    url: '/index/null'
  }, {
    name: '半成品检验统计',
    url: '/index/null'
  }, {
    name: '半成品检验列表',
    url: '/index/null'
  }, {
    name: '半成品出库',
    url: '/index/null'
  }, {
    name: '半成品出库列表',
    url: '/index/null'
  }]
}, {
  name: '外道加工管理',
  children: [{
    name: '新建外道加工计划单',
    url: '/index/null'
  }, {
    name: '外道加工计划列表',
    url: '/index/null'
  }, {
    name: '更新外道加工计划单',
    url: '/index/null'
  }, {
    name: '外道加工统计',
    url: '/index/null'
  }]
}, {
  name: '成品管理',
  children: [{
    name: '成品入库',
    url: '/index/null'
  }, {
    name: '成品入库列表',
    url: '/index/null'
  }, {
    name: '成品检验统计',
    url: '/index/null'
  }, {
    name: '更新计划出库计划单',
    url: '/index/null'
  }]
}, {
  name: '装箱出库管理',
  children: [{
    name: '装箱统计',
    url: '/index/null'
  }, {
    name: '装箱统计列表',
    url: '/index/null'
  }, {
    name: '新建订单出库计划单',
    url: '/index/null'
  }, {
    name: '订单出库统计',
    url: '/index/null'
  }, {
    name: '更新订单出库计划单',
    url: '/index/null'
  }]
}, {
  name: '财务管理',
  children: [{
    name: '原料财务管理',
    url: '/index/null'
  }, {
    name: '辅料财务管理',
    url: '/index/null'
  }, {
    name: '生产财务管理',
    url: '/index/null'
  }, {
    name: '半成品财务管理',
    url: '/index/null'
  }, {
    name: '外道加工财务管理',
    url: '/index/null'
  }, {
    name: '成品财务管理',
    url: '/index/null'
  }, {
    name: '订单财务管理',
    url: '/index/null'
  }, {
    name: '订单财务统计',
    url: '/index/null'
  }, {
    name: '人力财务管理',
    url: '/index/null'
  }, {
    name: '公司财务统计',
    url: '/index/null'
  }]
}, {
  name: '合作公司管理',
  children: [{
    name: '添加合作公司',
    url: '/index/foreignTradeCreate'
  }, {
    name: '合作公司列表',
    url: '/index/foreignTradeList'
  }]
}]
// 产品品类
const productType = [{
  value: '1',
  label: '围巾',
  children: [{
    value: '1-1',
    label: '针织',
    children: [{
      value: '1-1-1',
      label: '长巾'
    }, {
      value: '1-1-2',
      label: '方巾'
    }, {
      value: '1-1-3',
      label: '披巾'
    }, {
      value: '1-1-4',
      label: '中宽巾'
    }, {
      value: '1-1-5',
      label: '斗篷'
    }, {
      value: '1-1-6',
      label: '围脖'
    }]
  }, {
    value: '1-2',
    label: '梭织',
    children: [{
      value: '1-2-1',
      label: '长巾'
    }, {
      value: '1-2-2',
      label: '方巾'
    }, {
      value: '1-2-3',
      label: '披巾'
    }, {
      value: '1-2-4',
      label: '中宽巾'
    }, {
      value: '1-2-5',
      label: '斗篷'
    }, {
      value: '1-2-6',
      label: '围脖'
    }]
  }, {
    value: '1-3',
    label: '拼接',
    children: [{
      value: '1-3-1',
      label: '长巾'
    }, {
      value: '1-3-2',
      label: '方巾'
    }, {
      value: '1-3-3',
      label: '披巾'
    }, {
      value: '1-3-4',
      label: '中宽巾'
    }, {
      value: '1-3-5',
      label: '斗篷'
    }, {
      value: '1-3-6',
      label: '围脖'
    }]
  }, {
    value: '1-4',
    label: '毛料',
    children: [{
      value: '1-4-1',
      label: '长巾'
    }, {
      value: '1-4-2',
      label: '方巾'
    }, {
      value: '1-4-3',
      label: '披巾'
    }, {
      value: '1-4-4',
      label: '中宽巾'
    }, {
      value: '1-4-5',
      label: '斗篷'
    }, {
      value: '1-4-6',
      label: '围脖'
    }]
  }]
}, {
  value: '2',
  label: '丝巾',
  children: [{
    value: '2-1',
    label: '巴里纱丝巾',
    children: [{
      value: '2-1-1',
      label: '长巾'
    }, {
      value: '2-1-2',
      label: '方巾'
    }, {
      value: '2-1-3',
      label: '三角巾'
    }, {
      value: '2-1-4',
      label: '中宽巾'
    }]
  }, {
    value: '2-2',
    label: '人造纱丝巾',
    children: [{
      value: '2-2-1',
      label: '长巾'
    }, {
      value: '2-2-2',
      label: '方巾'
    }, {
      value: '2-2-3',
      label: '三角巾'
    }, {
      value: '2-2-4',
      label: '中宽巾'
    }]
  }]
}, {
  value: '3',
  label: '帽子',
  children: [{
    value: '3-1',
    label: '草帽',
    children: [{
      value: '3-1-1',
      label: '纸编帽'
    }, {
      value: '3-1-2',
      label: '草编帽'
    }, {
      value: '3-1-3',
      label: '藤编帽'
    }]
  }, {
    value: '3-2',
    label: '针织帽'
  }, {
    value: '3-3',
    label: '棒球帽',
    children: [{
      value: '3-3-1',
      label: '经典棒球帽'
    }, {
      value: '3-3-2',
      label: '网络棒球帽'
    }]
  }, {
    value: '3-4',
    label: '礼帽',
    children: [{
      value: '3-4-1',
      label: '棉质礼帽'
    }]
  }]
}, {
  value: '4',
  label: '手套',
  children: [{
    value: '4-1',
    label: '常规手套'
  }, {
    value: '4-2',
    label: '半指手套'
  }, {
    value: '4-3',
    label: '连指手套'
  }, {
    value: '4-4',
    label: '分指手套'
  }, {
    value: '4-5',
    label: '魔术手套'
  }, {
    value: '4-6',
    label: '翻盖手套'
  }]
}, {
  value: '5',
  label: '耳罩',
  children: [{
    value: '5-1',
    label: '针织耳罩'
  }, {
    value: '5-2',
    label: '毛料耳罩'
  }, {
    value: '5-3',
    label: '混合型耳罩'
  }]
}, {
  value: '6',
  label: '腕套',
  children: [{
    value: '6-1',
    label: '针织腕套'
  }, {
    value: '6-2',
    label: '毛料腕套'
  }, {
    value: '6-3',
    label: '混合型腕套'
  }]
}, {
  value: '7',
  label: '衣服'
}, {
  value: '8',
  label: '裤子'
}, {
  value: '9',
  label: '其它'
}]
// 潘通色卡
const colorList = [{ 'value': '#fce528', 'name': 'yellow U ' }, { 'value': '#fdd920', 'name': 'yellow 012 U ' }, { 'value': '#e8723b', 'name': 'orange 021U ' }, { 'value': '#df615c', 'name': 'warm red U ' }, { 'value': '#d45661', 'name': 'red 032U' }, { 'value': '#b94a7b', 'name': 'Rubine Red U ' }, { 'value': '#c6529e', 'name': 'Rhodamine Red U ' }, { 'value': '#a656b7', 'name': 'Purple U ' }, { 'value': '#6d58ad', 'name': 'Violet U ' }, { 'value': '#3f46a2', 'name': 'Blue 072U ' }, { 'value': '#3d498f', 'name': 'Reflex Blue U ' }, { 'value': '#2982c1', 'name': 'Process Blue ' }, { 'value': '#40a887', 'name': 'Green U ' }, { 'value': '#5f5b56', 'name': 'Black U ' }, { 'value': '#fbe541', 'name': 'Process Yellow U ' }, { 'value': '#bc4e82', 'name': 'Process Magenta U ' }, { 'value': '#4c9dd3', 'name': 'Process Cyan U ' }, { 'value': '#555251', 'name': 'Process Black ' }, { 'value': '#ffe139', 'name': 'Hexa<br>\n                              chrome Yellow U ' }, { 'value': '#ef7d3f', 'name': 'Hexa<br>\n                              chrome Orange U ' }, { 'value': '#c1408e', 'name': 'Hexa<br>\n                              chrome Cagenta U ' }, { 'value': '#4095ce', 'name': 'Hexa<br>\n                              chrome Cyan U ' }, { 'value': '#5eaf6a', 'name': 'Hexa<br>\n                              chrome Green U ' }, { 'value': '#52504f', 'name': 'Hexa<br>\n                              chrome Black U ' }, { 'value': '#f7ee7e', 'name': '100U' }, { 'value': '#f9ef71', 'name': '101U' }, { 'value': '#fbeb4a', 'name': '102U' }, { 'value': '#fce528', 'name': 'Yellow U ' }, { 'value': '#b1a139', 'name': '103U' }, { 'value': '#948a41', 'name': '104U' }, { 'value': '#7e794d', 'name': '105U' }, { 'value': '#f9e96e', 'name': '106U' }, { 'value': '#fae45f', 'name': '107U' }, { 'value': '#fadb4e', 'name': '108U' }, { 'value': '#f9c62f', 'name': '109U' }, { 'value': '#bf9f37', 'name': '110U' }, { 'value': '#958540', 'name': '111U' }, { 'value': '#847a44', 'name': '112U' }, { 'value': '#f9e169', 'name': '113U' }, { 'value': '#f9db5d', 'name': '114U' }, { 'value': '#f9d050', 'name': '115U' }, { 'value': '#f6bb34', 'name': '116U' }, { 'value': '#ac8f3c', 'name': '117U' }, { 'value': '#988441', 'name': '118U' }, { 'value': '#80784d', 'name': '119U' }, { 'value': '#f8da74', 'name': '120U' }, { 'value': '#f8d26a', 'name': '121U' }, { 'value': '#f8c458', 'name': '122U' }, { 'value': '#f5af3d', 'name': '123U' }, { 'value': '#cb943c', 'name': '124U' }, { 'value': '#9c8144', 'name': '125U' }, { 'value': '#8a7847', 'name': '126U' }, { 'value': '#f7e6a0', 'name': '1205U' }, { 'value': '#f8df8c', 'name': '1215U' }, { 'value': '#f6bd5e', 'name': '1225U' }, { 'value': '#f4ac49', 'name': '1235U' }, { 'value': '#b08e4c', 'name': '1245U' }, { 'value': '#98824d', 'name': '1255U' }, { 'value': '#85774f', 'name': '1265U' }, { 'value': '#f2e083', 'name': '127U' }, { 'value': '#efd36c', 'name': '128U' }, { 'value': '#e5b350', 'name': '129U' }, { 'value': '#de993d', 'name': '130U' }, { 'value': '#b4873d', 'name': '131U' }, { 'value': '#8c7740', 'name': '132U' }, { 'value': '#736a47', 'name': '133U' }, { 'value': '#f7d480', 'name': '134U' }, { 'value': '#f7c571', 'name': '135U' }, { 'value': '#f4ad58', 'name': '136U' }, { 'value': '#f19e45', 'name': '137U' }, { 'value': '#c4803d', 'name': '138U' }, { 'value': '#997643', 'name': '139U' }, { 'value': '#7d6e4b', 'name': '140U' }, { 'value': '#f7d292', 'name': '1345U' }, { 'value': '#f7c884', 'name': '1355U' }, { 'value': '#f4ae65', 'name': '1365U' }, { 'value': '#f09a4e', 'name': '1375U' }, { 'value': '#bb7f48', 'name': '1385U' }, { 'value': '#8f7149', 'name': '1395U' }, { 'value': '#78684c', 'name': '1405U' }, { 'value': '#e9c070', 'name': '141U' }, { 'value': '#e4b063', 'name': '142U' }, { 'value': '#e0a157', 'name': '143U' }, { 'value': '#d88a47', 'name': '144U' }, { 'value': '#b47d44', 'name': '145U' }, { 'value': '#8f7245', 'name': '146U' }, { 'value': '#756c50', 'name': '147U' }, { 'value': '#f6c68a', 'name': '148U' }, { 'value': '#f5b778', 'name': '149U' }, { 'value': '#ef9456', 'name': '150U' }, { 'value': '#eb8649', 'name': '151U' }, { 'value': '#c67743', 'name': '152U' }, { 'value': '#9b6c46', 'name': '153U' }, { 'value': '#876748', 'name': '154U' }, { 'value': '#f7a871', 'name': '1485U' }, { 'value': '#f4945b', 'name': '1495U' }, { 'value': '#ef8348', 'name': '1505U' }, { 'value': '#e8723b', 'name': 'Orange 021U' }, { 'value': '#af6840', 'name': '1525U' }, { 'value': '#8d6548', 'name': '1535U' }, { 'value': '#725d48', 'name': '1545U' }, { 'value': '#eace9b', 'name': '155U' }, { 'value': '#e4ba86', 'name': '156U' }, { 'value': '#d89364', 'name': '157U' }, { 'value': '#d17f53', 'name': '158U' }, { 'value': '#b5744e', 'name': '159U' }, { 'value': '#916b4b', 'name': '160U' }, { 'value': '#75654e', 'name': '161U' }, { 'value': '#f5c4a5', 'name': '1555U' }, { 'value': '#f2ad89', 'name': '1565U' }, { 'value': '#ee956f', 'name': '1575U' }, { 'value': '#e98258', 'name': '1585U' }, { 'value': '#ba6f4e', 'name': '1595U' }, { 'value': '#956a51', 'name': '1605U' }, { 'value': '#866450', 'name': '1615U' }, { 'value': '#f5bea1', 'name': '162U' }, { 'value': '#ef9a7a', 'name': '163U' }, { 'value': '#ea8464', 'name': '164U' }, { 'value': '#e67552', 'name': '165U' }, { 'value': '#c66b4e', 'name': '166U' }, { 'value': '#a2664e', 'name': '167U' }, { 'value': '#7d6050', 'name': '168U' }, { 'value': '#f1a38e', 'name': '1625U' }, { 'value': '#ee937d', 'name': '1635U' }, { 'value': '#ea816a', 'name': '1645U' }, { 'value': '#e47155', 'name': '1655U' }, { 'value': '#c5664f', 'name': '1665U' }, { 'value': '#986351', 'name': '1675U' }, { 'value': '#855f50', 'name': '1685U' }, { 'value': '#f3b7ae', 'name': '169U' }, { 'value': '#ed8d80', 'name': '170U' }, { 'value': '#e77769', 'name': '171U' }, { 'value': '#e16854', 'name': '172U' }, { 'value': '#b56252', 'name': '173U' }, { 'value': '#8c5b4f', 'name': '174U' }, { 'value': '#785c53', 'name': '175U' }, { 'value': '#f4b0b7', 'name': '176U' }, { 'value': '#ee8b91', 'name': '177U' }, { 'value': '#e77476', 'name': '178U' }, { 'value': '#df615c', 'name': 'Warm Red U ' }, { 'value': '#c35d5a', 'name': '179U' }, { 'value': '#a55c5b', 'name': '180U' }, { 'value': '#7d5755', 'name': '181U' }, { 'value': '#efa3b0', 'name': '1765U' }, { 'value': '#e88997', 'name': '1775U' }, { 'value': '#dc6571', 'name': '1785U' }, { 'value': '#d75d64', 'name': '1788U' }, { 'value': '#bd5a5e', 'name': '1795U' }, { 'value': '#9a5657', 'name': '1805U' }, { 'value': '#815655', 'name': '1815U' }, { 'value': '#eeb7c3', 'name': '1767U' }, { 'value': '#e38091', 'name': '1777U' }, { 'value': '#db6777', 'name': '1787U' }, { 'value': '#d45661', 'name': 'Red 032U' }, { 'value': '#b1545c', 'name': '1797U' }, { 'value': '#95585f', 'name': '1807U' }, { 'value': '#6d5555', 'name': '1817U' }, { 'value': '#efb5c4', 'name': '182U' }, { 'value': '#e58ca1', 'name': '183U' }, { 'value': '#dc6f83', 'name': '184U' }, { 'value': '#cd5061', 'name': '185U' }, { 'value': '#b3515e', 'name': '186U' }, { 'value': '#9a535c', 'name': '187U' }, { 'value': '#7a5459', 'name': '188U' }, { 'value': '#e9a5bb', 'name': '189U' }, { 'value': '#e0829c', 'name': '190U' }, { 'value': '#d5657e', 'name': '191U' }, { 'value': '#ca5067', 'name': '192U' }, { 'value': '#a54f5f', 'name': '193U' }, { 'value': '#89525e', 'name': '194U' }, { 'value': '#75545b', 'name': '195U' }, { 'value': '#e8aec4', 'name': '1895U' }, { 'value': '#e294b0', 'name': '1905U' }, { 'value': '#d26685', 'name': '1915U' }, { 'value': '#c64e6c', 'name': '1925U' }, { 'value': '#ac4b63', 'name': '1935U' }, { 'value': '#924e61', 'name': '1945U' }, { 'value': '#865160', 'name': '1955U' }, { 'value': '#e5c2c8', 'name': '196U' }, { 'value': '#da9caa', 'name': '197U' }, { 'value': '#c96b7d', 'name': '198U' }, { 'value': '#bd5265', 'name': '199U' }, { 'value': '#a24f5e', 'name': '200U' }, { 'value': '#8f5661', 'name': '201U' }, { 'value': '#7d545d', 'name': '202U' }, { 'value': '#dea9c1', 'name': '203U' }, { 'value': '#d07f9f', 'name': '204U' }, { 'value': '#c56182', 'name': '205U' }, { 'value': '#b84969', 'name': '206U' }, { 'value': '#974d65', 'name': '207U' }, { 'value': '#805465', 'name': '208U' }, { 'value': '#755561', 'name': '209U' }, { 'value': '#e89bc4', 'name': '210U' }, { 'value': '#df80af', 'name': '211U' }, { 'value': '#d86d9e', 'name': '212U' }, { 'value': '#c95482', 'name': '213U' }, { 'value': '#b14f76', 'name': '214U' }, { 'value': '#95506d', 'name': '215U' }, { 'value': '#7b5464', 'name': '216U' }, { 'value': '#e4bcd8', 'name': '217U' }, { 'value': '#d387b7', 'name': '218U' }, { 'value': '#c35d91', 'name': '219U' }, { 'value': '#b94a7b', 'name': 'Rubine Red U ' }, { 'value': '#984c72', 'name': '220U' }, { 'value': '#8a4c6c', 'name': '221U' }, { 'value': '#79576b', 'name': '222U' }, { 'value': '#e3a2d3', 'name': '223U' }, { 'value': '#d984c0', 'name': '224U' }, { 'value': '#cb60a1', 'name': '225U' }, { 'value': '#ba4584', 'name': '226U' }, { 'value': '#994777', 'name': '227U' }, { 'value': '#814f6f', 'name': '228U' }, { 'value': '#735566', 'name': '229U' }, { 'value': '#eaabd9', 'name': '230U' }, { 'value': '#dd7fc4', 'name': '231U' }, { 'value': '#d164af', 'name': '232U' }, { 'value': '#c6529e', 'name': 'Rhodamine Red U ' }, { 'value': '#b04f8f', 'name': '233U' }, { 'value': '#96517f', 'name': '234U' }, { 'value': '#834f72', 'name': '235U' }, { 'value': '#e2a3da', 'name': '236U' }, { 'value': '#d784cb', 'name': '237U' }, { 'value': '#cb69ba', 'name': '238U' }, { 'value': '#bd50a6', 'name': '239U' }, { 'value': '#a55093', 'name': '240U' }, { 'value': '#945086', 'name': '241U' }, { 'value': '#7e5573', 'name': '242U' }, { 'value': '#eac4e4', 'name': '2365U' }, { 'value': '#d083cd', 'name': '2375U' }, { 'value': '#c368bb', 'name': '2385U' }, { 'value': '#b756ae', 'name': '2395U' }, { 'value': '#a2529a', 'name': '2405U' }, { 'value': '#94518d', 'name': '2415U' }, { 'value': '#86527f', 'name': '2425U' }, { 'value': '#dcaade', 'name': '243U' }, { 'value': '#d394d6', 'name': '244U' }, { 'value': '#c87ecb', 'name': '245U' }, { 'value': '#b257b2', 'name': '246U' }, { 'value': '#a04e9e', 'name': '247U' }, { 'value': '#8c4f8b', 'name': '248U' }, { 'value': '#795576', 'name': '249U' }, { 'value': '#debbe2', 'name': '250U' }, { 'value': '#ca92d8', 'name': '251U' }, { 'value': '#b46cc5', 'name': '252U' }, { 'value': '#a656b7', 'name': 'Purple U ' }, { 'value': '#9e56af', 'name': '253U' }, { 'value': '#8b5499', 'name': '254U' }, { 'value': '#77577d', 'name': '255U' }, { 'value': '#d0b9db', 'name': '256U' }, { 'value': '#b89cc9', 'name': '257U' }, { 'value': '#9677aa', 'name': '258U' }, { 'value': '#866899', 'name': '259U' }, { 'value': '#7e658a', 'name': '260U' }, { 'value': '#745e7c', 'name': '261U' }, { 'value': '#705e73', 'name': '262U' }, { 'value': '#cbabe2', 'name': '2562U' }, { 'value': '#ba92da', 'name': '2572U' }, { 'value': '#a476ca', 'name': '2582U' }, { 'value': '#9360bb', 'name': '2592U' }, { 'value': '#8559a5', 'name': '2602U' }, { 'value': '#78588b', 'name': '2612U' }, { 'value': '#735d7a', 'name': '2622U' }, { 'value': '#ba9cd0', 'name': '2563U' }, { 'value': '#a787c3', 'name': '2573U' }, { 'value': '#9775b4', 'name': '2583U' }, { 'value': '#7e5d9a', 'name': '2593U' }, { 'value': '#75588b', 'name': '2603U' }, { 'value': '#715684', 'name': '2613U' }, { 'value': '#6b5579', 'name': '2623U' }, { 'value': '#b099d2', 'name': '2567U' }, { 'value': '#967cbf', 'name': '2577U' }, { 'value': '#856bb0', 'name': '2587U' }, { 'value': '#745a9f', 'name': '2597U' }, { 'value': '#705892', 'name': '2607U' }, { 'value': '#6d578a', 'name': '2617U' }, { 'value': '#6a5780', 'name': '2627U' }, { 'value': '#d5c8e8', 'name': '263U' }, { 'value': '#b1a0df', 'name': '264U' }, { 'value': '#8d79cc', 'name': '265U' }, { 'value': '#7b63bc', 'name': '266U' }, { 'value': '#6f5ba4', 'name': '267U' }, { 'value': '#69598a', 'name': '268U' }, { 'value': '#67597d', 'name': '269U' }, { 'value': '#bfb4e3', 'name': '2635U' }, { 'value': '#aea0dd', 'name': '2645U' }, { 'value': '#9484cf', 'name': '2655U' }, { 'value': '#7f6cbf', 'name': '2665U' }, { 'value': '#6d58ad', 'name': 'Violet U ' }, { 'value': '#655398', 'name': '2685U' }, { 'value': '#665a7d', 'name': '2695U' }, { 'value': '#acadd9', 'name': '270U' }, { 'value': '#9c9dd0', 'name': '271U' }, { 'value': '#8585be', 'name': '272U' }, { 'value': '#5e5890', 'name': '273U' }, { 'value': '#585381', 'name': '274U' }, { 'value': '#554f76', 'name': '275U' }, { 'value': '#59546b', 'name': '276U' }, { 'value': '#b5b3e4', 'name': '2705U' }, { 'value': '#9794d8', 'name': '2715U' }, { 'value': '#827cca', 'name': '2725U' }, { 'value': '#5b51a3', 'name': '2735U' }, { 'value': '#56508e', 'name': '2745U' }, { 'value': '#544f82', 'name': '2755U' }, { 'value': '#524e75', 'name': '2765U' }, { 'value': '#cdd2ea', 'name': '2706U' }, { 'value': '#a4ace2', 'name': '2716U' }, { 'value': '#7276c6', 'name': '2726U' }, { 'value': '#5b5aad', 'name': '2736U' }, { 'value': '#56589a', 'name': '2746U' }, { 'value': '#555784', 'name': '2756U' }, { 'value': '#545675', 'name': '2766U' }, { 'value': '#c4d4ee', 'name': '2707U' }, { 'value': '#afc5ec', 'name': '2717U' }, { 'value': '#6a86d8', 'name': '2727U' }, { 'value': '#3f46a2', 'name': 'Blue 072U' }, { 'value': '#424b81', 'name': '2747U' }, { 'value': '#434b74', 'name': '2757U' }, { 'value': '#4c5067', 'name': '2767U' }, { 'value': '#b1c1e6', 'name': '2708U' }, { 'value': '#7183ce', 'name': '2718U' }, { 'value': '#5663b4', 'name': '2728U' }, { 'value': '#454995', 'name': '2738U' }, { 'value': '#484d80', 'name': '2748U' }, { 'value': '#484d76', 'name': '2758U' }, { 'value': '#484b67', 'name': '2768U' }, { 'value': '#b3cbe9', 'name': '277U' }, { 'value': '#99b6e5', 'name': '278U' }, { 'value': '#7191d6', 'name': '279U' }, { 'value': '#3d498f', 'name': 'Reflex Blue U' }, { 'value': '#445082', 'name': '280U' }, { 'value': '#444e73', 'name': '281U' }, { 'value': '#444a64', 'name': '282U' }, { 'value': '#adc9ea', 'name': '283U' }, { 'value': '#8aaee3', 'name': '284U' }, { 'value': '#5e81cc', 'name': '285U' }, { 'value': '#4059a4', 'name': '286U' }, { 'value': '#40538d', 'name': '287U' }, { 'value': '#41507e', 'name': '288U' }, { 'value': '#454d64', 'name': '289U' }, { 'value': '#b9d6ea', 'name': '290U' }, { 'value': '#99bfe8', 'name': '291U' }, { 'value': '#7ba7e0', 'name': '292U' }, { 'value': '#3d5ea8', 'name': '293U' }, { 'value': '#435a87', 'name': '294U' }, { 'value': '#435474', 'name': '295U' }, { 'value': '#475161', 'name': '296U' }, { 'value': '#9cc7e8', 'name': '2905U' }, { 'value': '#7eafe0', 'name': '2915U' }, { 'value': '#6094d4', 'name': '2925U' }, { 'value': '#3b61a9', 'name': '2935U' }, { 'value': '#3d5b8e', 'name': '2945U' }, { 'value': '#435875', 'name': '2955U' }, { 'value': '#445164', 'name': '2965U' }, { 'value': '#95c8e9', 'name': '297U' }, { 'value': '#78b4e3', 'name': '298U' }, { 'value': '#5392d2', 'name': '299U' }, { 'value': '#346db3', 'name': '300U' }, { 'value': '#3a6290', 'name': '301U' }, { 'value': '#425c74', 'name': '302U' }, { 'value': '#455664', 'name': '303U' }, { 'value': '#a5d6e8', 'name': '2975U' }, { 'value': '#72b7e3', 'name': '2985U' }, { 'value': '#529cd7', 'name': '2995U' }, { 'value': '#3076ba', 'name': '3005U' }, { 'value': '#376792', 'name': '3015U' }, { 'value': '#405d72', 'name': '3025U' }, { 'value': '#435562', 'name': '3035U' }, { 'value': '#a8dce9', 'name': '304U' }, { 'value': '#88cce9', 'name': '305U' }, { 'value': '#61b4e1', 'name': '306U ' }, { 'value': '#2982c1', 'name': 'Process Blue U' }, { 'value': '#2e73a1', 'name': '307U' }, { 'value': '#37617c', 'name': '308U' }, { 'value': '#415560', 'name': '309U' }, { 'value': '#90d1e4', 'name': '310U' }, { 'value': '#71c0db', 'name': '311U' }, { 'value': '#55aecf', 'name': '312U' }, { 'value': '#2b8eb3', 'name': '313U' }, { 'value': '#2c7a98', 'name': '314U' }, { 'value': '#386678', 'name': '315U' }, { 'value': '#445860', 'name': '316U' }, { 'value': '#88cfdc', 'name': '3105U' }, { 'value': '#6cbfd2', 'name': '3115U' }, { 'value': '#4fabc1', 'name': '3125U' }, { 'value': '#2b91aa', 'name': '3135U' }, { 'value': '#357688', 'name': '3145U' }, { 'value': '#3a6875', 'name': '3155U' }, { 'value': '#3d5d67', 'name': '3165U' }, { 'value': '#c1e8e4', 'name': '317U' }, { 'value': '#95d8da', 'name': '318U' }, { 'value': '#79cacf', 'name': '319U' }, { 'value': '#389da6', 'name': '320U' }, { 'value': '#368188', 'name': '321U' }, { 'value': '#3e6d73', 'name': '322U' }, { 'value': '#426165', 'name': '323U' }, { 'value': '#a5dad4', 'name': '324U' }, { 'value': '#7bc3bb', 'name': '325U' }, { 'value': '#5caa9f', 'name': '326U' }, { 'value': '#3f8c7d', 'name': '327U' }, { 'value': '#427972', 'name': '328U' }, { 'value': '#446f6a', 'name': '329U' }, { 'value': '#4c6060', 'name': '330U' }, { 'value': '#99ddd3', 'name': '3242U' }, { 'value': '#7dd0c5', 'name': '3252U' }, { 'value': '#5bbcaf', 'name': '3262U' }, { 'value': '#3da498', 'name': '3272U' }, { 'value': '#478a83', 'name': '3282U' }, { 'value': '#4b6c69', 'name': '3292U' }, { 'value': '#4f6461', 'name': '3302U' }, { 'value': '#96decd', 'name': '3245U' }, { 'value': '#79d1bd', 'name': '3255U' }, { 'value': '#5fc1ab', 'name': '3265U' }, { 'value': '#43aa93', 'name': '3275U' }, { 'value': '#4d9182', 'name': '3285U' }, { 'value': '#518479', 'name': '3295U' }, { 'value': '#526862', 'name': '3305U' }, { 'value': '#97d2c0', 'name': '3248U' }, { 'value': '#7ec3ae', 'name': '3258U' }, { 'value': '#64af97', 'name': '3268U' }, { 'value': '#4f9c80', 'name': '3278U' }, { 'value': '#4d8874', 'name': '3288U' }, { 'value': '#4a6f65', 'name': '3298U' }, { 'value': '#4e605c', 'name': '3308U' }, { 'value': '#b1e8d2', 'name': '331U' }, { 'value': '#9ee1c8', 'name': '332U' }, { 'value': '#74cfb1', 'name': '333U' }, { 'value': '#40a887', 'name': 'Green U ' }, { 'value': '#449179', 'name': '334U' }, { 'value': '#4c7c6d', 'name': '335U' }, { 'value': '#4f7066', 'name': '336U' }, { 'value': '#9ad3b7', 'name': '337U' }, { 'value': '#7bbf9e', 'name': '338U' }, { 'value': '#61a986', 'name': '339U' }, { 'value': '#559c78', 'name': '340U' }, { 'value': '#4d7765', 'name': '341U' }, { 'value': '#4f6e61', 'name': '342U' }, { 'value': '#50635d', 'name': '343U' }, { 'value': '#9ae0b9', 'name': '3375U' }, { 'value': '#81d4a6', 'name': '3385U' }, { 'value': '#70c893', 'name': '3395U' }, { 'value': '#56b37e', 'name': '3405U' }, { 'value': '#548169', 'name': '3415U' }, { 'value': '#51715f', 'name': '3425U' }, { 'value': '#4f6258', 'name': '3435U' }, { 'value': '#a8daaf', 'name': '344U' }, { 'value': '#96d1a1', 'name': '345U' }, { 'value': '#7bbe89', 'name': '346U' }, { 'value': '#599e69', 'name': '347U' }, { 'value': '#51845b', 'name': '348U' }, { 'value': '#527058', 'name': '349U' }, { 'value': '#526053', 'name': '350U' }, { 'value': '#a8e3aa', 'name': '351U' }, { 'value': '#98dd9d', 'name': '352U' }, { 'value': '#88d58e', 'name': '353U' }, { 'value': '#54a75d', 'name': '354U' }, { 'value': '#539358', 'name': '355U' }, { 'value': '#527a55', 'name': '356U' }, { 'value': '#586b57', 'name': '357U' }, { 'value': '#a7d688', 'name': '358U' }, { 'value': '#9ccf7e', 'name': '359U' }, { 'value': '#81bc69', 'name': '360U' }, { 'value': '#71ac59', 'name': '361U' }, { 'value': '#658e51', 'name': '362U' }, { 'value': '#648451', 'name': '363U' }, { 'value': '#5e754d', 'name': '364U' }, { 'value': '#c8e490', 'name': '365U' }, { 'value': '#b9dd81', 'name': '366U' }, { 'value': '#a4d16f', 'name': '367U' }, { 'value': '#7fb34e', 'name': '368U' }, { 'value': '#769f4c', 'name': '369U' }, { 'value': '#6d864b', 'name': '370U' }, { 'value': '#67714e', 'name': '371U' }, { 'value': '#dbee91', 'name': '372U' }, { 'value': '#c7e772', 'name': '373U' }, { 'value': '#b8e164', 'name': '374U' }, { 'value': '#91c743', 'name': '375U' }, { 'value': '#80a541', 'name': '376U' }, { 'value': '#798b46', 'name': '377U' }, { 'value': '#6d734d', 'name': '378U' }, { 'value': '#e3eb78', 'name': '379U' }, { 'value': '#d5e364', 'name': '380U' }, { 'value': '#bfd64f', 'name': '381U' }, { 'value': '#a6c43c', 'name': '382U' }, { 'value': '#8e9941', 'name': '383U' }, { 'value': '#828743', 'name': '384U' }, { 'value': '#7a7a4f', 'name': '385U' }, { 'value': '#edef7a', 'name': '386U' }, { 'value': '#e4eb63', 'name': '387U' }, { 'value': '#d9e753', 'name': '388U' }, { 'value': '#c3da36', 'name': '389U' }, { 'value': '#9ba737', 'name': '390U' }, { 'value': '#868842', 'name': '391U' }, { 'value': '#7b7a47', 'name': '392U' }, { 'value': '#f4f289', 'name': '393U' }, { 'value': '#eceb5a', 'name': '394U' }, { 'value': '#e9ea51', 'name': '395U' }, { 'value': '#d9e031', 'name': '396U' }, { 'value': '#a8a836', 'name': '397U' }, { 'value': '#95933a', 'name': '398U' }, { 'value': '#888541', 'name': '399U' }, { 'value': '#f6f183', 'name': '3935U' }, { 'value': '#f5ec5d', 'name': '3945U' }, { 'value': '#f0e743', 'name': '3955U' }, { 'value': '#e9e12d', 'name': '3965U' }, { 'value': '#aca23b', 'name': '3975U' }, { 'value': '#928b44', 'name': '3985U' }, { 'value': '#787347', 'name': '3995U' }, { 'value': '#c2beb5', 'name': '400U' }, { 'value': '#b2aca5', 'name': '401U' }, { 'value': '#9d9892', 'name': '402U' }, { 'value': '#918c87', 'name': '403U' }, { 'value': '#827e79', 'name': '404U' }, { 'value': '#706c67', 'name': '405U' }, { 'value': '#5f5b56', 'name': 'Black U ' }, { 'value': '#beb7b0', 'name': '406U' }, { 'value': '#a79f9a', 'name': '407U' }, { 'value': '#958e89', 'name': '408U' }, { 'value': '#8a8380', 'name': '409U' }, { 'value': '#827b79', 'name': '410U' }, { 'value': '#6e6967', 'name': '411U' }, { 'value': '#605a57', 'name': '412U' }, { 'value': '#bcbbb0', 'name': '413U' }, { 'value': '#a7a79d', 'name': '414U' }, { 'value': '#97968e', 'name': '415U' }, { 'value': '#8a8a83', 'name': '416U' }, { 'value': '#82827c', 'name': '417U' }, { 'value': '#74746f', 'name': '418U' }, { 'value': '#575753', 'name': '419U' }, { 'value': '#c7c7c3', 'name': '420U' }, { 'value': '#aeafad', 'name': '421U' }, { 'value': '#a1a2a1', 'name': '422U' }, { 'value': '#919293', 'name': '423U' }, { 'value': '#7e8081', 'name': '424U' }, { 'value': '#707173', 'name': '425U' }, { 'value': '#59595a', 'name': '426U' }, { 'value': '#c8cac9', 'name': '427U' }, { 'value': '#afb3b4', 'name': '428U' }, { 'value': '#94999d', 'name': '429U' }, { 'value': '#7e8389', 'name': '430U' }, { 'value': '#6c7177', 'name': '431U' }, { 'value': '#62666b', 'name': '432U' }, { 'value': '#56575c', 'name': '433U' }, { 'value': '#d0c8c8', 'name': '434U' }, { 'value': '#b5aaac', 'name': '435U' }, { 'value': '#a19599', 'name': '436U' }, { 'value': '#83787c', 'name': '437U' }, { 'value': '#706669', 'name': '438U' }, { 'value': '#685f61', 'name': '439U' }, { 'value': '#635d5c', 'name': '440U' }, { 'value': '#bfc5c1', 'name': '441U' }, { 'value': '#aaafae', 'name': '442U' }, { 'value': '#979c9d', 'name': '443U' }, { 'value': '#7f8486', 'name': '444U' }, { 'value': '#6c6f72', 'name': '445U' }, { 'value': '#66696a', 'name': '446U' }, { 'value': '#5f5f5e', 'name': '447U' }, { 'value': '#e3dfd8', 'name': 'Warm Gray 1U' }, { 'value': '#d4d0c8', 'name': 'Warm Gray 2U' }, { 'value': '#c0bbb3', 'name': 'Warm Gray 3U' }, { 'value': '#b1aca5', 'name': 'Warm Gray 4U' }, { 'value': '#a59f99', 'name': 'Warm Gray 5U' }, { 'value': '#9a9590', 'name': 'Warm Gray 6U' }, { 'value': '#928c88', 'name': 'Warm Gray 7U' }, { 'value': '#8a8581', 'name': 'Warm Gray 8U' }, { 'value': '#847f7b', 'name': 'Warm Gray 9U' }, { 'value': '#7c7773', 'name': 'Warm Gray 10U' }, { 'value': '#75716e', 'name': 'Warm Gray 11U' }, { 'value': '#e1e0db', 'name': 'Cool Gray 1U ' }, { 'value': '#d3d3cf', 'name': 'Cool Gray 2U ' }, { 'value': '#c4c5c3', 'name': 'Cool Gray 3U ' }, { 'value': '#b4b5b4', 'name': 'Cool Gray 4U ' }, { 'value': '#abacac', 'name': 'Cool Gray 5U ' }, { 'value': '#a2a3a4', 'name': 'Cool Gray 6U' }, { 'value': '#97989a', 'name': 'Cool Gray 7U' }, { 'value': '#8e8f92', 'name': 'Cool Gray 8U' }, { 'value': '#858689', 'name': 'Cool Gray 9U' }, { 'value': '#7e8083', 'name': 'Cool Gray 10U' }, { 'value': '#75767a', 'name': 'Cool Gray 11U' }, { 'value': '#615e53', 'name': 'Black 2U' }, { 'value': '#5a5d59', 'name': 'Black 3U' }, { 'value': '#615a53', 'name': 'Black 4U' }, { 'value': '#62595b', 'name': 'Black 5U' }, { 'value': '#53565f', 'name': 'Black 6U' }, { 'value': '#6b6968', 'name': 'Black 7U' }, { 'value': '#6a6758', 'name': '448U' }, { 'value': '#6e6c58', 'name': '449U' }, { 'value': '#737358', 'name': '450U' }, { 'value': '#919176', 'name': '451U' }, { 'value': '#aaaa8c', 'name': '452U' }, { 'value': '#bbba9c', 'name': '453U' }, { 'value': '#cac9ab', 'name': '454U' }, { 'value': '#726b4f', 'name': '4485U' }, { 'value': '#857d5d', 'name': '4495U' }, { 'value': '#978e6c', 'name': '4505U' }, { 'value': '#aca37c', 'name': '4515U' }, { 'value': '#bdb48b', 'name': '4525U' }, { 'value': '#ccc49c', 'name': '4535U' }, { 'value': '#d7d0a9', 'name': '4545U' }, { 'value': '#736d4c', 'name': '455U' }, { 'value': '#8f834c', 'name': '456U' }, { 'value': '#a19049', 'name': '457U' }, { 'value': '#c9ba6a', 'name': '458U' }, { 'value': '#d9cc7b', 'name': '459U' }, { 'value': '#e3d98b', 'name': '460U' }, { 'value': '#eae39e', 'name': '461U' }, { 'value': '#716956', 'name': '462U' }, { 'value': '#7d7055', 'name': '463U' }, { 'value': '#917f5b', 'name': '464U' }, { 'value': '#a79572', 'name': '465U' }, { 'value': '#b6a57e', 'name': '466U' }, { 'value': '#c7b991', 'name': '467U' }, { 'value': '#d6cba5', 'name': '468U' }, { 'value': '#6e5a4a', 'name': '4625U' }, { 'value': '#8c7261', 'name': '4635U' }, { 'value': '#947a69', 'name': '4645U' }, { 'value': '#a78a78', 'name': '4655U' }, { 'value': '#bfa48f', 'name': '4665U' }, { 'value': '#d2b9a3', 'name': '4675U' }, { 'value': '#dfcdb8', 'name': '4685U' }, { 'value': '#735e4d', 'name': '469U' }, { 'value': '#906a50', 'name': '470U' }, { 'value': '#ac7756', 'name': '471U' }, { 'value': '#c89071', 'name': '472U' }, { 'value': '#dba987', 'name': '473U' }, { 'value': '#e6bd9d', 'name': '474U' }, { 'value': '#eccaaa', 'name': '475U' }, { 'value': '#6c5a51', 'name': '4695U' }, { 'value': '#7d6962', 'name': '4705U' }, { 'value': '#907b73', 'name': '4715U' }, { 'value': '#a18c82', 'name': '4725U' }, { 'value': '#b49f94', 'name': '4735U' }, { 'value': '#c6b3a6', 'name': '4745U' }, { 'value': '#d5c6b8', 'name': '4755U' }, { 'value': '#6a5f56', 'name': '476U' }, { 'value': '#705f55', 'name': '477U' }, { 'value': '#836b5e', 'name': '478U' }, { 'value': '#9e8678', 'name': '479U' }, { 'value': '#baa392', 'name': '480U' }, { 'value': '#c8b4a1', 'name': '481U' }, { 'value': '#d6c6b3', 'name': '482U' }, { 'value': '#755d53', 'name': '483U' }, { 'value': '#8f5d52', 'name': '484U' }, { 'value': '#c35c52', 'name': '485U' }, { 'value': '#d78d80', 'name': '486U' }, { 'value': '#dba08f', 'name': '487U' }, { 'value': '#e3b7a5', 'name': '488U' }, { 'value': '#e8c8b7', 'name': '489U' }, { 'value': '#765a5c', 'name': '490U' }, { 'value': '#815b5f', 'name': '491U' }, { 'value': '#8e5f64', 'name': '492U' }, { 'value': '#b57d89', 'name': '493U' }, { 'value': '#d19aa7', 'name': '494U' }, { 'value': '#deadb9', 'name': '495U' }, { 'value': '#e8c1c9', 'name': '496U' }, { 'value': '#6c5958', 'name': '497U' }, { 'value': '#785c5c', 'name': '498U' }, { 'value': '#826060', 'name': '499U' }, { 'value': '#af878d', 'name': '500U' }, { 'value': '#c8a0a6', 'name': '501U' }, { 'value': '#dab8bd', 'name': '502U' }, { 'value': '#e6cbce', 'name': '503U' }, { 'value': '#6c5757', 'name': '4975U' }, { 'value': '#886d72', 'name': '4985U' }, { 'value': '#92767c', 'name': '4995U' }, { 'value': '#a7888f', 'name': '5005U' }, { 'value': '#bda0a5', 'name': '5015U' }, { 'value': '#d1b7ba', 'name': '5025U' }, { 'value': '#e0cccc', 'name': '5035U' }, { 'value': '#765c61', 'name': '504U' }, { 'value': '#7c5a62', 'name': '505U' }, { 'value': '#895f6b', 'name': '506U' }, { 'value': '#b38295', 'name': '507U' }, { 'value': '#ca99ac', 'name': '508U' }, { 'value': '#d7aabb', 'name': '509U' }, { 'value': '#e3bdc9', 'name': '510U' }, { 'value': '#6a5266', 'name': '511U' }, { 'value': '#7a557c', 'name': '512U' }, { 'value': '#8b5a94', 'name': '513U' }, { 'value': '#b680bb', 'name': '514U' }, { 'value': '#cd9dce', 'name': '515U' }, { 'value': '#dbb2d8', 'name': '516U' }, { 'value': '#e6c6df', 'name': '517U' }, { 'value': '#695766', 'name': '5115U' }, { 'value': '#776577', 'name': '5125U' }, { 'value': '#847286', 'name': '5135U' }, { 'value': '#9c899d', 'name': '5145U' }, { 'value': '#b6a4b5', 'name': '5155U' }, { 'value': '#c8b8c6', 'name': '5165U' }, { 'value': '#d7cbd3', 'name': '5175U' }, { 'value': '#675b69', 'name': '518U' }, { 'value': '#6a5973', 'name': '519U' }, { 'value': '#745f83', 'name': '520U' }, { 'value': '#9e89af', 'name': '521U' }, { 'value': '#af9cc0', 'name': '522U' }, { 'value': '#c1b0ce', 'name': '523U' }, { 'value': '#d3c5da', 'name': '524U' }, { 'value': '#695b63', 'name': '5185U' }, { 'value': '#736571', 'name': '5195U' }, { 'value': '#897a87', 'name': '5205U' }, { 'value': '#9c8c9a', 'name': '5215U' }, { 'value': '#b5a5b1', 'name': '5225U' }, { 'value': '#d1c4cc', 'name': '5235U' }, { 'value': '#d9ced4', 'name': '5245U' }, { 'value': '#685674', 'name': '525U' }, { 'value': '#70588c', 'name': '526U' }, { 'value': '#7e5eab', 'name': '527U' }, { 'value': '#a184cb', 'name': '528U' }, { 'value': '#bca2db', 'name': '529U' }, { 'value': '#cbb3e2', 'name': '530U' }, { 'value': '#d8c3e5', 'name': '531U' }, { 'value': '#595469', 'name': '5255U' }, { 'value': '#68657e', 'name': '5265U' }, { 'value': '#75738d', 'name': '5275U' }, { 'value': '#918fa9', 'name': '5285U' }, { 'value': '#aba9bf', 'name': '5295U' }, { 'value': '#c2c0d1', 'name': '5305U' }, { 'value': '#d2d1dc', 'name': '5315U' }, { 'value': '#5b5c65', 'name': '532U' }, { 'value': '#5b6172', 'name': '533U' }, { 'value': '#606882', 'name': '534U' }, { 'value': '#919bb4', 'name': '535U' }, { 'value': '#a8b0c7', 'name': '536U' }, { 'value': '#bfc6d5', 'name': '537U' }, { 'value': '#d2d6df', 'name': '538U' }, { 'value': '#464e5e', 'name': '539U' }, { 'value': '#45536e', 'name': '540U' }, { 'value': '#44597a', 'name': '541U' }, { 'value': '#7292b9', 'name': '542U' }, { 'value': '#8eadce', 'name': '543U' }, { 'value': '#a3bed9', 'name': '544U' }, { 'value': '#c2d4e5', 'name': '545U' }, { 'value': '#494e5a', 'name': '5395U' }, { 'value': '#5d6a78', 'name': '5405U' }, { 'value': '#6d7c8a', 'name': '5415U' }, { 'value': '#8494a2', 'name': '5425U' }, { 'value': '#a1b0bc', 'name': '5435U' }, { 'value': '#bac6ce', 'name': '5445U' }, { 'value': '#ced6db', 'name': '5455U' }, { 'value': '#4a535b', 'name': '546U' }, { 'value': '#4b5c68', 'name': '547U' }, { 'value': '#49606d', 'name': '548U' }, { 'value': '#7e9dad', 'name': '549U' }, { 'value': '#8dacba', 'name': '550U' }, { 'value': '#a4bfcb', 'name': '551U' }, { 'value': '#bed2d9', 'name': '552U' }, { 'value': '#3f4b53', 'name': '5463U' }, { 'value': '#586e75', 'name': '5473U' }, { 'value': '#6c858c', 'name': '5483U' }, { 'value': '#86a0a6', 'name': '5493U' }, { 'value': '#a6bec2', 'name': '5503U' }, { 'value': '#bdd1d2', 'name': '5513U' }, { 'value': '#ccdbda', 'name': '5523U' }, { 'value': '#565d5d', 'name': '5467U' }, { 'value': '#626c6d', 'name': '5477U' }, { 'value': '#717d7d', 'name': '5487U' }, { 'value': '#899594', 'name': '5497U' }, { 'value': '#a4b0ad', 'name': '5507U' }, { 'value': '#b0bbb7', 'name': '5517U' }, { 'value': '#c3ccc7', 'name': '5527U' }, { 'value': '#576259', 'name': '553U' }, { 'value': '#586b5d', 'name': '554U' }, { 'value': '#607a67', 'name': '555U' }, { 'value': '#819e8d', 'name': '556U' }, { 'value': '#97b3a0', 'name': '557U' }, { 'value': '#a5beab', 'name': '558U' }, { 'value': '#bed1c0', 'name': '559U' }, { 'value': '#4a5350', 'name': '5535U' }, { 'value': '#697671', 'name': '5545U' }, { 'value': '#7d8b85', 'name': '5555U' }, { 'value': '#92a19a', 'name': '5565U' }, { 'value': '#a5b5ac', 'name': '5575U' }, { 'value': '#bac8bf', 'name': '5585U' }, { 'value': '#ced8cf', 'name': '5595U' }, { 'value': '#55605d', 'name': '560U' }, { 'value': '#586f6b', 'name': '561U' }, { 'value': '#60827d', 'name': '562U' }, { 'value': '#90b5ad', 'name': '563U' }, { 'value': '#a1c5bc', 'name': '564U' }, { 'value': '#b6d5cb', 'name': '565U' }, { 'value': '#c4dfd4', 'name': '566U' }, { 'value': '#5b635b', 'name': '5605U' }, { 'value': '#656e67', 'name': '5615U' }, { 'value': '#768078', 'name': '5625U' }, { 'value': '#8e998f', 'name': '5635U' }, { 'value': '#a1aba0', 'name': '5645U' }, { 'value': '#b6bfb3', 'name': '5655U' }, { 'value': '#c5ccbf', 'name': '5665U' }, { 'value': '#586762', 'name': '567U' }, { 'value': '#58766f', 'name': '568U' }, { 'value': '#5b897f', 'name': '569U' }, { 'value': '#84b8ab', 'name': '570U' }, { 'value': '#9ecdc1', 'name': '571U' }, { 'value': '#b4dcd0', 'name': '572U' }, { 'value': '#c4e3d7', 'name': '573U' }, { 'value': '#686e55', 'name': '574U' }, { 'value': '#6e7c54', 'name': '575U' }, { 'value': '#788e5a', 'name': '576U' }, { 'value': '#97ae79', 'name': '577U' }, { 'value': '#b0c48e', 'name': '578U' }, { 'value': '#c0d19c', 'name': '579U' }, { 'value': '#d2ddb0', 'name': '580U' }, { 'value': '#646853', 'name': '5743U' }, { 'value': '#727662', 'name': '5753U' }, { 'value': '#7e836c', 'name': '5763U' }, { 'value': '#979c82', 'name': '5773U' }, { 'value': '#acb094', 'name': '5783U' }, { 'value': '#c1c4a8', 'name': '5793U' }, { 'value': '#cdd0b6', 'name': '5803U' }, { 'value': '#686b4d', 'name': '5747U' }, { 'value': '#7a7d5c', 'name': '5757U' }, { 'value': '#8f936e', 'name': '5767U' }, { 'value': '#a3a67d', 'name': '5777U' }, { 'value': '#bcbf95', 'name': '5787U' }, { 'value': '#c7caa1', 'name': '5797U' }, { 'value': '#d7d9b6', 'name': '5807U' }, { 'value': '#706f4b', 'name': '581U' }, { 'value': '#87894a', 'name': '582U' }, { 'value': '#a2ac49', 'name': '583U' }, { 'value': '#cdd36c', 'name': '584U' }, { 'value': '#dde183', 'name': '585U' }, { 'value': '#e4e794', 'name': '586U' }, { 'value': '#e8ea9f', 'name': '587U' }, { 'value': '#68674a', 'name': '5815U' }, { 'value': '#827f5d', 'name': '5825U' }, { 'value': '#8f8d68', 'name': '5835U' }, { 'value': '#a4a178', 'name': '5845U' }, { 'value': '#b9b68b', 'name': '5855U' }, { 'value': '#cbc99f', 'name': '5865U' }, { 'value': '#d7d5af', 'name': '5875U' }, { 'value': '#f1eea9', 'name': '600U' }, { 'value': '#f1eda0', 'name': '601U' }, { 'value': '#f1ed96', 'name': '602U' }, { 'value': '#eee677', 'name': '603U' }, { 'value': '#e8dc5c', 'name': '604U' }, { 'value': '#d9c941', 'name': '605U' }, { 'value': '#c8b736', 'name': '606U' }, { 'value': '#f0edb2', 'name': '607U' }, { 'value': '#ede9a4', 'name': '608U' }, { 'value': '#e7e290', 'name': '609U' }, { 'value': '#dcd578', 'name': '610U' }, { 'value': '#c5bb5c', 'name': '611U' }, { 'value': '#b5ab51', 'name': '612U' }, { 'value': '#9d9344', 'name': '613U' }, { 'value': '#e0dcab', 'name': '614U' }, { 'value': '#dad6a3', 'name': '615U' }, { 'value': '#cac48c', 'name': '616U' }, { 'value': '#b9b37b', 'name': '617U' }, { 'value': '#a49e6a', 'name': '618U' }, { 'value': '#8e885a', 'name': '619U' }, { 'value': '#817c50', 'name': '620U' }, { 'value': '#cddad0', 'name': '621U' }, { 'value': '#bacbc1', 'name': '622U' }, { 'value': '#a0b5ab', 'name': '623U' }, { 'value': '#8a9e95', 'name': '624U' }, { 'value': '#72857d', 'name': '625U' }, { 'value': '#5d6e68', 'name': '626U' }, { 'value': '#4c5955', 'name': '627U' }, { 'value': '#c8e2e7', 'name': '628U' }, { 'value': '#abd4df', 'name': '629U' }, { 'value': '#8cc2d5', 'name': '630U' }, { 'value': '#79b1c9', 'name': '631U' }, { 'value': '#5f98b4', 'name': '632U' }, { 'value': '#4d809c', 'name': '633U' }, { 'value': '#3f6e8a', 'name': '634U' }, { 'value': '#bce2ed', 'name': '635U' }, { 'value': '#a2d6ea', 'name': '636U' }, { 'value': '#82c4e3', 'name': '637U' }, { 'value': '#64afd8', 'name': '638U' }, { 'value': '#4e9ac7', 'name': '639U' }, { 'value': '#3983b2', 'name': '640U' }, { 'value': '#3278a7', 'name': '641U' }, { 'value': '#cdd8e4', 'name': '642U' }, { 'value': '#b6c5d9', 'name': '643U' }, { 'value': '#94a8c5', 'name': '644U' }, { 'value': '#7f94b4', 'name': '645U' }, { 'value': '#6c7fa0', 'name': '646U' }, { 'value': '#5a6989', 'name': '647U' }, { 'value': '#4d5874', 'name': '648U' }, { 'value': '#d5dce7', 'name': '649U' }, { 'value': '#c4cedf', 'name': '650U' }, { 'value': '#a4b2cd', 'name': '651U' }, { 'value': '#8394b4', 'name': '652U' }, { 'value': '#657596', 'name': '653U' }, { 'value': '#515b7a', 'name': '654U' }, { 'value': '#4d5573', 'name': '655U' }, { 'value': '#d7dfec', 'name': '656U' }, { 'value': '#c7d3ea', 'name': '657U' }, { 'value': '#aebfe3', 'name': '658U' }, { 'value': '#8ea4d6', 'name': '659U' }, { 'value': '#677db8', 'name': '660U' }, { 'value': '#4e5e99', 'name': '661U' }, { 'value': '#434d83', 'name': '662U' }, { 'value': '#ddd9e3', 'name': '663U' }, { 'value': '#d2ccdc', 'name': '664U' }, { 'value': '#bfb8ce', 'name': '665U' }, { 'value': '#aba3be', 'name': '666U' }, { 'value': '#877f9d', 'name': '667U' }, { 'value': '#7c7391', 'name': '668U' }, { 'value': '#6e6481', 'name': '669U' }, { 'value': '#e6d2e3', 'name': '670U' }, { 'value': '#e0c4dc', 'name': '671U' }, { 'value': '#d1a2c6', 'name': '672U' }, { 'value': '#c48ab4', 'name': '673U' }, { 'value': '#b4759f', 'name': '674U' }, { 'value': '#a4638c', 'name': '675U' }, { 'value': '#905175', 'name': '676U' }, { 'value': '#dfcddb', 'name': '677U' }, { 'value': '#d7bfd2', 'name': '678U' }, { 'value': '#ccaec5', 'name': '679U' }, { 'value': '#b08aa6', 'name': '680U' }, { 'value': '#956f8a', 'name': '681U' }, { 'value': '#846079', 'name': '682U' }, { 'value': '#735166', 'name': '683U' }, { 'value': '#e1cad8', 'name': '684U' }, { 'value': '#d8bbce', 'name': '685U' }, { 'value': '#c39eb8', 'name': '686U' }, { 'value': '#af88a3', 'name': '687U' }, { 'value': '#97718c', 'name': '688U' }, { 'value': '#856179', 'name': '689U' }, { 'value': '#79576a', 'name': '690U' }, { 'value': '#e5d2d6', 'name': '691U' }, { 'value': '#d9bcc2', 'name': '692U' }, { 'value': '#c5a1aa', 'name': '693U' }, { 'value': '#b38d96', 'name': '694U' }, { 'value': '#96737c', 'name': '695U' }, { 'value': '#85646c', 'name': '696U' }, { 'value': '#7a5a60', 'name': '697U' }, { 'value': '#ebd0d7', 'name': '698U' }, { 'value': '#e5bec8', 'name': '699U' }, { 'value': '#daa2b0', 'name': '700U' }, { 'value': '#ca8998', 'name': '701U' }, { 'value': '#b67482', 'name': '702U' }, { 'value': '#9c5d69', 'name': '703U' }, { 'value': '#90565f', 'name': '704U' }, { 'value': '#eed4dc', 'name': '705U' }, { 'value': '#ecc7d2', 'name': '706U' }, { 'value': '#e5aab9', 'name': '707U' }, { 'value': '#dd92a3', 'name': '708U' }, { 'value': '#cf7686', 'name': '709U' }, { 'value': '#bf6170', 'name': '710U' }, { 'value': '#b35763', 'name': '711U' }, { 'value': '#f1caa4', 'name': '712U' }, { 'value': '#efbc90', 'name': '713U' }, { 'value': '#ebae7f', 'name': '714U' }, { 'value': '#de9464', 'name': '715U' }, { 'value': '#d18457', 'name': '716U' }, { 'value': '#bf7349', 'name': '717U' }, { 'value': '#b36a41', 'name': '718U' }, { 'value': '#e7cbad', 'name': '719U' }, { 'value': '#e1c09f', 'name': '720U' }, { 'value': '#d4ab88', 'name': '721U' }, { 'value': '#bc906e', 'name': '722U' }, { 'value': '#ad8262', 'name': '723U' }, { 'value': '#936c50', 'name': '724U' }, { 'value': '#856246', 'name': '725U' }, { 'value': '#e3ceb6', 'name': '726U' }, { 'value': '#d5ba9f', 'name': '727U' }, { 'value': '#be9f84', 'name': '728U' }, { 'value': '#b09178', 'name': '729U' }, { 'value': '#9a7d65', 'name': '730U' }, { 'value': '#876c56', 'name': '731U' }, { 'value': '#77604b', 'name': '732U' }, { 'value': '#f2e2b0', 'name': '7401U' }, { 'value': '#ebdd9d', 'name': '7402U' }, { 'value': '#e3cb85', 'name': '7403U' }, { 'value': '#edcd51', 'name': '7404U' }, { 'value': '#d3ac2f', 'name': '7405U' }, { 'value': '#deb63d', 'name': '7406U' }, { 'value': '#c1a171', 'name': '7407U' }, { 'value': '#d49435', 'name': '7408U' }, { 'value': '#e0ac57', 'name': '7409U' }, { 'value': '#e9a77f', 'name': '7410U' }, { 'value': '#d4a273', 'name': '7411U' }, { 'value': '#bd8a64', 'name': '7412U' }, { 'value': '#c2855b', 'name': '7413U' }, { 'value': '#b4825d', 'name': '7414U' }, { 'value': '#d9b4a1', 'name': '7415U' }, { 'value': '#cb756a', 'name': '7416U' }, { 'value': '#c5685e', 'name': '7417U' }, { 'value': '#a9686b', 'name': '7418U' }, { 'value': '#90616a', 'name': '7419U' }, { 'value': '#925969', 'name': '7420U' }, { 'value': '#6e4c59', 'name': '7421U' }, { 'value': '#edd1d8', 'name': '7422U' }, { 'value': '#c7758d', 'name': '7423U' }, { 'value': '#ba577b', 'name': '7424U' }, { 'value': '#a55c73', 'name': '7425U' }, { 'value': '#9c5569', 'name': '7426U' }, { 'value': '#894e58', 'name': '7427U' }, { 'value': '#785d68', 'name': '7428U' }, { 'value': '#e0c9d5', 'name': '7429U' }, { 'value': '#d3b1c3', 'name': '7430U' }, { 'value': '#c79eb3', 'name': '7431U' }, { 'value': '#ae7d94', 'name': '7432U' }, { 'value': '#a16c82', 'name': '7433U' }, { 'value': '#95657a', 'name': '7434U' }, { 'value': '#7c5468', 'name': '7435U' }, { 'value': '#e4d3e4', 'name': '7436U' }, { 'value': '#cab6d4', 'name': '7437U' }, { 'value': '#bf95cf', 'name': '7438U' }, { 'value': '#b49dc2', 'name': '7439U' }, { 'value': '#a38db0', 'name': '7440U' }, { 'value': '#9c7fc8', 'name': '7441U' }, { 'value': '#8860bb', 'name': '7442U' }, { 'value': '#dddcea', 'name': '7443U' }, { 'value': '#bbbdde', 'name': '7444U' }, { 'value': '#a5a3c6', 'name': '7445U' }, { 'value': '#9292c9', 'name': '7446U' }, { 'value': '#716988', 'name': '7447U' }, { 'value': '#665f6d', 'name': '7448U' }, { 'value': '#574c56', 'name': '7449U' }, { 'value': '#bdc2d9', 'name': '7450U' }, { 'value': '#99ade2', 'name': '7451U' }, { 'value': '#909add', 'name': '7452U' }, { 'value': '#91a9dc', 'name': '7453U' }, { 'value': '#7f96b6', 'name': '7454U' }, { 'value': '#6972ac', 'name': '7455U' }, { 'value': '#7e84b7', 'name': '7456U' }, { 'value': '#cee4ed', 'name': '7457U' }, { 'value': '#80a8c1', 'name': '7458U' }, { 'value': '#6990ab', 'name': '7459U' }, { 'value': '#308fc1', 'name': '7460U' }, { 'value': '#6391c2', 'name': '7461U' }, { 'value': '#5e7799', 'name': '7462U' }, { 'value': '#58657c', 'name': '7463U' }, { 'value': '#b7dad7', 'name': '7464U' }, { 'value': '#7fc5b6', 'name': '7465U' }, { 'value': '#53b0ba', 'name': '7466U' }, { 'value': '#47a7b1', 'name': '7467U' }, { 'value': '#51728d', 'name': '7468U' }, { 'value': '#4b6a84', 'name': '7469U' }, { 'value': '#55727f', 'name': '7470U' }, { 'value': '#a2e0d7', 'name': '7471U' }, { 'value': '#8bbdba', 'name': '7472U' }, { 'value': '#78a599', 'name': '7473U' }, { 'value': '#618c95', 'name': '7474U' }, { 'value': '#798e91', 'name': '7475U' }, { 'value': '#61757a', 'name': '7476U' }, { 'value': '#64727b', 'name': '7477U' }, { 'value': '#b7e8c3', 'name': '7478U' }, { 'value': '#78c981', 'name': '7479U' }, { 'value': '#6bc181', 'name': '7480U' }, { 'value': '#68bb72', 'name': '7481U' }, { 'value': '#66aa75', 'name': '7482U' }, { 'value': '#5f735f', 'name': '7483U' }, { 'value': '#536b5e', 'name': '7484U' }, { 'value': '#e3ead4', 'name': '7485U' }, { 'value': '#c5e39e', 'name': '7486U' }, { 'value': '#a6dd7d', 'name': '7487U' }, { 'value': '#8bcc61', 'name': '7488U' }, { 'value': '#8eae75', 'name': '7489U' }, { 'value': '#849c6d', 'name': '7490U' }, { 'value': '#838c66', 'name': '7491U' }, { 'value': '#c5ce94', 'name': '7492U' }, { 'value': '#bfc79d', 'name': '7493U' }, { 'value': '#a7b396', 'name': '7494U' }, { 'value': '#818a5c', 'name': '7495U' }, { 'value': '#76814b', 'name': '7496U' }, { 'value': '#858274', 'name': '7497U' }, { 'value': '#727561', 'name': '7498U' }, { 'value': '#f1edca', 'name': '7499U' }, { 'value': '#e3dbbb', 'name': '7500U' }, { 'value': '#d9cdad', 'name': '7501U' }, { 'value': '#bcaa86', 'name': '7502U' }, { 'value': '#999377', 'name': '7503U' }, { 'value': '#8b7e71', 'name': '7504U' }, { 'value': '#827466', 'name': '7505U' }, { 'value': '#eee3c4', 'name': '7506U' }, { 'value': '#f4dbb3', 'name': '7507U' }, { 'value': '#d3b288', 'name': '7508U' }, { 'value': '#c7a37a', 'name': '7509U' }, { 'value': '#ac8663', 'name': '7510U' }, { 'value': '#937153', 'name': '7511U' }, { 'value': '#866647', 'name': '7512U' }, { 'value': '#dbb9ac', 'name': '7513U' }, { 'value': '#caa796', 'name': '7514U' }, { 'value': '#b18d7c', 'name': '7515U' }, { 'value': '#906d5e', 'name': '7516U' }, { 'value': '#7f6051', 'name': '7517U' }, { 'value': '#776d6b', 'name': '7518U' }, { 'value': '#6a635e', 'name': '7519U' }, { 'value': '#e1c0b6', 'name': '7520U' }, { 'value': '#b89f94', 'name': '7521U' }, { 'value': '#9a736e', 'name': '7522U' }, { 'value': '#997774', 'name': '7523U' }, { 'value': '#94706a', 'name': '7524U' }, { 'value': '#8e776d', 'name': '7525U' }, { 'value': '#815b50', 'name': '7526U' }, { 'value': '#dad7cb', 'name': '7527U' }, { 'value': '#cfc8bf', 'name': '7528U' }, { 'value': '#bbb2a9', 'name': '7529U' }, { 'value': '#a79e94', 'name': '7530U' }, { 'value': '#847c73', 'name': '7531U' }, { 'value': '#6e665e', 'name': '7532U' }, { 'value': '#645d55', 'name': '7533U' }, { 'value': '#d3d0c3', 'name': '7534U' }, { 'value': '#c0bcac', 'name': '7535U' }, { 'value': '#ada99a', 'name': '7536U' }, { 'value': '#b3b6b0', 'name': '7537U' }, { 'value': '#a5a8a2', 'name': '7538U' }, { 'value': '#9c9d9c', 'name': '7539U' }, { 'value': '#6d7075', 'name': '7540U' }, { 'value': '#e3e7e9', 'name': '7541U' }, { 'value': '#b7c3ca', 'name': '7542U' }, { 'value': '#b0b6bd', 'name': '7543U' }, { 'value': '#9ea4ac', 'name': '7544U' }, { 'value': '#7d838d', 'name': '7545U' }, { 'value': '#696f78', 'name': '7546U' }, { 'value': '#5c5f68', 'name': '7547U' }, { 'value': '#439bc4', 'name': '801U' }, { 'value': '#91d559', 'name': '802U' }, { 'value': '#ffe64f', 'name': '803U' }, { 'value': '#ff9f5b', 'name': '804U' }, { 'value': '#f85b64', 'name': '805U' }, { 'value': '#e02e98', 'name': '806U' }, { 'value': '#b32fad', 'name': '807U' }, { 'value': '#5bae91', 'name': '808U' }, { 'value': '#e3e249', 'name': '809U' }, { 'value': '#ffca4b', 'name': '810U' }, { 'value': '#ff775e', 'name': '811U' }, { 'value': '#e74174', 'name': '812U' }, { 'value': '#c130a0', 'name': '813U' }, { 'value': '#7d68c4', 'name': '814U' }, { 'value': '#a4936c', 'name': '871U' }, { 'value': '#a69270', 'name': '872U' }, { 'value': '#a58f6f', 'name': '873U' }, { 'value': '#a99277', 'name': '874U' }, { 'value': '#aa8f77', 'name': '875U' }, { 'value': '#a88872', 'name': '876U' }, { 'value': '#b3b5b8', 'name': '877U' }, { 'value': '#ada399', 'name': '8003U' }, { 'value': '#aba39f', 'name': '8021U' }, { 'value': '#a6969c', 'name': '8062U' }, { 'value': '#aba4b0', 'name': '8100U' }, { 'value': '#99a5b3', 'name': '8201U' }, { 'value': '#a1aaaa', 'name': '8281U' }, { 'value': '#a5aba2', 'name': '8321U' }]
export { menu, menu2, productType, colorList, letterArr, companyType, moneyArr }
