import { createContext } from 'react';

export const TranslationContext = createContext({});
export const TranslationProvider = TranslationContext.Provider;
export const TranslationConsumer = TranslationContext.Consumer;
