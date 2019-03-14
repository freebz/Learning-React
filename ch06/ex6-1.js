// 예제 6-1 커스텀 프로퍼티 검증

propTypes: {
  ingredients: PropTypes.number,
  steps: PropTypes.number,
  title: (props, propName) =>
    (typeof props[propName] !== 'string') ?
      new Error("제목(title)은 문자열이어야 합니다.") :
      (props[propName].length > 20) ?
        new Error("제목은 20자 이내여야 합니다.") :
        null
}
