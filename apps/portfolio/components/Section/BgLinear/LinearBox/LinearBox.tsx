import { Box } from '@jfteam/material';

interface LinearBoxParameter {}

export const LinearBox = (props: LinearBoxParameter) => {
  const lineColor = '#E1E5EA';

  return (
    <Box
      style={[
        {
          height: '100%',
          width: '1px',
          backgroundSize: '1px 17px',
          background: `repeating-linear-gradient(180deg, ${lineColor}, ${lineColor} 1px, transparent 10px, transparent 2px)`,
        },
      ]}
    />
  );
};
