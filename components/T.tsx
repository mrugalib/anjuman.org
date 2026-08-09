"use client";

import { useLanguage } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";

export default function T({ k }: { k: TranslationKey }) {
  const { t } = useLanguage();
  return <>{t(k)}</>;
}
