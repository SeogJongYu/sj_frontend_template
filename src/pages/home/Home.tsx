import {useState} from 'react';
import tw, {styled, css} from 'twin.macro';

const ButtonLayout = styled.button<{isActive?: boolean}>(({isActive}) => [
  tw`py-2 px-10 rounded-xl transition-all`,
  css`
    background-color: ${isActive ? '#020202' : 'rgba(0, 0, 0, 0.05)'};
    color: ${isActive ? '#fff' : '#030303'};
    border: 1px solid rgba(0, 0, 0, 0.1);
  `,
]);

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="text-2xl text-blue-600">
      Home 페이지에 오신걸 환영합니다.
      <div className="mt-6 flex justify-center">
        <ButtonLayout
          onClick={() => setIsActive(!isActive)}
          isActive={isActive}>
          테스트 버튼
        </ButtonLayout>
      </div>
    </div>
  );
}
