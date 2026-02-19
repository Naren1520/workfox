import { useNavigate } from 'react-router-dom';
import { BountyBoard, type Task, TaskStatus } from '../frontend-integration';

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const navigate = useNavigate();

  const getStatusColor = (status: number) => {
    switch (status) {
      case TaskStatus.OPEN:
        return 'bg-green-100 text-green-800';
      case TaskStatus.CLAIMED:
        return 'bg-blue-100 text-blue-800';
      case TaskStatus.SUBMITTED:
        return 'bg-yellow-100 text-yellow-800';
      case TaskStatus.APPROVED:
        return 'bg-purple-100 text-purple-800';
      case TaskStatus.REJECTED:
        return 'bg-red-100 text-red-800';
      case TaskStatus.REFUNDED:
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const isDeadlineSoon = () => {
    const daysUntilDeadline = (Number(task.deadline) * 1000 - Date.now()) / (1000 * 60 * 60 * 24);
    return daysUntilDeadline < 3 && daysUntilDeadline > 0;
  };

  return (
    <div
      onClick={() => navigate(`/task/${task.taskId}`)}
      className="card hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {task.title}
        </h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
          {BountyBoard.getStatusLabel(task.status)}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {task.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
          </svg>
          <span className="text-xl font-bold text-gray-900">
            {BountyBoard.microToAlgo(task.amount).toFixed(2)}
          </span>
          <span className="text-sm text-gray-600">ALGO</span>
        </div>

        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className={isDeadlineSoon() ? 'text-orange-600 font-medium' : ''}>
            {BountyBoard.formatDeadline(task.deadline)}
          </span>
        </div>
      </div>

      {isDeadlineSoon() && task.status === TaskStatus.OPEN && (
        <div className="mt-3 flex items-center text-xs text-orange-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Deadline approaching
        </div>
      )}
    </div>
  );
}
