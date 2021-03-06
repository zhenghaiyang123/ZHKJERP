
import commonHeader from './header/header.vue'
import colorPicker from './colorPicker/colorPicker.vue'
import table from './table/table.vue'
import myMessage from './message/message.vue'
export default {
  install: function (vue) {
    vue.component('commonHeader', commonHeader)
    vue.component('colorPicker', colorPicker)
    vue.component('ylTable', table)
    vue.component('myMessage', myMessage)
  }
}
