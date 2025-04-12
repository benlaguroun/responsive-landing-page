"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps as NextThemesProviderProps,
  Attribute,
} from "next-themes";

// Explicitly extend the 'attribute' type to match what 'next-themes' expects
interface ThemeProviderProps
  extends Omit<NextThemesProviderProps, "attribute"> {
  children: React.ReactNode;
  attribute?: Attribute | Attribute[]; // This matches the expected type
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps): JSX.Element {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
