import {
  Namespace,
  NativeListener,
} from './type'

import {
  EmitterOptions,
} from './options'

import {
  YoxInterface,
} from './yox'

export interface EmitterInterface {

  ns: boolean

  listeners: Record<string, EmitterOptions[]>

  nativeListeners?: Record<string, NativeListener>

  fire(
    type: string | Namespace,
    args: any[] | void,
    filter?: (
      namespace: Namespace,
      args: any[] | void,
      options: EmitterOptions
    ) => boolean | void
  ): boolean

  on(
    type: string,
    listener: Function | EmitterOptions
  ): void

  off(
    type?: string,
    listener?: Function
  ): void

  has(
    type: string,
    listener?: Function
  ): boolean

  parse(
    type: string
  ): Namespace

}

export interface CustomEventInterface {

  // 事件名称
  type: string

  // 事件当前的阶段
  phase: number

  // 命名空间信息
  ns?: Namespace

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