import {
  YoxInterface,
} from './yox'

export type Namespace = {

  // 事件名称
  type: string

  // 命名空间
  ns?: string

}

export interface CustomEventInterface extends Namespace {

  // 事件当前的阶段
  phase: number

  // 哪个组件触发的事件
  target?: YoxInterface

  // 原始事件
  originalEvent?: CustomEventInterface | Event

  // 是否已阻止事件的默认行为
  isPrevented?: true

  // 事件是否已停止传递
  isStoped?: true

  // 处理当前事件的监听器
  listener?: Function

  // 模仿 Event 的两个方法签名，避免业务代码判断事件类型
  preventDefault(): this

  stopPropagation(): this

  // 简单版本
  prevent(): this

  stop(): this

}