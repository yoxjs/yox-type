import Event from 'yox-common/util/Event'

import DirectiveHook from './hook/Directive'
import TransitionHook from './hook/Transition'
import VNode from './vnode/VNode'

import * as signature from './signature'
import YoxOptions from './YoxOptions'
import WatcherOptions from './WatcherOptions'

export default interface Yox {

  $refs: Record<string, Yox | HTMLElement>

  $node: Node

  get(keypath: string, defaultValue?: any): any

  set(keypath: string | Record<string, any>, value?: any): void

  on(type: string | Record<string, signature.eventListener>, listener?: signature.eventListener): Yox

  once(type: string | Record<string, signature.eventListener>, listener?: signature.eventListener): Yox

  off(type: string, listener?: signature.eventListener): Yox

  fire(bullet: string | Event, data?: Record<string, any> | boolean, downward?: boolean): boolean

  watch(
    keypath: string | Record<string, signature.watcher | WatcherOptions>,
    watcher?: signature.watcher,
    options?: WatcherOptions | boolean
  ): Yox

  watchOnce(
    keypath: string,
    watcher: signature.watcher,
    options?: WatcherOptions
  ): Yox

  unwatch(
    keypath: string,
    watcher?: signature.watcher
  ): Yox

  directive(name: string | Record<string, DirectiveHook>, directive?: DirectiveHook): DirectiveHook | void

  component(name: string | Record<string, YoxOptions>, callback?: YoxOptions | signature.asyncComponent): YoxOptions | void

  transition(name: string | Record<string, TransitionHook>, transition?: TransitionHook): TransitionHook | void

  partial(name: string | Record<string, string | Function>, partial?: string | Function): Function | void

  filter(name: string | Record<string, Function | Record<string, Function>>, filter?: Function | Record<string, Function>): Function | void

  create(options: YoxOptions, vnode?: VNode, node?: HTMLElement): Yox

  destroy(): void

}