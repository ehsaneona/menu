import { fetcher } from '@/lib/utils';

export function getEateryMenu(id: string, slug: string) {
    return fetcher({
        url: `/api/eateries/${id}/menus/${slug}/`,
    });
}
