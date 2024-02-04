import React, { useCallback, useEffect, useState } from 'react';

import { truncate } from '@jfteam/utils';
import { IconX, IconPhoto, IconUpload, IconInfoCircle } from '@jfteam/icons';
import { Dropzone, DropzoneProps, FileRejection, FileWithPath } from '@jfteam/form';
import { ActionIcon, Group, Stack, Text, rem, Image, Alert } from '@jfteam/material';

import classes from './ContactDrop.module.css';

export interface TFiles extends FileWithPath {
  preview: string;
  base64: string;
}

interface ContactDropProps extends Partial<Omit<DropzoneProps, 'onChange'>> {
  onChange?: (value: TFiles[]) => void;
}

// TODO: CHECK FILES SIZE LIMIT

export const ContactDrop = (props: ContactDropProps) => {
  const { onChange, ...dropZoneProps } = props;

  const [files, setFiles] = useState<TFiles[]>([]);
  const [filesRejection, setFilesRejection] = useState<FileRejection[]>([]);

  const handleFormat = async (acceptedFiles: FileWithPath[]): Promise<TFiles[]> => {
    const newFiles = await Promise.all(
      acceptedFiles.map(async (file) => {
        const blob = await file.arrayBuffer();
        const base64 = `data:${file.type};base64,${btoa(
          new Uint8Array(blob).reduce((data, byte) => data + String.fromCharCode(byte), '')
        )}`;
        return Object.assign(file, { preview: URL.createObjectURL(file), base64 });
      })
    );

    return [...files, ...newFiles];
  };

  const onDrop = useCallback(
    async (acceptedFiles: FileWithPath[]) => {
      if (acceptedFiles?.length) {
        setFilesRejection([]);
        const res = await handleFormat(acceptedFiles);
        setFiles(res);
        if (typeof onChange === 'function') {
          onChange(res);
        }
      }
    },
    [files]
  );

  const removeFile = useCallback((name: string) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  }, []);

  return (
    <Stack>
      {filesRejection?.length > 0 && (
        <Alert
          variant="light"
          color="blue"
          title={filesRejection[0]?.errors[0]?.code}
          icon={<IconInfoCircle />}
        >
          {filesRejection[0]?.errors[0]?.message}
        </Alert>
      )}

      <Dropzone
        onDrop={onDrop}
        onReject={setFilesRejection}
        maxSize={500 * 1024}
        accept={['image/*', 'application/pdf']}
        style={{ border: '1px dashed #e7e7e7' }}
        {...dropZoneProps}
      >
        <Group justify="center" gap="xl" mih={120} style={{ pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
              stroke={1.5}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
              stroke={1.5}
            />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
      <Group>
        {files.map((file) => (
          <Stack key={file.name} className={classes.attachmentContainer}>
            <Image
              src={file.preview}
              alt={file.name}
              width={100}
              height={100}
              className={classes.previewPicture}
              onLoad={() => URL.revokeObjectURL(file.preview)}
            />
            <ActionIcon
              variant="filled"
              aria-label="Settings"
              className={classes.removeAction}
              onClick={() => removeFile(file.name)}
            >
              <IconX style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
            <Text>{truncate(file.name, 10)}</Text>
          </Stack>
        ))}
      </Group>
    </Stack>
  );
};
