import SpecialEvent from './SpecialEvent'

import * as type from '../index'

export default interface API {

  createElement(tag: string, isSvg?: boolean): Element

  createText(text: string): Text

  createComment(text: string): Comment

  createEvent(event: any, node: HTMLElement): any

  prop(node: HTMLElement, name: string, value?: string | number | boolean): string | number | boolean | void

  removeProp(node: HTMLElement, name: string, hint?: number): void

  attr(node: HTMLElement, name: string, value?: string): string | void

  removeAttr(node: HTMLElement, name: string): void

  before(parentNode: Node, node: Node, referenceNode: Node): void

  append(parentNode: Node, node: Node): void

  replace(parentNode: Node, node: Node, oldNode: Node): void

  remove(parentNode: Node, node: Node): void

  parent(node: Node): Node | void

  next(node: Node): Node | void

  find(selector: string): Element | void

  tag(node: Node): string | void

  text(node: Node, text?: string): string | void

  html(node: Element, html?: string): string | void

  addClass(node: HTMLElement, className: string): void

  removeClass(node: HTMLElement, className: string): void

  on(node: HTMLElement, type: string, listener: type.nativeEventListener, context?: any): void

  off(node: HTMLElement, type: string, listener: type.nativeEventListener): void

  specialEvents: Record<string, SpecialEvent>

}