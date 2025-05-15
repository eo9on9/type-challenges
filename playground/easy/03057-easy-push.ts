/*
  3057 - Push
  -------
  by jiangshan (@jiangshanmeta) #쉬움 #array

  ### 질문

  `Array.push`의 제네릭 버전을 구현하세요.

  예시:

  ```typescript
  type Result = Push<[1, 2], '3'> // [1, 2, '3']
  ```

  > GitHub에서 보기: https://tsch.js.org/3057/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// type Push<T extends unknown[], U> = [...T, U]

type Push<T extends unknown[], U> = [U] extends [unknown[]] ? [...T, ...U] : [...T, U]

/**
 * type Push<T extends unknown[], U> = U extends unknown[] ? [...T, ...U] : [...T, U]
 *
 * type A = Push<['1', 2, '3'], boolean> // ["1", 2, "3", false] | ["1", 2, "3", true]
 *
 * 분산 조건 타입(distributive conditional types)
 *  - 타입스크립트는 조건부 타입에서 유니언 타입에 대해 분산 평가를 함
 *  - boolean은 true | false 이므로, 각각에 대한 평가를 수행
 *  - 분산 평가를 방지하고 싶으면 []로 감싸면 됨 ex) [U] extends [unknown[]] ? [...T, ...U] : [...T, U]
 */

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/3057/answer/ko
  > 정답 보기: https://tsch.js.org/3057/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
