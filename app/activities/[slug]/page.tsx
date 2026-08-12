import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import ArticleGallery from "@/components/ArticleGallery";
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
    title: `${found.article.title} · Anjuman-E Rahmania Ahmadia Sunnia Trust`,
    description: found.article.excerpt ?? found.article.body[0],
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
      <main className="flex-1">
        <section className="relative flex min-h-[340px] items-end sm:min-h-[420px] md:min-h-[480px]">
          <div className="absolute inset-0 overflow-hidden">
            <img src={article.heroImage} alt="" className="h-full w-full object-cover" />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(6,20,12,0.94) 0%, rgba(6,20,12,0.6) 45%, rgba(6,20,12,0.18) 80%)",
            }}
          />
          <div className="relative mx-auto w-full max-w-[800px] px-5 py-10 md:px-10 md:py-14">
            <Link
              href="/activities"
              className="mb-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white/80 hover:text-white"
            >
              <ArrowLeft size={14} weight="bold" />
              Back to Activities
            </Link>
            <span className="mb-3 inline-block w-fit rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
              {category.label}
            </span>
            <h1 className="text-[24px] leading-[1.25] font-extrabold text-white sm:text-[30px] md:text-[36px]">
              {article.title}
            </h1>
            <div className="mt-3 text-[12.5px] font-semibold text-white/70">{article.date}</div>
          </div>
        </section>

        <div className="mx-auto max-w-[760px] px-5 py-12 md:px-10 md:py-16">
          <Reveal>
            {article.excerpt && (
              <p className="mb-6 text-[16px] leading-relaxed font-semibold text-deep">
                {article.excerpt}
              </p>
            )}

            <div className="flex flex-col gap-4">
              {article.body.map((paragraph, i) => (
                <p key={i} className="text-[14.5px] leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            {article.highlights.length > 0 && (
              <div className="mt-8 rounded-card border border-hairline bg-tint/60 p-5 sm:p-6">
                <h2 className="mb-3.5 text-[13px] font-extrabold tracking-[0.04em] text-brand uppercase">
                  Key Highlights
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {article.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle size={17} weight="fill" className="mt-0.5 shrink-0 text-brand" />
                      <span className="text-[13.5px] leading-relaxed text-ink-soft">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10">
              <ArticleGallery images={article.gallery} alt={article.title} />
            </div>

            {related.length > 0 && (
              <div className="mt-12 border-t border-hairline pt-8">
                <h2 className="mb-4 text-[13px] font-extrabold tracking-[0.04em] text-muted uppercase">
                  More from {category.label}
                </h2>
                <div className="flex flex-col gap-3">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/activities/${item.slug}`}
                      className="group flex items-center gap-4 rounded-card border border-hairline p-3 transition-shadow hover:shadow-[0_8px_24px_rgba(15,53,31,0.10)]"
                    >
                      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                        <img src={item.heroImage} alt="" className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-[13.5px] font-bold text-deep group-hover:text-brand">
                          {item.title}
                        </div>
                        <div className="text-xs text-faint">{item.date}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link
              href="/activities"
              className="mt-10 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-brand hover:text-brand-hover"
            >
              <ArrowLeft size={15} weight="bold" />
              Back to Activities
            </Link>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
