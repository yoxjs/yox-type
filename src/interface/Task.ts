export default interface Task {

  // 待执行的函数
  fn: Function

  // 执行函数的上下文对象
  ctx?: any

}