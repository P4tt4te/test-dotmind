import { UserDataType } from "../components/UserCard/UserCard";

interface getUsersType {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: UserDataType[];
    support: {
        text: string;
        url: string;
    }
}

export const getUsers = async (isMoreUsers: boolean) : Promise<getUsersType> => {
  const page = !isMoreUsers ? 1 : 2;
  const apiAdress = "https://reqres.in/api/users?page=" + page + "&delay=1";

  return fetch(apiAdress)
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch : " + error.message
      );
    });
};
