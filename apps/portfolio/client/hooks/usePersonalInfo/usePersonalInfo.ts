import { useContext } from 'react';

import { PersonalInfoContext } from '../../contexts/PersonalInfo';

export const usePersonalInfo = () => {
  const personalInfo = useContext(PersonalInfoContext);
  return personalInfo;
};
