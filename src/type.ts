import CustomEvent from './Event'
import YoxOptions from './options/Yox'

import Yox from './Yox'
import VNode from './vnode/VNode'
import Directive from './vnode/Directive'

export type eventData = Record<string, any>

export interface computedGetter { (): any }

export interface computedSetter { (value: any): void }

export interface watcher { (newValue: any, oldValue: any, keypath: string): void }

export interface eventListener { (event: CustomEvent, data?: Record<string, any>): boolean | void }

export interface nativeEventListener { (event: CustomEvent): boolean | void }

export interface specialEventListener { (event: Event | CustomEvent): void }

export interface asyncComponent { (options: YoxOptions | void): void }

export interface directiveGetter { (): any }

export interface directiveHandler { (event?: CustomEvent, data?: Record<string, any>): void }

export interface transitionEnter { (node: HTMLElement, done: () => void): void }

export interface transitionLeave { (node: HTMLElement, done: () => void): void }

export interface directiveBind { (node: HTMLElement | Yox, directive: Directive, vnode: VNode): void }

export interface directiveUpdate { (node: HTMLElement | Yox, directive: Directive, vnode: VNode, oldVnode: VNode): void }

export interface directiveUnbind { (node: HTMLElement | Yox, directive: Directive, vnode: VNode): void }