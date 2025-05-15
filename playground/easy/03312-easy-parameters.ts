/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #쉬움 #infer #tuple #built-in

  ### 질문

  내장 제네릭 `Parameters<T>`를 이를 사용하지 않고 구현하세요.

  예시:

  ```ts
  const foo = (arg1: string, arg2: number): void => {}

  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
  ```

  > GitHub에서 보기: https://tsch.js.org/3312/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type MyParameters<T extends (...args: any[]) => any> = T extends (...any: infer S) => any ? S : any

/**
 * 조건부 타입 안에서 타입을 추론해서 이름 붙이는 키워드 infer
 *
 * 타입스크립트에서 함수 타입 선언에 ...를 쓴다는 것은 "튜플을 펼쳐서 리스트로 쓰겠다"는 의미
 *
 * infer와 함께 쓰는 ...args: infer S는 "이 위치의 튜플을 S라는 이름으로 추론하겠다"는 의미
 */

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

function foo(arg1: string, arg2: number): void {}
function bar(arg1: boolean, arg2: { a: 'A' }): void {}
function baz(): void {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/3312/answer/ko
  > 정답 보기: https://tsch.js.org/3312/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
