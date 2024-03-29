import { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from ".";

type Props = React.PropsWithChildren<Record<string, unknown>>;

/**
 * ErrorBoundary를 이용하여 각 API 에러 상태에 맞는 화면을
 * FallbackComponent로 설정하는 로직
 *
 * API 요청을 보내는 화면들의 최상단에 위치하여, 에러 화면 노출 로직을 한 번에 설정가능
 * */
const FallbackComponent = ({ error }: FallbackProps) => {
  // TODO: error 객체의 종류를 구분하여 각 에러 상태에 맞는 화면을 return
  // 주로 http 응답 코드별 에러 안내 화면을 구분
  alert(error.message);

  return <>다시 시도해주세요.</>
};

  const GlobalApiErrorBoundary = ({ children }: Props) => {
    return (
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        {children}
      </ErrorBoundary>
    );
  };

export default GlobalApiErrorBoundary;
