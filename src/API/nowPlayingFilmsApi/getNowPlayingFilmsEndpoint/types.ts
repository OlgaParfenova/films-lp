import { Film } from './models';
import { WithDatePaginationResponse} from '../../types';

export type GetNowPlayingFilmsArgs = void;

export type GetNowPlayingFilmsResponse = WithDatePaginationResponse<Film[]>;
