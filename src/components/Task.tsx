import * as React from 'react'

import Task from '../_models/Task'

interface IProps {
  task: Task;
  onArchiveTask: Function;
  onPinTask: Function
}
