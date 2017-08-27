import Link from 'next/link'

// example header component
export default () => (
    <ul>
      <li><Link prefetch href='/'><a>index</a></Link></li>
      <li><Link prefetch href='colorful-text-component'><a>colorful-text-component</a></Link></li>
      <li><Link prefetch href='colorful-text'><a>colorful-text</a></Link></li>
      <li><Link prefetch href='counter-buttons'><a>counter-buttons</a></Link></li>
      <li><Link prefetch href='counter-click'><a>counter-click</a></Link></li>
      <li><Link prefetch href='counter-timer'><a>counter-timer</a></Link></li>
      <li><Link prefetch href='hello-world-component'><a>hello-world-component</a></Link></li>
      <li><Link prefetch href='hello-world-purefunction'><a>hello-world-purefunction</a></Link></li>
      <li><Link prefetch href='lifecyle'><a>lifecyle</a></Link></li>
      <li><Link prefetch href='number-controller-final'><a>number-controller-final</a></Link></li>
      <li><Link prefetch href='number-controller'><a>number-controller</a></Link></li>
      <li><Link prefetch href='user-final'><a>user-final</a></Link></li>
      <li><Link prefetch href='user'><a>user</a></Link></li>
    </ul>
)