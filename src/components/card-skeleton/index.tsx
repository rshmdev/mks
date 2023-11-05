import Skeleton from 'react-loading-skeleton';

const CardSkeleton = () => {
  return (
    <div style={{ width: '13.625rem', height: '17.8125rem', padding: '1rem', backgroundColor: '#f3f3f3', borderRadius: '12px'}}>
      <Skeleton  height={140} width={140} />
      <Skeleton count={2} />
      <Skeleton count={1} height={60} />
      <Skeleton height={40} />
    </div>
  );
};

export default CardSkeleton;
