import { Menu } from '@/app/components/Menu';
import { getEateries } from '@/app/services/getEateries';
import { getEateryMenu } from '@/app/services/getEateryMenu';

export default async function Page() {
    const eatery = await getEateries('1');
    const eateryMenu = await getEateryMenu('1', '0');

    return <Menu eatery={eatery} eateryMenu={eateryMenu} />;
}
