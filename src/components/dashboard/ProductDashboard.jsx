import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/stylesdshboard.css';
import Navegation from './Navegation';
import TopNavigation from './TopNavegatio';
import DataTable from './DataTable';
import AddProductModal from './AddProductModal';

const ProductDashboard = () => {
  const [isActive, setIsActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState('');
  const [modalData, setModalData] = useState(null);
  const [products, setProducts] = useState([]);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    axios
      .get('http://localhost:8084/api/productos')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error al obtener productos:', error));
  }, []);

  const handleAddProduct = () => {
    setModalAction('add');
    setModalData(null);
    setModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setModalAction('edit');
    setModalData(product);
    setModalOpen(true);
  };

  const handleDeleteProduct = (product) => {
    setModalAction('delete');
    setModalData(product);
    setModalOpen(true);
  };

  const handleConfirm = (action, id, updatedData) => {
    if (!updatedData && action !== 'delete') {
      console.error('Los datos actualizados no están definidos.');
      return;
    }

    const formData = new FormData();
    if (updatedData) {
      formData.append('nombre', updatedData.name);
      formData.append('descripcion', updatedData.descripcion);
      formData.append('precio', updatedData.price);
      formData.append('stock', updatedData.stock);
      formData.append('categoria', updatedData.categoria);
      if (updatedData.imagen) {
        formData.append('imagen', updatedData.imagen);
      }
    }

    if (action === 'add') {
      axios
        .post('http://localhost:8084/api/productos/crear', formData)
        .then((response) => {
          setProducts((prevProducts) => [...prevProducts, response.data]);
          alert('Producto agregado exitosamente.');
        })
        .catch((error) => console.error('Error al agregar producto:', error));
    } else if (action === 'edit') {
      axios
        .put(`http://localhost:8084/api/productos/actualizar/${id}`, formData)
        .then((response) => {
          setProducts((prevProducts) =>
            prevProducts.map((product) =>
              product.id === id ? response.data : product
            )
          );
          alert('Producto actualizado exitosamente.');
        })
        .catch((error) => console.error('Error al actualizar producto:', error));
    } else if (action === 'delete') {
      axios
        .delete(`http://localhost:8084/api/productos/eliminar/${id}`)
        .then(() => {
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== id)
          );
          alert('Producto eliminado exitosamente.');
        })
        .catch((error) => console.error('Error al eliminar producto:', error));
    }
    setModalOpen(false);
  };

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Nombre' },
    { key: 'descripcion', label: 'Descripción' },
    { key: 'price', label: 'Precio' },
    { key: 'stock', label: 'Stock' },
    { key: 'category', label: 'Categoría' },
  ];

  return (
    <div className={`container_dash ${isActive ? 'active' : ''}`}>
      <Navegation isActive={isActive} toggleMenu={toggleMenu} />

      <div className={`main ${isActive ? 'active' : ''}`}>
        <TopNavigation isActive={isActive} toggleMenu={toggleMenu} />
        <div className="informacion">
          <h1>Lista  de Productos</h1>
          <button className="add-button" onClick={handleAddProduct}>
            + Agregar Producto
          </button>
          {products.length > 0 ? (
            <DataTable
              data={products}
              columns={columns}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          ) : (
            <p>No hay datos disponibles.</p>
          )}
        </div>
      </div>

      {modalOpen && (
        <AddProductModal
          closeModal={() => setModalOpen(false)}
          actionType={modalAction}
          data={modalData}
          onConfirm={(action, id, updatedData) => handleConfirm(action, id, updatedData)}
        />
      )}
    </div>
  );
};

export default ProductDashboard;