import Event from 'yox-common/util/Event'

import DirectiveHook from './hook/Directive'
import TransitionHook from './hook/Transition'
import VNode from './vnode/VNode'

import YoxOptions from './YoxOptions'
import WatcherOptions from './WatcherOptions'

export default interface Yox {

  get(keypath: string, defaultValue?: any): any

  set(keypath: string | Record<string, any>, value?: any): void

  on(type: string | Record<string, Function>, listener?: Function): Yox

  once(type: string | Record<string, Function>, listener?: Function): Yox

  off(type: string, listener?: Function): Yox

  fire(bullet: string | Event, data?: Record<string, any> | boolean, downward?: boolean): boolean

  watch(keypath: string | Record<string, (newValue: any, oldValue: any, keypath: string) => void | WatcherOptions>, watcher?: (newValue: any, oldValue: any, keypath: string) => void | WatcherOptions | boolean, options?: boolean | WatcherOptions): Yox

  watchOnce(keypath: string | Record<string, (newValue: any, oldValue: any, keypath: string) => void | WatcherOptions>, watcher?: (newValue: any, oldValue: any, keypath: string) => void | WatcherOptions, options?: WatcherOptions): Yox

  unwatch(keypath: string, watcher?: (newValue: any, oldValue: any, keypath: string) => void | WatcherOptions): Yox

  directive(name: string | Record<string, DirectiveHook>, directive?: DirectiveHook): DirectiveHook | void

  component(name: string | Record<string, YoxOptions>, callback?: YoxOptions | Function): YoxOptions | void

  transition(name: string | Record<string, TransitionHook>, transition?: TransitionHook): TransitionHook | void

  partial(name: string | Record<string, string | Function>, partial?: string | Function): Function | void

  filter(name: string | Record<string, Function | Record<string, Function>>, filter?: Function | Record<string, Function>): Function | void

  create(options: YoxOptions, vnode?: VNode, node?: HTMLElement): Yox

  destroy(): void

}