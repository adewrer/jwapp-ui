// 导入组件，组件必须声明 name
import cell from './src/cell.vue'

// 为组件提供 install 安装方法，供按需引入
cell.install = function (Vue) {
  Vue.component(cell.name, cell)
}

// 默认导出组件
export default cell