import {
  Data,
  Component,
  ComponentCallback,
  Filter,
  ThisWatcher,
  ThisListener,
} from './type'

import {
  ComponentOptions,
  ThisWatcherOptions,
} from './options'

import {
  DirectiveHooks,
  TransitionHooks,
} from './hooks'

import {
  VNode,
} from './vnode'

/**
 * Yox 事件系统的事件类型
 */
export interface CustomEventInterface {

  type: string

  phase: number

  ns?: string

  target?: YoxInterface

  originalEvent?: CustomEventInterface | Event

  isPrevented?: true

  isStoped?: true

  listener?: Function

  /**
   * 阻止事件的默认行为
   */
  preventDefault(): this;

  /**
   * 停止事件广播
   */
  stopPropagation(): this;

  prevent(): this;

  stop(): this;

}

/**
 * Yox 接口类型
 */
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
    type: string | Record<string, ThisListener<this>>,
    listener?: ThisListener<this>
  ): this

  once(
    type: string | Record<string, ThisListener<this>>,
    listener?: ThisListener<this>
  ): this

  off(
    type?: string,
    listener?: Function
  ): this

  fire(
    type: string | CustomEventInterface,
    data?: Data | boolean,
    downward?: boolean
  ): boolean

  watch(
    keypath: string | Record<string, ThisWatcher<this> | ThisWatcherOptions<this>>,
    watcher?: ThisWatcher<this> | ThisWatcherOptions<this>,
    immediate?: boolean
  ): this

  unwatch(
    keypath?: string,
    watcher?: ThisWatcher<this>
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
