import Yox from './Yox'

export default interface CustomEvent {

  // 事件名称
  type: string

  // 事件当前的阶段
  // 0: 当前组件发射的事件，且当前组件正在处理
  // 1: 当前组件向上发射的事件，且已流转到父组件
  // -1: 当前组件向下发射的事件，且已流转到子组件
  phase: number

  // 谁发出的事件
  target?: Yox

  // 原始事件，比如 dom 事件
  originalEvent?: CustomEvent | Event

  // 是否已阻止事件的默认行为
  isPrevented?: boolean

  // 事件是否已停止冒泡
  isStoped?: boolean

  // 处理当前事件的监听器
  listener?: Function

  // 模仿 Event 的两个方法签名，避免业务代码判断事件类型
  preventDefault(): CustomEvent

  stopPropagation(): CustomEvent

  // 简单版本
  prevent(): CustomEvent

  stop(): CustomEvent

}
