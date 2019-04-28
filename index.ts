import CustomEvent from './src/Event'
import YoxOptions from './src/options/Yox'

import Yox from './src/Yox'
import VNode from './src/vnode/VNode'
import Directive from './src/vnode/Directive'

export type eventData = Record<string, any>

export interface computedGetter { (): any }

export interface computedSetter { (value: any): void }

export interface watcher { (newValue: any, oldValue: any, keypath: string): void }

export interface eventListener { (event: CustomEvent, data?: Record<string, any>): boolean | void }

export interface nativeEventListener { (event: Event | CustomEvent): boolean | void }

export interface asyncComponent { (options: YoxOptions | void): void }

export interface directiveGetter { (): any }

export interface directiveHandler { (event?: CustomEvent, data?: Record<string, any>): void }

export interface transitionEnter { (node: HTMLElement, done: () => void): void }

export interface transitionLeave { (node: HTMLElement, done: () => void): void }

export interface directiveBind { (node: HTMLElement | Yox, directive: Directive, vnode: VNode): void }

export interface directiveUnbind { (node: HTMLElement | Yox, directive: Directive, vnode: VNode): void }