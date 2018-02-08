import { greet } from './greet'

// NOTE:: Can't name bundle from what I can see so attach to window. Not ideal but works 👍
window.myPackage = {
  greet,
}
