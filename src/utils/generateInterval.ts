import { eachDayOfInterval, format } from 'date-fns';
import { SelectedDatesProps, DayProps } from '../components/Calendar';
import theme from '../styles/theme';
import { getPlatformDate } from './platformDate';

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: SelectedDatesProps = {};
  eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp) })
    .forEach(item => {
      const formattedDate = format(getPlatformDate(item), 'yyyy-MM-dd');
      interval = {
        ...interval,
        [formattedDate]: {
          color: start.dateString === formattedDate || end.dateString === formattedDate ? theme.colors.main : theme.colors.main_light,
          textColor: start.dateString === formattedDate || end.dateString === formattedDate ? theme.colors.shape : theme.colors.main,
        }
      }
    });
  return interval;
}