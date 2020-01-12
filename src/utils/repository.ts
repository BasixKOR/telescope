export interface Repository {
  nameWithOwner: string;
  description: string;
  primaryLanguage: {
    name: string;
  };
  stargazers: {
    totalCount: number;
  };
}
