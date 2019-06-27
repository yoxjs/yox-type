import {
  Listener,
  PropertyHint,
} from './type'

import {
  SpecialEventHooks,
} from './hooks'

export interface DomUtil {

  createElement(tag: string, isSvg?: boolean): Element

  createText(text: string): Text

  createComment(text: string): Comment

  prop(node: HTMLElement, name: string, value?: string | number | boolean): string | number | boolean | void

  removeProp(node: HTMLElement, name: string, hint?: PropertyHint): void

  attr(node: HTMLElement, name: string, value?: string): string | void

  removeAttr(node: HTMLElement, name: string): void

  before(parentNode: Node, node: Node, beforeNode: Node): void

  append(parentNode: Node, node: Node): void

  replace(parentNode: Node, node: Node, oldNode: Node): void

  remove(parentNode: Node, node: Node): void

  parent(node: Node): Node | void

  next(node: Node): Node | void

  find(selector: string): Element | void

  tag(node: Node): string | void

  text(node: Node, text?: string, isStyle?: boolean, isOption?: boolean): string | void

  html(node: Element, html?: string, isStyle?: boolean, isOption?: boolean): string | void

  addClass(node: HTMLElement, className: string): void

  removeClass(node: HTMLElement, className: string): void

  on(node: HTMLElement | Window | Document, type: string, listener: Listener): void

  off(node: HTMLElement | Window | Document, type: string, listener: Listener): void

  addSpecialEvent(type: string, hooks: SpecialEventHooks): void

}
