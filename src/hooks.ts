import {
  NativeListener,
} from './type'

import {
  VNode,
  Directive,
} from './vnode'

import {
  YoxInterface,
} from './yox'

export interface DirectiveHooks {
  once?: true
  bind: (node: HTMLElement | YoxInterface, directive: Directive, vnode: VNode) => void
  unbind?: (node: HTMLElement | YoxInterface, directive: Directive, vnode: VNode) => void
}

export interface SpecialEventHooks {
  on: (node: HTMLElement | Window | Document, listener: NativeListener) => void
  off: (node: HTMLElement | Window | Document, listener: NativeListener) => void
}

export interface TransitionHooks {
  enter?: (node: HTMLElement) => void
  leave?: (node: HTMLElement, done: () => void) => void
}
