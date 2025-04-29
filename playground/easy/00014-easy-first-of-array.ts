/*
  14 - First of Array
  -------
  by Anthony Fu (@antfu) #쉬움 #array

  ### 질문

  배열(튜플) `T`를 받아 첫 원소의 타입을 반환하는 제네릭 `First<T>`를 구현하세요.

  예시:

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3
  ```

  > GitHub에서 보기: https://tsch.js.org/14/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type First<T extends any[]> = T extends [] ? never : T[0]

/**
 * extends []
 * 일반적으로는 구조적 서브타입 호환을 의미하지만 조건식에서는 정확히 빈 배열인지 검사
 *
 * 서브타입?
 * 타입 A가 타입 B의 서브타입이라는 것은, 타입 A의 값을 타입 B가 요구하는 곳에 쓸 수 있다는 뜻
 * A는 더 구체적이고, B는 더 일반적임
 *
 */

// 일반적인 변수 타입은 공변
type A = number | string
type B = number

let a: A
let b: B

a = b // O
b = a // X

// 함수의 매개변수 타입은 반공변
type Func1 = (x: number) => void
type Func2 = (x: number | string) => void

let f1: Func1
let f2: Func2

f1 = f2 // O
f2 = f1 // X

// 함수의 반환 타입은 공변
type Func3 = (x: number) => number
type Func4 = (x: number) => number | string

let f3: Func3
let f4: Func4

f3 = f4 // X
f4 = f3 // O

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/14/answer/ko
  > 정답 보기: https://tsch.js.org/14/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
