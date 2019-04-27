import CustomEvent from './Event'

import DirectiveHooks from './hooks/Directive'
import TransitionHooks from './hooks/Transition'
import VNode from './vnode/VNode'

import * as type from '../index'
import Computed from './Computed'
import ComputedOptions from './options/Computed'
import WatcherOptions from './options/Watcher'

import YoxOptions from './options/Yox'

export default interface Yox {

  $el?: HTMLElement

  $model?: string

  $vnode?: VNode

  $parent?: Yox

  $children?: Yox[]

  $refs?: Record<string, Yox | HTMLElement>

  addComputed(
    keypath: string,
    computed: type.computedGetter | ComputedOptions
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
    keypath: string | Record<string, any>,
    value?: any
  ): void

  on(
    type: string | Record<string, type.eventListener>,
    listener?: type.eventListener
  ): Yox

  once(
    type: string | Record<string, type.eventListener>,
    listener?: type.eventListener
  ): Yox

  off(
    type: string,
    listener?: type.eventListener
  ): Yox

  fire(
    bullet: string | CustomEvent,
    data?: type.eventData | boolean,
    downward?: boolean
  ): boolean

  watch(
    keypath: string | Record<string, type.watcher | WatcherOptions>,
    watcher?: type.watcher | WatcherOptions,
    immediate?: boolean
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

  checkPropTypes(props: Record<string, any>): Record<string, any>

  forceUpdate(): void

  create(options: YoxOptions, vnode?: VNode, node?: Node): Yox

  destroy(): void

  nextTick(task: Function, prepend?: boolean): void

  toggle(keypath: string): boolean

  increase(keypath: string, step?: number, max?: number): number | void

  decrease(keypath: string, step: number, min?: number): number | void

  insert(keypath: string, item: any, index: number | boolean): boolean | void

  append(keypath: string, item: any): boolean | void

  prepend(keypath: string, item: any): boolean | void

  removeAt(keypath: string, index: number): boolean | void

  remove(keypath: string, item: any): boolean | void

  copy<T>(data: T, deep?: boolean): T

}