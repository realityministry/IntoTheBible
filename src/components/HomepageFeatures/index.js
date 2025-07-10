import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '체계적인 성경 공부',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        복음서부터 시작하여 성경 전체를 체계적으로 공부할 수 있습니다.
        단계별 가이드를 통해 깊이 있는 성경 이해를 도와줍니다.
      </>
    ),
  },
  {
    title: '다국어 지원',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        한국어와 영어로 제공되어 더 많은 사람들이 접근할 수 있습니다.
        각 언어별로 최적화된 콘텐츠를 제공합니다.
      </>
    ),
  },
  {
    title: '실용적인 적용',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        성경의 가르침을 일상생활에 적용할 수 있도록 실용적인 
        예시와 적용점을 함께 제공합니다.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
