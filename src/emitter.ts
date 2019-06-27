import {
  Listener,
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
    type: string,
    args: any[] | void,
    filter?: (type: string, args: any[] | void, options: EmitterOptions) => boolean | void
  ): boolean

  on(
    type: string,
    listener?: Listener | EmitterOptions
  ): void

  off(
    type?: string,
    listener?: Listener
  ): void

  has(
    type: string,
    listener?: Listener
  ): boolean

}

export interface CustomEventInterface {

  // 事件名称
  type: string

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
  preventDefault(): CustomEventInterface

  stopPropagation(): CustomEventInterface

  // 简单版本
  prevent(): CustomEventInterface

  stop(): CustomEventInterface

}