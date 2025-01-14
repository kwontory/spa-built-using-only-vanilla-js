export default class Component {
  // Component에 'mounted'와 'props'를 추가
  // mounted는 render 이후에 추가적인 기능을 수행하기 위해서 추가
  // props는 부모 컴포넌트가 자식 컴포넌트에게 state 혹은 method를 넘겨주기 위해서 추가
  $target
  $props
  $state
  constructor($target, $props) {
    this.$target = $target
    this.$props = $props // 생성자에서 props 할당
    this.setup()
    this.setEvent()
    //this.render()
  }

  // state 설정
  setup() {}

  // 컴포넌트가 마운트 되었을 때
  mounted() {}

  // HTML template
  template() {
    return ''
  }

  render() {
    this.$target.innerHTML = this.template()
    this.mounted() // render 후에 mounted 호출
  }

  // 이벤트 설정
  setEvent() {}

  // 상태 변경 후 렌더링
  setState(newState) {
    this.$state = { ...this.$state, ...newState }
    this.render()
  }

  // 이벤트 위임을 활용하여 이벤트 등록
  addEvent(eventType, selector, callback) {
    this.$target.addEventListener(eventType, event => {
      if (!event.target.closest(selector)) return false
      callback(event)
    })
  }
}
