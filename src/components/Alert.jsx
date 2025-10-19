import React from 'react';

const Alert = ({ message, type = 'danger' }) => {
  if (!message) return null;

  const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';

  return (
    <div className={`alert ${alertClass} alert-dismissible fade show`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
