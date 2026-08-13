import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ArticleDetail from "@/components/ArticleDetail";
import { findNewsArticle, newsCategories } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return newsCategories.flatMap((category) =>
    [category.featured, ...category.rest].map((item) => ({ slug: item.slug })),
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const found = findNewsArticle(slug);
  if (!found) return { title: "Article Not Found" };
  return {
    title: `${found.article.title.en} · Anjuman-E Rahmania Ahmadia Sunnia Trust`,
    description: found.article.excerpt?.en ?? found.article.body.en[0],
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const found = findNewsArticle(slug);
  if (!found) notFound();

  const { article, category } = found;
  const allInCategory = [category.featured, ...category.rest];
  const related = allInCategory.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <SiteHeader />
      <ArticleDetail
        article={article}
        category={category}
        related={related}
        basePath="/news"
        backHref="/#news"
        backLabelKey="article_backToNews"
      />
      <SiteFooter />
    </>
  );
}
