import { create } from 'zustand';

type CardModel = {
  id?: string;
  isOpen: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
};

const useCardModal = create<CardModel>((set) => ({
  isOpen: false,
  onOpen: (id: string) => set({ isOpen: true, id }),
  onClose: () => set({ isOpen: false, id: undefined }),
  id: undefined,
}));

export default useCardModal;
