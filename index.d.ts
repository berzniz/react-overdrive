// Type definitions for react-overdrive
// Project: https://github.com/berzniz/react-overdrive
// Definitions by: Stephen King <https://github.com/sbking>

declare module 'react-overdrive' {
  import {Component, CSSProperties} from 'react'
  export interface Props {
    id: string
    duration?: number
    element?: string
    animationDelay?: number
    onAnimationEnd?: () => void
    style?: CSSProperties
  }
  export interface State {
    loading: boolean
  }
  export default class Overdrive extends Component<Props, State> {}
}
