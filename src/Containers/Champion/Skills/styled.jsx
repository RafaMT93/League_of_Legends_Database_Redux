import styled from 'styled-components';
import { Tabs, TabPanel } from 'react-tabs';

export const WrapperSkills = styled.div`
  background-color: #000;
  color: ${({ theme }) => theme.colors.secondatyText};
  height: 400px;

  @media (max-width: 768px) {
    height: 600px;
  }
  @media (max-width: 325px) {
    height: 700px;
  }
`;

export const WrapperSkillsH1 = styled.h1`
  color: ${({ theme }) => theme.colors.secondatyText};
  font-size: calc(${({ theme }) => theme.fonts.fontSize} * 1.5);
  font-weight: bold;
  text-align: center;
  padding-top: 0.875rem;
`;
export const WrapperSkillsH2 = styled.h2`
  color: ${({ theme }) => theme.colors.secondatyText};
`;
export const WrapperSkillsDivision = styled.div`
  padding-bottom: 2rem;
`;
export const WrapperTabs = styled(Tabs)`
  display: block;
  text-align: center;
`;
WrapperTabs.tabsRole = 'Tabs';
export const WrapperTabPanel = styled(TabPanel)`
  margin-top: 1.5rem;
`;
WrapperTabPanel.tabsRole = 'TabPanel';
