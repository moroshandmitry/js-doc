import { LeftPanel } from './LeftPanel/LeftPanel';
import { Pages } from './Pages/Pages';

import s from './Main.module.scss';

export const Main = () => {
	return (
		<div className={s.main}>
			<LeftPanel />
			<Pages />
		</div>
	);
};
