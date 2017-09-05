class AuthApiUrl {
  constructor() {}

  public get authProfile() {
    return '/api/profile';
  }


  public get login() {
    return '/api/login';
  }


  public get register() {
    return '/api/register';
  }
}

export const AUTH_API_URL = new AuthApiUrl();
