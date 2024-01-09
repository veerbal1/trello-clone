'use client';

import { useEffect, useState } from 'react';
import { CardModal } from '../modals/card-modal';

export const ModelProvider = () => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  if (!isMounted) return null;

  return (
    <>
      <CardModal />
    </>
  );
};
