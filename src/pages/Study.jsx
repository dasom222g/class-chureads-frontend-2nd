import React from 'react'
import Greeting from '../components/study/Greeting'
import Counter from '../components/study/Counter'

const Study = () => {
  return (
    <div>
      <Greeting />
      <Greeting username='후츠릿' />
      {/* 미션: 내 이름 props로 넘기기 */}
      <Greeting username='이름' />
      <Counter />
    </div>
  )
}

export default Study