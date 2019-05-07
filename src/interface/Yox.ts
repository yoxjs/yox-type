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

  $parent?: Yox

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
    depIgnore?: true
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
    data?: type.data | true,
    downward?: true
  ): boolean

  watch(
    keypath: string | Record<string, type.watcher | WatcherOptions>,
    watcher?: type.watcher | WatcherOptions,
    immediate?: true
  ): Yox

  unwatch(
    keypath: string,
    watcher?: type.watcher
  ): Yox

  directive(
    name: string | Record<string, DirectiveHooks>,
    directive?: DirectiveHooks
  ): DirectiveHooks | void

  transition(
    name: string | Record<string, TransitionHooks>,
    transition?: TransitionHooks
  ): TransitionHooks | void

  component(
    name: string | Record<string, YoxOptions>,
    component?: YoxOptions | type.asyncComponent
  ): YoxOptions | void

  partial(
    name: string | Record<string, string>,
    partial?: string
  ): Function | void

  filter(
    name: string | Record<string, Function | Record<string, Function>>,
    filter?: Function | Record<string, Function | Record<string, Function>>
  ): Function | Record<string, Function> | void

  checkPropTypes(props: type.data): type.data

  forceUpdate(): void

  create(options: YoxOptions, vnode?: VNode, node?: Node): Yox

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

  copy<T>(data: T, deep?: true): T

}