import { useLocation } from 'react-router-dom';
import KakaoLoginButton from '../components/login/KakaoLoginButton';
import KakaoLoginHandler from '../utils/KakaoLoginHandler';

export default function KaKaoLoginPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get('code');


  const handleKakaoLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL}/login/kakao`
  }

    return (
      <div className="flex items-end justify-center min-h-screen bg-white pb-40">
        {code ? (
          <KakaoLoginHandler code={code} />
        ) : (
          <KakaoLoginButton onClick={handleKakaoLogin} />
        )}
      </div>
    );
}
