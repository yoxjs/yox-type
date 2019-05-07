import DirectiveHooks from '../hooks/Directive'
import * as type from '../type'

export default interface Directive {

  // 指令命名空间，如 event
  readonly ns: string

  // 指令名称，如 click
  readonly name: string

  // vnode 级别每个指令的 unique key
  readonly key: string

  // 指令的值，一般是字面量，比如 o-x="1" 中的 1
  // 如果不是字面量，则提供 getter 函数用于取值，同时 value 也会保留字面量
  readonly value?: string | number | boolean

  // 必须有 hooks, 不然玩个毛...
  readonly hooks: DirectiveHooks

  // 取值函数
  readonly getter?: type.getter | void

  // 事件或函数调用式的指令会编译成 handler
  readonly handler?: type.listener | void

  // 单向绑定的 keypath
  readonly binding?: string | void

  // 单向绑定的 hint，用于区分 attr 和 prop
  readonly hint?: type.hint | void

}