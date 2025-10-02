import styles from './index.module.scss';

type NavigationButtonProps = { direction: 'prev' | 'next'; onClick: () => void; disabled: boolean };

const ArrowIcon = ({ direction }: { direction: NavigationButtonProps['direction'] }) => {
  if (direction === 'prev') {
    return (
      <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.49982 1L2.24982 7.25L8.49982 13.5" stroke="#42567A" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.50009 1L7.75009 7.25L1.50009 13.5" stroke="#42567A" strokeWidth="2" />
    </svg>
  );
};

export const NavigationButton = ({ direction, onClick, disabled }: NavigationButtonProps) => (
  <button
    type="button"
    className={styles.navBtn}
    aria-label={direction === 'prev' ? 'Предыдущий сегмент' : 'Следующий сегмент'}
    onClick={onClick}
    disabled={disabled}
  >
    <ArrowIcon direction={direction} />
  </button>
);
