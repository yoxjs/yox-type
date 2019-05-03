import DirectiveHooks from './hooks/Directive'
import TransitionHooks from './hooks/Transition'
import YoxOptions from './options/Yox'

import API from './API'
import Emitter from './Emitter'
import CustomEvent from './CustomEvent'
import ValueHolder from './ValueHolder'
import YoxPlugin from './YoxPlugin'
import PropRule from './PropRule'

import * as type from '../index'

export default interface YoxClass {

  dom: API,

  is: {

    func(value: any): boolean

    array(value: any): boolean

    object(value: any): boolean

    string(value: any): boolean

    number(value: any): boolean

    boolean(value: any): boolean

    numeric(value: any): boolean

  },

  array: {

    each<T>(
      array: T[],
      callback: (item: T, index: number, length: number) => boolean | void,
      reversed?: boolean
    ): void

    push<T>(array: T[], target: T | T[]): void

    unshift<T>(array: T[], target: T | T[]): void

    indexOf<T>(array: T[], target: T, strict?: boolean): number

    last<T>(array: T[]): T | void

    pop<T>(array: T[]): T | void

    remove<T>(array: T[], target: T, strict?: boolean): number

    has<T>(array: T[], target: T, strict?: boolean): boolean

    toArray<T>(array: T[] | ArrayLike<T>): T[]

    toObject(array: any[], key?: string | null, value?: any): Object

    join(array: string[], separator: string): string

    falsy(array: any): boolean

  },

  object: {

    keys(object: Object): string[]

    sort(object: Object, desc?: boolean): string[]

    each(object: Object, callback: (value: any, key: string) => boolean | void): void

    clear(object: Object): void

    extend(original: Object, ...objects: Object[]): Object

    copy(object: any, deep?: boolean): any

    get(object: any, keypath: string): ValueHolder | undefined

    set(object: Object, keypath: string, value: any, autofill?: boolean): void

    has(object: Object, key: string | number): boolean

    falsy(object: any): boolean

  },

  string: {

    camelize(str: string): string

    hyphenate(str: string): string

    capitalize(str: string): string

    trim(str: any): string

    slice(str: string, start: number, end?: number): string

    indexOf(str: string, part: string, start?: number): number

    lastIndexOf(str: string, part: string, end?: number): number

    startsWith(str: string, part: string): boolean

    endsWith(str: string, part: string): boolean

    charAt(str: string, index?: number): string

    codeAt(str: string, index?: number): number

    has(str: string, part: string): boolean

    falsy(str: any): boolean

  },

  logger: {

    log(msg: string): void

    warn(msg: string): void

    error(msg: string): void

    fatal(msg: string): never

  },

  Emitter: Emitter,

  Event: CustomEvent,

  use(plugin: YoxPlugin): void

  nextTick(task: Function, context?: any): void

  compile(template: string, stringify?: boolean): Function | string

  checkPropTypes(props: Record<string, any>, propTypes: Record<string, PropRule>): Record<string, any>

  directive(
    name: string | Record<string, DirectiveHooks>,
    directive?: DirectiveHooks
  ): DirectiveHooks | void

  transition(
    name: string | Record<string, TransitionHooks>,
    transition?: TransitionHooks
  ): TransitionHooks | void

  component(
    name: string | Record<string, YoxOptions>,
    component?: YoxOptions | type.asyncComponent
  ): YoxOptions | void

  partial(
    name: string | Record<string, string>,
    partial?: string
  ): Function | void

  filter(
    name: string | Record<string, Function | Record<string, Function>>,
    filter?: Function | Record<string, Function | Record<string, Function>>
  ): Function | Record<string, Function> | void

}