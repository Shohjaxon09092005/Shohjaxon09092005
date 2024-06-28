import React from 'react'
import '../style/discoverHero.css'
function DiscoverHero() {
  return (
    <section className='discoverHero'>
      <div className="discoverHero__content">
        <h2>Discover initiatives (RFPs)</h2>
        <p>The list below includes initial ideas that we think could make excellent Grants. This is a living list that will continue to update as ideas popup.</p>

      </div>
      <ul className='discoverHero__list'>
        <li>All</li>
        <li>Open</li>
        <li>Funded</li>
        <li>Completed</li>
      </ul>
    </section>
  )
}

export default DiscoverHero
