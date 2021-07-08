import React from 'react';

describe('TranslationContext', () => {
  test('should create the TranslationContext', async () => {
    const createContext = jest.spyOn(React, 'createContext');
    const {
      TranslationContext, 
      TranslationProvider,
      TranslationConsumer,
    } = await import('.');
    
    expect(createContext).toHaveBeenCalled();
    expect(TranslationContext).toBeTruthy();
    expect(TranslationProvider).toBeTruthy();
    expect(TranslationConsumer).toBeTruthy();
  });
});
