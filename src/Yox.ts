import CustomEvent from './Event'

import DirectiveHook from './hook/Directive'
import TransitionHook from './hook/Transition'
import VNode from './vnode/VNode'

import * as type from './type'
import YoxOptions from './YoxOptions'
import WatcherOptions from './WatcherOptions'

export default interface Yox {

  $refs: Record<string, Yox | HTMLElement>

  $el?: HTMLElement

  $model?: string

  $vnode?: VNode

  $parent?: Yox

  $children?: Yox[]

  get(keypath: string, defaultValue?: any): any

  set(keypath: string | Record<string, any>, value?: any): void

  on(type: string | Record<string, type.eventListener>, listener?: type.eventListener): Yox

  once(type: string | Record<string, type.eventListener>, listener?: type.eventListener): Yox

  off(type: string, listener?: type.eventListener): Yox

  fire(bullet: string | CustomEvent, data?: type.eventData | boolean, downward?: boolean): boolean

  watch(
    keypath: string | Record<string, type.watcher | WatcherOptions>,
    watcher?: type.watcher,
    options?: WatcherOptions | boolean
  ): Yox

  watchOnce(
    keypath: string,
    watcher: type.watcher,
    options?: WatcherOptions
  ): Yox

  unwatch(
    keypath: string,
    watcher?: type.watcher
  ): Yox

  directive(name: string | Record<string, DirectiveHook>, directive?: DirectiveHook): DirectiveHook | void

  component(nname: string | Record<string, YoxOptions>, component?: YoxOptions | signature.asyncComponent): YoxOptions | void

  transition(name: string | Record<string, TransitionHook>, transition?: TransitionHook): TransitionHook | void

  partial(name: string | Record<string, string>, partial?: string): Function | void

  filter(
    name: string | Record<string, Function | Record<string, Function>>,
    filter?: Function | Record<string, Function>
  ): Function | Record<string, Function> | void

  checkPropTypes(props: Record<string, any>): Record<string, any>

  forceUpdate(): void

  // node 可以是 Comment 或 HTMLElement
  create(options: YoxOptions, vnode?: VNode, node?: Node): Yox

  destroy(): void

  nextTick(task: Function): void

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