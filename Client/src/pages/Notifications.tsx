import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

type NotificationType = 'success' | 'info' | 'warning';

interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: 'success',
    title: 'Payment Received',
    message: 'You’ve received $500 from ChainPay for project delivery.',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'info',
    title: 'New Project Available',
    message: 'A new smart contract project is open for bids.',
    time: '5 hours ago',
  },
  {
    id: 3,
    type: 'warning',
    title: 'Profile Incomplete',
    message: 'Complete your profile to get more visibility.',
    time: '1 day ago',
  },
];

const iconStyles: Record<NotificationType, string> = {
  success: 'text-green-400 bg-green-900/30',
  info: 'text-blue-400 bg-blue-900/30',
  warning: 'text-yellow-400 bg-yellow-900/30',
};

const Notifications: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300"
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${iconStyles[notification.type]}`}
            >
              {notification.type === 'success' && <CheckCircle className="w-6 h-6" />}
              {notification.type === 'info' && <Clock className="w-6 h-6" />}
              {notification.type === 'warning' && <AlertCircle className="w-6 h-6" />}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {notification.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">{notification.message}</p>
              <span className="text-xs text-gray-400 dark:text-gray-500">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
