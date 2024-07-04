import { SvgArrowMaximize, SvgDatabase, SvgSparkles } from '../resources/assets/svg-global'

const menuCadrs = [
  {
    title: 'Drag & Drop',
    icon: <SvgArrowMaximize />,
    headingColor: 'text-blue-500',
    content: 'Allows users to move items by dragging them with the mouse. Facilitates the intuitive organization of content at all times.'
  },
  {
    title: 'Local Storage',
    icon: <SvgDatabase />,
    headingColor: 'text-purple-500',
    content: 'Saves data in the browser so that it persists between sessions. Useful for remembering custom preferences and settings.'
  },
  {
    title: 'Animation',
    icon: <SvgSparkles />,
    headingColor: 'text-orange-500',
    content: 'Movement and dynamism to the elements without losing performance. Creating an attractive visual experience for users.'
  }
]

export default menuCadrs
