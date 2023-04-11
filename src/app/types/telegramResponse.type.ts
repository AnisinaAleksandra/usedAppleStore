export type TelegramResponseType = {
  ok: boolean;
  result: {
    chat: {
      first_name: string;
      id: number;
      last_name: string;
      type: string;
      username: string;
    };
    date: number;
    entities: { offset: number; length: number; type: string }[];
    from: { id: number; is_bot: boolean; first_name: string; username: string };
    message_id: number;
    text: string;
  };
};
