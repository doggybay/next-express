import Link from 'next/link'

const Index = () => (
  <div>
    <p>Hello Next.js, this is your friend </p>

    <h2>
      <Link href="/about">
        <a>About</a>
      </Link>
    </h2>
    
  </div>
)
export default Index