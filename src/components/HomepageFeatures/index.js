import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bahasa Indonesia',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        TutorialTimposu berupaya menyajikan materi pemrograman
        berkualitas dengan menggunakan Bahasa Indonesia.
      </>
    ),
  },
  {
    title: 'Roadmap Terstruktur',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Materi semua diajarkan dari awal sampai akhir. 
        Setiap materi pemrograman disusun sesuai dengan alurnya.
      </>
    ),
  },
  {
    title: 'Mulailah Belajar',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Mulailah untuk belajar bahasa pemrograman yang kamu ingikan.
        Kamu bisa mulai dari sekarang untuk mengembangkan dirimu.
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
        <h3>{title}</h3>
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
