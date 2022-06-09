export interface Props {
  days: string;
}

const MainMapView = ({ days }: Props) => {
  return (
    <>
      <div>{days}일 째 여행 중</div>
    </>
  );
};

export default MainMapView;
