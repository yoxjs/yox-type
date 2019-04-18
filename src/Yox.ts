import Event from 'yox-common/util/Event'

import DirectiveHook from './hook/Directive'
import TransitionHook from './hook/Transition'
import VNode from './vnode/VNode'

export default interface Yox {

  get(keypath: string, defaultValue?: any): any

  set(keypath: string | Record<string, any>, value?: any): void

  on(type: string | Record<string, Function>, listener?: Function): Yox

  once(type: string | Record<string, Function>, listener?: Function): Yox

  off(type: string, listener?: Function): Yox

  fire(bullet: string | Event, data?: Record<string, any> | boolean, downward?: boolean): boolean

  watch(keypath: string | Record<string, any>, watcher?: Function | Record<string, any> | boolean, options?: boolean | Record<string, any>): Yox

  watchOnce(keypath: string | Record<string, any>, watcher?: Function | Record<string, any>, options?: Record<string, any>): Yox

  unwatch(keypath: string, watcher?: Function | Record<string, any>): Yox

  directive(name: string | Record<string, DirectiveHook>, directive?: DirectiveHook): DirectiveHook | void

  transition(name: string | Record<string, TransitionHook>, transition?: TransitionHook): TransitionHook | void

  partial(name: string | Record<string, string | Function>, partial?: string | Function): string | Function | void

  filter(name: string | Record<string, Function>, filter?: Function): Function | void

  create(options: Record<string, any>, vnode?: VNode, node?: HTMLElement): Yox

  destroy(): void

}