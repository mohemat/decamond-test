import {api} from "@/lib/api-client";
import {RandomUser} from "@/types/user";
import {queryOptions, useQuery} from "@tanstack/react-query";
import {QueryConfig} from '@/lib/react-query';

export type RandomUsersApiResponse = {
    results: RandomUser[];
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
};

interface GetRandomUsersProps {
    nat?: string;
    results?: number;
}

export const getRandomUsers = ({
                                  nat = "us",
                                  results = 1,
                              }: GetRandomUsersProps): Promise<RandomUsersApiResponse> => {
    return api.get(`/api/random-user`, {
        params: {
            results,
            nat,
        },
    });
};

export const getRandomUsersQueryOptions = ({
                                              nat = "us",
                                              results = 1,
                                          }: GetRandomUsersProps) => {
    return queryOptions({
        queryKey: ['randomUsers', {nat, results}],
        queryFn: () => getRandomUsers({nat, results}),
    });
};

type UseRandomUsersOptions = {
    nat?: string;
    results?: number;
    queryConfig?: QueryConfig<typeof getRandomUsersQueryOptions>;
};

export const useRandomUsers = ({
                                  queryConfig,
                                  nat,
                                  results,
                              }: UseRandomUsersOptions) => {
    return useQuery({
        ...getRandomUsersQueryOptions({nat, results}),
        ...queryConfig,
    });
};
