
export interface IUploadImage {
  original: {
      data_url: string;
      file: any;
  }[];
  compressed: {
      data_url: string;
      file: any;
  }[];
}
