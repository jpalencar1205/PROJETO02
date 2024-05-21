declare module 'UtilsTypes' {
  export interface ApiReturn {
    return: 'error' | 'success';
    data?: any;
    message: string;
  }
}
