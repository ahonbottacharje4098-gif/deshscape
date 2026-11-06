"use client";

import { Children, cloneElement, isValidElement } from "react";
import type { ReactElement, ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const translatableAttributes = ["alt", "aria-label", "placeholder", "title"] as const;

function translateNode(node: ReactNode, t: (text: string) => string): ReactNode {
  if (typeof node === "string") return t(node);
  if (typeof node === "number" || node == null || typeof node === "boolean") return node;
  if (Array.isArray(node)) return node.map((child) => translateNode(child, t));

  return Children.map(node, (child) => {
    if (!isValidElement(child)) return child;
    const element = child as ReactElement<Record<string, unknown>>;
    const nextProps: Record<string, unknown> = { ...element.props };

    for (const attribute of translatableAttributes) {
      const value = nextProps[attribute];
      if (typeof value === "string") nextProps[attribute] = t(value);
    }

    if ("children" in nextProps) {
      nextProps.children = translateNode(nextProps.children as ReactNode, t);
    }

    return cloneElement(element, nextProps);
  });
}

export default function AutoTranslate({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  return <>{translateNode(children, t)}</>;
}
