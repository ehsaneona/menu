import { fetcher } from '@/lib/utils';

export function getEateries(id: string) {
    return fetcher({
        url: `/api/eateries/${id}/`,
    });
}
