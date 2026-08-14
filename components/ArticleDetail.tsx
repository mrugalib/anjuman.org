"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";
import ArticleGallery from "@/components/ArticleGallery";
import { useLanguage } from "@/lib/i18n";
import type { NewsCategory, NewsItem, Localized } from "@/lib/data";
import type { TranslationKey } from "@/lib/translations";

export default function ArticleDetail({
  article,
  category,
  related,
  basePath,
  backHref,
  backLabelKey,
}: {
  article: NewsItem & { excerpt?: Localized };
  category: NewsCategory;
  related: NewsItem[];
  basePath: string;
  backHref: string;
  backLabelKey: TranslationKey;
}) {
  const { t, lang } = useLanguage();

  return (
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
            href={backHref}
            className="mb-4 flex w-fit items-center gap-1.5 text-[12.5px] font-semibold text-white/80 hover:text-white"
          >
            <ArrowLeft size={14} weight="bold" />
            {t(backLabelKey)}
          </Link>
          <span className="mb-3 block w-fit rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
            {category.label[lang]}
          </span>
          <h1 className="text-[24px] leading-[1.25] font-extrabold text-white sm:text-[30px] md:text-[36px]">
            {article.title[lang]}
          </h1>
          <div className="mt-3 text-[12.5px] font-semibold text-white/70">{article.date}</div>
        </div>
      </section>

      <div className="mx-auto max-w-[760px] px-5 py-12 md:px-10 md:py-16">
        <Reveal>
          {article.excerpt && (
            <p className="mb-6 text-[16px] leading-relaxed font-semibold text-deep">
              {article.excerpt[lang]}
            </p>
          )}

          <div className="flex flex-col gap-4">
            {article.body[lang].map((paragraph, i) => (
              <p key={i} className="text-[14.5px] leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          {article.highlights[lang].length > 0 && (
            <div className="mt-8 rounded-card border border-hairline bg-tint/60 p-5 sm:p-6">
              <h2 className="mb-3.5 text-[13px] font-extrabold tracking-[0.04em] text-brand uppercase">
                {t("article_keyHighlights")}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {article.highlights[lang].map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={17} weight="fill" className="mt-0.5 shrink-0 text-brand" />
                    <span className="text-[13.5px] leading-relaxed text-ink-soft">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10">
            <ArticleGallery images={article.gallery} alt={article.title[lang]} />
          </div>

          {related.length > 0 && (
            <div className="mt-12 border-t border-hairline pt-8">
              <h2 className="mb-4 text-[13px] font-extrabold tracking-[0.04em] text-muted uppercase">
                {t("article_moreFrom")} {category.label[lang]}
              </h2>
              <div className="flex flex-col gap-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`${basePath}/${item.slug}`}
                    className="group flex items-center gap-4 rounded-card border border-hairline p-3 transition-shadow hover:shadow-[0_8px_24px_rgba(15,53,31,0.10)]"
                  >
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                      <img src={item.heroImage} alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-[13.5px] font-bold text-deep group-hover:text-brand">
                        {item.title[lang]}
                      </div>
                      <div className="text-xs text-faint">{item.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Link
            href={backHref}
            className="mt-10 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-brand hover:text-brand-hover"
          >
            <ArrowLeft size={15} weight="bold" />
            {t(backLabelKey)}
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
