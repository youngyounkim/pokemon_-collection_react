import { modalState } from 'lib/recoil/modalState';
import Modal from 'react-modal';
import { useRecoilState } from 'recoil';

import Portal from './Portal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '40vw',
        maxHeight: '80vh',
        borderRadius: '16px',
        border: '1px solid rgb(209 213 219)'
    }
};

const RecipeModal = () => {
    const [modalData, setModalData] = useRecoilState(modalState);
    const { isOpen } = modalData;

    // 모달 뒤 스크롤 방지
    const onAfterOpen = () => {
        document.body.style.cssText = `overflow:hidden;`;
    };
    const onAfterClose = () => {
        document.body.style.cssText = '';
    };

    const onClose = () => {
        setModalData((data) => {
            return { ...data, isOpen: false };
        });
    };

    return (
        <Portal selector="#modal">
            <Modal style={customStyles} isOpen={isOpen} onAfterOpen={onAfterOpen} onAfterClose={onAfterClose}>
                <section className="flex flex-col items-center justify-between h-full w-full">모달 정보</section>
            </Modal>
        </Portal>
    );
};

export default RecipeModal;
