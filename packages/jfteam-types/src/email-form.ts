export type TEmailForm<T = unknown> = {
  email: string;
  subject: string;
  message: string;
  attachments: T[];
};
