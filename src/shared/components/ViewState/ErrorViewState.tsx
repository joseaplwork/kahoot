import { ViewState } from './ViewState'

import './ViewState.css'

export function ErrorViewState() {
  return <ViewState type="error" message="Ops something went wrong" />
}
