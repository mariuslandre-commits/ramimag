import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getCaseStudyBySlug, listCaseStudies } from '@/lib/mdx';
import MDXComponents from '@/components/MDXComponents';

export async function generateStaticParams() {
  const slugs = await listCaseStudies();
  return slugs.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const doc = await getCaseStudyBySlug(params.slug);
  if (!doc) return notFound();
  return (
    <article className="prose prose-slate max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-brand-navy">{doc.frontMatter.title as any}</h1>
      <p className="!mt-1 text-sm text-neutral-sub">{doc.frontMatter.summary as any}</p>
      {/* @ts-expect-error Server Component */}
      <MDXRemote source={doc.content} components={MDXComponents as any} />
    </article>
  );
}
