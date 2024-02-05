export const emptyFile = {
  lastModified: 0,
  name: '',
  webkitRelativePath: '',
  size: 0,
  type: '',
  arrayBuffer: function (): Promise<ArrayBuffer> {
    throw new Error('Function not implemented.');
  },
  slice: function (
    start?: number | undefined,
    end?: number | undefined,
    contentType?: string | undefined
  ): Blob {
    throw new Error('Function not implemented.');
  },
  stream: function (): ReadableStream<Uint8Array> {
    throw new Error('Function not implemented.');
  },
  text: function (): Promise<string> {
    throw new Error('Function not implemented.');
  },
};
