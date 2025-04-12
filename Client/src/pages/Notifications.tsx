import React, { useState } from 'react';
import {
  Clock,
  CheckCircle,
  AlertCircle,
  X,
} from 'lucide-react';

type NotificationType = 'success' | 'info' | 'warning';

interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
}

const initialNotifications: Notification[] = [
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

const iconMap = {
  success: <CheckCircle className="w-6 h-6 text-green-300 drop-shadow-glow" />,
  info: <Clock className="w-6 h-6 text-blue-300 drop-shadow-glow" />,
  warning: <AlertCircle className="w-6 h-6 text-yellow-300 drop-shadow-glow" />,
};

const cardStyleMap = {
  success: 'bg-green-500/10 border border-green-400/20 hover:shadow-green-600/20',
  info: 'bg-blue-500/10 border border-blue-400/20 hover:shadow-blue-600/20',
  warning: 'bg-yellow-500/10 border border-yellow-400/20 hover:shadow-yellow-600/20',
};

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const dismissNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`flex items-start justify-between p-4 rounded-xl border shadow-md transition-all duration-300 group ${cardStyleMap[n.type]}`}
          >
            <div className="flex space-x-4">
              <div className="min-w-[40px] h-10 flex items-center justify-center rounded-full bg-black/20">
                {iconMap[n.type]}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {n.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">{n.message}</p>
                <span className="text-xs text-gray-400 dark:text-gray-500">{n.time}</span>
              </div>
            </div>
            <button
              onClick={() => dismissNotification(n.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500 hover:text-red-500"
              title="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ))}
        {notifications.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">No notifications right now 🎉</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
