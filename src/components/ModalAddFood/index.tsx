import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";

interface FoodProps {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: FoodProps) => void;
}

// Modal para adicionar nova receita
function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodProps) {
  async function handleSubmit(data: FoodProps) {
    handleAddFood(data);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input icon={false} name="image" placeholder="Cole o link aqui" />

        <Input icon={false} name="name" placeholder="Ex: Moda Italiana" />
        <Input icon={false} name="price" placeholder="Ex: 19.90" />

        <Input icon={false} name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalAddFood;
