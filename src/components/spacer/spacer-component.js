import React from 'react';
import styled from 'styled-components/native';

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
};
export const Spacer = ({ variant, direction, children }) => {
  const SpaceVariant = styled.View`;
    margin-${direction.toLowerCase()}: ${(props) =>
    props.theme.space[sizeVariants[variant.toLowerCase()]]}
    `;
  return <SpaceVariant>{children}</SpaceVariant>;
};
