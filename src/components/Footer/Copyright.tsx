'use client';

import React from 'react';

const Copyright = ({ children }: any) => {
  const split = children.split('2024');
  const year = new Date().getFullYear();

  return <h6>{`${split[0]} ${year}${split[1]}`}</h6>;
};

export default Copyright;
