import CustomEvent from './src/CustomEvent'
import YoxOptions from './src/options/Yox'

import Yox from './src/Yox'
import VNode from './src/vnode/VNode'
import Directive from './src/vnode/Directive'

export type data = Record<string, any>

export interface watcher { (newValue: any, oldValue: any, keypath: string): void }

export interface listener { (event: CustomEvent, data?: data): boolean | void }

export interface nativeListener { (event: Event | CustomEvent): boolean | void }

export interface computedGetter { (): any }

export interface computedSetter { (value: any): void }

export interface asyncComponent { (options: YoxOptions | void): void }

export interface directiveGetter { (): any }

export interface directiveHandler { (event?: CustomEvent, data?: data): void }

export interface transitionEnter { (node: HTMLElement, done: () => void): void }

export interface transitionLeave { (node: HTMLElement, done: () => void): void }

export interface directiveBind { (node: HTMLElement | Yox, directive: Directive, vnode: VNode): void }

export interface directiveUnbind { (node: HTMLElement | Yox, directive: Directive, vnode: VNode): void }