/**
 * Copyright 2025 Jiaqi Liu. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Caring for Developers',
    Svg: require('@site/static/img/developer.svg').default,
    scale: 1,
    description: (
      <>
        We understand a good business product is backed by developers who love their works. We let them free to do what
        they want to: add business value by writing code.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/business.svg').default,
    scale: 1,
    description: (
      <>
        FastWS lets us focus on our business logics, and the template will do the chores.
      </>
    ),
  },
  {
    title: 'Production Quality',
    Svg: require('@site/static/img/high-quality.svg').default,
    scale: 0.75,
    description: (
      <>
        Quickly build and deploy production quality webservices that expose organization data as a service. Our APIs
        support complex filtering rules, sorting, pagination, subscriptions, and text search.
      </>
    ),
  },
  {
    title: 'Open API',
    Svg: require('@site/static/img/openapi-logo.svg').default,
    scale: 0.8,
    description: (
      <>
        Explore, understand, and compose queries against our CRUD API through generated OpenAPI documentation or GraphQL
        schema.
      </>
    ),
  },
  {
    title: 'Container-Native Supported',
    Svg: require('@site/static/img/docker.svg').default,
    scale: 1,
    description: (
      <>
        FastWS supports running in containerized environment out of the box, making its deployment fast and convenient.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/apache.svg').default,
    scale: 0.7,
    description: (
      <>
        FastWS is 100% open source and available on <a href="https://github.com/QubitPi/fast-ws">Github</a>. Released
        under the commercial-friendly
        <a href="http://www.apache.org/licenses/LICENSE-2.0.html"> Apache License, Version 2.0.</a>
      </>
    ),
  },
];

function Feature({title, Svg, scale, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} transform={"scale(" + scale + ")"} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
