///<reference types="react" />

declare module 'react-overdrive' {
  export interface Props {
    id: string | number
    duration?: number
    easing?: string
    element?: string
    animationDelay?: number
    onAnimationEnd?: () => void
    style?: React.CSSProperties
  }
  export interface State {
    loading: boolean
  }
  export default class Overdrive extends React.Component<Props, State> { }
}
