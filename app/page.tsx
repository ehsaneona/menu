import { Menu } from '@/app/components/Menu';
import { getEateries } from '@/app/services/getEateries';
import { getEateryMenu } from '@/app/services/getEateryMenu';

export const revalidate = 3600;

export default async function Page() {
    const eatery = await getEateries('none');
    const eateryMenu = await getEateryMenu('none', '0');
    return <Menu eatery={eatery} eateryMenu={eateryMenu} />;
}
