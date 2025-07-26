import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import '../../styles/stylesdshboard.css';

const AddProductModal = ({ closeModal, actionType, data, onConfirm }) => {
  const [formData, setFormData] = useState({
    name: '',
    descripcion: '',
    price: '',
    stock: '',
    categoria: '',
    imagen: null,
  });

  const [categories, setCategories] = useState([]); // Estado para las categorías

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.name || '',
        descripcion: data.descripcion || '',
        price: data.price || '',
        stock: data.stock || '',
        categoria: data.categoria || '',
        imagen: null,
      });
    }
  }, [data]);

  useEffect(() => {
    // Fetch para obtener las categorías
    fetch('http://localhost:8084/api/productos/categories')
      .then((response) => response.json())
      .then((data) => {
        if (data.categories) {
          setCategories(data.categories); // Guardar las categorías en el estado
        } else {
          console.error('La respuesta no contiene categorías:', data);
        }
      })
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, imagen: e.target.files[0] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('nombre', formData.name);
    formDataToSend.append('descripcion', formData.descripcion);
    formDataToSend.append('precio', formData.price);
    formDataToSend.append('stock', formData.stock);
    formDataToSend.append('categoria', formData.categoria);
    if (formData.imagen) {
      formDataToSend.append('imagen', formData.imagen);
    }

    try {
      const url =
        actionType === 'add'
          ? 'http://localhost:8084/api/productos/crear'
          : `http://localhost:8084/api/productos/actualizar/${data?.id}`;
      const method = actionType === 'add' ? 'POST' : 'PUT';

      const token = localStorage.getItem('token');

      const response = await fetch(url, {
        method,
        body: formDataToSend,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log(
          actionType === 'add' ? 'Producto creado:' : 'Producto actualizado:',
          result
        );
        onConfirm(actionType, data?.id, formData);
        closeModal();
      } else {
        const errorText = await response.text();
        console.error(
          actionType === 'add'
            ? 'Error al crear el producto:'
            : 'Error al actualizar el producto:',
          response.status,
          errorText
        );
        alert(
          actionType === 'add'
            ? 'Error al crear el producto. Por favor, inténtelo de nuevo.'
            : 'Error al actualizar el producto. Por favor, inténtelo de nuevo.'
        );
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Ocurrió un error al conectar con el servidor.');
    }
  };


  const handleDelete = async () => {
    if (!data || !data.id) {
      console.error('El objeto data o el ID no están definidos.');
      alert('No se puede eliminar el producto porque falta información.');
      return;
    }

    try {
      const url = `http://localhost:8084/api/productos/eliminar/${data.id}`;

      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Producto eliminado');
        onConfirm('delete', data.id); // Notificar al componente padre
        closeModal(); // Cerrar el modal
      } else {
        const errorText = await response.text();
        console.error('Error al eliminar el producto:', response.status, errorText);
        alert('Error al eliminar el producto. Por favor, inténtelo de nuevo.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Ocurrió un error al conectar con el servidor.');
    }
  };

  const renderContent = () => {
    switch (actionType) {
      case 'add':
      case 'edit':
        return (
          <form onSubmit={handleSubmit}>
            <label>
              Nombre:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Descripción:
              <textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Precio:
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Stock:
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Categoría:
              <select
                id="category-select"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione una categoría</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Imagen:
              <input type="file" name="imagen" onChange={handleFileChange} />
            </label>
            <div className="modal-actions">
              <button type="submit">
                {actionType === 'add' ? 'Agregar Producto' : 'Guardar Cambios'}
              </button>
              <button type="button" onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </form>
        );
      case 'delete':
        return (
          <div>
            <p>
              {data?.name
                ? `¿Estás seguro de que deseas eliminar el producto ${data.name}?`
                : 'No se puede eliminar el producto porque falta información.'}
            </p>
            <div className="modal-actions">
              {data?.id ? (
                <button onClick={handleDelete}>Eliminar</button>
              ) : (
                <button disabled>Eliminar</button>
              )}
              <button onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        );
      default:
        return <p>Acción no soportada.</p>;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        <h2>
          {actionType === 'add'
            ? 'Agregar Nuevo Producto'
            : actionType === 'edit'
              ? 'Editar Producto'
              : 'Eliminar Producto'}
        </h2>
        {renderContent()}
      </div>
    </div>
  );
};

AddProductModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  actionType: PropTypes.string.isRequired,
  data: PropTypes.object,
  onConfirm: PropTypes.func.isRequired,
};

export default AddProductModal;