import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const PersonalInfoContext = createContext<PersonalDataDTO>({});
export const PersonalInfoProvider = PersonalInfoContext.Provider;
export const PersonalInfoConsumer = PersonalInfoContext.Consumer;

type PersonalDataDTO = {
  [key: string]: string;
};

export const withPersonalInfo = (Component: React.FC) => {
  return (props: unknown) => {
    const [personalInfo, setPersonalInfo] = useState<PersonalDataDTO>({});
  
    useEffect(() => {
      axios.get<PersonalDataDTO>('/api/personal/data').then(({ data }) => {
        setPersonalInfo(data);
      }).catch(() => {
        setPersonalInfo({});
      });
    }, []);
  
    return (
      <PersonalInfoProvider value={personalInfo}>
        <Component {...props} />
      </PersonalInfoProvider>
    );
  };
};
