import {
  Data,
  Component,
  ComponentCallback,
  Filter,
  Watcher,
  Listener,
} from './type'

import {
  ComponentOptions,
  WatcherOptions,
} from './options'

import {
  DirectiveHooks,
  TransitionHooks,
} from './hooks'

import {
  VNode,
} from './vnode'

import * as constant from './constant'

export class CustomEvent {

  public static PHASE_CURRENT = 0

  public static PHASE_UPWARD = 1

  public static PHASE_DOWNWARD = constant.MINUS_ONE

  // 事件名称
  type: string

  // 事件当前阶段
  phase: number

  // 事件命名空间
  ns?: string

  // 哪个组件发出的事件
  target?: YoxInterface

  // 原始事件，比如 DOM 事件
  originalEvent?: CustomEvent | Event

  // 是否已阻止事件的默认行为
  isPrevented?: true

  // 是否已停止事件冒泡
  isStoped?: true

  // 处理当前事件的监听器，方便外部获取 listener 进行解绑
  listener?: Function

  /**
   * 构造函数
   *
   * 可以传事件名称，也可以传原生事件对象
   */
  constructor(type: string, originalEvent?: CustomEvent | Event) {
    // 这里不设置命名空间
    // 因为有没有命名空间取决于 Emitter 的构造函数有没有传 true
    // CustomEvent 自己无法决定
    this.type = type
    this.phase = CustomEvent.PHASE_CURRENT
    if (originalEvent) {
      this.originalEvent = originalEvent
    }
  }

  /**
   * 阻止事件的默认行为
   */
  preventDefault(): this {
    const instance = this
    if (!instance.isPrevented) {
      const { originalEvent } = instance
      if (originalEvent) {
        originalEvent.preventDefault()
      }
      instance.isPrevented = constant.TRUE
    }
    return instance
  }

  /**
   * 停止事件广播
   */
  stopPropagation(): this {
    const instance = this
    if (!instance.isStoped) {
      const { originalEvent } = instance
      if (originalEvent) {
        originalEvent.stopPropagation()
      }
      instance.isStoped = constant.TRUE
    }
    return instance
  }

  prevent(): this {
    return this.preventDefault()
  }

  stop(): this {
    return this.stopPropagation()
  }

}


export interface YoxInterface {

  $options: ComponentOptions

  $el?: HTMLElement

  $vnode?: VNode

  $model?: string

  $root?: YoxInterface

  $parent?: YoxInterface

  $context?: YoxInterface

  $children?: YoxInterface[]

  $refs?: Record<string, YoxInterface | HTMLElement>

  get(
    keypath: string,
    defaultValue?: any
  ): any

  set(
    keypath: string | Data,
    value?: any
  ): void

  on(
    type: string | Record<string, Listener<this>>,
    listener?: Listener<this>
  ): this

  once(
    type: string | Record<string, Listener<this>>,
    listener?: Listener<this>
  ): this

  off(
    type?: string,
    listener?: Function
  ): this

  fire(
    type: string | CustomEvent,
    data?: Data | boolean,
    downward?: boolean
  ): boolean

  watch(
    keypath: string | Record<string, Watcher<this> | WatcherOptions<this>>,
    watcher?: Watcher<this> | WatcherOptions<this>,
    immediate?: boolean
  ): this

  unwatch(
    keypath?: string,
    watcher?: Watcher<this>
  ): this

  loadComponent(
    name: string,
    callback: ComponentCallback
  ): void

  createComponent(
    options: ComponentOptions,
    vnode: VNode
  ): YoxInterface

  directive(
    name: string | Record<string, DirectiveHooks>,
    directive?: DirectiveHooks
  ): DirectiveHooks | void

  transition(
    name: string | Record<string, TransitionHooks>,
    transition?: TransitionHooks
  ): TransitionHooks | void

  component(
    name: string | Record<string, Component>,
    component?: Component
  ): Component | void

  partial(
    name: string | Record<string, string>,
    partial?: string
  ): Function | void

  filter(
    name: string | Record<string, Filter>,
    filter?: Filter
  ): Filter | void

  checkProp(key: string, value: any): void

  forceUpdate(data?: Data): void

  destroy(): void

  nextTick(task: Function): void

  toggle(keypath: string): boolean

  increase(keypath: string, step?: number, max?: number): number | void

  decrease(keypath: string, step?: number, min?: number): number | void

  insert(keypath: string, item: any, index: number | boolean): true | void

  append(keypath: string, item: any): true | void

  prepend(keypath: string, item: any): true | void

  removeAt(keypath: string, index: number): true | void

  remove(keypath: string, item: any): true | void

  copy<T>(data: T, deep?: boolean): T

}
