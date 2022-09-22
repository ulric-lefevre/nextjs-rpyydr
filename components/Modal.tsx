import { styled } from '@stitches/react';
import { ReactFragment } from 'react';
import { X } from 'react-feather';

interface ModalProps {
  showModal: boolean;
  setShowModal: (visibility: boolean) => void;
  children: ReactFragment;
}

const Wrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  backgroundColor: 'rgba(100,100,100,0.4)',
});

const CloseButton = styled(X, {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  '&:hover': {
    color: 'red',
  },
});

const ModalWrapper = styled('div', {
  position: 'relative',
  backgroundColor: 'white',
  padding: '2rem',
});

export const Modal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  children,
}) => {
  return (
    <>
      {showModal && (
        <Wrapper>
          <ModalWrapper>
            <CloseButton onClick={() => setShowModal(false)} />
            {children}
          </ModalWrapper>
        </Wrapper>
      )}
    </>
  );
};
