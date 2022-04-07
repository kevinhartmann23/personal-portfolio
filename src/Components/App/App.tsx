import landingPhoto from '../../Assets/images/kev_dev.png'
import NavMenu from '../NavMenu/NavMenu'
import LinkMenu from '../LinkMenu/LinkMenu'
// import CutiveMono from '../../Assets/fonts/CutiveMono-Regular.ttf'
import './App.css'

// const fjallaOne = {
//   fontFamily: 'FjallaOne',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: '600',
//   src: `
//    local('FjallaOne'),
//    local('FjallaOne-Regular'),
//    url(${FjallaOne}) format('ttf')
//  `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// }

// const cutiveMono = {
//   fontFamily: 'CutiveMono',
//   // fontStyle: 'semi-bold',
//   fontDisplay: 'swap',
//   fontWeight: '600',
//   src: `
//    local('CutiveMono'),
//    local('CutiveMono-Regular'),
//    url(${CutiveMono}) format('ttf')
//  `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// }



function App() {
  return (
      <div className="App">
        <NavMenu />
        <img className="poster" src={landingPhoto} alt="Kevin Hartmann Intro" />
        <LinkMenu />
      </div>
  )
}

export default App
