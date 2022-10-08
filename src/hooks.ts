import {
  NativeListener,
} from './type'

import {
  Directive,
  VNode,
} from './vnode'

export interface DirectiveHooks {
  afterMount?: (directive: Directive, vnode: VNode) => void
  beforeUpdate?: (directive: Directive, vnode: VNode) => void
  afterUpdate?: (directive: Directive, vnode: VNode) => void
  beforeDestroy?: (directive: Directive, vnode: VNode) => void
}

export interface SpecialEventHooks {
  on: (node: HTMLElement | Window | Document, listener: NativeListener) => void
  off: (node: HTMLElement | Window | Document, listener: NativeListener) => void
}

export interface TransitionHooks {
  enter?: (node: HTMLElement) => void
  leave?: (node: HTMLElement, done: () => void) => void
}
