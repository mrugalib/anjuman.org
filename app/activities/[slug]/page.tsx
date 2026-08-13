import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ArticleDetail from "@/components/ArticleDetail";
import { findActivity, activityCategories } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return activityCategories.flatMap((category) =>
    [category.featured, ...category.rest].map((item) => ({ slug: item.slug })),
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const found = findActivity(slug);
  if (!found) return { title: "Activity Not Found" };
  return {
    title: `${found.article.title.en} · Anjuman-E Rahmania Ahmadia Sunnia Trust`,
    description: found.article.excerpt?.en ?? found.article.body.en[0],
  };
}

export default async function ActivityArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const found = findActivity(slug);
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
        basePath="/activities"
        backHref="/activities"
        backLabelKey="article_backToActivities"
      />
      <SiteFooter />
    </>
  );
}
