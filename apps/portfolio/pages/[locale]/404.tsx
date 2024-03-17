import React from 'react';

import { ELocale } from '@/utils';
import { NotFoundPage } from '@/components';

export default function Custom404() {
  return <NotFoundPage locale={ELocale.FR} />;
}
