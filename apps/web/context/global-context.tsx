import { createContext, useMemo, useContext, useState, useEffect, ReactNode } from 'react';

interface Locale {
  name: string;
  short: string;
}

interface GlobalContextValue {
  locales: Locale[];
  locale: Locale;
  setLocales: (locales: Locale[]) => void;
  setLocale: (locale: Locale) => void;
}

const GlobalContext = createContext<GlobalContextValue | undefined>(undefined);

interface GlobalProviderProps {
  initialLocales?: Locale[];
  children: ReactNode;
}

export const GlobalProvider = ({ initialLocales, children }: GlobalProviderProps) => {
  const [locales, setLocales] = useState<Locale[]>(
    initialLocales ?? [{ name: 'English', short: 'en' }],
  );
  const [locale, setLocale] = useState<Locale>({ name: 'English', short: 'en' });

  // Default to English locale
  useEffect(() => {
    if (!locales || locales.length === 0) {
      return;
    }

    // Set default locale to first available locale
    if (!locale || !locales.find((el) => el.short === locale.short)) {
      setLocale(locales[0]);
    }
  }, [locales, locale]);

  const value = useMemo(() => {
    return {
      locales,
      locale,
      setLocales,
      setLocale,
    };
  }, [locales, locale]);

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }

  return {
    ...context,
  };
};
