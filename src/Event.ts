export default interface Event {

  // 事件名称
  type: string

  // 谁发出的事件
  target?: any

  // 原始事件，比如 dom 事件
  originalEvent?: any

  // 是否已阻止事件的默认行为
  isPrevented?: boolean

  // 事件是否已停止冒泡
  isStoped?: boolean

  // 处理当前事件的监听器
  listener?: Function

  prevent(): Event

  stop(): Event

}
