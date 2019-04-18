import CustomEvent from 'yox-common/util/Event'
import YoxOptions from './YoxOptions'

import Yox from './Yox'
import VNode from './vnode/VNode'
import Directive from './vnode/Directive'

export interface computedGetter { (): any }

export interface computedSetter { (value: any): void }

export interface watcher { (newValue: any, oldValue: any, keypath: string): void }

export interface eventListener { (event: CustomEvent, data?: Record<string, any>): boolean | void }

export interface nativeEventListener { (event: CustomEvent): boolean | void }

export interface specialEventListener { (event: Event | CustomEvent): boolean | void }

export interface asyncComponent { (options: YoxOptions | void): void }

export interface directiveGetter { (): any }

export interface directiveHandler { (event?: CustomEvent, data?: Record<string, any>): boolean | void }

export interface transitionEnter { (node: Node, done: () => void): void }

export interface transitionLeave { (node: Node, done: () => void): void }

export interface directiveBind { (node: Node | Yox, directive: Directive, vnode: VNode): void }

export interface directiveUpdate { (node: Node | Yox, directive: Directive, vnode: VNode, oldVnode: VNode): void }

export interface directiveUnbind { (node: Node | Yox, directive: Directive, vnode: VNode): void }