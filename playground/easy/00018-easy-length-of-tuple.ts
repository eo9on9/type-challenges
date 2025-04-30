/*
  18 - Length of Tuple
  -------
  by sinoon (@sinoon) #쉬움 #tuple

  ### 질문

  배열(튜플)을 받아 길이를 반환하는 제네릭 `Length<T>`를 구현하세요.

  예시:

  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```

  > GitHub에서 보기: https://tsch.js.org/18/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Length<T extends readonly any[]> = T['length']

/**
 * readonly any[]
 * 읽기 전용 배열, 배열의 요소는 접근할 수 있지만, 추가, 삭제, 변경은 할 수 없음
 * const arr1 = [1, 2, 3] // number[]
 * const arr2 = [1, 2, 3] as const // readonly [1, 2, 3]
 *
 * as const
 * 리터럴 값(객체, 배열, 문자열 등)을 최대한 구체적이고 불변하게 추론하도록 지시하는 문법
 * 객체에 사용하면 deep 객체에도 readonly 적용
 * const obj1 = { name: 'Alice' } // { name: string }
 * const obj2 = { name: 'Alice' } as const // { readonly name: 'Alice' }
 */

const user = {
  name: 'Mark',
  info: {
    age: 12,
    city: 'Seoul',
    others: {
      a: 'a',
      b: 'b',
    },
  },
} as const

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/18/answer/ko
  > 정답 보기: https://tsch.js.org/18/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
