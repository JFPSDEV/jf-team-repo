import React, { useCallback, useEffect, useState } from 'react';

import { generateUUID, truncate } from '@jfteam/utils';
import { IconX, IconPhoto, IconUpload, IconInfoCircle } from '@jfteam/icons';
import { Dropzone, DropzoneProps, FileRejection, FileWithPath } from '@jfteam/form';
import { ActionIcon, Group, Stack, Text, rem, Image, Alert } from '@jfteam/material';

import pdfPicture from '../../../../../public/images/pdf.png';

import classes from './ContactDrop.module.css';
import { emptyFile } from '../../../../../utils';

export interface TFiles extends FileWithPath {
  id: string;
  preview: string;
  base64: string;
}

interface ContactDropProps extends Partial<Omit<DropzoneProps, 'onChange'>> {
  onChange?: (value: TFiles[]) => void;
  value?: TFiles[];
  label: string;
}
const maxSize = 20000 * 1024;

export const ContactDrop = (props: ContactDropProps) => {
  const { value = [], label, onChange, ...dropZoneProps } = props;

  const [files, setFiles] = useState<TFiles[]>([]);
  const [totalSize, setTotalSize] = useState<number>(0);
  const [filesRejection, setFilesRejection] = useState<FileRejection[]>([]);

  useEffect(() => {
    setFiles(value);
  }, [value]);

  const handleFormat = async (acceptedFiles: FileWithPath[]): Promise<TFiles[]> => {
    const newFiles = await Promise.all(
      acceptedFiles.map(async (file) => {
        const blob = await file.arrayBuffer();
        const base64 = `data:${file.type};base64,${btoa(
          new Uint8Array(blob).reduce((data, byte) => data + String.fromCharCode(byte), '')
        )}`;
        return Object.assign(file, {
          id: generateUUID(),
          preview: URL.createObjectURL(file),
          base64,
        });
      })
    );

    return [...files, ...newFiles];
  };

  const onDrop = useCallback(
    async (acceptedFiles: FileWithPath[]) => {
      if (acceptedFiles?.length) {
        let incrementSize: number = totalSize;

        acceptedFiles?.forEach((_file) => {
          incrementSize += _file.size;
        });

        if (incrementSize > maxSize) {
          setFilesRejection([
            {
              errors: [
                {
                  code: 'file-too-large',
                  message: 'Adding this file exceed the maximum size of 20 MB',
                },
              ],
              file: emptyFile,
            },
          ]);
        } else {
          setFilesRejection([]);
          setTotalSize(incrementSize);
          const res = await handleFormat(acceptedFiles);
          setFiles(res);
          if (typeof onChange === 'function') {
            onChange(res);
          }
        }
      }
    },
    [files, totalSize]
  );

  const removeFile = useCallback(
    (id: string) => {
      const removeFile = files.find((_file) => _file.id === id);
      if (removeFile) {
        setTotalSize((current) => current - removeFile.size);
        setFiles((files) => files.filter((file) => file.id !== id));
      }
    },
    [files]
  );

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
        maxSize={maxSize}
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
            <Text size="xl" p="md" ta="center" inline>
              {label}
            </Text>
          </div>
        </Group>
      </Dropzone>
      <Group>
        {files.map((file) => (
          <Stack key={file.id} className={classes.attachmentContainer}>
            <Image
              src={file.type === 'application/pdf' ? pdfPicture.src : file.preview}
              alt={file.name + file.id}
              width={100}
              height={100}
              className={classes.previewPicture}
              onLoad={() => URL.revokeObjectURL(file.preview)}
            />
            <ActionIcon
              variant="filled"
              aria-label="Settings"
              className={classes.removeAction}
              onClick={() => removeFile(file.id)}
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
