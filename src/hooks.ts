import {
  NativeListener,
} from './type'

import {
  Directive,
} from './vnode'

export interface DirectiveHooks {
  afterMount: (directive: Directive) => void
  beforeUpdate: (directive: Directive) => void
  afterUpdate: (directive: Directive) => void
  beforeDestroy: (directive: Directive) => void
}

export interface SpecialEventHooks {
  on: (node: HTMLElement | Window | Document, listener: NativeListener) => void
  off: (node: HTMLElement | Window | Document, listener: NativeListener) => void
}

export interface TransitionHooks {
  enter?: (node: HTMLElement) => void
  leave?: (node: HTMLElement, done: () => void) => void
}
