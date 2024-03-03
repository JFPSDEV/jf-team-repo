import React, { useEffect, useState } from 'react';

export const useLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return loading;
};
