import * as type from '../type'

import Emitter from '../event/Emitter'
import CustomEvent from '../event/CustomEvent'
import Observer from '../watcher/Observer'
import Computed from '../watcher/Computed'

import VNode from '../vnode/VNode'
import DirectiveHooks from '../hooks/Directive'
import TransitionHooks from '../hooks/Transition'

import ComputedOptions from '../options/Computed'
import WatcherOptions from '../options/Watcher'

import YoxOptions from '../options/Yox'

export default interface Yox {

  $options: YoxOptions

  $emitter: Emitter

  $observer: Observer

  $el?: HTMLElement

  $vnode?: VNode

  $model?: string

  $root?: Yox

  $parent?: Yox

  $context?: Yox

  $children?: Yox[]

  $refs?: Record<string, Yox | HTMLElement>

  addComputed(
    keypath: string,
    computed: type.getter | ComputedOptions
  ): Computed | void

  removeComputed(
    keypath: string
  ): void

  get(
    keypath: string,
    defaultValue?: any,
    depIgnore?: boolean
  ): any

  set(
    keypath: string | type.data,
    value?: any
  ): void

  on(
    type: string | Record<string, type.listener>,
    listener?: type.listener
  ): Yox

  once(
    type: string | Record<string, type.listener>,
    listener?: type.listener
  ): Yox

  off(
    type?: string,
    listener?: type.listener
  ): Yox

  fire(
    type: string | CustomEvent,
    data?: type.data | boolean,
    downward?: boolean
  ): boolean

  watch(
    keypath: string | Record<string, type.watcher | WatcherOptions>,
    watcher?: type.watcher | WatcherOptions,
    immediate?: boolean
  ): Yox

  unwatch(
    keypath?: string,
    watcher?: type.watcher
  ): Yox

  loadComponent(name: string, callback: type.componentCallback): void

  createComponent(options: YoxOptions, vnode: VNode): Yox

  directive(
    name: string | Record<string, DirectiveHooks>,
    directive?: DirectiveHooks
  ): DirectiveHooks | void

  transition(
    name: string | Record<string, TransitionHooks>,
    transition?: TransitionHooks
  ): TransitionHooks | void

  component(
    name: string | Record<string, type.component>,
    component?: type.component
  ): type.component | void

  partial(
    name: string | Record<string, string>,
    partial?: string
  ): Function | void

  filter(
    name: string | Record<string, type.filter>,
    filter?: type.filter
  ): type.filter | void

  checkProps(props: type.data): type.data

  checkProp(key: string, value: any): any

  forceUpdate(data?: type.data): void

  destroy(): void

  nextTick(task: Function): void

  toggle(keypath: string): boolean

  increase(keypath: string, step?: number, max?: number): number | void

  decrease(keypath: string, step: number, min?: number): number | void

  insert(keypath: string, item: any, index: number | boolean): true | void

  append(keypath: string, item: any): true | void

  prepend(keypath: string, item: any): true | void

  removeAt(keypath: string, index: number): true | void

  remove(keypath: string, item: any): true | void

  copy<T>(data: T, deep?: boolean): T

}