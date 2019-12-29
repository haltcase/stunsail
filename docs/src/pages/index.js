import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'

import styles from './styles.module.css'

const features = [
  {
    title: <>Practically functional</>,
    imageUrl: 'img/undraw_both_sides_hbv3.svg',
    description: (
      <>
        While stunsail has an API that encourages functional programming, it still
        feels at home in JavaScript by keeping it simple & practical.
      </>
    )
  },
  {
    title: <>TypeScript defined</>,
    imageUrl: 'img/undraw_code_review_l1q9.svg',
    description: (
      <>
        TypeScript definitions are included so you'll know what you're looking for
        and how to use it.
      </>
    )
  },
  {
    title: <>Pipeline & param.macro friendly</>,
    imageUrl: 'img/undraw_good_team_m7uu.svg',
    description: (
      <>
        Designed for pipelining, stunsail works nicely with both&nbsp;
        <a href="https://github.com/citycide/param.macro"><code>param.macro</code></a>,
        a Babel macro for compile-time partial application, and the&nbsp;
        <a href="https://github.com/tc39/proposal-pipeline-operator#introduction">pipe operator.</a>
      </>
    )
  }
]

const badges = [
  {
    href: 'https://www.npmjs.com/package/stunsail',
    path: 'npm/v/stunsail',
    alt: 'Version'
  },
  {
    href: 'https://www.npmjs.com/package/stunsail',
    path: 'npm/license/stunsail',
    alt: 'License'
  },
  {
    href: 'https://travis-ci.org/citycide/stunsail',
    path: 'travis/citycide/stunsail',
    alt: 'Travis CI'
  },
  {
    href: 'https://standardjs.com',
    path: 'badge/code%20style/standard/green',
    alt: 'JavaScript Standard Style'
  }
]

const Feature = ({ imageUrl, title, description }) => {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const Badge = ({ href, path, alt }) => {
  const root = 'https://flat.badgen.net/'
  const img = (
    <img src={root + path} alt={alt} style={{
      paddingLeft: '0.25rem',
      paddingRight: '0.25rem'
    }} />
  )

  return typeof href === 'undefined'
    ? img
    : (<a href={href}>{img}</a>)
}

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title} documentation`}
      description="Documentation for the stunsail JavaScript utility library.">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p style={{ textAlign: 'center' }}>
            {badges.map(badge => (<Badge {...badge} />))}
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/quick-start')}>
              Get Started →
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
