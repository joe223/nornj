import { registerComponent } from 'nornj';
import DatePicker from 'antd/lib/date-picker';

registerComponent({
  'ant-DatePicker': {
    component: DatePicker,
    options: {
      fieldDefaultRule: {
        type: 'date'
      }
    }
  },
  'ant-MonthPicker': DatePicker.MonthPicker,
  'ant-WeekPicker': DatePicker.WeekPicker,
  'ant-RangePicker': {
    component: DatePicker.RangePicker,
    options: {
      needToJS: true
    }
  }
});

export default DatePicker;
