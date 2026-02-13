const QuickExitButton = () => {
  const handleExit = () => {
    // Replace current page with a safe website
    window.location.replace("https://www.google.com");
  };

  return (
    <button
      onClick={handleExit}
      className="quick-exit-btn"
      aria-label="Leave this site quickly"
    >
      ✕ LEAVE SITE NOW
    </button>
  );
};

export default QuickExitButton;
