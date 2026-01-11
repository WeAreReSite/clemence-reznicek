// components/ArticleContent.tsx
import { JsonLd } from './JsonLd';

interface ArticleProps {
  title: string;
  entity: string;
  definition: string;
  keyStatistic: { value: string; source: string; sourceUrl: string };
  content: string;
  faqs: { question: string; answer: string }[];
  author: { name: string; title: string; company: string };
  publishedAt: string;
  updatedAt: string;
}

export function ArticleContent({
  title, entity, definition, keyStatistic, content, faqs, author, publishedAt, updatedAt
}: ArticleProps) {

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.title,
      affiliation: { '@type': 'Organization', name: author.company },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <article>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      
      <h1>{title}</h1>
      
      {/* GEO-optimized lead: entity + definition + statistic in first 60 words */}
      <p className="lead">
        <strong>{entity}</strong> {definition}. According to{' '}
        <a href={keyStatistic.sourceUrl}>{keyStatistic.source}</a>,{' '}
        {keyStatistic.value}.
      </p>
      
      <div dangerouslySetInnerHTML={{ __html: content }} />
      
      {/* FAQ section for GEO */}
      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading">Frequently Asked Questions</h2>
        {faqs.map((faq, i) => (
          <details key={i}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>
    </article>
  );
}