import { styled } from '@stitches/react';
import { Button } from './Button';
import { Modal } from './Modal';

interface PropositionModalProps {
  showModal: boolean;
  setShowModal: (visibility: boolean) => void;
}

const Wrapper = styled('div', {});

const Title = styled('span', {
  fontWeight: 700,
});

const PropositionInfo = styled('ul', {
  paddingLeft: 0,
  listStyle: 'none',
});

const SubTitle = styled('div', {
  fontStyle: 'italic',
});

const ButtonWrapper = styled('div', {
  display: 'flex',
  marginTop: '1rem',
  justifyContent: 'flex-end',
});

export const PropositionModal: React.VFC<PropositionModalProps> = ({
  showModal,
  setShowModal,
}) => {
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <Wrapper>
        <Title>Votre proposition de pièce est transmise au client</Title>
        <PropositionInfo>
          <li>Pièces Proposées : 1/3</li>
          <li>Expiration : 03/01/2022</li>
        </PropositionInfo>
        <SubTitle>
          Vous serez averti par email si le client commande vos pièces
        </SubTitle>
        <ButtonWrapper>
          <Button handleClick={() => {}}>Voir les autres recherches</Button>
        </ButtonWrapper>
      </Wrapper>
    </Modal>
  );
};
