import CustomEvent from 'yox-common/util/Event'
import SpecialEvent from './SpecialEvent'

export default interface API {

  createElement(tag: string, isSvg?: boolean): HTMLElement

  createText(text: string): Text

  createComment(text: string): Comment

  createEvent(event: any, node: HTMLElement): any

  isElement(node: Node): boolean

  prop(node: HTMLElement, name: string, value?: string | number | boolean): string | number | boolean | void

  removeProp(node: HTMLElement, name: string, hint?: number): void

  attr(node: HTMLElement, name: string, value?: string): string | void

  removeAttr(node: HTMLElement, name: string): void

  data(node: HTMLElement, name: string, value?: string): string | void

  removeData(node: HTMLElement, name: string): void

  before(parentNode: Node, newNode: Node, referenceNode: Node): void

  append(parentNode: Node, node: Node): void

  replace(parentNode: Node, newNode: Node, oldNode: Node): void

  remove(parentNode: Node, node: Node): void

  parent(node: Node): Node

  next(node: Node): Node

  find(selector: string, context?: HTMLElement): HTMLElement | void

  tag(node: HTMLElement): string

  children(node: Node): Node[]

  text(node: HTMLElement, content?: string): string | void

  html(node: HTMLElement, content?: string): string | void

  addClass(node: HTMLElement, className: string): void

  removeClass(node: HTMLElement, className: string): void

  on(node: HTMLElement, type: string, listener: (event: CustomEvent) => void, context?: any): void

  off(node: HTMLElement, type: string, listener: (event: CustomEvent) => void): void

  specialEvents: Record<string, SpecialEvent>

}