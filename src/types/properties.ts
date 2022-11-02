import {
  DateRequest,
  EmptyObject,
  IdRequest,
  PartialUserObjectResponse,
  RichTextItemRequest,
  SelectColor,
  StringRequest,
  TextRequest,
} from './api-endpoints';

export type Properties =
  | Record<
      string,
      | {
          title: Array<RichTextItemRequest>;
          type?: 'title';
        }
      | {
          rich_text: Array<RichTextItemRequest>;
          type?: 'rich_text';
        }
      | {
          number: number | null;
          type?: 'number';
        }
      | {
          url: TextRequest | null;
          type?: 'url';
        }
      | {
          select:
            | {
                id: StringRequest;
                name?: StringRequest;
                color?: SelectColor;
              }
            | null
            | {
                name: StringRequest;
                id?: StringRequest;
                color?: SelectColor;
              }
            | null;
          type?: 'select';
        }
      | {
          multi_select: Array<
            | {
                id: StringRequest;
                name?: StringRequest;
                color?: SelectColor;
              }
            | {
                name: StringRequest;
                id?: StringRequest;
                color?: SelectColor;
              }
          >;
          type?: 'multi_select';
        }
      | {
          people: Array<
            | {
                id: IdRequest;
              }
            | {
                person: {
                  email?: string;
                };
                id: IdRequest;
                type?: 'person';
                name?: string | null;
                avatar_url?: string | null;
                object?: 'user';
              }
            | {
                bot:
                  | EmptyObject
                  | {
                      owner:
                        | {
                            type: 'user';
                            user:
                              | {
                                  type: 'person';
                                  person: {
                                    email: string;
                                  };
                                  name: string | null;
                                  avatar_url: string | null;
                                  id: IdRequest;
                                  object: 'user';
                                }
                              | PartialUserObjectResponse;
                          }
                        | {
                            type: 'workspace';
                            workspace: true;
                          };
                    };
                id: IdRequest;
                type?: 'bot';
                name?: string | null;
                avatar_url?: string | null;
                object?: 'user';
              }
          >;
          type?: 'people';
        }
      | {
          email: StringRequest | null;
          type?: 'email';
        }
      | {
          phone_number: StringRequest | null;
          type?: 'phone_number';
        }
      | {
          date: DateRequest | null;
          type?: 'date';
        }
      | {
          checkbox: boolean;
          type?: 'checkbox';
        }
      | {
          relation: Array<{
            id: IdRequest;
          }>;
          type?: 'relation';
        }
      | {
          files: Array<
            | {
                file: {
                  url: string;
                  expiry_time?: string;
                };
                name: StringRequest;
                type?: 'file';
              }
            | {
                external: {
                  url: TextRequest;
                };
                name: StringRequest;
                type?: 'external';
              }
          >;
          type?: 'files';
        }
    >
  | Record<
      string,
      | Array<RichTextItemRequest>
      | Array<RichTextItemRequest>
      | number
      | null
      | TextRequest
      | null
      | {
          id: StringRequest;
          name?: StringRequest;
          color?: SelectColor;
        }
      | null
      | {
          name: StringRequest;
          id?: StringRequest;
          color?: SelectColor;
        }
      | null
      | Array<
          | {
              id: StringRequest;
              name?: StringRequest;
              color?: SelectColor;
            }
          | {
              name: StringRequest;
              id?: StringRequest;
              color?: SelectColor;
            }
        >
      | Array<
          | {
              id: IdRequest;
            }
          | {
              person: {
                email?: string;
              };
              id: IdRequest;
              type?: 'person';
              name?: string | null;
              avatar_url?: string | null;
              object?: 'user';
            }
          | {
              bot:
                | EmptyObject
                | {
                    owner:
                      | {
                          type: 'user';
                          user:
                            | {
                                type: 'person';
                                person: {
                                  email: string;
                                };
                                name: string | null;
                                avatar_url: string | null;
                                id: IdRequest;
                                object: 'user';
                              }
                            | PartialUserObjectResponse;
                        }
                      | {
                          type: 'workspace';
                          workspace: true;
                        };
                  };
              id: IdRequest;
              type?: 'bot';
              name?: string | null;
              avatar_url?: string | null;
              object?: 'user';
            }
        >
      | StringRequest
      | null
      | StringRequest
      | null
      | DateRequest
      | null
      | boolean
      | Array<{
          id: IdRequest;
        }>
      | Array<
          | {
              file: {
                url: string;
                expiry_time?: string;
              };
              name: StringRequest;
              type?: 'file';
            }
          | {
              external: {
                url: TextRequest;
              };
              name: StringRequest;
              type?: 'external';
            }
        >
    >;
