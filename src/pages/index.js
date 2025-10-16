import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import featureStyles from './styles.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/ministry/gospels/preface">
            Street Evangelism
          </Link>
        </div>
      </div>
    </header>
  );
}

function MissionStatement() {
  return (
    <section className={featureStyles.mission}>
      <div className="container">
        <div className="text--center">
          <Heading as="h2" className={featureStyles.missionTitle}>
            Our Mission
          </Heading>
          <p className={featureStyles.missionText}>
            We strive to prepare the next generation to be devoted Christians who uphold biblical values through Christian ministry, creative devotional content, innovative faith-based technology, equipping programs, and collaborative partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}

function Verse() {
  return (
    <section className="container my-5">
      <hr className="mb-4" style={{borderColor: '#2e5266', borderWidth: '2px'}} />
      <p style={{fontStyle: 'italic'}}>
        He who was seated on the throne said, "I am making everything new!" Then he said, "Write this down, for these words are trustworthy and true." - Revelation 21:5
      </p>
    </section>
  );
}

const FeatureList = [
  {
    title: 'Ministry & Outreach',
    Svg: require('@site/static/img/icon-church.svg').default,
    description: (
      <>
        Advancing the Christian faith through evangelism, ministry, education, and outreach designed to share the Gospel and deepen devotion to Christ and God's truth.
      </>
    ),
  },
  {
    title: 'Arts & Media',
    Svg: require('@site/static/img/icon-books.svg').default,
    description: (
      <>
        Distributing creative devotional materials (e.g., books, music, media, performances) that nurture spiritual growth and Christian discipleship through the Holy Spirit.
      </>
    ),
  },
  {
    title: 'AI & Technology',
    Svg: require('@site/static/img/icon-rocket.svg').default,
    description: (
      <>
        Conducting innovative research in Artificial Intelligence and developing relevant technologies that reflect Christian principles and support spiritual formation.
      </>
    ),
  },
  {
    title: 'Programs & Training',
    Svg: require('@site/static/img/icon-calendar.svg').default,
    description: (
      <>
        Providing events, community programs, workshops, and training that equip people to live according to Christ-centered biblical values and become mature Christians.
      </>
    ),
  },
  {
    title: 'Next-Generation Focused',
    Svg: require('@site/static/img/icon-seed.svg').default,
    description: (
      <>
        Empowering young people to thrive as faithful Christians in a rapidly changing world, preparing them to be leaders who uphold Christian values and serve the body of Christ.
      </>
    ),
  },
  {
    title: 'Collaboration & Partnership',
    Svg: require('@site/static/img/icon-dove.svg').default,
    description: (
      <>
        Engaging in charitable activities and collaborating with churches and Christian organizations in ways consistent with Christian ministry and our mission.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')} style={{marginBottom: '2rem'}}>
      <div className={featureStyles.featureCard}>
        <div className="text--center">
          <Svg className={featureStyles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="REnew All LIving Things in Yeshua">
      <HomepageHeader />
      <main>
        <MissionStatement />
        <section className={featureStyles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        <Verse />
      </main>
    </Layout>
  );
}